import {
  ThumbsUp,
  BadgeCheck,
  Ellipsis,
  X,
  Earth,
  Dot,
  Share2,
} from "lucide-react";
import { useState } from "react";
import { action, reactionIcon, reactionColors } from "./constant";
import CommentsSection from "./CommentsSection";

const PostedContent = ({
  name,
  message,
  img,
  imgTitle,
  shares,
  reaction,
  followed,
  official,
  avatar,
  comments,
}) => {
  const [showComments, setShowComments] = useState(false);

  const handleActionClick = (label) => {
    if (label === "Comment") {
      setShowComments((prev) => !prev);
    } else if (label === "Like") {
      console.log("liked pressed");
    } else if (label === "Send") {
      console.log("sent pressed");
    } else if (label === "Share") {
      console.log("share pressed");
    }
  };

  return (
    <div className="max-w-xl justify-self-center text-zinc-200 my-5 bg-zinc-800 rounded-lg">
      {/* user's details here */}
      <div className="grid grid-cols-[9fr_1fr] w-full items-center p-2 place-items-center">
        <div className="flex flex-row w-full justify-self-start">
          <div className="flex items-center hover:bg-zinc-700 rounded-full p-1 cursor-pointer">
            <img
              src={avatar}
              alt="avatar-logo"
              className="w-12 rounded-full object-cover object-center transition-transform duration-200 hover:scale-110"
            />
          </div>

          <div className="flex flex-col ml-2">
            <div className="flex flex-row justify-center items-center">
              <h3 className="font-bold text-zinc-200 cursor-pointer hover:underline">
                {name}
              </h3>

              {official && <BadgeCheck className="text-green-500 w-4 ml-1" />}
              <Dot size={10} />

              {followed && (
                <p className="font-semibold text-blue-500 cursor-pointer hover:underline">
                  Follow
                </p>
              )}
            </div>

            <div className="flex justify-start items-center">
              <p className="text-sm cursor-pointer hover:underline">6h</p>
              <Dot size={10} />
              <Earth className="w-3" title="Test" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-self-end gap-3">
          <div className="hover:bg-zinc-700 rounded-full p-2 cursor-pointer">
            <Ellipsis />
          </div>
          <div className="hover:bg-zinc-700 rounded-full p-2 cursor-pointer">
            <X />
          </div>
        </div>
      </div>

      <div>
        <p className="p-2">{message}</p>
        <img src={`/facebook-content-feed/${img}`} alt={imgTitle} />
      </div>

      {/* emoji , comments , shares */}
      <div className="grid grid-cols-2 mx-3 my-1 px-1 py-2">
        <div className="flex flex-row -space-x-1.5">
          {reactionIcon.map((Icon, index) => {
            const iconName = Icon.name || Icon.displayName;
            return (
              <div
                key={index}
                className={`text-white ${
                  reactionColors[iconName] || ""
                }  border rounded-full p-1`}
              >
                <Icon size={15} className="hover:cursor-pointer" />
              </div>
            );
          })}

          {/* reaction */}
          <div className="pl-3">
            <p>{reaction}</p>
          </div>
        </div>

        {/* shares */}
        <div
          className="justify-self-end flex flex-row gap-1 justify-center items-center"
          title="Shares"
        >
          <p>{shares}</p>
          <Share2 size={18} />
        </div>
      </div>

      <div className="border-t border-zinc-500 w-[95%] m-auto">
        <ul className="flex flex-row justify-between px-3 py-2">
          {action.map((item, index) => (
            <li
              onClick={() => handleActionClick(item.label)}
              key={index}
              className="flex flex-row gap-2 hover:bg-zinc-700 rounded justify-center items-center cursor-pointer p-1 w-full"
            >
              <item.icon size={18} /> {item.label}
            </li>
          ))}
        </ul>
      </div>
      {showComments && <CommentsSection comments={comments} />}
    </div>
  );
};

export default PostedContent;
