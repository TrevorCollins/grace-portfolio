import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed flex font-primary font-thin justify-between h-36 w-full px-6 py-8 opacity-90 bg-black z-40 ">
      <div>
        <Image
          src="/assets/images/gracesnyderbanner.png"
          alt="Grace Snyder"
          width={400}
          height={100}
        />
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
