import NavLinks from "./NavLinks";
import classes from "./Navbar.module.css";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const toggleIcon = (
    <HiMenu className={classes.Toggle} onClick={() => setOpen(!open)} />
  );

  const close = (
    <MdClose className={classes.Toggle} onClick={() => setOpen(!open)} />
  );

  const closeMobileLinks = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className={classes.MobileNavigation}>
        {open ? close : toggleIcon}
        {open && (
          <NavLinks isMobile={true} closeMobileLinks={closeMobileLinks} />
        )}
      </nav>
    </>
  );
};

export default MobileNavigation;
