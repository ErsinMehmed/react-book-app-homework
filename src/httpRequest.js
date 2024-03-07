import axios from "axios";

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_r1LtOgra6";
const kinveyAppSecret = "684328ab21ed479384907e70b6bfb81e";

const httpRequest = async (method, endpoint, data = null, authToken = "") => {
  let headers = {};

  if (authToken) {
    headers.Authorization = "Kinvey " + authToken;
  } else {
    headers.Authorization =
      "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret);
  }

  if (method.toUpperCase() !== "DELETE") {
    headers["Content-Type"] = "application/json";
  }

  try {
    const config = {
      method: method.toUpperCase(),
      url: `${kinveyBaseUrl}${endpoint}`,
      headers: headers,
      data: data ? JSON.stringify(data) : null,
    };

    const response = await axios(config);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export default httpRequest;
