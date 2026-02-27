import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Careers from "./pages/Careers";
import About from "./pages/About";
import EarlyAccess from "./pages/EarlyAccess";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/technology", label: "Technology" },
    { path: "/about", label: "About" },
    { path: "/careers", label: "Careers" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          Visl<span className="text-text-secondary">AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/early-access"
            className="text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors"
          >
            Early Access
          </Link>
        </nav>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-surface border-b border-border p-6 flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  location.pathname === link.path
                    ? "text-text-primary"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/early-access"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium bg-white text-black px-6 py-3 rounded-full text-center mt-4"
            >
              Early Access
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-semibold tracking-tight">
            Visl<span className="text-text-secondary">AI</span>
          </span>
          <span className="text-sm text-text-secondary">
            Stealth Mode. Gurugram, India.
          </span>
        </div>
        <div className="flex gap-6 text-sm text-text-secondary">
          <Link
            to="/technology"
            className="hover:text-text-primary transition-colors"
          >
            Technology
          </Link>
          <Link
            to="/about"
            className="hover:text-text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/careers"
            className="hover:text-text-primary transition-colors"
          >
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pt-20 min-h-screen flex flex-col"
      >
        <main className="flex-grow">{children}</main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/technology"
          element={
            <PageWrapper>
              <Technology />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route
          path="/careers"
          element={
            <PageWrapper>
              <Careers />
            </PageWrapper>
          }
        />
        <Route
          path="/early-access"
          element={
            <PageWrapper>
              <EarlyAccess />
            </PageWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
