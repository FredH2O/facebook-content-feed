import {
  X,
  Palette,
  SmilePlus,
  Video,
  Image,
  MapPin,
  Laugh,
  ImagePlay,
  Ellipsis,
  MicVocal,
  CirclePower,
} from "lucide-react";
import User from "../User";
import TextAreaExpand from "./TextAreaExpand";

const AddToPost = [Image, Video, MapPin, Laugh, ImagePlay, Ellipsis];

const CreatePostModal = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-zinc-800 border border-zinc-500 max-w-lg md:rounded-lg w-full text-white flex flex-col">
        {/* main header */}
        <div className="relative flex justify-center items-center w-full h-12 border-b border-zinc-600">
          <h3 className="text-center font-bold text-xl">Create Post</h3>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-2 right-2 bg-zinc-600 hover:bg-zinc-500 cursor-pointer p-1 rounded-full"
          >
            <X />
          </button>
        </div>
        {/* user & audience */}
        <div className="p-3">
          <div className="flex flex-row">
            <User className="rounded-full w-12 h-12 mr-2" />
            <div className="font-semibold flex flex-col space-y-0.5 px-2">
              <p>You</p>
              <select
                name="audience"
                id="audience"
                className="hover:cursor-pointer text-xs bg-zinc-400 rounded"
              >
                <option value="Public">🌍 Public</option>
                <option value="Private">🔒 Private</option>
              </select>
            </div>
          </div>

          {/* message and customization */}
          <div className="py-2">
            <TextAreaExpand />
            <div className="grid grid-cols-2 w-full py-2">
              <div className="rounded-full cursor-pointer hover:bg-zinc-400 p-1 w-8">
                <Palette
                  size={24}
                  className="text-purple-500 hover:text-white"
                />
              </div>
              <div className="rounded-full cursor-pointer hover:bg-zinc-400 p-1 w-8 justify-self-end">
                <SmilePlus
                  size={24}
                  className="text-amber-400 hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* add to your post and icons*/}
          <div className="grid grid-cols-2 border rounded-lg border-zinc-600 px-3 py-3">
            <p className="font-semibold">Add to your post</p>
            <div className="flex flex-row gap-4">
              {AddToPost.map((Icon, index) => (
                <Icon
                  size={24}
                  key={index}
                  className={`${
                    Icon === Image
                      ? "text-green-500"
                      : Icon === Video
                      ? "text-red-500"
                      : Icon === MapPin
                      ? "text-orange-500"
                      : Icon === Laugh
                      ? "text-yellow-500"
                      : Icon === ImagePlay
                      ? "text-blue-500"
                      : Icon === Ellipsis
                      ? "text-zinc-500"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>
          {/* boost post */}
          <div className="flex justify-between items-center my-2">
            {/* First div takes 90% of space */}
            <div className="flex flex-row w-[90%] gap-2 justify-start items-center">
              <div className="p-2 rounded-full bg-zinc-700">
                <MicVocal size={24} />
              </div>

              <div className="flex flex-col items-start justify-center">
                <h3 className="font-bold text-lg">Boost post</h3>
                <p className="font-light text-sm">
                  You'll choose settings after you click Post.
                </p>
              </div>
            </div>

            {/* Second div takes 10% of space */}
            <div className="p-3 rounded-full hover:bg-blue-500 cursor-pointer w-[10%] flex justify-center">
              <CirclePower size={24} />
            </div>
          </div>
          <button className="bg-slate-600 font-semibold w-full rounded-lg p-1.5 mt-3 hover:bg-blue-500 cursor-pointer">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
