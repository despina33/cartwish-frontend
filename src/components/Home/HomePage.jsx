import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever."
        link="/product/6571b6b640aa98b3a95560b6"
        image={iphone}
      />

      <FeaturedProducts />

      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched Magic accesories to your bag after you configure your Mac mini."
        link="/product/6571b6b640aa98b3a95560be"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
