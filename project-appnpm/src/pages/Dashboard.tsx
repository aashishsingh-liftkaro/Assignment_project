import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <p className="mt-2 text-gray-600">
        Welcome to the ProjectApp Dashboard.
      </p>

      <Link
        to="/employees"
        className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white"
      >
        View Employees
      </Link>
    </div>
  );
};

export default Dashboard;