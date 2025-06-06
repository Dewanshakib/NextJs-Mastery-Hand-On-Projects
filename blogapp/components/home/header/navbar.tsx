import Link from "next/link";
import { Button } from "../../ui/button";
import SearchInput from "./searchInput";
import ToggleMode from "./toggle-mode";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left section */}

          <div className="flex items-center gap-6">
            <Link href={"/"} className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Bit
                </span>
                <span className="text-foreground">Code</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-4">
            <Link
              href={"/articles"}
              className="text-sm text-foreground transition-colors font-medium hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href={"/tutorials"}
              className="text-sm text-foreground transition-colors font-medium hover:text-foreground"
            >
              Tutorials
            </Link>
            <Link
              href={"/about"}
              className="text-sm text-foreground transition-colors font-medium hover:text-foreground"
            >
              About
            </Link>
            <Link
              href={"/dashboard"}
              className="text-sm text-foreground transition-colors font-medium hover:text-foreground"
            >
                Dashboard
            </Link>

            
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <SearchInput/>

            <ToggleMode/>

          <div className="hidden md:flex items-center gap-2 ">
            <Button>Login</Button>
            <Button>SignUp</Button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
