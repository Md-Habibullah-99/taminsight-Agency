import React, { useState, useRef, useEffect } from "react";
import "../../Styles/components_Style/FAQSection.css";

const faqs = [
  {
    question: "What's my design delivery process?",
    answer: "I keep it simple and clear. We together begin by understanding your business needs. Then, we move to design concepts, revisions, and delivery. You'll receive regular updates and chances for feedback. This way, you always know our progress and what's next."
  },
  {
    question: "How does the Monthly Design Partnership work?",
    answer: "We agree on your project scope upfront. Then, we create a clear timeline based on your needs. Whether it's branding, websites, UI/UX, or marketing materials, it's all included in your plan. No surprises-just focused design work that gets results."
  },
  {
    question: "What if I'm not satisfied with the designs?",
    answer: "I'll keep revising until you're pleased. As design is subjective, it may take a few versions to match your style. My commitment is to provide work you'll love, not just complete a task."
  },
  {
    question: "How do I share feedback?",
    answer: "For feedback, I prefer Loom and Figma comments. Figma helps keep everything organized, but feel free to send me a quick Slack message if you need to. You can either comment directly on the designs or schedule a call to discuss in more detail."
  },
  {
    question: "Is there a limit to what I can request?",
    answer: "You can request any design work you need. I'll let you know what's included in your current plan. If you need more, we can explore simple options together. This way, you'll avoid any surprise change orders."
  },
  {
    question: "Can we schedule calls during the project?",
    answer: "We'll start with a kickoff call and arrange check-ins at key milestones. I mix good communication with focused work time. This helps me get the best results for your business."
  },
  {
    question: "Why choose monthly instead of fixed projects?",
    answer: "Monthly Design Partnership is ideal for ongoing design needs. With a retainer, you get continuous access and priority attention from me. You can also add new requests at any time without having to sign a new contract. As I get to know your business better, I can deliver better and faster results. Fixed projects work best for one-time tasks. They have a clear scope and a set deadline."
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measureHeight = () => {
      if (contentRef.current) {
        if (isOpen) {
          // Create a temporary clone to measure natural height
          const element = contentRef.current;
          const clone = element.cloneNode(true);
          
          // Set clone styles for measurement
          clone.style.position = 'absolute';
          clone.style.visibility = 'hidden';
          clone.style.height = 'auto';
          clone.style.maxHeight = 'none';
          clone.style.overflow = 'visible';
          clone.style.width = element.offsetWidth + 'px';
          
          // Add to DOM for measurement
          element.parentNode.appendChild(clone);
          
          // Measure height including all padding, borders, etc.
          const naturalHeight = clone.offsetHeight;
          
          // Remove clone
          element.parentNode.removeChild(clone);
          
          // Add a bit of extra space for safety (10px buffer)
          setHeight(naturalHeight + 10);
        } else {
          setHeight(0);
        }
      }
    };

    // Measure immediately and also after a small delay
    measureHeight();
    const timeoutId = setTimeout(measureHeight, 50);
    
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const handleToggle = () => {
    onToggle(index);
  };

  return (
    <div className="faq">
      <div className={`faq_item is-faq-card ${isOpen ? 'is-open' : ''}`}>
        <div 
          className="faq_header is-faq-card" 
          onClick={handleToggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggle();
            }
          }}
        >
          <h6 className="faq_headling">
            {faq.question}
          </h6>
          <div className={`faq_icon ${isOpen ? 'is-rotated' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none">
              <g id="Iconly/Light-Outline/Arrow - Down 2">
                <g id="Arrow - Down 2">
                  <path id="Stroke 1"
                    d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
                    fill="currentColor"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div 
          className="faq_content"
          ref={contentRef}
          style={{
            height: `${height}px`,
            opacity: isOpen ? 1 : 0,
            transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out',
            overflow: 'hidden'
          }}
        >
          <div className="faq_content_body">
            <p>{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="faqs">
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="section-header is-section-align-left">
            <h2 data-scroll-reveal="" className="heading-gradient mb-md">Frequently<br />asked questions</h2>
            <p data-scroll-reveal="" className="weight-medium">Still have questions? <a href="mailto:taminsight@gmail.com"
              className="txt-decoration" style={{ color: "black" }}>Drop us a line - taminsight@gmail.com</a></p>
          </div>
          <div className="faqs-grid">
            <div className="faqs-grid-item is-left">
              <div className="faq-bookcall">
                <div className="faq-bookcall-avatar">
                  <img src="images/tamim_profile_mini.png" loading="lazy" alt="" className="image-2" />
                </div>
                <div className="div-block-2">
                  <h4>Short on time?</h4>
                  <div className="text-lg">Let's get started with a brief intro call.</div>
                  <div className="faq-bookcall-img w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="911" height="493"
                    fill="none">
                    <path stroke="#967F4B" strokeWidth="24"
                      d="M901.787 342.359c-86.822-97.132-308.958-257.93-502.935-124.07-242.471 167.325 51.619 391.515 159.061 169.286C665.355 165.345 318.199-192.061 9.647 161.929"
                      opacity=".1" />
                  </svg></div>
                </div>
                <a href="https://www.whatsapp.com/" target="_blank" className="btn_cta btn-primary w-inline-block">
                  <div className="btn_content">
                    <div className="weight-bold">Book a Call</div><svg xmlns="http://www.w3.org/2000/svg"
                      className="svgsprite btn_icon icon" width="100%" viewBox="0 0 16 16" fill="none">
                      <path d="M9.33333 4L13.5 8L9.33333 12M13 8H2.5" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="square"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="faqs-grid-item is-right">
              {faqs.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  faq={faq}
                  index={idx}
                  isOpen={openIndex === idx}
                  onToggle={toggleFAQ}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;