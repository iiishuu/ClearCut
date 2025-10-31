import { useState, useRef } from 'react';
import api from '../services/api';

function ImageUploader() {
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
    setPreview(null);
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await api.post('/remove-background', formData);
      const base64String = response.data.image_base64;

      if (base64String) {
        const imageUrl = `data:image/png;base64,${base64String}`;
        setResult(imageUrl);
      } else
        setError("Réponse du serveur invalide.");
    } catch (error) {
      console.error(error);
      setError("Erreur lors du traitement de l'image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <button
          className="upload-btn"
          onClick={() => fileInputRef.current.click()}
        >
          Choisir une image
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={onFileChange}
          style={{ display: 'none' }}
        />

        {preview && !result && (
          <div className="image-preview-box">
            <p>Prévisualisation :</p>

            <div className="image-frame">
              <img src={preview} alt="Preview" />
            </div>

            <button onClick={handleUpload} disabled={loading}>
              {loading ? 'Traitement...' : 'Supprimer le fond'}
            </button>
          </div>
        )}

        {result && (
          <div className="image-preview-box">
            <p>Résultat :</p>

            <div className="image-frame">
              <img src={result} alt="Résultat" />
            </div>

            <a href={result} download="image_sans_fond.png">
              <button>Télécharger</button>
            </a>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default ImageUploader;
