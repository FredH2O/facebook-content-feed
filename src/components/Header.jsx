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
import facebookUser from "../images/facebookUser.png";
const IconArray = [House, TvMinimalPlay, Store, Users, Gamepad2];
const UserIconArray = [Menu, MessageCircleMore, Bell];

const Header = () => {
  return (
    <header className="bg-zinc-800 p-2 shadow-md w-full max-w-full">
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <ul className="flex items-center gap-x-3">
          <li>
            <Facebook
              className="text-white rounded-3xl bg-blue-500 p-1"
              width={40}
              height={40}
            />
          </li>
          <li className="relative">
            <Search className="absolute top-3 left-3 text-zinc-400" size={18} />
            <input
              type="text"
              className="bg-zinc-700 text-white rounded-full pl-8 pr-4 py-2 w-40 sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Search Facebook"
            />
          </li>
        </ul>

        {/* Center Section */}
        <ul className="lg:flex text-zinc-400 space-x-6 md:max-w-md xl:max-w-xl hidden">
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
        <ul className="flex items-center text-zinc-400 space-x-4">
          {UserIconArray.map((Icon, index) => (
            <li
              key={index}
              className="hover:bg-zinc-700 p-2 rounded-full cursor-pointer transition-colors duration-200"
            >
              <Icon size={24} />
            </li>
          ))}
          <li className="text-white p-1 rounded-2xl h-full font-semibold cursor-pointer hover:bg-zinc-500">
            <img
              src={facebookUser}
              alt="Facebook User Image"
              className="w-10 rounded-2xl"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
