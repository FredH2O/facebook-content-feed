import { Video, Image, Film } from "lucide-react";
import User from "./User";

const UserStatusIcons = [
  {
    icon: Video,
    title: "Live video",
  },
  {
    icon: Image,
    title: "Photo/video",
  },
  {
    icon: Film,
    title: "Reel",
  },
];

const CreatePost = () => {
  return (
    // main div
    <div className="flex flex-col justify-center items-center bg-zinc-800 max-w-xl m-auto mt-4 px-3 h-[125px] rounded-lg">
      {/* status */}
      <div className="flex px-2 w-full h-full justify-center items-center border-b border-zinc-600">
        <User className="w-10 rounded-3xl hover:bg-zinc-600 cursor-pointer" />
        <input
          type="text"
          className="bg-zinc-700 w-full hover:bg-zinc-600 cursor-pointer ml-2 rounded-3xl py-2 px-3 placeholder:text-zinc-400 placeholder:text-lg"
          placeholder="What's on your mind today?"
        />
      </div>
      {/* icons */}
      <div className="relative h-full flex justify-center items-center">
        <ul className="flex text-zinc-400 w-screen max-w-xl px-2">
          {UserStatusIcons.map((item, index) => (
            <li
              key={index}
              className="flex p-2 rounded-lg justify-center gap-1 hover:bg-zinc-600 w-full cursor-pointer"
            >
              <item.icon
                className={`${
                  item.icon === Film
                    ? "text-rose-400"
                    : item.icon === Video
                    ? "text-red-400"
                    : item.icon === Image
                    ? "text-green-500"
                    : ""
                } text-2xl`}
              />
              <p className="font-semibold">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreatePost;
