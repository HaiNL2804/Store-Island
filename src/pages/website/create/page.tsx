import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductInput } from "../../types/product";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ProductInput> = async (data) => {
    try {
      await axios.post("http://localhost:3000/products", data);
      alert("Them thanh cong");
      navigate("/");
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Them SP</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mxauto bg-white shadow-md rounded-lg p-6"
        action=""
      >
        <div className="form-group mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Tên sản phẩm không được bỏ trống",
            })}
            className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Nhập tên sản phẩm"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 font-semibold mb-2"
          >
            Giá sản phẩm
          </label>
          <input
            type="text"
            id="price"
            {...register("price", {
              required: "Giá sản phẩm không được bỏ trống",
            })}
            className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Nhập tên sản phẩm"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold mb-2"
          >
            Mô tả sản phẩm
          </label>
          <input
            type="text"
            id="description"
            {...register("description", {
              required: "Mô tả sản phẩm không được bỏ trống",
            })}
            className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Nhập tên sản phẩm"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 font-semibold mb-2"
          >
            Ảnh sản phẩm
          </label>
          <input
            type="text"
            id="image"
            {...register("image", {
              required: "Tên sản phẩm không được bỏ trống",
            })}
            className="w-full px-6 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Nhập tên sản phẩm"
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Them SP
        </button>
      </form>
    </div>
  );
}

export default Create;
