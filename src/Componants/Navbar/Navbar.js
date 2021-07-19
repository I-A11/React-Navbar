import MobileNavigation from "./MobileNavigation";
import classes from "./Navbar.module.css";
import Navigation from "./Navigation";
const Navbar = () => {
  return (
    <>
      <div className={classes.Navbar}>
        <Navigation />
        <MobileNavigation />
      </div>
    </>
  );
};

export default Navbar;
