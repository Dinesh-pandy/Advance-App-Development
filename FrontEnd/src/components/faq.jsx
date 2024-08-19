import { useState } from 'react';
import '../assets/css/faq.css';
import Navbar from './navbar';
import Footer from './footer';

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <Navbar/>

            <div className='faq-container'>
                <div className='faq-header'>
                    <h1 className='faq-title'>Frequently Asked Questions</h1>
                </div>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question" onClick={() => toggleAccordion(index)}>
                                <h3 className="faq-question-text">{item.question}</h3>
                                <span className="faq-plus">{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && (
                                <p className="faq-answer">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
        
    );
};

const faqData = [
    {
        question: 'How do I create an account?',
        answer: 'To create an account, simply click on the "Sign Up" button at the top right corner of the page and follow the instructions.'
    },
    {
        question: 'How do I apply for a college?',
        answer: 'To apply for a job, navigate to the college listing, click on the college name, and follow the application instructions provided by the institution.'
    },
    {
        question: 'Can I update my resume?',
        answer: 'Yes, you can update your resume at any time by logging into your account and accessing the profile settings.'
    }
    // Add more FAQ items as needed
];

export default FAQPage;
