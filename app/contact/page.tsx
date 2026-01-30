import { Metadata } from "next";
import React from "react";
import InfoText from "@/components/common/ui/InfoText";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "This is the contact section of Phinehas Osei-Tutu's website"
}

const Contact: React.FC = () => {
  const phone = "+233550493688";
  const email = "phinehasoseitutu1@gmail.com";

  return (
    <section className="my-12 flex flex-col gap-8">
      <InfoText
        header="Let's work together"
        description="Want to collaborate, hire, or get a quick walkthrough of my recent work? Reach out via phone or email and I'll respond promptly."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="border border-[#2a2442] bg-[#131022] rounded-2xl p-6 shadow-lg flex flex-col gap-4">
          <h3 className="text-white text-lg font-semibold">Direct contact</h3>
          <div className="space-y-2 text-sm">
            <p className="text-gray-200">
              Phone:{" "}
              <Link
                href={`tel:${phone}`}
                className="text-sky-400 hover:text-sky-200"
              >
                {phone}
              </Link>
            </p>
            <p className="text-gray-200">
              Email:{" "}
              <Link
                href={`mailto:${email}`}
                className="text-sky-400 hover:text-sky-200"
              >
                {email}
              </Link>
            </p>
            <p className="text-gray-400">
              Based in Accra, available for remote-first roles and freelance engagements.
            </p>
          </div>
        </div>

        <div className="border border-[#2a2442] bg-[#0f0c1c] rounded-2xl p-6 shadow-lg flex flex-col gap-3">
          <h3 className="text-white text-lg font-semibold">Need a quick response?</h3>
          <p className="text-sm text-gray-200">
            Send a brief summary of the project, timeline, and any links or design files. I usually reply within one business day.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href={`mailto:${email}?subject=Project%20Inquiry&body=Hi%20Phinehas,%20let's%20talk%20about...`}
              className="text-sm border border-sky-600 text-sky-200 px-4 py-2 rounded-md hover:bg-sky-600/10"
            >
              Email now
            </Link>
            <Link
              href={`tel:${phone}`}
              className="text-sm border border-gray-600 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-600/10"
            >
              Call now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
