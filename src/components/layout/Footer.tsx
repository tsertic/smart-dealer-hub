import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Tomislav Sertic. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
