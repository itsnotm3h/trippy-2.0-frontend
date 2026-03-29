export const Navbar = () => {
  return (
    <>
      <div className="flex m-2">
        <div className="flex">
          <img src="../logo.svg" />
        </div>
        <div className="flex ml-auto navTitle gap-2">
          <div>Trips</div>
          <div>Dashboard</div>
          <div>Explore</div>
        </div>
      </div>
    </>
  );
};
