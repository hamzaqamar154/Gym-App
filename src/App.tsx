import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/Home";
import Benefits from "./scenes/benefits/Benefits";
import OurClasses from "./scenes/ourClasses/OurClasses";
import ContactUs from "./scenes/contactUs/ContactUs";
import Footer from "./scenes/footer/Footer";

function App() {
  // page selectedPage AnchorLink
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  // navbar background gets colorfull when scroll down
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    // if scrolling not happend do this
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }

      // else do this
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };

    // this will remove event when we close window for better memory
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20 ">
      {/* navbar  */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {/* hero section  */}
      <Home setSelectedPage={setSelectedPage} />

      {/* benefits section */}
      <Benefits setSelectedPage={setSelectedPage} />

      {/* Our Classes section  */}
      <OurClasses setSelectedPage={setSelectedPage} />

      {/* Contact Us section  */}
      <ContactUs setSelectedPage={setSelectedPage} />

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default App;
