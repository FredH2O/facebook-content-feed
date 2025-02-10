import { CircleChevronDown } from "lucide-react";
import avatar1 from "/images/avatar-1.png";
import avatar2 from "/images/avatar-2.png";
import avatar3 from "/images/avatar-3.png";
import avatar4 from "/images/avatar-4.png";
import avatar5 from "/images/avatar-5.png";
import avatar6 from "/images/avatar-6.png";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const CommentsSection = ({ comments = [] }) => {
  return (
    <div className="p-2 border-t border-zinc-500 w-[95%] m-auto bg-zinc-800 rounded-b-lg">
      <div className="flex flex-row justify-start items-center gap-1 p-1 font-semibold cursor-pointer">
        <p>Most relevant</p>
        <CircleChevronDown size={15} />
      </div>

      {comments.length > 0 ? (
        comments.map((comment) => {
          const timeFormat = comment.time >= 24 ? "m" : "h";
          const randomAvatar = Math.floor(Math.random() * avatars.length);

          return (
            <div key={comment.id}>
              <div className="flex flex-row justify-start items-start">
                <img
                  src={avatars[randomAvatar]}
                  className="w-10 rounded-full"
                  alt="User's Avatar"
                />
                <div className="px-2">
                  <div className="mb-2 rounded-2xl p-3 bg-zinc-700">
                    <p className="text-sm font-semibold cursor-pointer hover:underline">
                      {comment.user}
                    </p>
                    <p className="text-sm">{comment.comment}</p>
                  </div>
                  <ul className="flex flex-row gap-2 ml-3 text-xs text-zinc-400 font-semibold">
                    <li className="cursor-pointer hover:underline">
                      {comment.time}
                      {timeFormat}
                    </li>
                    <li className="cursor-pointer hover:underline">Like</li>
                    <li className="cursor-pointer hover:underline">Reply</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-sm text-gray-400">No comments yet.</p>
      )}
    </div>
  );
};

export default CommentsSection;
