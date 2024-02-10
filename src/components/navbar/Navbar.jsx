export const Navbar = () => {
  return (
    <div className="fixed bg-theme-light-grey  bg-opacity-30 w-full py-5 px-[15%] flex justify-between">
      <div>
        <a href="/#hero">DINDA</a>
      </div>
      <div className="flex justify-around gap-10">
        <div>
          <a href="/#aboutMe">About Me</a>
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
