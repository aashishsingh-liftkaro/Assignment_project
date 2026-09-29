import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./Navbar";
const Footer = lazy(() => import("remote/Footer"));
const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto container px-6 py-8">
        <Outlet />
      </main>

      <Suspense fallback={<p>Loading..</p>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
