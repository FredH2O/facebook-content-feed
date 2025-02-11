import dummyPost from "../data/DummyPost.json";
import PostedContent from "./PostedContent/PostedContent";
import { usePosts } from "./PostContext.jsx";

const ContentBody = () => {
  const { posts } = usePosts();
  console.log(dummyPost);
  return (
    <section className="container m-auto">
      {posts.map((userId) => (
        <PostedContent
          avatar={userId.avatar}
          key={userId.id}
          name={userId.name}
          message={userId.message}
          img={userId.img}
          imgTitle={userId.imgTitle}
          shares={userId.shares}
          reaction={userId.reaction}
          followed={userId.followed}
          official={userId.official}
          comments={userId.comments}
        />
      ))}
    </section>
  );
};

export default ContentBody;
