import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import PostedContent from "./components/PostedContent/PostedContent";

function App() {
  return (
    <div className="bg-zinc-900">
      <Header />
      <main className="container m-auto">
        <CreatePost />
        <PostedContent />
      </main>
    </div>
  );
}

export default App;
