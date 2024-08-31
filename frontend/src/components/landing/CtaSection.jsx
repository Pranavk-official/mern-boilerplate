import React from "react";

function CtaSection() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">
          Join thousands of satisfied customers today.
        </p>
        <a
          href="#"
          className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Sign Up Now
        </a>
      </div>
    </section>
  );
}

export default CtaSection;
