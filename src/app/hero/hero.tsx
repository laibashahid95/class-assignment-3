import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Hi, I'm Laiba Shahid
        </h1>

        {/* Hero Tagline */}
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white">
          A passionate Web Developer specializing in growing your business.
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <Link

            href="#projects"
            className="px-6 py-3 bg-red-900 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
