import './TicketBooking.css'; // Import custom CSS file
import React, { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PxdpLRtyulDddhmMP0dAUSz4YkMyVgtd9nE7j7b6RKeMRRHBYhOmTiSO8e4upzQaf22rD3xRmAOZOrA9ZdRSrHT00Yt5BTCHD');

const TicketBooking = () => {
  const [formData, setFormData] = useState({
    user_id: 0,
    name: "",
    email: "",
    phone_number: "",
    ticket_date: "",
    event_id: 0,
    tickets: [
      { ticket_type: "Adult", quantity: 0, price_per_ticket: 50 },
      { ticket_type: "Child", quantity: 0, price_per_ticket: 30 }
    ],
    total_price: 0,
    payment_status: "pending",
    ticket_status: "active",
    booking_date: new Date().toISOString(),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTicketChange = (index, e) => {
    const updatedTickets = [...formData.tickets];
    updatedTickets[index][e.target.name] = e.target.value;
    setFormData({
      ...formData,
      tickets: updatedTickets,
      total_price: calculateTotalPrice(updatedTickets),
    });
  };

  const calculateTotalPrice = (tickets) => {
    return tickets.reduce(
      (total, ticket) => total + ticket.quantity * ticket.price_per_ticket,
      0
    );
  };

  const handlePayment = async () => {
    const stripe = await stripePromise;

    // Request to create a checkout session on the server
    const response = await axios.post("https://museosphere-backend.onrender.com/api/ticket/create-checkout-session", {
      products: formData.tickets.map(ticket => ({
        name: ticket.ticket_type,
        quantity: ticket.quantity,
        price: ticket.price_per_ticket, // Stripe uses cents
      })),
    });

    const session = response.data;

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
      return false; // Payment failed
    }

    return true; // Payment succeeded
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle payment first
    const paymentSuccessful = await handlePayment();

    if (!paymentSuccessful) {
      console.error("Payment failed. Cannot proceed with booking.");
      return;
    }

    try {
      // If payment is successful, proceed to book the ticket
      const response = await axios.post("https://museosphere-backend.onrender.com/api/ticket/book", formData);
      console.log("Ticket booked successfully:", response);

      // Optionally, redirect the user to a confirmation page or display success message
    } catch (error) {
      console.error("Error booking ticket:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Book Your Tickets</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="user_id">User ID:</label>
          <input
            type="number"
            className="form-control"
            id="user_id"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            id="phone_number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ticket_date">Ticket Date:</label>
          <input
            type="date"
            className="form-control"
            id="ticket_date"
            name="ticket_date"
            value={formData.ticket_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="event_id">Event ID:</label>
          <input
            type="number"
            className="form-control"
            id="event_id"
            name="event_id"
            value={formData.event_id}
            onChange={handleChange}
          />
        </div>

        <h3 className="mt-4">Tickets:</h3>
        {formData.tickets.map((ticket, index) => (
          <div key={index} className="form-group ticket-group">
            <label>{ticket.ticket_type} Quantity:</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={ticket.quantity}
              onChange={(e) => handleTicketChange(index, e)}
              min="0"
            />
            <span className="price-info">Price: ${ticket.price_per_ticket}</span>
          </div>
        ))}

        <h3 className="mt-4">Total Price: ${formData.total_price}</h3>
        <button type="submit" className="btn btn-primary mt-3">Book Tickets</button>
      </form>
    </div>
  );
};

export default TicketBooking;
