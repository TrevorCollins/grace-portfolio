import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-6 opacity-50 font-serif bg-black flex flex-row gap-2 justify-center items-center">
      <h1 className="text-center text-xl pr-3 border-r-2">GRACE SNYDER</h1>
      <div className="pl-2 pr-3 border-r-2 flex justify-center">
        <p>grace@gracesnyder.com</p>
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

export default Footer;
