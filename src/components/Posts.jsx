import React from 'react'

const Posts = ({post, onDelete, onEdit}) => {
    return (
        <div className='mt-4'>
            <div className='w-64 h-fit rounded-xl text-white flex flex-col gap-3 bg-zinc-800 border p-3'>

                <img className='rounded-xl h-36 border self-center border-amber-400 mb-2 object-cover w-full' src={post.image} alt="" />

                <div className='w-full flex flex-col gap-1'>
                    <h1 className='font-bold text-3xl'>{post.title}</h1>
                    <p className='text-zinc-400 leading-none py-2'>{post.caption}</p>
                </div>


                <div className='flex gap-3 mt-3 w-full justify-between'>
                    <button onClick={() => onEdit(post)} className='w-[50%] px-4 py-1 border rounded-md bg-yellow-600 border-yellow-400 outline-none cursor-pointer'>Edit</button>
                   
                    <button  onClick={() => onDelete(post.id)} className='w-[50%] px-4 py-1 border rounded-md bg-red-600 border-red-600 outline-none cursor-pointer'>Remove</button>
                </div>

            </div>
        </div>
    )
}

export default Posts