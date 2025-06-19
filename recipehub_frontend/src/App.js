import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function RecipeListingPlaceholder() {
  /** Placeholder for Recipe Listing component */
  return (
    <div className="placeholder">
      <h2>Recipe Listing</h2>
      <p>View and browse all recipes here.</p>
    </div>
  );
}

// PUBLIC_INTERFACE
function RecipeDetailsPlaceholder() {
  /** Placeholder for Recipe Details component */
  return (
    <div className="placeholder">
      <h2>Recipe Details</h2>
      <p>See detailed information about the selected recipe here.</p>
    </div>
  );
}

// PUBLIC_INTERFACE
function AuthPlaceholder() {
  /** Placeholder for User Authentication (Login/Register) */
  return (
    <div className="placeholder">
      <h2>User Authentication</h2>
      <p>Login and registration functionality goes here.</p>
    </div>
  );
}

// PUBLIC_INTERFACE
function RecipeEditorPlaceholder() {
  /** Placeholder for Add/Edit Recipes */
  return (
    <div className="placeholder">
      <h2>Add / Edit Recipe</h2>
      <p>Create a new recipe or edit an existing one here.</p>
    </div>
  );
}

const SIDEBAR_ITEMS = [
  { key: 'listing', label: 'Recipes', color: 'var(--primary)' },
  { key: 'details', label: 'Recipe Details', color: 'var(--secondary)' },
  { key: 'editor', label: 'Add/Edit Recipe', color: 'var(--accent)' },
  { key: 'auth', label: 'Login / Register', color: 'var(--primary)' },
];

// PUBLIC_INTERFACE
function App() {
  /**
   * Main RecipeHub container with navigation and dynamic main content.
   */
  const [active, setActive] = useState('listing');

  function renderContent() {
    switch (active) {
      case 'listing':
        return <RecipeListingPlaceholder />;
      case 'details':
        return <RecipeDetailsPlaceholder />;
      case 'editor':
        return <RecipeEditorPlaceholder />;
      case 'auth':
        return <AuthPlaceholder />;
      default:
        return <RecipeListingPlaceholder />;
    }
  }

  return (
    <div className="recipehub-app light-theme">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-logo">🥗</span>
          <span className="sidebar-title">RecipeHub</span>
        </div>
        <nav className="sidebar-nav">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.key}
              className={`sidebar-link${active === item.key ? ' active' : ''}`}
              style={active === item.key ? { background: `var(--sidebar-active-bg)` } : {}}
              onClick={() => setActive(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1 className="main-title">{SIDEBAR_ITEMS.find(s => s.key === active)?.label || 'Recipes'}</h1>
        </header>
        <section className="main-section">
          {renderContent()}
        </section>
      </main>
    </div>
  );
}

export default App;
