import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ThankYou.module.css";

const ThankYou = () => {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17991355765/-_pTCOvtosUcEPWa-YJD",
        value: 1.0,
        currency: "INR",
      });
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "conversion",
      value: 500.0,
      currency: "INR",
    });

    // Meta Pixel - track Lead event on thank you page
    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <div className={styles.thankYouPage}>
      <div className={styles.thankYouCard}>
        <div className={styles.checkmark}>✓</div>
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.text}>
          Your appointment has been booked successfully.
        </p>
        <p className={styles.subText}>
          We will get back to you shortly to confirm your appointment.
        </p>
        <Link to="/" className={styles.backButton}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
