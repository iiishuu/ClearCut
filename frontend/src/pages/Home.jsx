import MainLayout from "../layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DomeGallery from "@/components/DomeGallery";

export default function Home() {
  // Images d'exemples pour la galerie (à remplacer par vos vraies images avec avant/après)
  const exampleImages = [
    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop", alt: "Portrait exemple 1" },
    { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=600&fit=crop", alt: "Portrait exemple 2" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop", alt: "Portrait exemple 3" },
    { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop", alt: "Portrait exemple 4" },
    { src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=600&fit=crop", alt: "Portrait exemple 5" },
    { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop", alt: "Portrait exemple 6" },
    { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop", alt: "Portrait exemple 7" },
    { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=600&fit=crop", alt: "Portrait exemple 8" },
    { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop", alt: "Portrait exemple 9" },
    { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop", alt: "Portrait exemple 10" }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen gradient-bg-blue pt-32 px-6 animate-fade-in">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
            Supprimez le fond de vos images{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              en un clic
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            ClearCut est un outil IA simple, rapide et professionnel pour créer des visuels parfaits, sans effort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/ImageUploader">
              <Button variant="default" size="lg">
                Essayer maintenant
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="outline" size="lg">
                Créer un compte gratuit
              </Button>
            </Link>
          </div>
        </div>

        {/* Dome Gallery Section */}
        <div className="w-full max-w-7xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Découvrez nos exemples
            </h2>
            <p className="text-gray-600">
              Faites glisser pour explorer • Cliquez pour agrandir
            </p>
          </div>

          <div className="w-full h-[600px] relative">
            <DomeGallery
              images={exampleImages}
              fit={0.6}
              minRadius={500}
              maxRadius={800}
              overlayBlurColor="transparent"
              openedImageWidth="500px"
              openedImageHeight="500px"
              imageBorderRadius="16px"
              openedImageBorderRadius="16px"
              grayscale={false}
              segments={30}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 max-w-6xl w-full">
          <div id="features" className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ultra-rapide</h3>
              <p className="text-gray-600 leading-relaxed">
                Détourage IA en moins de 2 secondes. Gagnez un temps précieux sur vos projets.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualité studio</h3>
              <p className="text-gray-600 leading-relaxed">
                Résultats professionnels sans retouche manuelle. Parfait pour vos besoins créatifs.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Polyvalent</h3>
              <p className="text-gray-600 leading-relaxed">
                Idéal pour e-commerce, graphisme, réseaux sociaux et bien plus encore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-24 px-6 bg-white">
        <div id="how" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600 mb-16">
            Trois étapes simples pour des résultats professionnels
          </p>

          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Téléversez votre image
              </h3>
              <p className="text-gray-600">
                Glissez-déposez ou sélectionnez votre image depuis votre appareil.
              </p>
            </div>

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                L'IA fait le travail
              </h3>
              <p className="text-gray-600">
                Notre intelligence artificielle supprime le fond automatiquement en quelques secondes.
              </p>
            </div>

            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Téléchargez le résultat
              </h3>
              <p className="text-gray-600">
                Récupérez votre visuel avec fond transparent, prêt à l'emploi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à créer des visuels parfaits ?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Rejoignez des milliers d'utilisateurs qui font confiance à ClearCut
          </p>
          <Link to="/signup">
            <Button variant="outline" size="lg" className="bg-white text-blue-600 border-white hover:bg-blue-50">
              Créer un compte gratuit
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
