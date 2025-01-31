import { X } from "lucide-react";

const CreatePostModal = () => {
  return (
    <div className="max-w-md w-full">
      <div className="relative w-full">
        <h3 className="text-center text-bold">Create Post</h3>
        <button className="absolute top-0 right-0 p-1 rounded-full">
          <X />
        </button>
      </div>
    </div>
  );
};
