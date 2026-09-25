const Footer = () => {
  return (
    <footer className="border-t bg-gray-900 text-gray-300">
      <div className="mx-auto container  px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">ProjectApp</h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              A simple and powerful platform to manage your employees,
              products, and posts efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/employees"
                  className="transition-colors hover:text-white"
                >
                  Employees
                </a>
              </li>

              <li>
                <a
                  href="/products"
                  className="transition-colors hover:text-white"
                >
                  Products
                </a>
              </li>

              <li>
                <a
                  href="/posts"
                  className="transition-colors hover:text-white"
                >
                  Posts
                </a>
              </li>

              <li>
                <a
                  href="/testimonials"
                  className="transition-colors hover:text-white"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white">Resources</h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Documentation
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-white"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>📧 support@example.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Gurugram, India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-700 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} ProjectApp. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              GitHub
            </a>

            <a href="#" className="hover:text-white">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;