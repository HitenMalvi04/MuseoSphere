import React from 'react';
import { FaInstagram, FaFacebook, FaPinterestP, FaTwitter, FaGooglePlus } from 'react-icons/fa';
import '../App.css';
// import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className="container small-sm">
            {/* <div className={styles.contaner+" "+styles.smallSm}> */}
                <div className="row">
                    <div className="col-md-3">
                        <a href="index.html">
                            {/* <img src="img/logo.png" alt="Logo" /> */}
                        </a>
                        <div className="empty-space h10-xs"></div>
                        {/* <div className={styles.emptySpace+" h10Xs"}></div> */}
                        <p>Lorem ipsum dolor sit amet, cset tur adipiscingerat rutrum to the next side</p>
                    </div>
                    <div className="empty-space h20-xs h0-md"></div>
                    <div className="col-md-2">
                        <h6 className="h9">Address</h6>
                        <div className="empty-space h10-xs"></div>
                        <ul>
                            <li>
                                <a href="https://www.google.com.ua/maps/@40.7573849,-73.9721243,19z">
                                    319 Clematis St. Suite, 100 WPB, FL 33401
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="empty-space h20-xs h0-md"></div>
                    <div className="col-md-2 col-md-offset-1">
                        <h6 className="h9">Contact us</h6>
                        <div className="empty-space h10-xs"></div>
                        <ul>
                            <li>
                                <a href="tel:+380982367536">tel. +38 098 236 75 36</a>
                            </li>
                            <li>
                                <a href="mailto:info@bloom.com">e-mail info@mevo.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="empty-space h20-xs h0-md"></div>
                    <div className="col-md-3 col-md-offset-1">
                        <h6 className="h9">Follow us</h6>
                        <div className="empty-space h15-xs h25-md"></div>
                        <div className="follow">
                            <a className="item" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a className="item" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </a>
                            <a className="item" href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                                <FaPinterestP />
                            </a>
                            <a className="item" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a className="item" href="https://plus.google.com/" target="_blank" rel="noopener noreferrer">
                                <FaGooglePlus />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="empty-space h25-xs"></div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright">
                            &copy; 2017 All rights reserved. Development with <span className="fa fa-heart"></span> by <a href="https://themeforest.net/user/unionagency" target="_blank" rel="noopener noreferrer">UnionAgency.</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
