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

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between bg-zinc-800 p-1">
        <ul className="flex justify-start items-center border-2 w-full max-w-xs">
          <li>
            <Facebook
              className="text-white rounded-2xl bg-blue-400 p-1 mr-2"
              width={32}
              height={32}
            />
          </li>
          <li className="relative">
            <Search className="absolute top-1 left-2 text-zinc-700" />
            <input
              type="text"
              className="rounded-2xl p-1 text-center bg-zinc-500 text-white w-full"
              placeholder={`Search Facebook`}
            />
          </li>
        </ul>
        <ul className="flex text-zinc-400 items-center justify-center max-w-2xl w-full">
          <li className="hover:bg-zinc-700 w-full rounded-md p-3 flex justify-center cursor-pointer">
            <House />
          </li>
          <li className="hover:bg-zinc-700 w-full rounded-md p-3  flex justify-center cursor-pointer">
            <TvMinimalPlay />
          </li>
          <li className="hover:bg-zinc-700 w-full rounded-md p-3  flex justify-center cursor-pointer">
            <Store />
          </li>
          <li className="hover:bg-zinc-700 w-full rounded-md p-3  flex justify-center cursor-pointer">
            <Users />
          </li>
          <li className="hover:bg-zinc-700 w-full rounded-md p-3  flex justify-center cursor-pointer">
            <Gamepad2 />
          </li>
        </ul>
        <ul className="flex">
          <li>
            <Menu />
          </li>
          <li>
            <MessageCircleMore />
          </li>
          <li>
            <Bell />
          </li>
          <li>account</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
