import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-blue-100 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent tracking-tight hover:from-blue-700 hover:to-blue-600 transition-all"
        >
          ClearCut
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link
            to="/features"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
          >
            Fonctionnalités
          </Link>
          <Link
            to="/pricing"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
          >
            Tarifs
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        {localStorage.getItem("token") ? (
          <Link to="/account">
            <Button variant="ghost" size="default">
              Mon compte
            </Button>
          </Link>
        ) : (
          <div className="hidden md:flex items-center space-x-3">
            {/* Connexion */}
            <Link to="/login">
              <Button variant="ghost" size="default">
                Se connecter
              </Button>
            </Link>

            {/* Inscription */}
            <Link to="/signup">
              <Button variant="default" size="default">
                S'inscrire
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
