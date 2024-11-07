import { useEffect, useState } from "react";
import Product from "../../../interface/product";
import { instance } from "../../../config/configAxios";
import { Link, useNavigate } from "react-router-dom";

function ListProduct() {
  const [listPro, setListPro] = useState<Product[]>([]);
  const navigate = useNavigate();

  const getAllPro = async () => {
    try {
      const data = await instance.get("/products");
      if (data.data) {
        setListPro(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    getAllPro();
  }, []);

  const handleDelete = async (id: string | number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      try {
        await instance.delete(`/products/${id}`);
        alert("Xóa thành công");
        setListPro((prev) => prev.filter((item) => item.id !== id));
      } catch (error) {
        alert("Xóa thất bại: " + error);
      }
    }
  };

  const handleUpdate = (id: string | number) => {
    navigate(`/product/edit/${id}`);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <Link
        to={`add`}
        className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 mb-4 inline-block"
      >
        Thêm mới sản phẩm
      </Link>
      <table className="min-w-full text-center bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">Tên sản phẩm</th>
            <th className="py-2 px-4 border-b">Hình ảnh</th>
            <th className="py-2 px-4 border-b">Giá</th>
            <th className="py-2 px-4 border-b">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {listPro.map((product: Product, index) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[100px] object-cover"
                />
              </td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mr-2"
                >
                  Xóa
                </button>
                <Link
                  to={`edit/${product.id}`}
                  className="bg-green-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                >
                  Sửa
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListProduct;
