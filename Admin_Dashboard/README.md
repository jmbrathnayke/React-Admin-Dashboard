# 📊 React Admin Dashboard

A modern, responsive admin dashboard built with React, featuring authentication, dark mode, and comprehensive data management capabilities.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Features

- 🔐 **Authentication System** - Secure login with Firebase integration
- 🌓 **Dark/Light Mode** - Theme switching with persistent preferences
- 📈 **Dashboard Analytics** - Interactive charts and metric cards
- 👥 **User Management** - Complete CRUD operations for users
- 🛍️ **Product Management** - Inventory tracking and management
- 🎨 **Modern UI Components** - Reusable and customizable components
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔍 **Search & Filter** - Advanced data filtering capabilities
- 📊 **Data Tables** - Sortable and paginated tables
- ⚙️ **Settings Panel** - User preferences and configuration

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jmbrathnayke/React-Admin-Dashboard.git
   cd Admin_Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase** (Optional - for authentication)
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Add your Firebase configuration to `src/Firebase/firebase.js`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Admin_Dashboard/
├── src/
│   ├── Components/
│   │   ├── Layouts/          # Layout components (Navbar, Sidebar)
│   │   └── Ui/               # Reusable UI components
│   ├── Context/              # React Context (Auth, Theme)
│   ├── Data/                 # Mock data and constants
│   ├── Firebase/             # Firebase configuration
│   ├── Pages/                # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Products.jsx
│   │   ├── Users.jsx
│   │   └── Setting.jsx
│   ├── Routes/               # Route configuration
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── package.json
└── vite.config.js
```

## 🛠️ Built With

- **[React 19.2.0](https://react.dev/)** - UI library
- **[Vite 7.2.5](https://vitejs.dev/)** - Build tool and dev server
- **[React Router 7.10.1](https://reactrouter.com/)** - Client-side routing
- **[Tailwind CSS 4.1.18](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Firebase](https://firebase.google.com/)** - Authentication and backend services

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `http://localhost:5173` |
| `npm run build` | Build for production in `dist/` folder |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Key Components

### UI Components
- **Avatar** - User profile images with fallback
- **Card** - Container component for content sections
- **MetricCard** - Display key metrics and statistics
- **Pagination** - Navigate through large datasets
- **ProgressBar** - Visual progress indicator
- **SearchInput** - Search functionality with icons
- **StatCard** - Statistical data display
- **StatusBadge** - Status indicators
- **Table** - Data table with sorting and selection
- **Tabs** - Tabbed interface navigation

### Layouts
- **Navbar** - Top navigation bar
- **Sidebar** - Side navigation menu
- **Layout** - Main layout wrapper

### Context Providers
- **AuthContext** - Authentication state management
- **ThemeContext** - Theme (dark/light) management

## 🔒 Authentication

The dashboard uses Firebase Authentication. To enable:

1. Create a Firebase project
2. Enable Email/Password authentication
3. Add your config to `src/Firebase/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 🎯 Pages

- **Dashboard** - Overview with metrics and charts
- **Users** - User management with table view
- **Products** - Product inventory management
- **Settings** - User preferences and configuration
- **Login** - Authentication page

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**jmbrathnayke**
- GitHub: [@jmbrathnayke](https://github.com/jmbrathnayke)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

⭐ Star this repo if you find it helpful!
