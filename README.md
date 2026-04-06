# MCP AI Assistant - Frontend

A React + Vite powered AI Assistant frontend that integrates with MCP (Model Context Protocol) services for Gmail, Calendar, and GitHub management. Built with a modern, dark-themed UI using Tailwind CSS.

---

## 📁 Project Structure

```
ai-agent-mcp-frontend/
├── public/                    # Static assets
├── src/
│   ├── components/           # Reusable React components
│   │   ├── ChatAssistant.jsx # Main chat interface component
│   │   ├── ConfirmationModal.jsx # Confirmation dialog for destructive actions
│   │   └── HowToUse.jsx      # Instructions/help modal component
│   ├── assets/               # Image, icon, and media files
│   ├── App.jsx              # Root application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Global styles and Tailwind imports
├── .env                      # Environment variables (API endpoints, etc.)
├── .gitignore               # Git ignore rules
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Project dependencies and scripts
├── vite.config.js           # Vite build configuration
└── README.md                # This file
```

---

## 📄 File Descriptions

### **Root Files**

| File | Purpose |
|------|---------|
| `.env` | Environment configuration (API base URL, backend endpoints) |
| `.gitignore` | Specifies files/folders to exclude from git version control |
| `index.html` | Entry HTML file, loads React app |
| `package.json` | Project metadata, dependencies, and npm scripts |
| `vite.config.js` | Vite bundler configuration |
| `eslint.config.js` | Code linting rules and standards |

### **Source Files (`src/`)**

| File | Purpose |
|------|---------|
| `main.jsx` | ReactDOM rendering entry point, mounts App to DOM |
| `App.jsx` | Root component managing overall layout, routing, and state |
| `App.css` | Application-level styles |
| `index.css` | Global styles, Tailwind CSS imports, and CSS resets |

### **Components (`src/components/`)**

| Component | Purpose |
|-----------|---------|
| `ChatAssistant.jsx` | Main chat interface for AI interactions. Manages message state, user input, API communication with backend, and scrolling. Detects destructive operations and shows confirmation modals. Displays chat messages with markdown support. |
| `ConfirmationModal.jsx` | Modal dialog component for confirming destructive actions (e.g., "Delete All Events"). Displays warning title, confirmation message, and action buttons. |
| `HowToUse.jsx` | Instructions/help modal providing user guidance on how to use different features (Gmail, Calendar, GitHub) with example commands and explanations. |

### **Assets (`src/assets/`)**

Stores images, icons, and static media files used throughout the application.

---

## 🚀 Key Features

- **Chat Interface**: Real-time AI chat with markdown support
- **Destructive Action Protection**: Confirmation modals for sensitive operations
- **Gmail Integration**: View, send, and manage emails
- **Calendar Integration**: View and manage calendar events
- **GitHub Integration**: Search and interact with GitHub repositories
- **Responsive Design**: Dark theme UI optimized for all screen sizes
- **Session Management**: Unique session IDs for tracking conversations

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
Create a `.env` file in the root directory:
```
VITE_API_BASE_URL=http://localhost:5000
VITE_BACKEND_URL=http://localhost:5000/api
```

### Development Server
```bash
npm run dev
```
Runs the app in development mode with HMR (Hot Module Replacement).

### Build for Production
```bash
npm run build
```
Generates optimized production build in the `dist/` folder.

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

- **React**: UI library for building components
- **Vite**: Next-generation frontend build tool
- **Tailwind CSS**: Utility-first CSS framework
- **React Markdown**: For rendering markdown in chat messages
- **ESLint**: Code quality and style enforcement

---

## 💡 Usage

1. **Start the backend** (from `ai-agent-mcp-backend/`)
2. **Run the frontend dev server** (`npm run dev`)
3. **Open browser** at `http://localhost:5173`
4. **Interact with the AI Assistant** using natural language commands
5. **Confirm destructive actions** when prompted

---

## 📝 Notes

- Components use modern React hooks (`useState`, `useRef`, `useEffect`)
- Styling leverages Tailwind CSS utility classes
- The app communicates with a backend API for AI and service integrations
- Session IDs track conversation context across messages
