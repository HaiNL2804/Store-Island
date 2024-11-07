import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

function Products() {
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
    <div>
      <img className="w-full" src="/bannershop.svg" alt="" />
      <section>
        <div className="w-[1280px] mx-auto mt-16 flex">
          <div className="w-1/4 max-w-[20%]">
            <h2 className="font-semibold text-20px mb-8">Categories</h2>
            <ul>
              <li>
                <Link
                  className="block text-16px font-medium text-[#737373] hover:text-[#CA8A04] mb-4"
                  to="/"
                >
                  Cafe Chair
                </Link>
              </li>
              <li>
                <Link
                  className="block text-16px font-medium text-[#737373] hover:text-[#CA8A04] mb-4"
                  to="/"
                >
                  Sofa
                </Link>
              </li>
              <li>
                <Link
                  className="block text-16px font-medium text-[#737373] hover:text-[#CA8A04] mb-4"
                  to="/"
                >
                  Lamp
                </Link>
              </li>
              <li>
                <Link
                  className="block text-16px font-medium text-[#737373] hover:text-[#CA8A04] mb-4"
                  to="/"
                >
                  Carpet
                </Link>
              </li>
              <li>
                <Link
                  className="block text-16px font-medium text-[#737373] hover:text-[#CA8A04] my-4"
                  to="/"
                >
                  Cabinet
                </Link>
              </li>
              <li>
                <Link
                  className="text-16px font-medium text-[#737373] hover:text-[#CA8A04] my-2"
                  to="/"
                >
                  Tea table
                </Link>
              </li>
            </ul>
          </div>

          {/*  Tong */}
          <div className="w-[80%] flex flex-col">
            {/* prd1 */}
            <div className="flex justify-between">
              <div className="w-[296px] ml-1 mr-6">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="w-[296px] mr-6">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="w-[296px]">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* prd2 */}
            <div className="flex justify-between mt-16">
              <div className="w-[296px] ml-1 mr-6">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="w-[296px] mr-6">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="w-[296px]">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* prd3 */}
            <div className="flex justify-between mt-16">
              <div className="w-[296px] ml-1 mr-6">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="w-[296px] mr-6">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="w-[296px]">
                <img className="" src="/products.svg" alt="" />
                <div className="w-[264px] mx-4">
                  <h2 className="font-semibold text-20px text-xl pb-1">
                    Leviosa
                  </h2>
                  <h5 className="font-regular text-16px">
                    Stylish cafe chair{" "}
                  </h5>
                  <p className="text-[#EF4444] mb-2">1.800.000đ</p>
                  <button className="border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#fff]">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            {/* button  */}
            <div className="flex">
              <button className="bg-[#A3A3A3] rounded-10px w-[60px] h-[60px] mt-8 mr-4 hover:bg-[#CA8A04]">
                1
              </button>
              <button className="bg-[#A3A3A3] rounded-10px w-[60px] h-[60px] mt-8 mr-4 hover:bg-[#CA8A04]">
                2
              </button>
              <button className="bg-[#A3A3A3] rounded-10px w-[60px] h-[60px] mt-8 mr-4 hover:bg-[#CA8A04]">
                3
              </button>
              <button className="bg-[#A3A3A3] rounded-10px w-[98px] h-[60px] mt-8 hover:bg-[#CA8A04]">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* phan cuoi  */}
      <section className="bg-[#FFF7ED] mt-16">
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
export default Products;
