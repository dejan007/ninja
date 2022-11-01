import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetPosts from "../services/GetPosts";

 interface IPost {
    id: number;
    title: string;
    content: string;
}

const Posts = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState<[IPost]>();

    useEffect(() => {
        GetPosts().then((res) => {
            setPosts(res.data)
        })
    }, [])

    return (
        <>
            <div className="mt-5 mb-6 text-center w-full text-3xl uppercase text-blue-400 font-bold">All posts</div>
            <div
                className="text-[20px] h-[40px] cursor-pointer ml-4 uppercase border border-solid border-blue-400  w-[250px] rounded-md leading-[32px] pl-6 text-blue-400
         hover:bg-blue-400 hover:text-white"
                onClick={() => navigate('/create-post')}
            >
                Add new post <span className="text-[28px] ml-10"> + </span>
            </div>
            <div className="w-full flex flex-row gap-x-4 gap-y-2 flex-wrap p-4 ">
                {posts && posts.map((post) => (
                    <div key={post.id} className="w-64 h-72 border border-solid rounded-md border-gray-400 p-4 shadow-[0_2px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_14px_rgba(0,0,0,0.25)] relative">
                        <div className="text-xl mb-2 break-words">{post.title}</div>
                        <hr className="w-full mb-2" />
                        <div className="text-sm h-52 overflow-y-auto">{post.content}</div>
                        <div className="absolute right-4 top-5 text-blue-400 hover:text-blue-600 cursor-pointer" onClick={() => navigate(`/edit-post/${post.id}`, { state: { id: post.id } })}>Edit</div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Posts;