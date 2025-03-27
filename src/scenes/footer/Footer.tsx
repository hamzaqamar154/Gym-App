import Logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-5 ">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            {" "}
            They help improve endurance, flexibility, and overall well-being
            while keeping workouts engaging. Whether you're looking to build
            muscle, lose weight, or just stay active.
          </p>
          <p>&#169; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p className="my-5">Ullamcorper vivamus</p>
        </div>
        <div>
          <h4 className="font-bold">Conatact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p className="my-5">(333)-444-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
