
import '../../Styles/affiliatePage/affiliate_form.css'

import React, { useState } from 'react';

export default function AffiliateForm() {
  // 1. Initialize State for All Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    weAreLookingFor: 'What Are We Looking?', // Initial value for the select
    companyLink: '',
    jobTitle: '',
    referralReason: '',
    agreedToTerms: false, // Initial state for the checkbox
  });

  // 2. Generic Change Handler
  // This function updates the corresponding state property whenever an input changes.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Special handling for the checkbox: use 'checked' property
    // For all other inputs: use 'value' property
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: inputValue, // Use the 'name' attribute to target the correct state field
    }));
  };

  // 3. Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default browser reload

    // Basic Validation Example:
    if (!formData.fullName || !formData.email || !formData.agreedToTerms) {
      alert('Please fill in required fields and agree to terms.');
      return;
    }

    // Check if the default select option is still selected
    if (formData.weAreLookingFor === 'What Are We Looking?') {
        alert('Please select an option for "What Are We Looking?".');
        return;
    }


    // The form data is now ready to be sent!
    console.log('Affiliate Application Submitted:', formData);

    // 4. Send Data to a Backend/Service
    // ----------------------------------------------------------------------
    // This is where you would integrate with a service like Formspree, Netlify Forms,
    // or your own backend API (using fetch or axios) to actually process the application.
    /*
    fetch('/api/affiliate-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      alert('Application successful!');
      // Optional: Clear the form after submission
      setFormData({
        fullName: '', email: '', weAreLookingFor: 'What Are We Looking?',
        companyLink: '', jobTitle: '', referralReason: '', agreedToTerms: false,
      });
    })
    .catch(error => console.error('Submission error:', error));
    */
    // ----------------------------------------------------------------------
  };

  return (
    <>
      <div className="hero_header ">
        <div data-scroll-reveal="" className="hero_content is-home">
          <h2 className="hero_heading heading-gradient">
            <div className="word">Join</div>
            <div className="word">In</div>
            <div className="word">Our</div>
            <div className="word">Affiliate</div>
            <div className="word">Program</div>
          </h2>
          
          {/* Wrap everything in a <form> tag and attach handleSubmit */}
          <form onSubmit={handleSubmit} className="input_container-is_form flex-1">
            
            {/* Full Name Input */}
            <input
              className=""
              type="text"
              name="fullName" // Crucial: Add 'name' attribute
              value={formData.fullName} // Crucial: Bind 'value' to state
              onChange={handleChange} // Crucial: Add 'onChange' handler
              placeholder="Full Name*"
            />
            
            {/* Email Input */}
            <input
              type="email"
              name="email" // Crucial: Add 'name' attribute
              value={formData.email} // Crucial: Bind 'value' to state
              onChange={handleChange} // Crucial: Add 'onChange' handler
              placeholder="Enter Your Email*"
            />
            
            {/* Select Dropdown */}
            <select
              name="weAreLookingFor" // Crucial: Add 'name' attribute
              value={formData.weAreLookingFor} // Crucial: Bind 'value' to state
              onChange={handleChange} // Crucial: Add 'onChange' handler
            >
              {/* Ensure the initial selected option is not a valid submission choice */}
              <option value="What Are We Looking?" disabled>
                What Are We Looking?
              </option>
              <option value="Individual Entrepreneur">1. Individual Entrepreneur</option>
              <option value="Strong Interpersonal">2. Strong Interpersonal</option>
              <option value="Marketing Agencies">3. Marketing Agencies</option>
              <option value="Social Media Influencers">4. Social Media Influencers</option>
            </select>
            
            {/* Company/Link Input */}
            <input
              type="text"
              name="companyLink" // Crucial: Add 'name' attribute
              value={formData.companyLink}
              onChange={handleChange}
              placeholder="Enter Your Company Name/Link"
            />
            
            {/* Job Title Input */}
            <input
              type="text"
              name="jobTitle" // Crucial: Add 'name' attribute
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Enter Your Job Title"
            />
            
            {/* Textarea */}
            <textarea
              name="referralReason" // Crucial: Add 'name' attribute
              value={formData.referralReason}
              onChange={handleChange}
              placeholder="Why Do You Want To Become Our Referral Partner?"
            />
            
            {/* Checkbox */}
            <div className="terms_condition_radio">
              <div className="terms_condition_inner_container">
                <input
                  className='terms_condition_radio_main'
                  type="checkbox"
                  name="agreedToTerms" // Crucial: Add 'name' attribute
                  checked={formData.agreedToTerms} // Note: Use 'checked' instead of 'value'
                  onChange={handleChange} // Crucial: Add 'onChange' handler
                />
              </div>
              <p className='inline'>By Checking this box you are agreeing with our <a href="https://www.guthib.com">Terms & conditions</a> </p>
            </div>
            
            {/* Submit Button */}
            <button type="submit" className="affiliate_application-submit_button">Submit Application</button>
            
          </form>
        </div>
      </div>
    </>
  )
}