import React from "react";
import { Phone, Mail, MapPin, Clock3 } from "lucide-react";

const contactDetails = [
  {
    icon: <Phone size={18} strokeWidth={2.2} />,
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: <Mail size={18} strokeWidth={2.2} />,
    label: "Email",
    value: "admissions@pvmschool.edu",
  },
  {
    icon: <MapPin size={18} strokeWidth={2.2} />,
    label: "Address",
    value: "Prasan Vidya Mandir\nMamandur, Tamil Nadu",
  },
  {
    icon: <Clock3 size={18} strokeWidth={2.2} />,
    label: "Office Hours",
    value: "Mon – Sat · 8:30 AM – 5:00 PM",
  },
];

export default function ContactMapSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="items-stretch">
          {/* Contact Info */}
         
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[460px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124574.24324101977!2d79.78840139726562!3d12.651604300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fd2288c324a7%3A0x9b5bdfba32f70720!2sPrasan%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1781598636449!5m2!1sen!2sin"
              className="w-full h-full min-h-[460px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              title="PVM Campus Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}