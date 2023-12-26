import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed flex justify-between h-36 w-full px-6 py-8 opacity-90 bg-black z-40 ">
      <div className="font-serif flex flex-col">
        <h1 className="text-4xl pb-2">GRACE SNYDER</h1>
        <div className="pt-2 flex justify-start">
          <p>grace@gracesnyder.com</p>
        </div>
      </div>
      <div className="opacity-80 hover:opacity-100 hover:scale-105 transition duration-200 ease-in-out">
        <IconButton className="text-white">
          <Link href="https://www.instagram.com/goldfished/">
            <InstagramIcon />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
