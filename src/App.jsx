import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import AddPosts from "./components/AddPosts";

const App = () => {
  let [toggle, setToggle] = useState(true);
  let [post, setPosts] = useState([]);
  let [editPost, setEditPost] = useState(null);

  //delete code
  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  //handling edit code
  const handleEdit = (item) => {
    setEditPost(item);
    setToggle(true);
  };

  const handleUpdate = (data) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === editPost.id ? { ...p, ...data } : p)),
    );
    setEditPost(null);
    setToggle(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <Navbar setToggle={setToggle} toggle={toggle} />

        {toggle ? (
          <AddPosts
            setPosts={setPosts}
            setToggle={setToggle}
            editPost={editPost}
            handleUpdate={handleUpdate}
          />
        ) : (
          <div className="h-[90%] grid grid-cols-[1fr_1fr] ">
            {post.map((elem) => {
              return (
                <Posts
                  post={elem}
                  key={elem.id}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
