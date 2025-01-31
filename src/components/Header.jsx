import {
  Facebook,
  House,
  TvMinimalPlay,
  Store,
  Users,
  Bell,
  MessageCircleMore,
  Gamepad2,
  Menu,
  Search,
} from "lucide-react";
import User from "./User";
const IconArray = [House, TvMinimalPlay, Store, Users, Gamepad2];
const UserIconArray = [Menu, MessageCircleMore, Bell];

const Header = () => {
  return (
    <header className="bg-zinc-800 p-2 shadow-md w-full max-w-full border-b border-zinc-600">
      <nav className="grid lg:grid-cols-3 grid-cols-2">
        {/* Left Section */}
        <ul className="flex gap-x-3 justify-start items-center ">
          <li>
            <Facebook
              className="text-white rounded-3xl bg-blue-500 p-1"
              width={40}
              height={40}
            />
          </li>
          <li className="relative">
            <Search
              className="absolute xl:top-2.5 xl:left-2 top-2.5 left-2.5 text-zinc-400"
              size={20}
            />
            <input
              type="text"
              className="bg-zinc-700 text-white rounded-full xl:pl-8 xl:pr-4 xl:py-2 pl-6 p-4 py-2 xl:w-full w-0 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search Facebook"
            />
          </li>
        </ul>

        {/* Center Section */}
        <ul className="lg:flex text-zinc-400 m-auto space-x-6 md:max-w-md xl:max-w-xl hidden">
          {IconArray.map((Icon, index) => (
            <li
              key={index}
              className="hover:bg-zinc-700 w-32 p-3 rounded-md flex justify-center cursor-pointer transition-colors duration-200"
            >
              <Icon size={24} />
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <ul className="flex items-center justify-end text-zinc-300 md:space-x-4 gap-2">
          {UserIconArray.map((Icon, index) => (
            <li
              key={index}
              className="hover:bg-zinc-700 bg-zinc-600 p-2 rounded-full cursor-pointer transition-colors duration-200"
            >
              <Icon size={24} />
            </li>
          ))}
          <li className="text-white p-1 rounded-full h-full font-semibold cursor-pointer hover:bg-zinc-500">
            <User className="w-10 rounded-full" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
