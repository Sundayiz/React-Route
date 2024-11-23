import { Link, Outlet } from "react-router-dom";
export default function Product1() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search products" />
      </div>
      <nav>
        <Link to="featured">featured</Link>
        <Link to="new">new</Link>
      </nav>
      <Outlet />
    </>
  );
}
