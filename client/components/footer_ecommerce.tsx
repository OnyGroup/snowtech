import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Logo & About */}
        <div className="md:col-span-1">
          <img src="/logo-mini.webp" alt="Snowtech Ltd. Logo" className="w-24 md:w-32 lg:w-40 h-auto mb-2" />
          <p className="text-black mt-2 text-sm">
            We are your premier destination for cutting-edge electrical and electronic HVAC solutions in Kenya.
          </p>
        </div>

        {/* Column 2: Services */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">Services</h3>
          <ul className="space-y-2 text-black text-sm">
            <li><a href="/hvac-systems" className="hover:text-indigo-600">HVAC Systems</a></li>
            <li><a href="/security-systems" className="hover:text-indigo-600">Security Systems</a></li>
            <li><a href="/power-backup-solutions" className="hover:text-indigo-600">Power Backup Solutions</a></li>
            <li><a href="/office-solutions" className="hover:text-indigo-600">Office Solutions</a></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">Quick Links</h3>
          <ul className="space-y-2 text-black text-sm">
            <li><a href="/contact" className="hover:text-indigo-600">Contact</a></li>
            <li><a href="/about" className="hover:text-indigo-600">About Us</a></li>
            <li><a href="/portfolio" className="hover:text-indigo-600">Portfolio</a></li>
            <li><a href="/clients" className="hover:text-indigo-600">Clients</a></li>
            <li><a href="/faq" className="hover:text-indigo-600">FAQs</a></li>
          </ul>
        </div>

        {/* Column 4: Customer Support */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">Customer Support</h3>
          <ul className="space-y-2 text-black text-sm">
            <li><a href="/shipping" className="hover:text-indigo-600">Shipping & Delivery</a></li>
            <li><a href="/returns" className="hover:text-indigo-600">Returns & Exchanges</a></li>
            <li><a href="/support" className="hover:text-indigo-600">Help & Support</a></li>
          </ul>
        </div>

        {/* Column 5: Get in Touch */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-3 text-indigo-600">Get in Touch</h3>
          <div className="flex items-center text-black text-sm mb-2">
            <MapPinIcon className="h-5 w-5 text-indigo-600 mr-2" />
            <p>11 Rose Avenue | Kilimani</p>
          </div>
          <div className="flex items-center text-black text-sm mb-2">
            <PhoneIcon className="h-5 w-5 text-indigo-600 mr-2" />
            <p>+254722342322</p>
          </div>
          <div className="flex items-center text-black text-sm">
            <EnvelopeIcon className="h-5 w-5 text-indigo-600 mr-2" />
            <p>info@snowtech.co.ke</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-300 pt-4 flex items-center justify-between text-sm text-black">
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/Snowtechltd/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/snowtechElec_ke" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/company/snowtech-ltd?originalSubdomain=ke" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/terms" className="hover:text-indigo-600">Terms</a>
          <a href="/privacy-policy" className="hover:text-indigo-600">Privacy Policy</a>
          <p>&copy; {new Date().getFullYear()} Snowtech</p>
        </div>
      </div>
    </footer>
  );
}
