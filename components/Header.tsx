import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed flex justify-between h-36 w-full px-6 py-8 opacity-90 bg-black z-40 ">
      <div>
        <h1 className="text-6xl/8 max-sm:text-5xl">grace snyder</h1>
        <div className="flex pl-7 tracking-wide justify-start max-sm:p-0">
          <p>grace@gracesnyder.com</p>
        </div>
      </div>
      <div className="opacity-80 hover:opacity-100 hover:scale-105 transition duration-200 ease-in-out">
        <IconButton className="text-white">
          <Link target="_blank" href="https://www.instagram.com/goldfished/">
            <InstagramIcon />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
