import { Link } from "react-router-dom";

function HeaderAdmin() {
  return (
    <nav className="h-screen sticky top-0 bg-gray-800 border-b border-gray-700 flex flex-col p-2">
      <div className="container mx-auto flex flex-col">
        <Link className="text-white text-lg font-bold" to="/admin">
          <img src="/logo.png" alt="" className="w-[100px] ml-20" />
        </Link>
        <div className="flex flex-col">
          <form className="flex mb-4" role="search">
            <input
              className="form-control border border-gray-300 rounded-md p-2 mr-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="flex flex-col">
            <li className="mb-2">
              <Link
                className="text-white hover:bg-gray-700 p-2 rounded font-bold ml-2"
                aria-current="page"
                to="/admin"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:bg-gray-700 p-2 rounded font-bold ml-2"
                to="/admin/product"
              >
                Quản lý sản phẩm
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-white hover:bg-gray-700 p-2 rounded font-bold ml-2"
                to="/admin/user"
              >
                Quản lý user
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
