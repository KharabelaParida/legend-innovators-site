"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
//import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Funding Advisory", href: "/services/funding-advisory" },
      { label: "Virtual CFO", href: "/services/virtual-cfo" },
      { label: "Business Advisory", href: "/services/business-advisory" },
      { label: "Startup Mentoring", href: "/services/startup-mentoring" },
      { label: "Business Establishment", href: "/services/business-establishment" },
    ],
  },
  { label: "LICON Consortium", href: "/licon-consortium" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#FDF8F3", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 60px",
        width: "100%",
      }}>

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos/logo-web.png"
            alt="Legend Innovators"
            width={180}
            height={50}
            style={{ width: "auto", height: "55px" }}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.submenu ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#1B2A6B] text-base font-semibold hover:text-[#F5A623] transition-colors duration-200">
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-5 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-5 py-6 text-sm font-medium text-[#1B2A6B] hover:bg-[#FDF8F3] hover:text-[#F5A623] hover:font-bold transition-all duration-150 border-b border-gray-100 last:border-0"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1B2A6B] text-base font-semibold hover:text-[#F5A623] transition-colors duration-200"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-block text-white font-medium text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
          style={{
            background: "linear-gradient(to right, #F5A623, #C17F24)",
            padding: "10px 24px",
            borderRadius: "999px",
          }}
        >
          Book Free Consultation
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-[#1B2A6B]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FDF8F3] border-t border-gray-100 px-8 py-6 space-y-5">
          {navLinks.map((link) =>
            link.submenu ? (
              <div key={link.label}>
                <button
                  className="flex items-center gap-1 text-[#1B2A6B] text-base font-semibold w-full text-left"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-3 space-y-3">
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block text-sm font-medium text-[#1B2A6B] hover:text-[#F5A623]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-semibold text-[#1B2A6B] hover:text-[#F5A623]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="block text-center text-white px-6 py-2.5 rounded-full font-medium text-sm"
            style={{ background: "linear-gradient(to right, #F5A623, #C17F24)" }}
            onClick={() => setMobileOpen(false)}
          >
            Book Free Consultation
          </Link>
        </div>
      )}
    </header>
  );
}