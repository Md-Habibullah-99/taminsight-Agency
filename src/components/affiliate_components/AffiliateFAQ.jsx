import React, { useState, useRef, useEffect } from "react";
import "../../Styles/components_Style/FAQSection.css";

const faqs = [
  {
    question: "What is Taminsight?",
    answer: "Taminsight is a creative agency that empowers B2B brands with exceptional white-label solutions, setting the stage for unparalleled success and industry leadership. With Taminsight, you can access a team of experienced designers and developers at a flat monthly rate. This means you no longer have to worry about the hassle of recruiting, hiring, and managing your team. Taminsight takes care of everything for you, so you can focus on growing your business."
  },
  {
    question: "How are you different from freelancer marketplaces?",
    answer: "Good question! Freelancer marketplaces like Upwork and Fiverr give you access to a vast pool of freelancers, but there’s a catch. These platforms take a percentage of the payment to the freelancer, so they have an incentive to gather as many freelancers as possible, regardless of their quality. At Taminsight, we do things differently. We only work with a vetted group of designers and developers who are contracted on a full-time basis. This means you can be sure you’re getting high-quality work from experienced professionals."
  },
  {
    question: "What if I don't like the delivery?",
    answer: "Your satisfaction is not just a priority; it’s our obsession. We pour our hearts and souls into every project, ensuring that you walk away with a smile. Here’s the cherry on top, we’ll continue to revise the design until you’re 100% satisfied, and if your claim is based on reasonable things, you’ll receive a no-questions-asked 100% refund. We are confident in exceeding your expectations and protecting your investment."
  },
  {
    question: "How fast will I receive my requests?",
    answer: "On average, most requests are completed in just two days or less. However, more complex requests can take longer."
  },
  {
    question: "How do I pay for the subscription?",
    answer: "Signing up for your favorite subscription plan has never been easier. Simply head over to our website and effortlessly enroll using Wise, the industry-leading payment gateway trusted by millions. Don’t worry you can still pay directly from the bank as well. Once you’ve subscribed, sit back and relax. We’ll send you a friendly reminder email three days before your next renewal, ensuring you’re always in the loop."
  },
  {
    question: "What does the maintenance plan include?",
    answer: (
      <>
        <p>The maintenance plan includes all kinds of tasks that are necessary to keep a website up to date, like:</p>
        <ul className="affiliate-faq-dropdownmenu-list">
          <li>Fixing Website Bugs</li>
          <li>Plugin Updates</li>
          <li>Security Audit</li>
          <li>Security Implementation</li>
          <li>Implementing Website with 3rd Party Tool</li>
          <li>Website Content Update</li>
          <li>Adding New Blog Post</li>
          <li>Site Speed Optimization</li>
          <li>Site Backup</li>
          <li>Broken Links and 404</li>
          <li>Errors Check</li>
          <li>Google Search Console Setup</li>
          <li>Google Tag Manager Setup</li>
          <li>Funnel Analytics Setup</li>
          <li>Facebook Pixel Setup</li>
          <li>Payment Integration</li>
          <li>Cookie Consent Setup</li>
          <li>Forms and SMTP Checks</li>
          <li>Database Optimization</li>
          <li>CDN Checks</li>
          <li>Cross-Browser Checks</li>
          <li>Domain and SSL</li>
          <li>Expiration Review</li>
          <li>Fixing Hosting Issues</li>
          <li>Site Migration</li>
          <li>DNS Setup</li>
        </ul>
      </>
    )
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
      <div className="affiliate_program__bg"></div>
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
