// Dealers.jsx
import { useState } from "react";
import FlexBox from "../src/components/FlexBox";
import { DEALERS, SeaMap } from "./PixelSeaMap";
import "./Fgs_dealers.css";

const NAV_ITEMS = [
  {
    id: "inquiry",
    label: "Inquiry Form",
    icon: "ti-mail",
    formTitle: "General Inquiry",
    fields: ["name", "email", "company", "message"],
  },
  {
    id: "dealer",
    label: "Dealer Application",
    icon: "ti-building-store",
    formTitle: "Dealer Application",
    fields: ["company", "name", "email", "country", "message"],
  },
];

const FIELD_META = {
  name: { label: "Full Name", type: "text", placeholder: "Jane Tan" },
  email: {
    label: "Email Address",
    type: "email",
    placeholder: "jane@company.com",
  },
  company: {
    label: "Company Name",
    type: "text",
    placeholder: "Acme Pte. Ltd.",
  },
  message: {
    label: "Message",
    type: "textarea",
    placeholder: "Tell us how we can help…",
  },
  country: {
    label: "Country",
    type: "select",
    options: [
      "Singapore",
      "Malaysia",
      "Philippines",
      "Indonesia",
      "Vietnam",
      "Others",
    ],
  },
};

function FormField({ fieldKey }) {
  const meta = FIELD_META[fieldKey];
  if (!meta) return null;
  const id = `fgs-field-${fieldKey}`;
  return (
    <div className="fgs-form-group">
      <label htmlFor={id}>{meta.label}</label>
      {meta.type === "textarea" ? (
        <textarea id={id} placeholder={meta.placeholder} rows={4} />
      ) : meta.type === "select" ? (
        <select id={id} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {meta.options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input id={id} type={meta.type} placeholder={meta.placeholder} />
      )}
    </div>
  );
}

function DealerCard({
  dealerData,
  onClose,
  onContact,
  showCloseButton = true,
}) {
  if (!dealerData) return null;
  const d = dealerData;
  return (
    <div
      className="fgs-dealer-card visible"
      role="dialog"
      aria-label={`${d.country} dealer`}
    >
      <div className="fgs-dealer-card-header">
        <span className="fgs-dealer-flag">{d.flag}</span>
        <div>
          <p className="fgs-dealer-country">{d.country}</p>
          <p className="fgs-dealer-type">{d.type}</p>
        </div>
        {showCloseButton && (
          <button
            className="fgs-dealer-close"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="ti ti-x" aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="fgs-dealer-row">
        <i className="ti ti-building" aria-hidden="true" />
        <span>{d.company}</span>
      </div>
      <div className="fgs-dealer-row">
        <i className="ti ti-map-pin" aria-hidden="true" />
        <span>{d.address}</span>
      </div>
      <div className="fgs-dealer-row">
        <i className="ti ti-phone" aria-hidden="true" />
        <span>{d.phone}</span>
      </div>
      <div className="fgs-dealer-row">
        <i className="ti ti-mail" aria-hidden="true" />
        <span>{d.email}</span>
      </div>
      <button className="fgs-dealer-cta" onClick={() => onContact(d.country)}>
        Send enquiry →
      </button>
    </div>
  );
}

function Dealers() {
  const [activePin, setActivePin] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formFields, setFormFields] = useState([]);

  const handlePinClick = (code) => {
    setActivePin(activePin === code ? null : code);
  };

  const handleContactDealer = (country) => {
    setFormTitle(`Dealer Enquiry — ${country}`);
    setFormFields(["name", "email", "company", "message"]);
    setShowForm(true);
  };

  const handleNavSelect = (id) => {
    const item = NAV_ITEMS.find((n) => n.id === id);
    if (item) {
      setFormTitle(item.formTitle);
      setFormFields(item.fields);
      setShowForm(true);
    }
  };

  return (
    <FlexBox
      direction="column"
      justify="flex-start"
      align="flex-start"
      padding="0"
      width="100%"
      background="#000000"
      color="white"
      grow={1}
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <div className="fgs-dealers-shell">
        {/* Map takes 3/4 of screen */}
        <div className="fgs-map-container">
          <div className="fgs-map-header">
            <h1>Building Success Through Collaboration</h1>
            <p className="fgs-map-subtitle">
              FG System works with technology providers, consultants,
              contractors and regional partners to deliver innovative solutions
              throughout Southeast Asia.
            </p>
          </div>
          <div className="fgs-map-wrapper">
            <SeaMap activePin={activePin} onPinClick={handlePinClick} />
            <div
              className={`fgs-dealer-cards-container ${activePin ? "visible" : ""}`}
            >
              {activePin === "PH" || activePin === "PH2" ? (
                <>
                  <DealerCard
                    dealerData={DEALERS.PH}
                    onClose={() => setActivePin(null)}
                    onContact={handleContactDealer}
                  />
                  <DealerCard
                    dealerData={DEALERS.PH2}
                    onClose={() => setActivePin(null)}
                    onContact={handleContactDealer}
                    showCloseButton={false}
                  />
                </>
              ) : (
                activePin && (
                  <DealerCard
                    dealerData={DEALERS[activePin]}
                    onClose={() => setActivePin(null)}
                    onContact={handleContactDealer}
                  />
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar with country menu and action buttons */}
        <div className="fgs-bottom-bar">
          {/* Country Tabs */}
          <div className="fgs-country-tabs">
            {[
              "Singapore",
              "Malaysia",
              "Philippines",
              "Indonesia",
              "Vietnam",
            ].map((country) => {
              const code = Object.keys(DEALERS).find(
                (key) => DEALERS[key].country === country,
              );
              const isActive =
                activePin === code || (code === "PH" && activePin === "PH2");
              return (
                <button
                  key={country}
                  className={`fgs-country-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => {
                    if (code) {
                      setActivePin(
                        activePin === code ||
                          (code === "PH" && activePin === "PH2")
                          ? null
                          : code,
                      );
                    }
                  }}
                >
                  <span className="fgs-country-tab-flag">
                    {DEALERS[code]?.flag}
                  </span>
                  <span>{country}</span>
                </button>
              );
            })}
          </div>

          {/* Right bottom menu - Inquiry and Dealer Application */}
          <div className="fgs-action-menu">
            <div className="fgs-action-menu-trigger">
              <i className="ti ti-menu" aria-hidden="true" />
              <span>Become a Partner</span>
              <span className="fgs-action-arrow">▾</span>
            </div>

            <div className="fgs-action-dropdown">
              <button
                className="fgs-action-item"
                onClick={() => handleNavSelect("inquiry")}
              >
                <i className="ti ti-mail" aria-hidden="true" />
                <span>Inquiry Form</span>
              </button>
              <button
                className="fgs-action-item"
                onClick={() => handleNavSelect("dealer")}
              >
                <i className="ti ti-building-store" aria-hidden="true" />
                <span>Dealer Application</span>
              </button>
            </div>
          </div>
        </div>

        {/* Form overlay */}
        {showForm && (
          <div className="fgs-form-overlay" onClick={() => setShowForm(false)}>
            <div
              className="fgs-form-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="fgs-form-modal-header">
                <h2>{formTitle}</h2>
                <button
                  className="fgs-form-close"
                  onClick={() => setShowForm(false)}
                >
                  ✕
                </button>
              </div>
              <div className="fgs-form-modal-body">
                <div className="fgs-form-row">
                  {formFields.slice(0, 2).map((f) => (
                    <FormField key={f} fieldKey={f} />
                  ))}
                </div>
                {formFields.slice(2).map((f) => (
                  <FormField key={f} fieldKey={f} />
                ))}
                <button className="fgs-form-submit">Send message</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </FlexBox>
  );
}

export default Dealers;
