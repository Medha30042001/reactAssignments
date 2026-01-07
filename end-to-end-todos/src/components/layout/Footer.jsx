import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-background px-6 py-3 text-sm text-muted-foreground">
      © {new Date().getFullYear()} Todos App
    </footer>
  );
};

export default Footer;
