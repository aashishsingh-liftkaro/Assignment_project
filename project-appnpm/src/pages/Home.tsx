import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

const Testimonial = lazy(() => import("remote/Testimonial"));

const Home = () => {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white shadow-sm md:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-100">
            Welcome back 👋
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Welcome to TanStack Admin
          </h1>

          <p className="mt-4 leading-7 text-blue-100">
            Manage your employees, departments and application data from
            one place.
          </p>

          <Link
            to="/employees"
            className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
          >
            View Employees
          </Link>
        </div>
      </section>

      {/* Statistics */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Overview
          </h2>

          <p className="text-sm text-gray-500">
            Quick summary of your application
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Employees</p>
            <p className="mt-2 text-3xl font-bold">30</p>
            <p className="mt-1 text-sm text-green-600">
              +2 this month
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Departments</p>
            <p className="mt-2 text-3xl font-bold">3</p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Projects</p>
            <p className="mt-2 text-3xl font-bold">12</p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Pending Tasks</p>
            <p className="mt-2 text-3xl font-bold">7</p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-semibold tracking-tight">
            Quick Actions
          </h2>

          <p className="text-sm text-gray-500">
            Quickly access commonly used sections
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Link
            to="/employees"
            className="rounded-xl border bg-white p-6 transition hover:border-blue-400 hover:shadow-md"
          >
            <h3 className="font-semibold">View Employees</h3>

            <p className="mt-2 text-sm text-gray-500">
              View, search, sort and manage employees.
            </p>

            <span className="mt-4 inline-block text-sm font-medium text-blue-600">
              Go to Employees →
            </span>
          </Link>

          <Link
            to="/products"
            className="rounded-xl border bg-white p-6 transition hover:border-blue-400 hover:shadow-md"
          >
            <h3 className="font-semibold">View Products</h3>

            <p className="mt-2 text-sm text-gray-500">
              Manage your organization's products.
            </p>

            <span className="mt-4 inline-block text-sm font-medium text-blue-600">
              Go to Products →
            </span>
          </Link>

          <Link
            to="/posts"
            className="rounded-xl border bg-white p-6 transition hover:border-blue-400 hover:shadow-md"
          >
            <h3 className="font-semibold">View Posts</h3>

            <p className="mt-2 text-sm text-gray-500">
              Configure and manage your application posts.
            </p>

            <span className="mt-4 inline-block text-sm font-medium text-blue-600">
              Go to Posts →
            </span>
          </Link>
        </div>
      </section>

      {/* Remote Testimonials */}
      <section>

        <Suspense
          fallback={
            <div className="flex min-h-[200px] items-center justify-center rounded-xl border bg-gray-50">
              <p className="text-sm text-gray-500">
                Loading testimonials...
              </p>
            </div>
          }
        >
          <Testimonial />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;