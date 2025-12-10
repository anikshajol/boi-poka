import React from "react";

const Footer = () => {
  return (
    <footer className="footer w-[90%] mx-auto px-2 sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          boipoka.com
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
