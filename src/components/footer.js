import { Typography, Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

const LINKS = [{ title: "Home", href: "/" }, { title: "About Us", href: "/about" }, { title: "Service", href: '/' }];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const router = useRouter()
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; Darpan @2024
            .
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => router.push(link?.href)}
                >
                  {link.title}
                </Typography>
              </li>
            ))}
            <Button color="gray">subscribe</Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
