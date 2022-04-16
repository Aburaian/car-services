import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p className="text-center text-primary">
        <small>Copywrite © {year} Genius Car Service</small>
      </p>
    </footer>
  );
};

export default Footer;
