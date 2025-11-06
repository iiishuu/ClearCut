import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"

  const plans = [
    {
      name: "Gratuit",
      price: { monthly: 0, yearly: 0 },
      description: "Pour découvrir ClearCut",
      features: [
        "5 images par mois",
        "Résolution standard",
        "Téléchargement PNG",
        "Support communautaire",
      ],
      limitations: [
        "Filigrane sur les images",
        "File d'attente standard",
      ],
      cta: "Commencer gratuitement",
      highlighted: false,
    },
    {
      name: "Pro",
      price: { monthly: 9, yearly: 90 },
      description: "Pour les créatifs et freelances",
      features: [
        "100 images par mois",
        "Haute résolution",
        "Téléchargement PNG & JPG",
        "Pas de filigrane",
        "Traitement prioritaire",
        "Support email",
      ],
      limitations: [],
      cta: "Essayer Pro",
      highlighted: true,
      badge: "Populaire",
    },
    {
      name: "Business",
      price: { monthly: 29, yearly: 290 },
      description: "Pour les équipes et entreprises",
      features: [
        "500 images par mois",
        "Très haute résolution",
        "Tous les formats (PNG, JPG, WebP)",
        "API access",
        "Traitement ultra-rapide",
        "Support prioritaire",
        "Gestion d'équipe",
        "Factures personnalisées",
      ],
      limitations: [],
      cta: "Essayer Business",
      highlighted: false,
    },
  ];

  return (
    <MainLayout>
      <section className="min-h-screen gradient-bg-blue pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Des tarifs{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                simples et transparents
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez le plan qui correspond à vos besoins. Changez ou annulez à tout moment.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-gray-900" : "text-gray-500"}`}>
              Mensuel
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="relative w-14 h-7 bg-blue-600 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
                  billingCycle === "yearly" ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === "yearly" ? "text-gray-900" : "text-gray-500"}`}>
              Annuel
            </span>
            {billingCycle === "yearly" && (
              <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                -17% de réduction
              </span>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "shadow-2xl scale-105 border-2 border-blue-500"
                    : "shadow-xl hover:shadow-2xl"
                } animate-scale-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price[billingCycle]}€
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === "monthly" ? "mois" : "an"}
                    </span>
                  </div>
                  {billingCycle === "yearly" && plan.price.yearly > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      Soit {(plan.price.yearly / 12).toFixed(2)}€/mois
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Link to="/signup">
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    className="w-full mb-8"
                  >
                    {plan.cta}
                  </Button>
                </Link>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-900 mb-3">Ce qui est inclus :</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-sm text-gray-500">{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Questions fréquentes
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Puis-je changer de plan à tout moment ?
                </h3>
                <p className="text-gray-600">
                  Oui, vous pouvez upgrader, downgrader ou annuler votre abonnement à tout moment.
                  Les changements prennent effet immédiatement.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quels sont les moyens de paiement acceptés ?
                </h3>
                <p className="text-gray-600">
                  Nous acceptons toutes les cartes bancaires via Stripe (Visa, Mastercard, American Express).
                  Les paiements sont sécurisés et cryptés.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Que se passe-t-il si je dépasse mon quota d'images ?
                </h3>
                <p className="text-gray-600">
                  Vous pouvez upgrader vers un plan supérieur ou attendre le prochain cycle de facturation.
                  Nous vous préviendrons avant d'atteindre votre limite.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Y a-t-il une période d'essai gratuite ?
                </h3>
                <p className="text-gray-600">
                  Oui, tous les plans payants incluent une période d'essai de 7 jours. Aucune carte bancaire
                  n'est requise pour le plan gratuit.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Besoin d'un plan sur mesure ?
              </h2>
              <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                Pour les grandes entreprises avec des besoins spécifiques, contactez-nous pour un devis personnalisé.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-blue-600 border-white hover:bg-blue-50"
              >
                Contactez notre équipe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
