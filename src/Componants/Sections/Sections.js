import classes from "./Sections.module.css";
const Sections = () => {
  return (
    <>
      <div className={classes.Sections}>
        <section id='home' className={classes.Home}>
          <h1>Home</h1>
        </section>
        <section id='about' className={classes.About}>
          About
        </section>
        <section id='projects' className={classes.Projects}>
          Projects
        </section>
        <section id='skills' className={classes.Skills}>
          Skills
        </section>
        <section id='contacts' className={classes.Contacts}>
          Contacts
        </section>
      </div>
    </>
  );
};

export default Sections;
