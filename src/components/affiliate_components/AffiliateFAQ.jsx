import React from "react";
import FAQs from "../sub_components/FAQs";

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

const AffiliateFAQ = () => {
  return <FAQs faqs={faqs} />;
};

export default AffiliateFAQ;
