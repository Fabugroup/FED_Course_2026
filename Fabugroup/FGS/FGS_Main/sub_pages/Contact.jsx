// Contact.jsx
import FlexBox from "../src/components/FlexBox";
import "./Fgs_contact.css";

function Contact() {
  return (
    <FlexBox
      direction="row"
      justify="flex-start"
      align="flex-start"
      padding="0"
      width="100%"
      background="#000000"
      color="white"
      grow={1}
    >
      <div className="fgs-contact-shell">
        <div className="fgs-contact-container">
          <div className="fgs-contact-header">
            <h1>Contact Us</h1>
            <p className="fgs-contact-subtitle">
              We'd love to hear from you. Choose how you'd like to get in touch.
            </p>
          </div>

          <div className="fgs-contact-grid">
            {/* Contact Information Card */}
            <div className="fgs-contact-card">
              <div className="fgs-contact-card-icon">
                <i className="ti ti-phone" aria-hidden="true" />
              </div>
              <h3>Contact Information</h3>
              <div className="fgs-contact-detail">
                <i className="ti ti-mail" aria-hidden="true" />
                <a href="mailto:info@fgs-asia.com">info@fgs-asia.com</a>
              </div>
              <div className="fgs-contact-detail">
                <i className="ti ti-phone" aria-hidden="true" />
                <a href="tel:+6562223388">+65 6222 3388</a>
              </div>
              <div className="fgs-contact-detail">
                <i className="ti ti-map-pin" aria-hidden="true" />
                <span>10 Anson Road, #10-01, International Plaza, Singapore 079903</span>
              </div>
            </div>

            {/* Inquiry Form Card */}
            <div className="fgs-contact-card">
              <div className="fgs-contact-card-icon">
                <i className="ti ti-mail" aria-hidden="true" />
              </div>
              <h3>Inquiry Form</h3>
              <p className="fgs-contact-card-desc">
                Send us a general inquiry and we'll get back to you within 24 hours.
              </p>
              <button className="fgs-contact-btn">Send Inquiry →</button>
            </div>

            {/* Business Development Card */}
            <div className="fgs-contact-card">
              <div className="fgs-contact-card-icon">
                <i className="ti ti-briefcase" aria-hidden="true" />
              </div>
              <h3>Business Development</h3>
              <p className="fgs-contact-card-desc">
                Explore partnership opportunities and strategic collaborations.
              </p>
              <button className="fgs-contact-btn">Learn More →</button>
            </div>

            {/* Technical Support Card */}
            <div className="fgs-contact-card">
              <div className="fgs-contact-card-icon">
                <i className="ti ti-settings" aria-hidden="true" />
              </div>
              <h3>Technical Support</h3>
              <p className="fgs-contact-card-desc">
                Get help with installation, troubleshooting, and technical questions.
              </p>
              <button className="fgs-contact-btn">Get Support →</button>
            </div>

            {/* Dealer Application Card */}
            <div className="fgs-contact-card">
              <div className="fgs-contact-card-icon">
                <i className="ti ti-building-store" aria-hidden="true" />
              </div>
              <h3>Dealer Application</h3>
              <p className="fgs-contact-card-desc">
                Join our network of authorised dealers across Southeast Asia.
              </p>
              <button className="fgs-contact-btn">Apply Now →</button>
            </div>

            {/* Partnership Opportunities Card */}
            <div className="fgs-contact-card">
              <div className="fgs-contact-card-icon">
                <i className="ti ti-handshake" aria-hidden="true" />
              </div>
              <h3>Partnership Opportunities</h3>
              <p className="fgs-contact-card-desc">
                Explore technology, distribution, and co-marketing partnerships.
              </p>
              <button className="fgs-contact-btn">Partner With Us →</button>
            </div>
          </div>

          <div className="fgs-contact-footer">
            <p>© 2024 FGS Asia Pacific. All rights reserved.</p>
          </div>
        </div>
      </div>
    </FlexBox>
  );
}

export default Contact;