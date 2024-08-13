import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
  UserCircleIcon,
  CubeIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from 'next/navigation'
import 'animate.css';
import Image from "next/image";

// import Link from "next/navigation";

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "About Us",
    icon: UserCircleIcon,
    href: "/about",
  },
  {
    name: "Products",
    icon: CubeIcon,
    href: "/products",
  },
  {
    name: "Quality Process",
    icon: CheckCircleIcon,
    href: "/quality",
  },
  {
    name: "Testimonials",
    icon: ChatBubbleLeftRightIcon,
    href: "/testimonials",
  },
  {
    name: "Gallery",
    icon: PhotoIcon,
    href: "/gallery",
  },
  {
    name: "Contact",
    icon: EnvelopeIcon,
    href: "/contact",
  },
];



function NavItem({ children, href }) {
  return (
    <li>
      <Typography
        as="a"
        // href={href || "/"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter()
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={true} fullWidth className="border-0 sticky top-0 backdrop-blur-lg bg-opacity-5 z-50">
      <div className="container mx-auto flex items-center justify-between ">
        <Typography color="blue-gray" className="text-lg font-bold">
          <Image src={'/logo.png'} width={200} height={150} />
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <div className="flex gap-2 cursor-pointer items-center" onClick={() => router.push(href)}>
                <div>
                <Icon className="h-5 w-5 " />
                </div>
                <div className="text-center">
                {name}
                </div>
              </div>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          {/* <Button variant="text">Sign In</Button> */}
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            {/* <Button variant="text">Sign In</Button> */}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
