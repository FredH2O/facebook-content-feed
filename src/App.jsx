import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import PostedContent from "./components/PostedContent/PostedContent";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Header />
      <main className="container m-auto border">
        <CreatePost />
        <PostedContent />
      </main>
    </div>
  );
}

export default App;
