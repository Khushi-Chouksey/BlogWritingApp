import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-t-white mt-auto">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-8">
            <div className="flex items-center mb-4">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-300">
              &copy; Copyright 2023. All Rights Reserved by DevUI.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 px-6 mb-8">
            <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase">
              Company
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 px-6 mb-8">
            <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase">
              Support
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-6 mb-8">
            <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase">
              Legals
            </h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-300 hover:text-white"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
