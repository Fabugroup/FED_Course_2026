export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-white">
              About this page
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              This footer appears in dark mode with site information, quick
              links, and a copyright notice at the bottom.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Quick links</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Email us at{" "}
              <a
                href="mailto:info@example.com"
                className="text-gray-200 hover:text-white"
              >
                info@example.com
              </a>
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              123 Main Street, Anytown, USA
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {currentYear} FGS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
