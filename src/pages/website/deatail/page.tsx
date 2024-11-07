// import React from "react";

// const Detail = () => {
//   return <div>trang chi tiet</div>;
// };

// export default Detail;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../types/Product";
import { GoStarFill } from "react-icons/go";
function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>();
  const getDetail = async (id: string) => {
    try {
      const Response = await axios.get(`http://localhost:3000/products/${id}`);
      if (Response.status == 200) {
        setProduct(Response.data);
      }
      //console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!id) return;
    getDetail(id);
  }, [id]);
  return (
    <div>
      <div className=" w-[1280px] mx-auto mt-14">
        <div className="flex">
          <div className="flex">
            {/* <div className="flex flex-col gap-4 w-[77px] h-[77px] mr-30px">
              <img src="/Rectangle 308.svg" alt="" />
              <img src="/Rectangle 308.svg" alt="" />
              <img src="/Rectangle 308.svg" alt="" />
              <img src="/Rectangle 308.svg" alt="" />
            </div> */}

            {/* anh lon */}
            <div className="ml-4 w-[515px] h-[515px]">
              <img
                src={product?.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* chi tiiet */}
          <div className="ml-8">
            <h1 className="font-medium text-20px">{product?.name}</h1>
            <p className="text-[#EF4444] font-bold text-40px mt-4">
              {product?.price}.00$
            </p>
            {/* Đánh giá */}
            <div className="flex items-center mt-4">
              <div className="flex">
                <GoStarFill className="text-yellow-400" />
                <GoStarFill className="text-yellow-400" />
                <GoStarFill className="text-yellow-400" />
                <GoStarFill className="text-yellow-400" />
                <GoStarFill className="text-yellow-400" />
              </div>
              <p className="ml-2 text-[#9F9F9F]">(5 Customer Review)</p>
            </div>
            {/* mota sp */}
            <p className="mt-4 text-[#262626]">{product?.description}</p>
            {/* Size */}
            <div className="mt-4">
              <p className="font-regular text-[16px] text-[#A3A3A3]">Size</p>
              <div className="flex gap-2 mt-2">
                <button className="text-[#fff] bg-[#A3A3A3] hover:text-[#fff] hover:bg-[#CA8A04] hover:opacity-70 flex justify-center items-center rounded-sm w-[30px] h-[30px]">
                  L
                </button>
                <button className="text-[#fff] bg-[#A3A3A3] hover:text-[#fff] hover:bg-[#CA8A04] hover:opacity-70 flex justify-center items-center rounded-sm w-[30px] h-[30px]">
                  XL
                </button>
                <button className="text-[#fff] bg-[#A3A3A3] hover:text-[#fff] hover:bg-[#CA8A04] hover:opacity-70 flex justify-center items-center rounded-sm w-[30px] h-[30px]">
                  XS
                </button>
              </div>
            </div>
            {/* màu sắc */}
            <div className="mt-4">
              <p className="font-regular text-[16px] text-[#A3A3A3]">Color</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-[#816DFA] w-[30px] h-[30px] rounded-full"></button>
                <button className="bg-[#000000] w-[30px] h-[30px] rounded-full"></button>
                <button className="bg-[#B88E2F] w-[30px] h-[30px] rounded-full"></button>
              </div>
            </div>
            {/* button */}
            <div className="flex my-8 gap-4 ">
              <div className="flex justify-center items-center border border-[#A3A3A3] w-[123px] h-[44px] rounded-md">
                <button className="bg-[#fff]">-</button>
                <div className="mx-6">1</div>
                <button className="bg-[#fff]">+</button>
              </div>
              <button>
                <div className="flex justify-center items-center font-regular text-[16px] rounded-md text-[#CA8A04] border border-[#CA8A04] hover:bg-[#CA8A04] hover:text-[#fff] w-[215px] h-[44px]">
                  <Link to="/cart">Add to cart</Link>
                </div>
              </button>
              <div className="flex justify-center items-center font-regular text-[16px] rounded-md text-[#262626] border border-[#262626] w-[215px] h-[44px]">
                + Compare
              </div>
            </div>
            <hr />
            <div className="font-regular text-[16px] text-[#A3A3A3] my-4">
              <ul>
                <li>SKU : SS001</li>
                <li>Category: Sofa</li>
                <li>Tags: Sofa, Chair, Home, Shop</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Des Add Review */}
        <div className="my-20">
          <ul className="flex font-semibold text-[20px] gap-40 text-[#A3A3A3] mb-4">
            <a className="hover:text-[#000000]" href="">
              <li>Description</li>
            </a>
            <a className="hover:text-[#000000]" href="">
              <li>Additional</li>
            </a>
            <a className="hover:text-[#000000]" href="">
              <li>Review [5]</li>
            </a>
          </ul>
          <hr />
          <div className="text-[16px] font-medium text-[#A3A3A3]">
            <p className="my-2 mt-8">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
        </div>
        {/* gallery */}
        <div className=" max-w-[1280px] grid grid-cols-2 gap-8 mx-auto">
          <img className="w-full h-full" src="/aokhoacdong.jpg" alt="" />
          <img className="w-full h-full" src="/aogio.jfif" alt="" />
        </div>
      </div>
      {/* related */}
      <section>
        {/* Top */}
        <div className="w-[1280px] flex justify-center items-center px-1 mb-4 mx-auto mt-16 mb-8">
          <h2 className="text-100px text-[#262626] font-semibold">
            Related Products
          </h2>
        </div>
        {/* Products */}
        <div className="w-[1280px] flex justify-between mx-auto mb-16">
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/product_detail">
              <img className="h-[280px] w-[300px]" src="/aogio.jfif" alt="" />
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              <h5 className="text-base text-[#898989] pb-2">
                <Link to="/product_detail">Stylish cafe chair</Link>
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/product_detail">
              <img className="h-[280px] w-[300px]" src="/aogio.jfif" alt="" />
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              <h5 className="text-base text-[#898989] pb-2">
                <Link to="/product_detail">Stylish cafe chair</Link>
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/product_detail">
              <img
                className="h-[280px] w-[300px]"
                src="/aokhoacdong.jpg"
                alt=""
              />
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              <h5 className="text-base text-[#898989] pb-2">
                <Link to="/product_detail">Stylish cafe chair</Link>
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
          </div>
          <div className="ml-1 h-full ">
            {/* image */}
            <Link to="/product_detail">
              <img
                className="h-[280px] w-[300px]"
                src="/aokhoacdong.jpg"
                alt=""
              />
            </Link>
            {/* product-info */}
            <div className="mt-4 px-4 pb-4  bg-[#F5F5F5]">
              <h3 className="font-semibold text-xl pb-1">Syltherine</h3>
              <h5 className="text-base text-[#898989] pb-2">
                <Link to="/product_detail">Stylish cafe chair</Link>
              </h5>
              <p className="text-[#EF4444] font-semibold text-xl pb-3">
                2.500.000đ
              </p>
              <button className=" border border-[#CA8A04] py-2 px-22px w-full text-[#CA8A04] hover:bg-[#CA8A04] hover:opacity-70 hover:text-[#ffffff]">
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Detail;
