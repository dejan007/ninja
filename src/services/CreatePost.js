import axios from "axios";

const CreatePost = async (data) => {
 let res = await axios.post("https://63590307c27556d289495329.mockapi.io/posts", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export default CreatePost;