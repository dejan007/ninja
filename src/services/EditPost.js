import axios from "axios";

const EditPost = async (id,data) => {
  await axios.put(`https://63590307c27556d289495329.mockapi.io/posts/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default EditPost;