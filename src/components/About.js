import React from "react";

const About = () => {
  const museumInfo = {
    name: "National Museum of History",
    description:
      "The National Museum of History showcases an extensive collection of historical artifacts, art, and cultural relics from around the world. We strive to inspire and educate visitors about the rich tapestry of human history.",
    history:
      "Founded in 1885, the museum has grown from a small collection of local artifacts to one of the largest and most respected museums globally, housing over 500,000 items. Our exhibits cover ancient civilizations, modern art, and cutting-edge technology.",
    highlights: [
      "Over 500,000 artifacts",
      "World-renowned ancient civilization exhibits",
      "State-of-the-art digital displays",
      "Interactive tours and educational programs",
      "Multilingual support for international visitors",
    ],
    openingHours: "Open daily from 9:00 AM to 6:00 PM",
    ticketInfo: "Tickets start at $15 for adults and $7 for children.",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>{museumInfo.name}</h1>
      <p style={styles.description}>{museumInfo.description}</p>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>History</h2>
        <p style={styles.text}>{museumInfo.history}</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Highlights</h2>
        <ul style={styles.list}>
          {museumInfo.highlights.map((highlight, index) => (
            <li key={index} style={styles.listItem}>
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Visitor Information</h2>
        <p style={styles.text}>
          <strong>Opening Hours: </strong>
          {museumInfo.openingHours}
        </p>
        <p style={styles.text}>
          <strong>Ticket Info: </strong>
          {museumInfo.ticketInfo}
        </p>
      </section>
    </div>
  );
};

// Simple inline styles for the about page
const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    color: "#333",
  },
  header: {
    textAlign: "center",
    color: "#2c3e50",
    fontSize: "36px",
  },
  description: {
    textAlign: "center",
    fontSize: "18px",
    margin: "20px 0",
  },
  section: {
    margin: "30px 0",
  },
  subHeader: {
    fontSize: "28px",
    color: "#2980b9",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "16px",
    margin: "5px 0",
  },
};

export default About;
