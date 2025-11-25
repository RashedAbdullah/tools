import React from "react";
import Link from "next/link";
import { FileText, Code, Database, Settings } from "lucide-react";

const HomePage = () => {
  const tools = [
    {
      name: "এক্সেল টু JSON",
      description: "এক্সেল ফাইলকে JSON ফরম্যাটে কনভার্ট করুন",
      href: "/excel-to-json",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      name: "কোড কনভার্টার",
      description: "বিভিন্ন প্রোগ্রামিং ভাষার মধ্যে কোড কনভার্ট করুন",
      href: "/code-converter",
      icon: Code,
      color: "bg-green-500",
    },
    {
      name: "ডাটা ভ্যালিডেটর",
      description: "বিভিন্ন ডাটা ফরম্যাট ভ্যালিডেট করুন",
      href: "/data-validator",
      icon: Database,
      color: "bg-purple-500",
    },
    {
      name: "সেটিংস জেনারেটর",
      description: "কনফিগারেশন ফাইল জেনারেট করুন",
      href: "/settings-generator",
      icon: Settings,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          আপনার <span className="text-blue-600">টুলকিট</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          সকল প্রয়োজনীয় টুল একই স্থানে। সময় বাঁচান, উৎপাদনশীলতা বাড়ান,
          এবং আপনার কাজকে আরও সহজ করে তুলুন।
        </p>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.name}
              href={tool.href}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${tool.color} rounded-lg mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {tool.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {tool.description}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">টুলস</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">ফ্রি</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">এভেইলেবল</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600">ইউজার</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;