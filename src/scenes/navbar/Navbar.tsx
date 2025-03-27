import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import logo from "../../assets/Logo.png";
import { SelectedPage } from "@//shared/types";
import useMediaQuery from "@//hooks/useMediaQuery";
import ActionButton from "@//shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  // Global flex and spacing
  const flexBetween = "flex items-center justify-between";

  //media query
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  //menu open closed
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  //scrolling navbar color change
  const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition duration-300`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side  */}
            <img src={logo} alt="logo" />

            {/* Right Side  */}

            {/* if isAboveMediumScreens is true show this */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Navigations tags */}
                <div className={`${flexBetween} gap-8 text-sm font-medium`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                {/* sign in section  */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              // else show this

              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white cursor-pointer" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* {mobile menu modal} */}

      {/* if isAboveMediumScreens is false and isMenuToggled is true(means clicked) then show this */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Close ICON  */}
          <div className="flex justify-end p-12 t">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-primary-500 cursor-pointer" />
            </button>
          </div>
          {/* menu items  */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
