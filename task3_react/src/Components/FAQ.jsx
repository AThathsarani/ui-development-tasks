import React, { useRef } from "react";

const FAQ = () => {
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    const faqItem = faqRefs.current[index];
    faqItem.classList.toggle("active");
  };

  const faqs = [
    { question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae.' },
    { question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae.' },
    { question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae.' },
    { question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus ornare in eget mauris. Porttitor semper sed nisi ac adipiscing vitae.' },
  ];

  return (
    <div className="faq-container">
      <h2>FAQ's</h2>
      <h3>Find the answers you need</h3>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            ref={(el) => faqRefs.current[index] = el}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span>{faqRefs.current[index]?.classList.contains('active') ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${faqRefs.current[index]?.classList.contains('active') ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
