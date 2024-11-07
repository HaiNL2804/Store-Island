import { useForm, SubmitHandler } from "react-hook-form";
import { instance } from "../../../config/configAxios";
import { useNavigate } from "react-router-dom";
import { ProductInput } from "../../../interface/product";

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInput>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ProductInput> = async (data) => {
    try {
      await instance.post(`/products`, data);
      alert("Thêm sản phẩm thành công!");
      navigate("/admin/product");
    } catch (error: any) {
      alert("Lỗi: " + (error.response?.data?.message || "Có lỗi xảy ra"));
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Thêm mới sản phẩm</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Tên sản phẩm */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Tên sản phẩm
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
              id="name"
              {...register("name", { required: "Tên sản phẩm là bắt buộc" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Giá sản phẩm */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Giá sản phẩm
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
              id="price"
              {...register("price", {
                required: "Giá sản phẩm là bắt buộc",
                min: 0,
                validate: (value) =>
                  (!isNaN(value) && value >= 0) ||
                  "Giá phải là số và lớn hơn 0",
              })}
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>

          {/* Hình ảnh sản phẩm */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Hình ảnh
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
              id="image"
              {...register("image", { required: "Hình ảnh là bắt buộc" })}
            />
            {errors.image && (
              <span className="text-red-500 text-sm">
                {errors.image.message}
              </span>
            )}
          </div>

          {/* Kích thước sản phẩm */}
          {/* <div className="mb-4">
            <label htmlFor="dimensions" className="block text-sm font-medium text-gray-700">
              Kích thước
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
              id="dimensions"
              {...register("dimensions", { required: "Kích thước là bắt buộc" })}
            />
            {errors.dimensions && <span className="text-red-500 text-sm">{errors.dimensions.message}</span>}
          </div> */}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Thêm sản phẩm
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
