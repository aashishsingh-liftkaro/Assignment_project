import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 container items-center justify-between px-6">
        <NavLink
          to="/"
          className="text-xl font-bold text-blue-600"
        >
        ProjectApp
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/employees"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Employees
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/posts"
            className={({ isActive }) =>
              `rounded-md px-4 py-2 text-sm font-medium ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            Posts
          </NavLink>
        </div>

      
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          AS
        </div>
      </div>
    </nav>
  );
};

export default Navbar;