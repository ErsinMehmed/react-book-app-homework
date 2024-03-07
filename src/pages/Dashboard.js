import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import httpRequest from "../httpRequest";

function Dashboard() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));

    const loadBooks = async () => {
      const kinveyAppKey = "kid_r1LtOgra6";

      try {
        const response = await httpRequest(
          "GET",
          `appdata/${kinveyAppKey}/books`,
          null,
          userData._kmd.authtoken
        );

        setBooks(response);
      } catch (error) {
        console.error(error.response);
      }
    };

    loadBooks();
  }, []);

  const logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const headerColumns = [
    "Book title",
    "Author",
    "Page count",
    "Publisher",
    "Description",
    "Action",
  ];

  const filteredBooks = books?.map(
    ({ _id, title, author, page_count, publisher, description }) => ({
      _id,
      title,
      author,
      page_count,
      publisher,
      description,
    })
  );

  return (
    <section className="w-full min-h-screen flex items-center justify-center ">
      <div className="relative overflow-x-auto sm:rounded-lg shadow-lg p-4 border">
        <div className="flex items-center justify-end mb-3">
          <Link
            to="books/create"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none font-semibold"
          >
            Add book
          </Link>

          <button
            onClick={logout}
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none font-semibold"
          >
            Logout
          </button>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headerColumns.map((text, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                  {book.title}
                </th>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.page_count}</td>
                <td className="px-6 py-4">{book.publisher}</td>
                <td className="px-6 py-4">{book.description}</td>
                <td className="px-6 py-4 text-right space-x-2.5">
                  <Link
                    to={`books/${book._id}/edit`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>

                  <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Dashboard;
