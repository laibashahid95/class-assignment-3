import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4">
      <div className="container mx-auto px-4 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Twitter">
            Twitter
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="LinkedIn">
            LinkedIn
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="GitHub">
            GitHub
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} [Laiba Shahid]. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
