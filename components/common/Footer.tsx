import { Mail } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#1B1F23] py-10 text-white text-center">
      <div className="h-64">
        <div className="flex justify-center gap-10 ">
          <Link
            target="_blank"
            href="mailto:lucasparodi00@gmail.com"
            className="hover:text-orange-600 duration-300"
          >
            <Mail size={40} />
          </Link>
          <Link
            target="_blank"
            href={
              "https://www.instagram.com/parodilucas_?igsh=NzNxZnp3NWRocm5w&utm_source=qr"
            }
            className="hover:text-orange-600 duration-300"
          >
            <FaInstagram size={40} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/parodi-lucas-ivan/"}
            className="hover:text-orange-600 duration-300"
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/parodi-lucas-ivan/"}
            className="hover:text-orange-600 duration-300"
          >
            <FaXTwitter size={40} />
          </Link>
        </div>
        <div className="mt-10 ">
          <span className="hover:text-orange-400 duration-300">
            lucasparodi00@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
};
