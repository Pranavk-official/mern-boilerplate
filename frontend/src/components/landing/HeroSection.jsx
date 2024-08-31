import React from "react";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Our Amazing Platform
          </h1>
          <p className="text-xl mb-8">
            Discover the power of our innovative solutions
          </p>
          <a
            href="#"
            className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
