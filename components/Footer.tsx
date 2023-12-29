import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-6 opacity-50 bg-black flex flex-row gap-2 justify-center items-center max-sm:flex-col max-sm:gap-0">
      <h1 className="text-center text-xl pr-2 border-r-2 max-sm:border-r-0 max-sm:px-0">
        grace snyder
      </h1>
      <div className="pr-2 border-r-2 tracking-wider flex justify-center max-sm:border-r-0 max-sm:px-0">
        <p>grace@gracesnyder.com</p>
      </div>
      <div className="opacity-80 hover:opacity-100 hover:scale-105 transition duration-200 ease-in-out">
        <IconButton className="p-0">
          <Link target="_blank" href="https://www.instagram.com/goldfished/">
            <InstagramIcon className="text-white" />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
