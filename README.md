# ClearCut

ClearCut is an AI-driven background remover designed to handle both images and videos with exceptional efficiency.
Built with FastAPI and React, it combines the speed of local inference with a clean, scalable architecture ready for production use.

The goal of ClearCut is to evolve from a simple tool into a complete SaaS platform for automated background removal and media enhancement:

🖼️ Image background removal (instant, local, no external API)

🎥 Video background processing (frame-by-frame with GPU acceleration)

☁️ Cloud deployment and REST API for third-party integration

🧠 AI-based edge refinement for more natural subject isolation

🔄 Batch processing and job queue system for professionals

💼 Dashboard & user management (planned for enterprise SaaS version)

The project serves both as a technical showcase (FastAPI + React integration) and a foundation for a future AI media automation platform.

## Quick Start

### Prerequisites
- Python 3.10+
- Node.js 16+

### Setup

```bash
# Backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn rembg
uvicorn backend/main:app --reload

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

Backend runs on `http://127.0.0.1:8000` | Frontend on `http://localhost:5173`

## Tech Stack

- **Backend**: Python 3.10+, FastAPI, rembg, Uvicorn
- **Frontend**: React, Vite, Axios
- **Architecture**: REST API

## Project Structure

```
test-rembg/
├── backend/
│   └── main.py          # FastAPI server
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page views
│   │   └── services/    # API calls
│   └── vite.config.js
└── package.json
```

## Goals

- Local image background removal without external dependencies
- Reusable REST API for integration
- Intuitive, responsive user interface
