import React from "react";

const Posts = ({ post, onDelete, onEdit }) => {
  return (
    <div className="mt-4">
      <div className="w-64 h-fit rounded-xl text-black flex flex-col gap-2 border p-3 mr-2">
        <img
          className="rounded-xl h-36 border self-center border-amber-400 mb-2 object-cover w-full"
          src={post.image}
          alt=""
        />

        <div className="w-full flex flex-col gap-1">
          <h1 className="text-lg font-semibold">{post.title}</h1>
          <p className="text-gray-600 mt-2">{post.caption}</p>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => onEdit(post)}
            className="text-blue-500 hover:underline"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(post.id)}
            className="text-red-500 hover:underlin"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
