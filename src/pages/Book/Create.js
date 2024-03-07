import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import httpRequest from "../../httpRequest";
import Form from "../../components/CreateEditForm";

function Create() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    publisher: "",
    page_count: "",
  });
  const [error, setError] = useState("");

  const createBook = async (event) => {
    event.preventDefault();
    const kinveyAppKey = "kid_r1LtOgra6";
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const allFieldsFilled = Object.values(bookData).every(
      (field) => field !== ""
    );

    if (allFieldsFilled) {
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

        if (response) navigate("/dashboard?bookAdded=true");
      } catch (error) {
        console.error("error:", error.response);
      }
    } else {
      setError("Fill all fields");
    }
  };

  return (
    <Form
      title='Add a new book'
      data={bookData}
      error={error}
      submit={(event) => createBook(event)}
      setData={setBookData}
      buttonText='Add'
    />
  );
}

export default Create;
