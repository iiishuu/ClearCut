import { useState, useRef } from "react";
import api from "../services/api";
import { Button } from "@/components/ui/button";
import MainLayout from "../layout/MainLayout";

export default function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setResult(null);
    setError(null);
    setLoading(false);
    setPreview(URL.createObjectURL(file));
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await api.post("/remove-background", formData);
      const base64String = response.data.image_base64;

      if (base64String) {
        const imageUrl = `data:image/png;base64,${base64String}`;
        setResult(imageUrl);
      } else {
        setError("Réponse du serveur invalide.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors du traitement de l'image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-center min-h-screen gradient-bg-blue px-6 py-24">
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 w-full max-w-2xl text-center border border-blue-100 animate-scale-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Supprimez le fond de votre image
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            Téléversez une image et laissez l'IA de ClearCut faire la magie ✨
          </p>

          {/* Upload Button */}
          <Button
            onClick={() => fileInputRef.current.click()}
            variant="default"
            size="lg"
            className="mb-6"
          >
            Choisir une image
          </Button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={onFileChange}
            className="hidden"
          />

          {/* Preview */}
          {preview && !result && (
            <div className="mt-8 space-y-6 animate-fade-in">
              <p className="text-gray-700 font-semibold text-lg">Prévisualisation</p>
              <div className="border-2 border-blue-200 rounded-xl overflow-hidden shadow-md bg-gray-50 p-4">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full max-h-96 object-contain rounded-lg"
                />
              </div>

              <Button
                onClick={handleUpload}
                disabled={loading}
                variant="default"
                size="lg"
                className="w-full"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="shimmer">Traitement en cours...</span>
                  </span>
                ) : (
                  "Supprimer le fond"
                )}
              </Button>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="mt-8 space-y-6 animate-scale-in">
              <p className="text-gray-700 font-semibold text-lg">Résultat</p>
              <div className="border-2 border-green-500 rounded-xl overflow-hidden shadow-xl bg-gray-50 p-4">
                <img
                  src={result}
                  alt="Résultat"
                  className="w-full max-h-96 object-contain rounded-lg"
                />
              </div>

              <a href={result} download="image_sans_fond.png">
                <Button variant="accent" size="lg" className="w-full">
                  Télécharger l'image
                </Button>
              </a>

              <Button
                onClick={() => {
                  setResult(null);
                  setPreview(null);
                  setSelectedFile(null);
                }}
                variant="outline"
                size="default"
                className="w-full"
              >
                Traiter une nouvelle image
              </Button>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-6 bg-red-100 border-2 border-red-500 text-red-700 p-4 rounded-xl animate-fade-in">
              <p className="font-medium">{error}</p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
