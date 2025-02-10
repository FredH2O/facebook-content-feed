import ContentBody from "./components/ContentBody.jsx";
import CreatePost from "./components/CreatePost";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-zinc-900">
      <Header />
      <main className="container m-auto pb-1">
        <CreatePost />
        <ContentBody />
      </main>
    </div>
  );
}

export default App;
