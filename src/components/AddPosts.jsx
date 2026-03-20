import React from 'react'
import { useForm } from 'react-hook-form'

const AddPosts = ({ setPosts, setToggle, editPost, handleUpdate }) => {
    let { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: editPost || {
            image: "",
            title: "",
            caption: ""
        }
    })
    let handleFormSubmit = (data) => {
        if (editPost) {
            handleUpdate(data)
        }
        else {
            setPosts(prev => [...prev, {...data,id:Date.now()}])
            setToggle(false)
        }


        reset();
    }
    return (
        <div className='h-[90%] flex items-center justify-center flex-col gap-10'>
            <h1 className='text-3xl font-bold'>
                {editPost ? "Edit Post" : "Add a post"}
            </h1>
            <form key={editPost? editPost.id : "create"} onSubmit={handleSubmit(handleFormSubmit)} action="" className='flex flex-col border-3  border-amber-600 rounded-xl p-4 gap-6 w-[30%]'>

                <input {...register("id", { required: "id is required" })} className='outline-0 p-4 border rounded-xl text-xl' type="text" placeholder='post-id' />
                {errors.id && <p className='text-red-600'>{errors.id.message}</p>}

                <input {...register("image", { required: "image link is required" })} className='outline-0 p-4 border rounded-xl text-xl' type="text" placeholder='Image link' />
                {errors.image && <p className='text-red-600'>{errors.image.message}</p>}

                <input {...register("title", { required: "post title is required" })} className='outline-0 p-4 border rounded-xl text-xl' type="text" placeholder='Enter title of post' />
                {errors.title && <p className='text-red-600'>{errors.title.message}</p>}

                <textarea {...register("caption", { required: "post caption is required" })} className='outline-0 p-4 border rounded-xl text-xl' type="text" placeholder='caption' maxLength={120} />
                {errors.caption && <p className='text-red-600'>{errors.caption.message}</p>}


                <button className='font-semibold bg-blue-600 text-white py-4 rounded-xl cursor-pointer text-xl'>
                    {editPost ? "Update Post" : "Add Post"}
                </button>
            </form>
        </div>
    )
}

export default AddPosts