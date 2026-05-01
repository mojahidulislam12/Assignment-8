"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = async (data) => {
    const { name, email, photo, password } = data;
  };

  return (
    <div className="max-w-300 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 w-100  rounded-xl bg-white">
        <form className="space-y-2" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <label className="label font-semibold text-xl text-black">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              className="input w-full"
              placeholder="Enter your email..."
            />
            <label className="label font-semibold text-xl text-black">
              PhotoURL
            </label>
            <input
              {...register("photo")}
              type="text"
              className="input w-full"
              placeholder="Enter your email..."
            />
            <label className="label font-semibold text-xl text-black">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="input w-full"
              placeholder="Enter your email..."
            />
            <label className="label font-semibold text-xl text-black">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: "password field is required",
                })}
                type="text"
                className="input w-full"
                placeholder="Enter your password"
              />
              <span className="absolute right-2 top-4"></span>
            </div>

            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </fieldset>
        </form>
        <p className="mt-1">
          Have an account?{" "}
          <Link className="font-bold text-red-500 border-b-2" href={`/login`}>
            Login
          </Link>
        </p>
        <div className="text-center mt-1">OR</div>
        <div className="flex gap-2">
          <button className="btn border-blue-500 text-blue-500  mt-1">
            Login with Google
          </button>

          <button className="btn mt-1">Login with GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
