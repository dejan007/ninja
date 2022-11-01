import axios from 'axios';

const GetPosts = async () => {
  const res = await axios.get("https://63590307c27556d289495329.mockapi.io/posts");
  return res;
}

export default GetPosts;