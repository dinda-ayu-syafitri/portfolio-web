export const Navbar = () => {
  return (
    <div className="fixed bg-theme-light-grey  bg-opacity-30 w-full py-3 px-[15%] flex items-center justify-between z-30">
      <div>
        <a href="/#hero">
          <img src="./dinda-logo.png" alt="" className="w-28" />
        </a>
      </div>
      <div className="flex justify-around gap-10">
        <div>
          <a href="/#aboutMe">About Me</a>
        </div>
        <div>
          <a href="/#skills-expertise">Skills & Expertise</a>
        </div>
        <div>
          <a href="/#projects">Projects</a>
        </div>
        <div>
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};
