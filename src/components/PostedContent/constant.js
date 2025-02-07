import {
  ThumbsUp,
  MessageCircle,
  Send,
  ExternalLink,
  Heart,
  Laugh,
  Angry,
  Cake,
} from "lucide-react";

export const action = [
  {
    icon: ThumbsUp,
    label: "Like",
  },
  {
    icon: MessageCircle,
    label: "Comment",
  },
  {
    icon: Send,
    label: "Send",
  },
  {
    icon: ExternalLink,
    label: "Share",
  },
];

export const reactionIcon = [ThumbsUp, Heart, Laugh, Cake, Angry];

export const reactionColors = {
  ThumbsUp: "bg-blue-500",
  Heart: "bg-pink-500",
  Laugh: "bg-green-500",
  Cake: "bg-yellow-500",
  Angry: "bg-red-500",
};
