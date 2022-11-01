import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePost from "../services/CreatePost";

const CreatePostForm = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        checkForm()
    }, [title, content])

    const onTitleChange = (e: any) => {
        setTitle(e.target.value)
    }

    const onContentChange = (e: any) => {
        setContent(e.target.value)
    }

    const checkForm = () => {
        if (content && title) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }
    const onSave = () => {
        CreatePost({ title: title, content: content }).then((res) => {
            navigate(`/edit-post/${res.data.id}`)
        })
    }

    return (
        <div className="w-full flex justify-center pt-[100px]">
            <div className="w-[500px] h-[550px] bg-[#eceeee] rounded-md p-4 relative">
            <div className="uppercase absolute left-3 -top-8 text-blue-400 hover:text-blue-600 cursor-pointer" onClick={()=>navigate('/')}>home</div>
                <div className="uppercase mb-4">Create a new post</div>
                <hr className="mb-4 w-full border-t border-solid border-white" />

                <div className='text-gray-500'>Title <span className="text-red-400">*</span></div>
                <input type="text" className="w-[50%] h-9 p-1 pl-2 outline-none mb-4 rounded-sm" placeholder="Enter post title" onChange={onTitleChange} />

                <div className='text-gray-500'>Content <span className="text-red-400">*</span></div>
                <textarea className="w-[80%] h-[300px] resize-none outline-none p-2 rounded-sm" placeholder="Enter post content" onChange={onContentChange} />

                <button
                    className={`w-[300px] h-10  text-white mt-4 rounded-md uppercase text-l  ${formValid ? 'bg-green-600 hover:bg-green-800' : 'bg-gray-400'}`}
                    disabled={!formValid}
                    onClick={onSave}>
                    Create
                </button>

            </div>
        </div>
    )
}

export default CreatePostForm;