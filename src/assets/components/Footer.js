import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="section1">
                <h3>About us</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    about ipsum dolor sit amet porem ipsum dolorsit amet.
                </p>
                <h3>Contact Us</h3>
                <div className="connect_items">
                    <div className="message">
                        <a href="/"><i className="fas fa-envelope"></i></a>
                        <p>temp@gmail.com</p>
                    </div>
                    <div className="message phone">
                        <a href="/"><i className="fas fa-phone"></i></a>
                        <p>+923224811772</p>
                    </div>
                </div>
            </div>
            <div className="service">
                <h3>Our Service</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illo enim ad aliquam veniam,
                    cum quidem voluptas? Magnam atque nulla iure nostrum at animi quo.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt amet delectus obcaecati.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, natus!
                </p>
            </div>
            <div className="subscribe">
                <h3>SubscribeUs</h3>
                <input type="email" placeholder="Enter your Email" name="email" id="email" /><br />
                <button><a href="/">Send</a></button><br />
                <a href="/"><i className="fab fa-facebook social-icon"></i></a>
                <a href="/"><i className="fab fa-whatsapp social-icon"></i></a>
                <a href="/"><i className="fab fa-instagram social-icon"></i></a>
                <a href="/"><i className="fab fa-twitter social-icon"></i></a>
                <a href="/"><i className="fab fa-linkedin social-icon"></i></a>
                
            </div>
            <div className="copy">
                    <p>Copyright © 2023 <span>Event Flow</span>. All rights reserved.</p>
                </div>
        </div>
    );
}

export default Footer;
