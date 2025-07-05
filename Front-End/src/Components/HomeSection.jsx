import React from "react";
import CategoriesMenu from "./CategoriesMenu";
import Slider from "./Slider";

export default function HomeSection() {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        {/* Left side menu */}
        <CategoriesMenu />

        {/* Right side slider */}
        <div className="flex-1 mt-4 md:mt-0 md:ml-4">
          <Slider />
        </div>
      </div>
    </section>
  );
}
