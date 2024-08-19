import '../assets/css/policy.css';
import Footer from './footer';
import Navbar from './navbar';

const PrivacyPolicy = () => {
  return (
    <div>
        <Navbar/>
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        At [Your University Name], we are committed to protecting your privacy. This Privacy Policy
        outlines our practices regarding the collection, use, and disclosure of personal information
        when you use our online student admission portal.
      </p>
      <h2>Information Collection and Use</h2>
      <p>
        We collect personal information, such as your name, contact information, educational history,
        and other relevant details, when you use our student admission portal. This information is
        necessary to process your application and communicate with you regarding your admission status.
      </p>
      <h2>Information Sharing</h2>
      <p>
        We may share your personal information with third-party service providers who assist us in
        managing our admission process. These service providers are obligated to maintain the
        confidentiality of your information and are prohibited from using it for any other purpose.
        We do not sell or rent your personal information to third parties.
      </p>
      <h2>Security</h2>
      <p>
        We implement appropriate security measures to protect your personal information against
        unauthorized access, alteration, disclosure, or destruction. However, please be aware that no
        method of transmission over the internet or electronic storage is 100% secure, and we cannot
        guarantee absolute security.
      </p>
      <h2>Cookies</h2>
      <p>
        Our website may use cookies to enhance your browsing experience. You have the option to
        disable cookies in your browser settings, but please note that some features of our website
        may not function properly as a result.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be
        effective immediately upon posting on this page. We encourage you to review this Privacy
        Policy periodically for any updates.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy or our handling of your
        personal information, please contact us at eduadmitconnect@gmail.com.
      </p>
    </div>
    <Footer/>
</div>
  );
};

export default PrivacyPolicy;
