import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import httpRequest from "../httpRequest";

function Dashboard() {
  //   const handleLogin = async (event) => {
  //     event.preventDefault();
  //     const kinveyAppKey = "kid_r1LtOgra6";

  //     if (userData) {
  //       try {
  //         const response = await httpRequest(
  //           "POST",
  //           `user/${kinveyAppKey}/login`,
  //           userData
  //         );

  //         sessionStorage.setItem("userData", JSON.stringify(response));

  //         navigate("/dashboard");
  //       } catch (error) {
  //         console.error("Login failed:", error.response);
  //       }
  //     }
  //   };

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <div className="relative overflow-x-auto sm:rounded-lg">
        <div className="flex items-center justify-end mb-3">
          <Link
            to="/books/create"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add book
          </Link>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4 text-right">
                <Link
                  to="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;
