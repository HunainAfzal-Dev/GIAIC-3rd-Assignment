import Link from "next/link";
import avatar from "../../../assests/man-with-glasses-blue-shirt-that.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="mx-16 mt-8 p-3 flex justify-between items-center border-2 rounded-full ">
        <Link href='/' className=" text-xl text-white">GIAIC</Link>

        <ul className="hidden md:flex justify-end space-x-6 mr-6 text-white">
          <li>
          <Link href="/home">HOME</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
          <Link href="/contact">CONTACT</Link>
          </li>
          <li>
          <Link href="/footer">FOOTER</Link>
          </li>
        </ul>
        <div>
          <Image
            src={avatar}
            className="rounded-full h-10 w-10"
            alt="Picture of the author"
          />
        </div>
      </nav>
    </>
  );
}

{
  /* <script>
        let mainNav = document.getElementById('main-nav');
        let toggleNav = document.getElementById('toggle-nav');
        toggleNav.addEventListener('click', function () {
            mainNav.classList.toggle('active')
        });
    </script> */
}
