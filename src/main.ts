import './style.css';
import { createIcons, LayoutDashboard, Settings, Activity, Folder, Bell } from 'lucide';

const spinnerHTML = `
<div class="genlayer-spinner">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path class="gl-path gl-center" d="M 99,95 L 92,109 L 92,111 L 86,122 L 86,124 L 98,130 L 101,130 L 113,124 L 113,122 Z" />
    <path class="gl-path gl-right" d="M 107,28 L 107,77 L 132,128 L 130,132 L 109,142 L 174,167 Z" />
    <path class="gl-path gl-left" d="M 92,28 L 25,167 L 90,142 L 69,132 L 67,128 L 92,77 Z" />
  </svg>
</div>
`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="portal-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <div class="logo-wrapper">
          ${spinnerHTML.replace('genlayer-spinner', 'genlayer-spinner small')}
        </div>
        <span class="logo-text">GenLayer</span>
      </div>
      <nav class="sidebar-nav">
        <a href="#" class="nav-item active"><i data-lucide="layout-dashboard"></i> Dashboard</a>
        <a href="#" class="nav-item"><i data-lucide="activity"></i> Network</a>
        <a href="#" class="nav-item"><i data-lucide="folder"></i> Contracts</a>
        <a href="#" class="nav-item"><i data-lucide="settings"></i> Settings</a>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Navbar -->
      <header class="navbar">
        <div class="search-bar">
          <input type="text" placeholder="Search transactions, blocks..." />
        </div>
        <div class="nav-actions">
          <button class="icon-btn"><i data-lucide="bell"></i></button>
          <div class="avatar"></div>
        </div>
      </header>

      <!-- Dashboard View -->
      <div class="dashboard-content">
        <h1>Overview</h1>
        
        <div class="metrics-grid">
          <div class="metric-card loading">
            ${spinnerHTML}
          </div>
          <div class="metric-card loading">
            ${spinnerHTML}
          </div>
          <div class="metric-card loading">
            ${spinnerHTML}
          </div>
        </div>

        <div class="recent-activity loading-section">
          <div class="section-header">
            <h2>Recent Activity</h2>
          </div>
          <div class="loading-state">
            ${spinnerHTML}
            <p>Fetching data from GenLayer network...</p>
          </div>
        </div>
      </div>
    </main>
  </div>
`;

createIcons({
  icons: {
    LayoutDashboard,
    Settings,
    Activity,
    Folder,
    Bell
  }
});
