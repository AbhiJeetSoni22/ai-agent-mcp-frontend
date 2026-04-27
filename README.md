# MCP AI Assistant - Frontend

A React + Vite frontend for the MCP AI Assistant platform. This app connects to the backend API to power chat, authentication, and AI-assisted workflows.

---

## 📁 Project Structure

```text
a i- agent- mcp-frontend/
├── public/                    # Static assets and favicon
├── src/
│   ├── api/                   # API helper functions
│   │   └── api.js
│   ├── assets/                # Image and media files
│   ├── components/            # Reusable UI components
│   │   ├── ChatAssistant.jsx
│   │ ├── ConfirmationModal.jsx
│   │   ├── HowToUse.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/                 # Route pages
│   │   ├── Chat.jsx
│   │   ├── HowToUsePage.jsx
│   │   ├── LandingPage.jsx
│   │   └── Login.jsx
│   ├── App.css                # Application styles
│   ├── App.jsx                # Route definitions and layout
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.jsx               # React DOM entry point
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json              # Project dependencies and scripts
├── vite.config.js             # Vite config
└── README.md                  # This file
```

---

## 📄 File Descriptions

### Root Files

| File | Purpose |
|------|---------|
| `.env` | Frontend environment variables |
| `.gitignore` | Files and folders ignored by git |
| `index.html` | HTML entry point for the React app |
| `package.json` | npm scripts and dependencies |
| `vite.config.js` | Vite bundler configuration |
| `eslint.config.js` | Linting rules and settings |

### Source Files (`src/`)

| File | Purpose |
|------|---------|
| `main.jsx` | Mounts the React application |
| `App.jsx` | Defines app routing and pages |
| `App.css` | Application-wide styles |
| `index.css` | Global CSS and Tailwind setup |

### API Helpers (`src/api/`)

| File | Purpose |
|------|---------|
| `api.js` | Backend API helpers for chat, auth, and deep search |

### Pages (`src/pages/`)

| File | Purpose |
|------|---------|
| `LandingPage.jsx` | Landing screen for the app |
| `Login.jsx` | Google login and auth flow page |
| `Chat.jsx` | Main chat interface page |
| `HowToUsePage.jsx` | Usage guide and instructions page |

### Components (`src/components/`)

| Component | Purpose |
|-----------|---------|
| `ChatAssistant.jsx` | Chat UI component with messaging, markdown rendering, and session handling |
| `ConfirmationModal.jsx` | Modal for confirming sensitive actions |
| `HowToUse.jsx` | Help/instructions panel for users |
| `ProtectedRoute.jsx` | Route wrapper for protected views (if used) |

---

## 🚀 Key Features

- Real-time AI chat interface
- Google OAuth auth flow integration
- Backend API requests for chat, logout, and user data
- Markdown rendering for assistant messages
- Tailwind CSS styling with Vite
- Route-based UI using React Router

---

## 🛠 Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Environment Configuration
Create a `.env` file in the frontend root with:
```bash
VITE_BASE_URL=http://localhost:5000
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

---

## 🔧 Technology Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- React Markdown
- ESLint

---

## 💡 Usage

1. Start the backend from `ai-agent-mcp-backend/`
2. Start the frontend with `npm run dev`
3. Open `http://localhost:5173`
4. Use the AI Assistant chat interface
5. Login and interact with chat-based workflows

---

## 📝 Notes

- The frontend uses `import.meta.env.VITE_BASE_URL` to call the backend API.
- `src/api/api.js` handles chat, logout, current user, and future deep-search requests.
- `App.jsx` defines routes for `/`, `/login`, `/chat`, and `/how-to-use`.
- Session IDs are passed in the chat request header `x-session-id`.
