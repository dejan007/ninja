import axios from 'axios';

const GetOnePost = async (id) => {
  const res = await axios.get(`https://63590307c27556d289495329.mockapi.io/posts/${id}`);
  return res;
}

export default GetOnePost;