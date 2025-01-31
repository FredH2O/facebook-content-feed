import CreatePost from "./components/CreatePost";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Header />
      <main>
        <CreatePost />
      </main>
    </div>
  );
}

export default App;
