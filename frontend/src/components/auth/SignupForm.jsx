import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Veuillez entrer une adresse email valide.");
      setLoading(false);
      return;
    }

    // Password length validation
    if (formData.password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      setLoading(false);
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    // Terms acceptance validation
    if (!acceptedTerms) {
      setError("Veuillez accepter les conditions d'utilisation.");
      setLoading(false);
      return;
    }

    try {
      await signup(formData.name, formData.email, formData.password);
      navigate("/account");
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'inscription.");
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
            Créer un compte
          </h1>
          <p className="text-gray-600">
            Rejoignez ClearCut gratuitement
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Jean Dupont"
              value={formData.name}
              onChange={handleChange}
              className="h-12"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="vous@exemple.com"
              value={formData.email}
              onChange={handleChange}
              className="h-12"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Minimum 8 caractères"
              value={formData.password}
              onChange={handleChange}
              className="h-12"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Répétez votre mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="h-12"
              required
            />
          </div>

          <div className="flex items-start gap-2 pt-2">
            <input
              id="terms"
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              J'accepte les{" "}
              <Link to="/terms" className="text-blue-600 hover:text-blue-700">
                conditions d'utilisation
              </Link>
            </label>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full h-12 mt-6"
            disabled={loading}
          >
            {loading ? "Création..." : "Créer mon compte"}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Déjà un compte ?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
