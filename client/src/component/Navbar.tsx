import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className="flex bg-white p-2 min-h-12.5">
        <div className="flex">
          <img src="../logo.svg" width={100} />
        </div>
        <div className="flex ml-auto navTitle gap-3 items-center">
          <div className="flex"><Link to="/"><h4>Trips</h4></Link></div>
          <div className="flex disabledLink"><h4>Dashboard</h4></div>
          <div className="flex disabledLink"><h4>Explore</h4></div>
          <div className="flex disabledLink">
            <span className="material-symbols-outlined">
              mail
            </span>
          </div>
          <div className="flex  disabledLink">
            <span className="material-symbols-outlined">
              paid
            </span>
          </div>
          <div className="flex"><button className="button">Login</button></div>
        </div>
      </div>
    </>
  );
};
