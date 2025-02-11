import { createContext, useState, useContext } from "react";
import dummyPost from "../data/DummyPost.json";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(dummyPost);

  const addNewPost = (newMessage) => {
    if (typeof newMessage !== "string") return;
    if (!newMessage.trim()) return;

    const newPost = {
      id: posts.length + 1,
      userId: 101,
      avatar: "../images/avatar-1.png",
      name: "You",
      official: true,
      time: 3,
      followed: true,
      message: newMessage,
      img: "../images/cafe-bianco-post.png",
      imgTitle: "Cafe Bianco",
      reaction: 0,
      shares: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <PostContext.Provider value={{ posts, addNewPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
