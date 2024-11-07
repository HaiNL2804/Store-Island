import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="relative">
        <img
          className="w-full h-96 object-cover"
          src="/banner.webp"
          alt="Banner"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
          <h2 className="text-2xl font-semibold mb-2 uppercase tracking-wide text-center">
            STONE ISLAND | NEW BALANCE MADE IN UK 991V2 GHOST
          </h2>
          <p className="max-w-xl text-center text-sm mb-4">
            The new design, which draws from camouflage-inspired Stone Island
            Ghost pieces and features premium materials in the line’s signature
            monochromatic palette, is now available to registered users who
            signed up for the sale before 10 am CET on September 20.
          </p>
          <Link
            to="/"
            className="bg-white text-black py-2 px-6 hover:bg-gray-300 transition duration-300 font-semibold rounded-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <section>
        {/* Top */}
        <div className="w-[1280px] flex justify-between items-center px-1 mb-4 mx-auto mt-16 mb-8">
          <h2 className="text-40px text-[#262626] font-semibold">
            New Products
          </h2>
          <Link
            to="/product_detail"
            className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04]  hover:text-white"
          >
            View all products
          </Link>
        </div>

        {/* Products - Sử dụng Grid để chia thành 4 cột */}
        <div className="w-[1280px] grid grid-cols-4 gap-4 mx-auto mb-16">
          {products.map((product, index) => (
            <div key={index} className="ml-1 h-full">
              <Link to={`/products/${product.id}`}>
                <img
                  className="h-[350px] w-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
                <h3 className="font-semibold text-xl pb-1">
                  <Link to={"/products/" + product.id}>{product.name}</Link>
                </h3>
                <p className="text-[#EF4444] font-semibold text-xl pb-3">
                  {product.price}.00$
                </p>
                <button className="border border-[#CA8A04] py-2 w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:text-white">
                  <Link to="/cart">Add to cart</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*  */}
      <section>
        {/* Top */}
        <div className="max-w-[1280px] flex justify-between items-center px-1 mb-8 mx-auto">
          <h2 className="text-40px text-[#262626] font-semibold">Gallery</h2>
          <a>
            <Link
              to="/product_detail"
              className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-80 hover:text-white"
            >
              View all gallery
            </Link>
          </a>
        </div>
        {/* Gallery product */}
        <div className="max-w-[1280px] grid grid-cols-3 gap-4 mx-auto mb-16">
          <div>
            <img className="w-[380px] h-[400px]" src="./login.webp" alt="" />
          </div>
          <div>
            <img className="w-[380px] h-[400px]" src="./aogio.jfif" alt="" />
          </div>
          <div>
            <img
              className="w-[380px] h-[400px]"
              src="/aokhoacdong.jpg"
              alt=""
            />
          </div>
          <div>
            <img className="w-[380px] h-[400px]" src="/aolen.jpg" alt="" />
          </div>
          <div>
            <img className="w-[380px] h-[400px]" src="/quannau.avif" alt="" />
          </div>
          <div>
            <img
              className="w-[380px] h-[400px]"
              src="/sg-11134201-23030-9cuzr8aek5nv30.jfif"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        {/* Top */}
        <div className="max-w-[1280px] h-auto flex justify-between items-center px-1 mb-4 mx-auto">
          <h2 className="text-40px text-[#262626] font-semibold">News</h2>
          <a>
            <Link
              to="/product_detail"
              className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-80 hover:text-white"
            >
              View all news
            </Link>
          </a>
        </div>
        {/* News product */}
        <div className="w-[1280px] flex justify-between mx-auto mb-16">
          <div className="ml-1 max-h-[340px] max-w-[300px]">
            {/* image */}
            <div className="h-[200px] w-[300px]">
              <img
                className="h-[200px] w-[300px] object-cover "
                src="/aogio.jfif"
                alt=""
              />
            </div>
            {/* news-info */}
            <div>
              <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
                <MdOutlineCalendarMonth />
                <span className="text-12px pl-1">March 23, 2022</span>
              </div>
              <h3 className="font-semibold text-xl pt-1 pb-3">
                <Link to="/product_detail">
                  "Style Meets Comfort at Island – Your Perfect Wardrobe
                  Awaits!"
                </Link>
              </h3>
              <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
                <Link to="/product_detail">Xem chi tiết</Link>
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
          <div className="ml-1 max-h-[340px] max-w-[300px]">
            {/* image */}
            <div className="h-[200px] w-[300px]">
              <img
                className="h-[200px] w-[300px] object-cover "
                src="/aogio.jfif"
                alt=""
              />
            </div>
            {/* news-info */}
            <div>
              <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
                <MdOutlineCalendarMonth />
                <span className="text-12px pl-1">March 23, 2022</span>
              </div>
              <h3 className="font-semibold text-xl pt-1 pb-3">
                <Link to="/product_detail">
                  "Style Meets Comfort at Island – Your Perfect Wardrobe
                  Awaits!"
                </Link>
              </h3>
              <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
                <Link to="/product_detail">Xem chi tiết</Link>
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
          <div className="ml-1 max-h-[340px] max-w-[300px]">
            {/* image */}
            <div className="h-[200px] w-[300px]">
              <img
                className="h-[200px] w-[300px] object-cover "
                src="/aogio.jfif"
                alt=""
              />
            </div>
            {/* news-info */}
            <div>
              <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
                <MdOutlineCalendarMonth />
                <span className="text-12px pl-1">March 23, 2022</span>
              </div>
              <h3 className="font-semibold text-xl pt-1 pb-3">
                <Link to="/product_detail">
                  "Style Meets Comfort at Island – Your Perfect Wardrobe
                  Awaits!"
                </Link>
              </h3>
              <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
                <Link to="/product_detail">Xem chi tiết</Link>
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
          <div className="ml-1 max-h-[340px] max-w-[300px]">
            {/* image */}
            <div className="h-[200px] w-[300px]">
              <img
                className="h-[200px] w-[300px] object-cover "
                src="/aogio.jfif"
                alt=""
              />
            </div>
            {/* news-info */}
            <div>
              <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
                <MdOutlineCalendarMonth />
                <span className="text-12px pl-1">March 23, 2022</span>
              </div>
              <h3 className="font-semibold text-xl pt-1 pb-3">
                <Link to="/product_detail">
                  "Style Meets Comfort at Island – Your Perfect Wardrobe
                  Awaits!"
                </Link>
              </h3>
              <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
                <Link to="/product_detail">Xem chi tiết</Link>
                <span className="ml-2">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="bg-[#FFF7ED] mt-16  h-[180px]">
        <div className="max-w-[1280px] h-auto flex justify-between items-center mx-auto pt-16 pb-60px">
          <div className="flex items-center">
            <div>
              <img src="/cup.svg" alt="" />
            </div>
            <div className="ml-4">
              <h3 className="mb-1 text-xl font-semibold text-[#171717]">
                High Quality
              </h3>
              <p className="text-base text-[#898989]">
                Crafted from top materials
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/vector.svg" alt="" />
            </div>
            <div className="ml-4">
              <h3 className="mb-1 text-xl font-semibold text-[#171717]">
                24 / 7 Support
              </h3>
              <p className="text-base text-[#898989]">Dedicated support</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="tich.svg" alt="" />
            </div>
            <div className="ml-4">
              <h3 className="mb-1 text-xl font-semibold text-[#171717]">
                Warranty Protection
              </h3>
              <p className="text-base text-[#898989]">Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/free.svg" alt="" />
            </div>
            <div className="ml-4">
              <h3 className="mb-1 text-xl font-semibold text-[#171717]">
                Free Shipping
              </h3>
              <p className="text-base text-[#898989]">Order over 150 $</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Product } from "../types/Product";
// import { Link } from "react-router-dom";
// import { MdOutlineCalendarMonth } from "react-icons/md";
// import { FaArrowRightLong } from "react-icons/fa6";

// function Homepage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   const getProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3000/products");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
//     <div className="font-sans bg-gray-100 min-h-screen">
//       <div className="relative">
//         <img
//           className="w-full h-96 object-cover"
//           src="/banner.webp"
//           alt="Banner"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
//           <h2 className="text-2xl font-semibold mb-2 uppercase tracking-wide text-center">
//             STONE ISLAND | NEW BALANCE MADE IN UK 991V2 GHOST
//           </h2>
//           <p className="max-w-xl text-center text-sm mb-4">
//             The new design, which draws from camouflage-inspired Stone Island
//             Ghost pieces and features premium materials in the line’s signature
//             monochromatic palette, is now available to registered users who
//             signed up for the sale before 10 am CET on September 20.
//           </p>
//           <Link
//             to="/"
//             className="bg-white text-black py-2 px-6 hover:bg-gray-300 transition duration-300 font-semibold rounded-lg"
//           >
//             Shop Now
//           </Link>
//         </div>
//       </div>

//       <section>
//         {/* Top */}
//         <div className="w-[1280px] flex justify-between items-center px-1 mb-4 mx-auto mt-16 mb-8">
//           <h2 className="text-40px text-[#262626] font-semibold">
//             New Products
//           </h2>
//           {/* <h1 className="">ahihi</h1> */}
//           <a>
//             <Link
//               to="/product_detail"
//               className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04]  hover:text-white"
//             >
//               View all products
//             </Link>
//           </a>
//         </div>
//         {/* Products */}
//         <div className="w-[1280px] flex justify-between mx-auto mb-16">
//           {products.map((products, index) => (
//             <div className="ml-1 h-full ">
//               {/* image */}
//               {/* <a href={"/products/" + product.id}>
//                 <img src="/product.svg" alt="" />
//               </a> */}
//               <Link to={`/products/${products.id}`}>
//                 <img
//                   className="h-[350px] w-[300px]"
//                   src={products.image}
//                   alt=""
//                 />
//               </Link>
//               {/* product-info */}
//               <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
//                 <h3 className="font-semibold text-xl pb-1">
//                   <Link to={`/products/${products.id}`}>{products.name}</Link>
//                 </h3>
//                 {/* <h5 className="text-base text-[#898989] pb-2">
//                   {products.description}
//                 </h5> */}
//                 <p className="text-[#EF4444] font-semibold text-xl pb-3">
//                   {products.price}.00$
//                 </p>
//                 <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
//                   <Link to="/cart">Add to cart</Link>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/*  */}
//       <section>
//         {/* Top */}
//         <div className="max-w-[1280px] flex justify-between items-center px-1 mb-8 mx-auto">
//           <h2 className="text-40px text-[#262626] font-semibold">Gallery</h2>
//           <a>
//             <Link
//               to="/product_detail"
//               className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-80 hover:text-white"
//             >
//               View all gallery
//             </Link>
//           </a>
//         </div>
//         {/* Gallery product */}
//         <div className="max-w-[1280px] grid grid-cols-3 gap-4 mx-auto mb-16">
//           <div>
//             <img className="w-[380px] h-[400px]" src="./login.webp" alt="" />
//           </div>
//           <div>
//             <img className="w-[380px] h-[400px]" src="./aogio.jfif" alt="" />
//           </div>
//           <div>
//             <img
//               className="w-[380px] h-[400px]"
//               src="/aokhoacdong.jpg"
//               alt=""
//             />
//           </div>
//           <div>
//             <img className="w-[380px] h-[400px]" src="/aolen.jpg" alt="" />
//           </div>
//           <div>
//             <img className="w-[380px] h-[400px]" src="/quannau.avif" alt="" />
//           </div>
//           <div>
//             <img
//               className="w-[380px] h-[400px]"
//               src="/sg-11134201-23030-9cuzr8aek5nv30.jfif"
//               alt=""
//             />
//           </div>
//         </div>
//       </section>
//       <section>
//         {/* Top */}
//         <div className="max-w-[1280px] h-auto flex justify-between items-center px-1 mb-4 mx-auto">
//           <h2 className="text-40px text-[#262626] font-semibold">News</h2>
//           <a>
//             <Link
//               to="/product_detail"
//               className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-80 hover:text-white"
//             >
//               View all news
//             </Link>
//           </a>
//         </div>
//         {/* News product */}
//         <div className="w-[1280px] flex justify-between mx-auto mb-16">
//           <div className="ml-1 max-h-[340px] max-w-[300px]">
//             {/* image */}
//             <div className="h-[200px] w-[300px]">
//               <img
//                 className="h-[200px] w-[300px] object-cover "
//                 src="/aogio.jfif"
//                 alt=""
//               />
//             </div>
//             {/* news-info */}
//             <div>
//               <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
//                 <MdOutlineCalendarMonth />
//                 <span className="text-12px pl-1">March 23, 2022</span>
//               </div>
//               <h3 className="font-semibold text-xl pt-1 pb-3">
//                 <Link to="/product_detail">
//                   "Style Meets Comfort at Island – Your Perfect Wardrobe
//                   Awaits!"
//                 </Link>
//               </h3>
//               <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
//                 <Link to="/product_detail">Xem chi tiết</Link>
//                 <span className="ml-2">
//                   <FaArrowRightLong />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="ml-1 max-h-[340px] max-w-[300px]">
//             {/* image */}
//             <div className="h-[200px] w-[300px]">
//               <img
//                 className="h-[200px] w-[300px] object-cover "
//                 src="/aogio.jfif"
//                 alt=""
//               />
//             </div>
//             {/* news-info */}
//             <div>
//               <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
//                 <MdOutlineCalendarMonth />
//                 <span className="text-12px pl-1">March 23, 2022</span>
//               </div>
//               <h3 className="font-semibold text-xl pt-1 pb-3">
//                 <Link to="/product_detail">
//                   "Style Meets Comfort at Island – Your Perfect Wardrobe
//                   Awaits!"
//                 </Link>
//               </h3>
//               <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
//                 <Link to="/product_detail">Xem chi tiết</Link>
//                 <span className="ml-2">
//                   <FaArrowRightLong />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="ml-1 max-h-[340px] max-w-[300px]">
//             {/* image */}
//             <div className="h-[200px] w-[300px]">
//               <img
//                 className="h-[200px] w-[300px] object-cover "
//                 src="/aogio.jfif"
//                 alt=""
//               />
//             </div>
//             {/* news-info */}
//             <div>
//               <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
//                 <MdOutlineCalendarMonth />
//                 <span className="text-12px pl-1">March 23, 2022</span>
//               </div>
//               <h3 className="font-semibold text-xl pt-1 pb-3">
//                 <Link to="/product_detail">
//                   "Style Meets Comfort at Island – Your Perfect Wardrobe
//                   Awaits!"
//                 </Link>
//               </h3>
//               <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
//                 <Link to="/product_detail">Xem chi tiết</Link>
//                 <span className="ml-2">
//                   <FaArrowRightLong />
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="ml-1 max-h-[340px] max-w-[300px]">
//             {/* image */}
//             <div className="h-[200px] w-[300px]">
//               <img
//                 className="h-[200px] w-[300px] object-cover "
//                 src="/aogio.jfif"
//                 alt=""
//               />
//             </div>
//             {/* news-info */}
//             <div>
//               <div className="flex items-center pt-4 text-[#9CA3AF] font-semibold  ">
//                 <MdOutlineCalendarMonth />
//                 <span className="text-12px pl-1">March 23, 2022</span>
//               </div>
//               <h3 className="font-semibold text-xl pt-1 pb-3">
//                 <Link to="/product_detail">
//                   "Style Meets Comfort at Island – Your Perfect Wardrobe
//                   Awaits!"
//                 </Link>
//               </h3>
//               <div className="flex items-center font-semibold text-base text-[#EF4444] hover:text-[#EF4444]">
//                 <Link to="/product_detail">Xem chi tiết</Link>
//                 <span className="ml-2">
//                   <FaArrowRightLong />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/*  */}
//       <section className="bg-[#FFF7ED] mt-16  h-[180px]">
//         <div className="max-w-[1280px] h-auto flex justify-between items-center mx-auto pt-16 pb-60px">
//           <div className="flex items-center">
//             <div>
//               <img src="/cup.svg" alt="" />
//             </div>
//             <div className="ml-4">
//               <h3 className="mb-1 text-xl font-semibold text-[#171717]">
//                 High Quality
//               </h3>
//               <p className="text-base text-[#898989]">
//                 Crafted from top materials
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div>
//               <img src="/vector.svg" alt="" />
//             </div>
//             <div className="ml-4">
//               <h3 className="mb-1 text-xl font-semibold text-[#171717]">
//                 24 / 7 Support
//               </h3>
//               <p className="text-base text-[#898989]">Dedicated support</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div>
//               <img src="tich.svg" alt="" />
//             </div>
//             <div className="ml-4">
//               <h3 className="mb-1 text-xl font-semibold text-[#171717]">
//                 Warranty Protection
//               </h3>
//               <p className="text-base text-[#898989]">Over 2 years</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <div>
//               <img src="/free.svg" alt="" />
//             </div>
//             <div className="ml-4">
//               <h3 className="mb-1 text-xl font-semibold text-[#171717]">
//                 Free Shipping
//               </h3>
//               <p className="text-base text-[#898989]">Order over 150 $</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Homepage;

// 000000000000000000000000000000000000000000000000000000

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Slider from "react-slick"; // Import thư viện react-slick
// import { Link } from "react-router-dom";
// import { Product } from "../types/Product";

// function Homepage() {
//   const [products, setProducts] = useState<Product[]>([]);

//   const getProducts = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3000/products");
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4, // Hiển thị 4 sản phẩm cùng lúc
//     slidesToScroll: 1,
//     arrows: true,
//   };

//   return (
//     <div className="font-sans bg-gray-100 min-h-screen">
//       <div className="relative">
//         <img
//           className="w-full h-96 object-cover"
//           src="/banner.webp"
//           alt="Banner"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
//           <h2 className="text-2xl font-semibold mb-2 uppercase tracking-wide text-center">
//             STONE ISLAND | NEW BALANCE MADE IN UK 991V2 GHOST
//           </h2>
//           <p className="max-w-xl text-center text-sm mb-4">
//             The new design, which draws from camouflage-inspired Stone Island
//             Ghost pieces and features premium materials in the line’s signature
//             monochromatic palette, is now available to registered users who
//             signed up for the sale before 10 am CET on September 20.
//           </p>
//           <Link
//             to="/"
//             className="bg-white text-black py-2 px-6 hover:bg-gray-300 transition duration-300 font-semibold rounded-lg"
//           >
//             Shop Now
//           </Link>
//         </div>
//       </div>

//       <section>
//         <div className="w-[1280px] flex justify-between items-center px-1 mb-8 mx-auto mt-16 mb-8">
//           <h2 className="text-40px text-[#262626] font-semibold">
//             New Products
//           </h2>
//           <Link
//             to="/product_detail"
//             className="text-[#CA8A04] px-4 py-2 border border-[#CA8A04] hover:bg-[#CA8A04]  hover:text-white"
//           >
//             View all products
//           </Link>
//         </div>

//         {/* Sử dụng Slider cho phần sản phẩm */}
//         <div className="w-[1280px] mx-auto mb-16">
//           <Slider {...sliderSettings}>
//             {products.map((product, index) => (
//               <div key={index} className="px-2">
//                 <Link to={`/products/${product.id}`}>
//                   <img
//                     className="h-[350px] w-[300px] object-cover"
//                     src={product.image}
//                     alt={product.name}
//                   />
//                 </Link>
//                 <div className="mt-4 px-4 pb-4 bg-[#F5F5F5]">
//                   <h3 className="font-semibold text-xl pb-1">
//                     <Link to={`/products/${product.id}`}>{product.name}</Link>
//                   </h3>
//                   <p className="text-[#EF4444] font-semibold text-xl pb-3">
//                     {product.price}.00$
//                   </p>
//                   <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:text-[#ffffff]">
//                     <Link to="/cart">Add to cart</Link>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Homepage;
