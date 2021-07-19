const NavLinks = ({ isMobile, closeMobileLinks }) => {
  return (
    <>
      <ul>
        <li onClick={() => isMobile && closeMobileLinks()}>
          <a href='#home'>Home</a>
        </li>
        <li onClick={() => isMobile && closeMobileLinks()}>
          <a href='#about'>About</a>
        </li>
        <li onClick={() => isMobile && closeMobileLinks()}>
          <a href='#projects'>Projects</a>
        </li>
        <li onClick={() => isMobile && closeMobileLinks()}>
          <a href='#skills'>Skills</a>
        </li>
        <li onClick={() => isMobile && closeMobileLinks()}>
          <a href='#contacts'>Contacts</a>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
