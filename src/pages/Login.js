import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import httpRequest from "../httpRequest";

function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleInputChange = (event, name) => {
    setUserData({
      ...userData,
      [name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const kinveyAppKey = "kid_r1LtOgra6";

    if (userData) {
      try {
        const response = await httpRequest(
          "POST",
          `user/${kinveyAppKey}/login`,
          userData
        );

        sessionStorage.setItem("userData", JSON.stringify(response));

        navigate("/dashboard");
      } catch (error) {
        console.error("Login failed:", error.response);
      }
    }
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form
              onSubmit={handleLogin}
              className='space-y-4 md:space-y-6'
              action='#'>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your Name
                </label>
                <input
                  type='text'
                  value={userData.username}
                  onChange={(e) => handleInputChange(e, "username")}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                />
              </div>
              <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Password
                </label>
                <input
                  type='password'
                  value={userData.password}
                  onChange={(e) => handleInputChange(e, "password")}
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required=''
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                Sign in
              </button>

              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don’t have an account yet?{" "}
                <Link
                  to='/register'
                  className='font-medium text-blue-600 hover:underline dark:text-blue-500'>
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
