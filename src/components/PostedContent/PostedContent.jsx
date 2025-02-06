import {
  ThumbsUp,
  MessageCircle,
  Send,
  ExternalLink,
  BadgeCheck,
  Ellipsis,
  X,
  Earth,
  Dot,
  Heart,
  Laugh,
  Angry,
  Cake,
  Share2,
} from "lucide-react";
import User from "../User";
import coffee from "../../images/coffee.png";

const action = [
  {
    icon: <ThumbsUp size={18} />,
    label: "Like",
  },
  {
    icon: <MessageCircle size={18} />,
    label: "Comment",
  },
  {
    icon: <Send size={18} />,
    label: "Send",
  },
  {
    icon: <ExternalLink size={18} />,
    label: "Share",
  },
];

const reactionIcon = [ThumbsUp, Heart, Laugh, Cake, Angry];

const PostedContent = ({
  name,
  message,
  img,
  imgTitle,
  shares,
  reaction,
  followed,
  official,
}) => {
  return (
    <div className="max-w-xl justify-self-center text-zinc-200 mt-5 bg-zinc-800 rounded-lg">
      {/* user's details here */}
      <div className="grid grid-cols-[9fr_1fr] w-full items-center p-2 place-items-center">
        <div className="flex flex-row w-full justify-self-start">
          <div className="flex items-center hover:bg-zinc-700 rounded-full p-1 cursor-pointer">
            <User className="w-10 rounded-full" />
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
        <img src={img} alt={imgTitle} />
      </div>

      {/* emoji , comments , shares */}
      <div className="grid grid-cols-2 border-b-1 border-zinc-500 mx-3 my-1 px-1 py-2">
        <div className="flex flex-row -space-x-1.5">
          {reactionIcon.map((Icon, index) => (
            <div
              className={`text-white ${
                Icon === ThumbsUp
                  ? "bg-blue-500"
                  : Icon === Heart
                  ? "bg-pink-500"
                  : Icon === Laugh
                  ? "bg-green-500"
                  : Icon === Cake
                  ? "bg-yellow-500"
                  : Icon === Angry
                  ? "bg-red-500"
                  : null
              }  border rounded-full p-1`}
            >
              <Icon key={index} size={15} className="hover:cursor-pointer" />
            </div>
          ))}

          {/* reaction */}
          <div className="pl-3">
            <p>{reaction}</p>
          </div>
        </div>

        {/* shares */}
        <div className="justify-self-end">
          <p>{shares}</p>
          <Share2 />
        </div>
      </div>

      <div className="">
        <ul className="flex flex-row justify-between px-3">
          {action.map((item, index) => (
            <li
              onClick={() => console.log("clicked")}
              key={index}
              className="flex flex-row gap-2 hover:bg-zinc-700 rounded justify-center items-center cursor-pointer p-1 w-full"
            >
              {item.icon} {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostedContent;
