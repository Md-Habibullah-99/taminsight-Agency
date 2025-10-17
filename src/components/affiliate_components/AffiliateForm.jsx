import '../../Styles/affiliatePage/affiliate_form.css'
import React, { useState } from 'react';

// 🚨 IMPORTANT: REPLACE THIS WITH YOUR ACTUAL FORMSPREE FORM ID
const FORMSPREE_FORM_ID = 'f/mblzwapb';

export default function AffiliateForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    weAreLookingFor: 'What Are We Looking?',
    companyLink: '',
    jobTitle: '',
    referralReason: '',
    agreedToTerms: false,
  });

  const [submissionStatus, setSubmissionStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  // 1. Generic Change Handler (Same as before)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData(prevData => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  // 2. Submission Handler with Formspree Integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    // Basic Client-Side Validation:
    if (!formData.fullName || !formData.email || !formData.agreedToTerms) {
      alert('Please fill in required fields and agree to terms.');
      setSubmissionStatus('error');
      return;
    }
    if (formData.weAreLookingFor === 'What Are We Looking?') {
      alert('Please select an option for "What Are We Looking?".');
      setSubmissionStatus('error');
      return;
    }

    try {
      // Formspree requires data to be sent as FormData, not JSON
      const form = e.target;
      const data = new FormData(form);

      const response = await fetch(`https://formspree.io/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: data, // Send the FormData object
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
        // Clear the form after submission
        setFormData({
          fullName: '',
          email: '',
          weAreLookingFor: 'What Are We Looking?',
          companyLink: '',
          jobTitle: '',
          referralReason: '',
          agreedToTerms: false,
        });
      } else {
        // Log the error response from Formspree if it exists
        const result = await response.json();
        console.error('Formspree Error:', result);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmissionStatus('error');
    }
  };

  // 3. Conditional Render for Success Message
  if (submissionStatus === 'success') {
    return (
      <div className="hero_header submit_another_application-is_affiliate">
        <div data-scroll-reveal="" className="hero_content is-home">
          <h2 className="hero_heading heading-gradient">Application Sent!</h2>
          <p>Thank you for your interest. Your affiliate application has been received and we will contact you shortly.</p>
          <button onClick={() => setSubmissionStatus('idle')} className="affiliate_application-submit_button">
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="hero_header ">
        <div data-scroll-reveal="" className="hero_content is-home">
          <h2 className="hero_heading heading-gradient">
            Join In Our Affiliate Program
          </h2>

          {/* Attach handleSubmit to the form */}
          <form onSubmit={handleSubmit} className="input_container-is_form flex-1">

            {/* Full Name Input - REQUIRED */}
            <input
              className=""
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              // HTML5 required attribute for extra validation
              required
            />

            {/* Email Input - REQUIRED */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email*"
              required
            />

            {/* Select Dropdown - REQUIRED */}
            <select
              name="weAreLookingFor"
              value={formData.weAreLookingFor}
              onChange={handleChange}
              required
            >
              {/* Note: The 'name' attribute must match the state key */}
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
              name="companyLink"
              value={formData.companyLink}
              onChange={handleChange}
              placeholder="Enter Your Company Name/Link"
            />

            {/* Job Title Input */}
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Enter Your Job Title"
            />

            {/* Textarea */}
            <textarea
              name="referralReason"
              value={formData.referralReason}
              onChange={handleChange}
              placeholder="Why Do You Want To Become Our Referral Partner?"
            />

            {/* Checkbox - REQUIRED */}
            <div className="terms_condition_radio">
              <div className="terms_condition_inner_container">
                <input
                  className='terms_condition_radio_main'
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                  required // Makes the checkbox mandatory
                />
              </div>
              <p className='inline'>By Checking this box you are agreeing with our <a href="https://www.guthib.com">Terms & conditions</a> </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="affiliate_application-submit_button"
              disabled={submissionStatus === 'submitting'} // Disable while submitting
            >
              {submissionStatus === 'submitting' ? 'Sending...' : 'Submit Application'}
            </button>

            {/* Display submission error */}
            {submissionStatus === 'error' && (
              <p style={{ color: 'red', marginTop: '10px' }}>
                There was an error sending your application. Please check your network and try again.
              </p>
            )}

          </form>
        </div>
      </div>
    </>
  )
}