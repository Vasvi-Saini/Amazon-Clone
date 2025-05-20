// Footer.jsx
import React from 'react';
import { HoverStyles } from '../Constants';

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white text-sm relative top-[97px]">
      {/* Back to top */}
      
      <div className="bg-[#37475A] py-3 text-center cursor-pointer hover:underline">
        Back to top
      </div>

      {/* Main Links */}
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-gray-600 ">
        <div>
          <h3 className="font-bold mb-2">Get to Know Us</h3>
          <ul className="space-y-1">
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Connect with Us</h3>
          <ul className="space-y-1">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Make Money with Us</h3>
          <ul className="space-y-1">
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Supply to Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Let Us Help You</h3>
          <ul className="space-y-1">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      {/* Language + Country */}
      <div className="flex justify-center items-center py-6 gap-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="w-20" />
        <div className="border px-3 py-1 rounded text-sm">🌐 English</div>
        <div className="border px-3 py-1 rounded text-sm">🇮🇳 India</div>
      </div>

      {/* Bottom Links */}
      <div className="bg-[#131A22] py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-gray-400">
          <div>
            <h4 className="font-bold text-white">AbeBooks</h4>
            <p>Books, art & collectibles</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Amazon Web Services</h4>
            <p>Scalable Cloud Computing Services</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Audible</h4>
            <p>Download Audio Books</p>
          </div>
          <div>
            <h4 className="font-bold text-white">IMDb</h4>
            <p>Movies, TV & Celebrities</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Shopbop</h4>
            <p>Designer Fashion Brands</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Amazon Business</h4>
            <p>Everything For Your Business</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Prime Now</h4>
            <p>2-Hour Delivery on Everyday Items</p>
          </div>
          <div>
            <h4 className="font-bold text-white">Amazon Prime Music</h4>
            <p>100 million songs, ad-free</p>
            <p>Over 15 million podcast episodes</p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-400 mt-6 space-x-4">
          <span>Conditions of Use & Sale</span>
          <span>Privacy Notice</span>
          <span>Interest-Based Ads</span>
          <p className="mt-2">© 1996–2025, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
