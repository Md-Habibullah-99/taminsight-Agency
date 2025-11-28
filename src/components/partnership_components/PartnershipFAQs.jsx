
import FAQs from "../sub_components/FAQs";

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

export default function PartnershipFAQItem (){
  return <FAQs faqs={faqs} />;
};
// Export the FAQs container as the default export so existing imports that
// import the default component (e.g. `import PartnershipFAQItem from '../partnership_components/PartnershipFAQ'`)
// will render the full FAQ section. The item component is a named export.

