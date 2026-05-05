import { Link } from "react-router-dom";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>&larr; Back to Home</Link>

        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: March 4, 2026</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            Advanced GroHair & GloSkin ("we", "us", or "our") operates the website and services
            related to hair and skin treatments at our clinic located at 1st Floor, No. 40 Trunk Road,
            Poonamallee, Chennai - 600056. This Privacy Policy explains how we collect, use, and
            protect your personal information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>When you book an appointment or interact with our website, we may collect:</p>
          <ul>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Treatment preferences and enquiry details</li>
            <li>Website usage data through cookies and analytics tools</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use your personal information to:</p>
          <ul>
            <li>Confirm and manage your appointments</li>
            <li>Contact you regarding your enquiries</li>
            <li>Send appointment reminders and follow-ups</li>
            <li>Improve our website and services</li>
            <li>Run advertising campaigns and measure their effectiveness</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Cookies & Tracking</h2>
          <p>
            Our website uses cookies and tracking technologies, including Google Analytics
            (Google Ads conversion tracking) and Meta Pixel (Facebook), to understand website
            traffic, measure ad performance, and improve user experience. These tools may collect
            data such as your IP address, browser type, pages visited, and actions taken on the site.
          </p>
          <p>
            You can manage cookie preferences through your browser settings. Disabling cookies may
            affect certain features of the website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share your information with trusted third-party
            service providers solely for the purposes described above, including:
          </p>
          <ul>
            <li>Google (Analytics & Ads)</li>
            <li>Meta / Facebook (Pixel tracking)</li>
            <li>Communication tools used to contact you</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from
            unauthorized access, alteration, or disclosure. However, no method of transmission over
            the internet is 100% secure.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:thirumazhisai@adgrohair.com">thirumazhisai@adgrohair.com</a> or
            call <a href="tel:+919047656789">+91 90476 56789</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with an updated date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:thirumazhisai@adgrohair.com">thirumazhisai@adgrohair.com</a></li>
            <li>Phone: <a href="tel:+919047656789">+91 90476 56789</a></li>
            <li>Address: 1st Floor, No. 40 Trunk Road, Poonamallee, Chennai - 600056</li>
          </ul>
        </section>

        <div className={styles.backBottom}>
          <Link to="/" className={styles.backButton}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
