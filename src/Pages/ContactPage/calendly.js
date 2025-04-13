import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="calendy-section">
      <InlineWidget
        url="https://calendly.com/harshakarna00755/30min"
        styles={{ height: "900px", width: "100%", border: "none",  }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '00a2ff',
          textColor: '4d5055'
        }}
      />
    </div>
  );
};

export default Calendly;