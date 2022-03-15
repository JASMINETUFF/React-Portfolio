import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
      <div className="row align-items-center my-5">
    <div class="col-lg-7">
    <div class="card">
  <div class="card-header">
    <h1>Contact Form</h1>

    <form>
      <div class="form-group">
        <label>Name</label>
        <input
          className="form-control"
          id="name"
          type="text"
          placeholder="Name"
          required="required"
          data-validation-required-message="Please enter your name."
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          className="form-control"
          id="email"
          type="email"
          placeholder="Email Address"
          required="required"
          data-validation-required-message="Please enter your email address."
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          className="form-control"
          id="phone"
          type="tel"
          placeholder="Phone Number"
          required="required"
          data-validation-required-message="Please enter your phone number."
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          className="form-control"
          id="message"
          rows="5"
          placeholder="Message"
          required="required"
          data-validation-required-message="Please enter a message."
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-xl">Send</button>
    </form>
  </div>
  </div>
  </div>
  </div>
      </div>
    </div>
  );
}

export default Contact;
