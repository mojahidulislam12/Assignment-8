"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    console.log(data);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Registration Successful");
    }
  };
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  };

  return (
    <div className="max-w-300 mx-auto min-h-[80vh] flex justify-center items-center ">
      <div className="p-4 w-100  rounded-xl bg-white">
        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <label className="label font-semibold text-xl text-black">
              Email
            </label>
            <input
              {...register("email", { required: "Email field is required" })}
              type="email"
              className="input w-full"
              placeholder="Enter your email..."
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label className="label font-semibold text-xl text-black">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "password field is required",
                })}
                type={isShowPassword ? "text" : "password"}
                className="input w-full"
                placeholder="Enter your password"
              />
              <span
                className="absolute right-2 top-4"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                <FaEye></FaEye>
              </span>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <span className="absolute right-2 top-4"></span>
            </div>

            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </fieldset>
        </form>
        <p className=" mt-4">
          Do not have an account?{" "}
          <Link
            className="font-bold text-red-500 border-b-2"
            href={`/register`}
          >
            Register
          </Link>
        </p>
        <div className="text-center mt-4">OR</div>
        <div className="flex gap-2">
          <button
            className="btn border-blue-500 text-blue-500  mt-1"
            onClick={handleGoogleSignin}
          >
            Login with Google
          </button>

          <button className="btn   mt-1" onClick={handleGitHubSignin}>
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
