import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#f4f1eb] text-[#4a433d] bottom-0">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-serif mb-8">
              Stay Tuned, Subscribe to Our Newsletter
            </h2>

            <div className="flex gap-3 mb-6">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 border border-[#d7d0c7] px-4 py-4 bg-transparent outline-none"
              />

              <button className="border border-[#d7d0c7] px-8 py-4 uppercase tracking-wider hover:bg-[#e7e1d8] transition">
                Join
              </button>
            </div>

            <label className="flex items-center gap-3 text-sm uppercase tracking-widest text-[#7a7269]">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#4a433d]"
              />
              Yes, subscribe me to your newsletter.
            </label>
          </div>

          {/* Middle Section */}
          <div className="space-y-5 uppercase tracking-wide">
            <a href="#" className="block hover:underline">
              Classes
            </a>
            <a href="#" className="block hover:underline">
              Instructor
            </a>
            <a href="#" className="block hover:underline">
              About
            </a>
            <a href="#" className="block hover:underline">
              Contact
            </a>

            <div className="flex gap-6 pt-4 text-xl">
              
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-5 text-[#6b6258]">
            <a href="#" className="block hover:underline">
              Refund Policy
            </a>
            <a href="#" className="block hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="block hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="block hover:underline">
              Accessibility Statement
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#ddd6cd] mt-20 pt-10 flex flex-col md:flex-row justify-between text-sm text-[#6b6258]">
          <p>© 2035 by Aloe.</p>
          <p>Made with intention.</p>
        </div>
      </div>
    </footer>
  );
}