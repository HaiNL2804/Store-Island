import React, { useEffect, useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<{ email: string; password: string }> = async (
    data
  ) => {
    try {
      const response = await axios.post("http://localhost:3000/signin", data);
      alert("Đăng nhập thành công!");
      localStorage.setItem("token", response.data.accessToken);
      navigate("/admin");
    } catch (error) {
      alert(
        "Thông tin tài khoản không đúng" + " \n" + "Vui lòng nhập lại thông tin"
      );
    }
  };

  return (
    <div
      style={{ backgroundImage: "url(/login.webp)" }}
      className="h-screen bg-no-repeat bg-cover flex items-center justify-center"
    >
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Đăng nhập
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4 flex flex-col">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="email"
                {...register("email", {
                  required: "Email không được để trống.",
                })}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm outline-none"
                placeholder="Nhập email"
                autoComplete="email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4 flex flex-col relative">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Mật khẩu không được để trống.",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu phải có ít nhất 6 ký tự.",
                  },
                })}
                className="block w-full p-3 border border-gray-300 rounded-md shadow-sm outline-none pr-10"
                placeholder="Nhập mật khẩu"
                autoComplete="new-password"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <HiEyeOff className="text-2xl text-gray-600" />
                ) : (
                  <HiEye className="text-2xl text-gray-600" />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500">
              Bạn chưa có tài khoản?{" "}
              <a
                href="/signup"
                className="text-indigo-600 hover:text-indigo-700 transition duration-300"
              >
                Đăng ký
              </a>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-slate-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
