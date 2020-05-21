import React from "react";
import styles from "./ContactBox.module.css"

const ContactBox = ({ title, phone, email }) => {
  return (
    <div className={styles.contact}>
      <h3 className={styles.contactTitle}>{title}</h3>
      <div style={{ marginTop: "1rem" }}>
        <img src="assets/contact-phone.svg" alt="Contact Phone" />
        <span className={styles.contactPhone}>{phone}</span>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <img src="assets/contact-card.svg" alt="Contact email" />
        <span className={styles.contactEmail}>{email}</span>
      </div>
    </div>
  );
};

export default ContactBox;
