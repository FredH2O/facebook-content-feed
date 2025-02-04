import {
  ThumbsUp,
  MessageCircle,
  Send,
  ExternalLink,
  BadgeCheck,
  Ellipsis,
  X,
  Earth,
} from "lucide-react";
import User from "../User";

const PostedContent = ({ user, message, photo }) => {
  return (
    <div className="max-w-xl justify-self-center text-zinc-200 mt-5">
      {/* user's details here */}
      <div className="grid grid-cols-[9fr_1fr] w-full items-center place-items-center border border-yellow-500">
        <div className="flex flex-row w-full border border-red-500 justify-self-start">
          <div className="flex items-center px-2">
            <User className="w-10 rounded-full" />
          </div>

          <div className="flex flex-col">
            <div className="flex gap-1">
              <h3 className="font-bold">{user}Frederico Huertas</h3>
              <BadgeCheck className="text-green-500 w-4" />
              <p className="font-semibold text-blue-500 cursor-pointer hover:underline">
                Follow
              </p>
            </div>

            <div className="flex justify-start items-center gap-1">
              <p className="text-sm">6h</p>
              <Earth className="w-3" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-self-end border border-purple-500">
          <Ellipsis />
          <X />
        </div>
      </div>
      <p>
        {message} Lorem ipsum dolor sit amet consectetur adipisicing elit. In
        vitae deserunt magni rerum quo sapiente incidunt, assumenda minus
        mollitia accusantium quos repellat debitis placeat quidem itaque minima
        dolores et hic.
      </p>
      <img src={photo} alt={photo} />
      <div>{/* emoji , comments , shares */}</div>
      <div>
        <ul className="flex flex-row">
          <li>
            <ThumbsUp /> Like
          </li>
          <li>
            <MessageCircle /> Comment
          </li>
          <li>
            <Send /> Send
          </li>
          <li>
            <ExternalLink /> Share
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostedContent;
