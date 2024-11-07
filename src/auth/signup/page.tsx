// import React, { useState } from "react";
// import { FaUserLarge } from "react-icons/fa6";
// import { MdOutlineAlternateEmail } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { useNavigate } from "react-router-dom"; // Nhập useNavigate từ react-router-dom
// import { HiEye, HiEyeOff } from "react-icons/hi";

// const SignupPage: React.FC = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     setError("");
//     setSuccess("");

//     // Validation
//     if (
//       username.length < 1 ||
//       email.length < 1 ||
//       password.length < 6 ||
//       password !== confirmPassword
//     ) {
//       setError("Vui lòng kiểm tra các trường nhập.");
//       return;
//     }

//     const newUser = {
//       username,
//       email,
//       password,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });

//       if (!response.ok) {
//         throw new Error("Có lỗi xảy ra khi lưu dữ liệu.");
//       }

//       setSuccess("Đăng ký thành công! Chuyển hướng đến trang chính...");

//       setTimeout(() => {
//         navigate("/login");
//       }, 2000);
//     } catch (err) {
//       setError("Có lỗi xảy ra, vui lòng thử lại.");
//       console.error(err);
//     }
//   };

//   return (
//     <div
//       style={{ backgroundImage: "url(/signup.jpg)" }}
//       className="h-screen bg-no-repeat bg-cover flex items-center justify-center"
//     >
//       <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
//         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           Đăng ký
//         </h1>
//         {success && (
//           <p className="text-green-500 text-center mb-4">{success}</p>
//         )}
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           {/* Username */}
//           <div className="mb-4 flex flex-col">
//             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//               <div className="bg-gray-600 text-white flex items-center justify-center p-3">
//                 <FaUserLarge className="text-2xl" />
//               </div>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 className="block w-full px-3 py-3 focus:outline-none"
//                 placeholder="Nhập tên người dùng"
//                 autoComplete="username"
//               />
//             </div>
//           </div>
//           {/* Email */}

//           <div className="mb-4 flex flex-col">
//             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="block w-full p-3 border border-gray-300 rounded-md shadow-sm outline-none"
//                 placeholder="Nhập email"
//                 autoComplete="email" // Thêm thuộc tính autocomplete
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div className="mb-4 flex flex-col relative">
//             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//               <div className="bg-indigo-600 text-white flex items-center justify-center p-3">
//                 <RiLockPasswordFill className="text-2xl" />
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"} // Hiển thị/ẩn mật khẩu
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="block w-full p-3 border border-gray-300 rounded-md shadow-sm outline-none"
//                 placeholder="Nhập mật khẩu"
//                 autoComplete="new-password" // Thêm thuộc tính autocomplete
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)} // Chuyển đổi trạng thái hiển thị mật khẩu
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"
//               >
//                 {showPassword ? <HiEyeOff /> : <HiEye />} {/* Hiển thị icon */}
//               </button>
//             </div>
//           </div>

//           {/* Confirm Password Field */}
//           <div className="mb-4 flex flex-col relative">
//             {" "}
//             {/* Thêm class relative */}
//             <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//               <div className="bg-indigo-600 text-white flex items-center justify-center p-3">
//                 <RiLockPasswordFill className="text-2xl" />
//               </div>
//               <input
//                 type={showConfirmPassword ? "text" : "password"} // Hiển thị/ẩn mật khẩu xác nhận
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="block w-full p-3 border border-gray-300 rounded-md shadow-sm outline-none"
//                 placeholder="Nhập lại mật khẩu"
//                 autoComplete="new-password" // Thêm thuộc tính autocomplete
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Chuyển đổi trạng thái hiển thị mật khẩu xác nhận
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"
//               >
//                 {showConfirmPassword ? <HiEyeOff /> : <HiEye />}{" "}
//                 {/* Hiển thị icon */}
//               </button>
//             </div>
//           </div>

//           <div className="mb-4">
//             <p className="text-sm text-gray-500">
//               Bạn đã có tài khoản?
//               <a
//                 href="/login"
//                 className="text-indigo-600 hover:text-indigo-700 transition duration-300"
//               >
//                 Đăng nhập
//               </a>
//             </p>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
//           >
//             Đăng ký
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;

// ===================================================

import React, { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    // Validation
    if (!validateEmail(email)) {
      setError("Email không đúng định dạng.");
      return;
    }

    if (password.length <= 6) {
      setError("Mật khẩu phải dài hơn 6 ký tự.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    const newUser = {
      username, // có thể bỏ trống
      email,
      password,
    };
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const responseData = await response.json(); // Lấy phản hồi từ server

      console.log("Status code:", response.status); // Log mã phản hồi HTTP
      console.log("Response data:", responseData); // Log nội dung phản hồi

      if (!response.ok) {
        // Kiểm tra thông báo lỗi từ server
        if (responseData.message === "Email already exists") {
          setError("Email đã tồn tại. Vui lòng sử dụng email khác.");
        } else {
          throw new Error(
            `Server Error: ${response.status} - ${
              responseData.message || "Unknown error"
            }`
          );
        }
        return;
      }

      setSuccess("Đăng ký thành công! Đang chuyển hướng ...");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError("Có lỗi xảy ra, vui lòng thử lại.");
      console.error("Catch Error:", err); // Log lỗi rõ ràng hơn
    }
  };

  return (
    <div
      style={{ backgroundImage: "url(/bannerabout.jpg)" }}
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center"
    >
      {/* <img src="" alt="" /> */}
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Đăng ký
        </h1>
        {success && (
          <p className="text-green-500 text-center mb-4">{success}</p>
        )}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4 flex flex-col">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              {/* <div className="bg-gray-600 text-white flex items-center justify-center p-3">
                <FaUserLarge className="text-2xl" />
              </div> */}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-3 py-3 focus:outline-none"
                placeholder="Nhập tên người dùng (không bắt buộc)"
                autoComplete="username"
              />
            </div>
          </div>
          {/* Email */}
          <div className="mb-4 flex flex-col">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm outline-none"
                placeholder="Nhập email"
                autoComplete="email"
              />
            </div>
          </div>
          {/* Password */}
          <div className="mb-4 flex flex-col relative">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm outline-none"
                placeholder="Nhập mật khẩu"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div className="mb-4 flex flex-col relative">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm outline-none"
                placeholder="Nhập lại mật khẩu"
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-gray-600"
              >
                {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-slate-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
