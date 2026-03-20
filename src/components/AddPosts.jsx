import React from "react";
import { useForm } from "react-hook-form";

const AddPosts = ({ setPosts, setToggle, editPost, handleUpdate }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: editPost || {
      image: "",
      title: "",
      caption: "",
    },
  });
  let handleFormSubmit = (data) => {
    if (editPost) {
      handleUpdate(data);
    } else {
      setPosts((prev) => [...prev, { ...data, id: Date.now() }]);
      setToggle(false);
    }

    reset();
  };
  return (
    <div className="h-[90%] flex items-center justify-center flex-col gap-10">
      <h1 className="text-xl font-semibold mb-4">
        {editPost ? "Edit Post" : "Add a post"}
      </h1>
      <form
        key={editPost ? editPost.id : "create"}
        onSubmit={handleSubmit(handleFormSubmit)}
        action=""
        className="flex flex-col border-2  border-black rounded-xl p-4 gap-6 w-[60%]"
      >
        <input
          {...register("id", { required: "id is required" })}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="post-id"
        />
        {errors.id && <p className="text-red-600">{errors.id.message}</p>}

        <input
          {...register("image", { required: "image link is required" })}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Image link"
        />
        {errors.image && <p className="text-red-600">{errors.image.message}</p>}

        <input
          {...register("title", { required: "post title is required" })}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter title of post"
        />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}

        <textarea
          {...register("caption", { required: "post caption is required" })}
          className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="caption"
          maxLength={120}
        />
        {errors.caption && (
          <p className="text-red-600">{errors.caption.message}</p>
        )}

        <button
          className={`w-full py-2 rounded-lg text-white transition ${
            editPost
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {editPost ? "Update Post" : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default AddPosts;
