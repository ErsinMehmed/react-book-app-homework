import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import httpRequest from "../../httpRequest";
import Form from "../../components/CreateEditForm";

function Create() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    publisher: "",
    page_count: "",
  });
  const [error, setError] = useState("");

  const editBook = async (event) => {
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
          "PUT",
          `appdata/${kinveyAppKey}/books/${id}`,
          data,
          userData._kmd.authtoken
        );

        if (response) navigate("/dashboard");
      } catch (error) {
        console.error("error:", error.response);
      }
    } else {
      setError("Fill all fields");
    }
  };

  useEffect(() => {
    if (id) {
      const fetchBookData = async () => {
        const kinveyAppKey = "kid_r1LtOgra6";
        const userData = JSON.parse(sessionStorage.getItem("userData"));

        try {
          const response = await httpRequest(
            "GET",
            `appdata/${kinveyAppKey}/books/${id}`,
            null,
            userData._kmd.authtoken
          );

          setBookData(response);
        } catch (error) {
          console.error("error:", error.response);
        }
      };

      fetchBookData();
    }
  }, [id]);

  return (
    <Form
      title="Edit book"
      data={bookData}
      error={error}
      submit={(event) => editBook(event)}
      setData={setBookData}
    />
  );
}

export default Create;
