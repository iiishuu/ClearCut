export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/30 backdrop-blur-sm py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            ClearCut
          </span>{" "}
          — Tous droits réservés.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="mailto:lorenzo.billien@epitech.eu"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="https://github.com/iiishuu/ClearCut"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            GitHub
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
