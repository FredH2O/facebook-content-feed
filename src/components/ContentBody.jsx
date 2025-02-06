import dummyPost from "../data/DummyPost.json";
import PostedContent from "./PostedContent/PostedContent";

const ContentBody = () => {
  console.log(dummyPost);
  return (
    <section className="container m-auto">
      {dummyPost.map((userId) => (
        <PostedContent
          key={userId.id}
          name={userId.name}
          message={userId.message}
          img={userId.img}
          imgTitle={userId.imgTitle}
          shares={userId.shares}
          reaction={userId.reaction}
          followed={userId.followed}
          official={userId.official}
        />
      ))}
    </section>
  );
};

export default ContentBody;
