import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blumine-600 to-luckypoint-600 rounded-xl" />
              <div>
                <h2 className="text-xl font-bold text-white">Axperia</h2>
                <p className="text-sm">Information Systems</p>
              </div>
            </div>
            <p className="text-gray-400">
              Your trusted all-in-one technology partner for digital transformation and business growth.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-choose" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#digital-marketing" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="hover:text-white transition-colors">Software Development</span></li>
              <li><span className="hover:text-white transition-colors">ERP Consulting</span></li>
              <li><span className="hover:text-white transition-colors">Digital Marketing</span></li>
              <li><span className="hover:text-white transition-colors">Web Development</span></li>
              <li><span className="hover:text-white transition-colors">Creative Design</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blumine-900/30 flex items-center justify-center">
                  <span className="text-blumine-400">📧</span>
                </div>
                <a href="mailto:ask.axperia@gmail.com" className="hover:text-white transition-colors">
                  ask.axperia@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blumine-900/30 flex items-center justify-center">
                  <span className="text-blumine-400">📱</span>
                </div>
                <a href="tel:+94788017808" className="hover:text-white transition-colors">
                  +94 78 8017808
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blumine-900/30 flex items-center justify-center">
                  <span className="text-blumine-400">📍</span>
                </div>
                <span>Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Axperia Information Systems. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/company/axperia-information-systems" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blumine-600 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
              <Facebook size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center transition-colors">
              <Twitter size={20} />
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors">
              <Instagram size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};