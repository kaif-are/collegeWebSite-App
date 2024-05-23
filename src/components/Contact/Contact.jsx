import React from 'react'
import './Contact.css'
import contact from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d0baa1bb-202d-4c27-9590-c17ce57448eb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={contact} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information  below. Your feedback, question, and suggestions are important to us as we strive to provide expectation service to our University community.</p>
                <ul>
                    <li><img src={mail} alt="" />kafeel.ahamed@gmail.com</li>
                    <li><img src={phone} alt="" /> +91-97424276170</li>
                    <li><img src={location} alt="" /> #17C/ A1, PMO Street, Chennampet, VNB, PIN 635751</li>
                </ul>
            </div>
            {/* <div className="contact-col"></div> */}
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile Number' required />
                <label>Write your messages here</label>
                <textarea name="message" rows='6' placeholder='Enter your text' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                <span>{result}</span>
            </form>

        </div>
    )
}

export default Contact
