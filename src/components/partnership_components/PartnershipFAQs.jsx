import React, { useState, useRef, useEffect } from "react";
import "../../Styles/components_Style/FAQSection.css";

const faqs = [
  {
    question: "What is the Partnership Plan?",
    answer: "The Partnership Plan is a comprehensive business program designed to empower entrepreneurs by providing them with a fully-equipped online presence, including a custom-built website, expert marketing strategies, and the opportunity to earn recurring profits."
  },
  {
    question: "How can I earn recurring profits through the Partnership Plan?",
    answer: "You can earn up to 40% of the total project earnings by bringing clients to your website. The more clients you attract, the greater your revenue potential, allowing you to earn steady recurring profits."
  },
  {
    question: "What sets the Partnership Plan apart from other business opportunities?",
    answer: "The Partnership Plan stands out due to its unique combination of a custom-built website, tailored marketing strategies, and the opportunity to earn recurring profits. It offers a complete package that empowers you to establish and grow a successful online business."
  },
  {
    question: "How does the selection process work for becoming a partner?",
    answer: "To become a partner, Reestify will schedule a meeting with potential partners and conduct interviews to assess their suitability. The aim is to ensure a mutually beneficial partnership and identify individuals who align with the values and goals of the program."
  },
  {
    question: "Do I need any technical expertise to participate in the Partnership Plan?",
    answer: "No, you don’t need any technical expertise. The Partnership Plan covers all your technical details, including creating a stunning website. You can focus on your core strengths and leave the technical aspects to the experts."
  },
  {
    question: "Can I access data and analytics to monitor my website's performance?",
    answer: "Absolutely! The Partnership Plan provides you with advanced tracking tools and access to domain and analytics. This allows you to gain valuable insights into your website’s performance, monitor traffic, and make informed decisions to optimize your strategies for optimal results."
  },
  {
    question: "I have another question that's not listed here. How can I ask it?",
    answer: "If you don’t see the answer to your question here, feel free to email us at taminsight@gmail.com."
  }
];

export function AffiliateFAQItem ({ faq = { question: '', answer: '' }, index = 0, isOpen = false, onToggle = () => {} }){
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  // Control visibility so content only disappears after full collapse
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measureHeight = () => {
      if (!contentRef.current) return;
      const element = contentRef.current;
      if (isOpen) {
        // Make visible immediately on open
        setIsVisible(true);
        // Create a temporary clone to measure natural height
        const clone = element.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.height = 'auto';
        clone.style.maxHeight = 'none';
        clone.style.overflow = 'visible';
        clone.style.width = element.offsetWidth + 'px';
        element.parentNode.appendChild(clone);
        const naturalHeight = clone.offsetHeight;
        element.parentNode.removeChild(clone);
        // Add a bit of extra space for safety (10px buffer)
        setHeight(naturalHeight + 10);
      } else {
        // On close just collapse height; keep visible until transition end
        setHeight(0);
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
            {faq && faq.question ? faq.question : ''}
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
          onTransitionEnd={(e) => {
            // After height transition ends and panel is closed, hide content
            if (e.propertyName === 'height' && !isOpen && height === 0) {
              setIsVisible(false);
            }
          }}
          style={{
            height: `${height}px`,
            // Keep visible during collapse; hide only after full close
            opacity: isVisible ? 1 : 0,
            transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease-in-out',
            overflow: 'hidden',
            display: 'block',
            gridTemplateRows: 'unset',
            willChange: 'height, opacity'
          }}
          aria-hidden={!isOpen}
        >
          <div className="faq_content_body">
            {typeof faq?.answer === 'string'
              ? <p>{faq.answer}</p>
              : faq?.answer || ''}
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
  <section id="faqs" className="faqs affiliate-faqs">
      <div className="global-padding global-padding-section">
        <div className="container-large">
          <div className="faqs-grid">
            <div className="faqs-grid-item is-left affiliate-fqe-left">
              <div className="font-bold">FREQUENTLY ASK QUESTION</div>
              <div className="text-5xl ">In Case You Are Wondering…</div>
            </div>
            <div className="faqs-grid-item is-right">
              {faqs.map((faq, idx) => (
                <AffiliateFAQItem
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
// Export the FAQs container as the default export so existing imports that
// import the default component (e.g. `import AffiliateFAQItem from '../affiliate_components/AffiliateFAQ'`)
// will render the full FAQ section. The item component is a named export.
export default FAQs;
