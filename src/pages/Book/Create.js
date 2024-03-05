import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpRequest from "../../httpRequest";

function Create() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    description: "",
  });

  const handleInputChange = (event, name) => {
    setBookData({
      ...bookData,
      [name]: event.target.value,
    });
  };

  const createBook = async (event) => {
    event.preventDefault();
    const kinveyAppKey = "kid_r1LtOgra6";
    const userData = JSON.parse(sessionStorage.getItem("userData"));

    if (bookData) {
      const data = {
        ...bookData,
        _acl: userData._acl,
      };

      try {
        const response = await httpRequest(
          "POST",
          `appdata/${kinveyAppKey}/books`,
          data,
          userData._kmd.authtoken
        );
        // navigate("/dashboard");
      } catch (error) {
        console.error("error:", error.response);
      }
    }
  };

  return (
    <section className='bg-white min-h-screen w-full flex items-center justify-center'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16 shadow-md border border-gray-200 rounded-md'>
        <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>
          Add a new book
        </h2>

        <form onSubmit={createBook}>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='w-full'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Book name
              </label>
              <input
                type='text'
                value={bookData.name}
                onChange={(e) => handleInputChange(e, "name")}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Book name'
              />
            </div>

            <div className='w-full'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Author
              </label>

              <input
                type='text'
                value={bookData.author}
                onChange={(e) => handleInputChange(e, "author")}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Type book author'
              />
            </div>

            <div className='sm:col-span-2'>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Description
              </label>
              <textarea
                value={bookData.description}
                onChange={(e) => handleInputChange(e, "description")}
                rows='4'
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Your description here'></textarea>
            </div>
          </div>

          <button
            type='submit'
            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800'>
            Add book
          </button>
        </form>
      </div>
    </section>
  );
}

export default Create;
