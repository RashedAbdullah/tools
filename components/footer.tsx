import React from "react";
import Link from "next/link";
import { ToolCase, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    টুলস: [
      { name: "এক্সেল টু JSON", href: "/excel-to-json" },
      { name: "সকল টুলস", href: "/tools" },
    ],
    সহায়তা: [
      { name: "ডকুমেন্টেশন", href: "/docs" },
      { name: "কন্টাক্ট", href: "/contact" },
      { name: "সাপোর্ট", href: "/support" },
    ],
    লিঙ্কস: [
      { name: "গিটহাব", href: "https://github.com/yourusername" },
      { name: "প্রাইভেসি পলিসি", href: "/privacy" },
      { name: "টার্মস অফ সার্ভিস", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <ToolCase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">টুলকিট</h2>
                <p className="text-sm text-gray-300">সকল টুল এক স্থানে</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              আপনার দৈনন্দিন কাজকে সহজ করতে তৈরি করা হয়েছে বিভিন্ন ইউটিলিটি টুলের সংগ্রহ।
              সময় বাঁচান এবং উৎপাদনশীলতা বাড়ান।
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} টুলকিট. সকল অধিকার সংরক্ষিত</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for better productivity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;