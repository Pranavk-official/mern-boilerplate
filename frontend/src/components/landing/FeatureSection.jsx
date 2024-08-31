import React from "react";

function FeaturesSection() {
  return (
    <section className="py-20 h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <p className="text-gray-600">
              Our intuitive interface makes it simple for anyone to get started.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Powerful Analytics</h3>
            <p className="text-gray-600">
              Gain valuable insights with our advanced analytics tools.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated team is always here to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
