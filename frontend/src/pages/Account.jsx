import React, { useEffect, useState } from "react";
import { getMe } from "../services/auth";
import MainLayout from "@/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await getMe(token);
        setUser(res.user);
      } catch (err) {
        console.error("Erreur getMe:", err);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!user) {
    return (
      <MainLayout>
        <div className="min-h-screen gradient-bg-blue flex items-center justify-center px-6 py-24">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">Chargement de votre profil...</p>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="min-h-screen gradient-bg-blue px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header avec gradient */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Mon Compte
            </h1>
            <p className="text-gray-600 text-lg">
              Gérez vos informations personnelles et vos préférences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Profil principal */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
              {/* Avatar et nom */}
              <div className="flex items-start justify-between mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">
                      Bonjour, {user.name}
                    </h2>
                    <p className="text-gray-500 text-sm">Membre depuis {new Date(user.createdAt).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>

              {/* Informations personnelles */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Informations personnelles
                  </h3>

                  <div className="space-y-4">
                    {/* Nom complet */}
                    <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                      <label className="text-sm font-medium text-gray-500 mb-1 block">Nom complet</label>
                      <p className="text-lg font-semibold text-gray-900">{user.name}</p>
                    </div>

                    {/* Email */}
                    <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                      <label className="text-sm font-medium text-gray-500 mb-1 block">Adresse email</label>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-gray-900">{user.email}</p>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Vérifié
                        </span>
                      </div>
                    </div>

                    {/* Rôle */}
                    <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                      <label className="text-sm font-medium text-gray-500 mb-1 block">Rôle</label>
                      <p className="text-lg font-semibold text-gray-900 capitalize">{user.role || 'user'}</p>
                    </div>

                    {/* Date de création */}
                    <div className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-colors">
                      <label className="text-sm font-medium text-gray-500 mb-1 block">Membre depuis</label>
                      <p className="text-lg font-semibold text-gray-900">
                        {new Date(user.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Actions rapides */}
            <div className="space-y-6">
              {/* Statistiques */}
              <div className="bg-white rounded-2xl shadow-xl p-6 animate-scale-in">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Statistiques
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-600">Images traitées</span>
                    <span className="text-2xl font-bold text-blue-600">0</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                    <span className="text-sm text-gray-600">Crédits restants</span>
                    <span className="text-2xl font-bold text-cyan-600">10</span>
                  </div>
                </div>
              </div>

              {/* Actions rapides */}
              <div className="bg-white rounded-2xl shadow-xl p-6 animate-scale-in">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Actions rapides
                </h3>
                <div className="space-y-3">
                  <Link to="/ImageUploader" className="block">
                    <Button variant="default" size="lg" className="w-full">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Nouvelle image
                    </Button>
                  </Link>
                  <Link to="/pricing" className="block">
                    <Button variant="outline" size="lg" className="w-full">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Voir les tarifs
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Déconnexion */}
              <div className="bg-white rounded-2xl shadow-xl p-6 animate-scale-in">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Sécurité
                </h3>
                <Button
                  variant="destructive"
                  size="lg"
                  className="w-full"
                  onClick={handleLogout}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Se déconnecter
                </Button>
              </div>
            </div>
          </div>

          {/* Section activité récente */}
          <div className="mt-6 bg-white rounded-2xl shadow-xl p-8 animate-scale-in">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Activité récente
            </h3>
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 font-medium">Aucune activité récente</p>
              <p className="text-gray-400 text-sm mt-2">Vos images traitées apparaîtront ici</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
