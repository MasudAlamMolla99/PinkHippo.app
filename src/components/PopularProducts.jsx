import React from "react";
import ProductCard from "./ProductCard";

const PopularProducts = ({ title }) => {
  const products = [
    {
      name: "Fluffy Bear",
      price: 340,
      oldPrice: 400,
      description: "A cuddly bear provides children with comfort and joy.",
      inStock: true,
      discount: 15,
      img: "/images/bear-main.png",
      colors: [
        { src: "/images/bottle11.png", alt: "Fluffy Bear Pink" },
        { src: "/images/bottle2.png", alt: "Fluffy Bear Blue" },
        { src: "/images/bottle3.png", alt: "Fluffy Bear Yellow" },
      ],
    },
    {
      name: "Cuddly Bunny",
      price: 420,
      oldPrice: 480,
      description: "Soft and adorable bunny that every kid will love to hug.",
      inStock: true,
      discount: 12,
      img: "/images/bunny-main.png",
      colors: [
        { src: "/images/bottle2.png", alt: "Cuddly Bunny White" },
        { src: "/images/bunny2.png", alt: "Cuddly Bunny Gray" },
        { src: "/images/bunny3.png", alt: "Cuddly Bunny Pink" },
      ],
    },
    {
      name: "Toy Car Racer",
      price: 550,
      oldPrice: 650,
      description:
        "A high-speed mini racing car that keeps your child thrilled for hours.",
      inStock: true,
      discount: 15,
      img: "/images/car-main.png",
      colors: [
        { src: "/images/bottle3.png", alt: "Red Toy Car" },
        { src: "/images/car2.png", alt: "Blue Toy Car" },
        { src: "/images/car3.png", alt: "Yellow Toy Car" },
      ],
    },
    {
      name: "Building Blocks Set",
      price: 700,
      oldPrice: 850,
      description:
        "Colorful blocks that help kids learn creativity and problem-solving.",
      inStock: true,
      discount: 18,
      img: "/images/blocks-main.png",
      colors: [
        { src: "/images/juicer.png", alt: "Blocks Red" },
        { src: "/images/blocks2.png", alt: "Blocks Mixed" },
        { src: "/images/blocks3.png", alt: "Blocks Blue" },
      ],
    },
  ];

  return (
    <>
      <h1 className="text-3xl md:text-4xl grandstander-head    text-center font-bold mb-8 mt-10">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 mx-2">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </>
  );
};

export default PopularProducts;
