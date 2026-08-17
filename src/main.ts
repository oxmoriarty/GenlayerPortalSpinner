import './style.css';
import { createIcons, Search, Bell, Download, ChevronRight, Terminal, Shield, Users, ArrowUp } from 'lucide';

// The SVG Spinner
const getSpinner = (size: 'small' | 'medium' | 'large', whiteStroke = false) => `
<div class="genlayer-spinner ${size}">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path class="gl-path gl-center ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 99,95 L 92,109 L 92,111 L 86,122 L 86,124 L 98,130 L 101,130 L 113,124 L 113,122 Z" />
    <path class="gl-path gl-right ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 107,28 L 107,77 L 132,128 L 130,132 L 109,142 L 174,167 Z" />
    <path class="gl-path gl-left ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 92,28 L 25,167 L 90,142 L 69,132 L 67,128 L 92,77 Z" />
  </svg>
</div>
`;

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app-container">
    <!-- Navbar -->
    <header class="navbar">
      <div class="nav-left">
        <div class="brand">
          <div class="brand-logo"></div>
          GenLayer Portal
        </div>
        <div class="nav-stats">
          <div class="nav-stat-item"><i data-lucide="chevron-right"></i> 84.3K</div>
          <div class="nav-stat-item"><i data-lucide="users"></i> 94K</div>
          <div class="nav-stat-item"><i data-lucide="shield"></i> 13.3K</div>
          <div class="nav-stat-item"><i data-lucide="arrow-up"></i> 15.4K</div>
        </div>
      </div>
      <div class="nav-right">
        <button class="btn-outline">✨ What's New</button>
        <button class="icon-btn"><i data-lucide="bell"></i></button>
        <div class="search-container">
          <i data-lucide="search"></i>
          <input type="text" class="search-input" placeholder="Search Participants..." />
        </div>
        <button class="btn-primary" id="btn-submit">
          Submit a contribution +
        </button>
        <div class="user-profile">
          <div class="avatar"></div>
          Moriarty
        </div>
      </div>
    </header>

    <div class="body-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-nav">
          <a href="#" class="nav-item">Overview</a>
          <a href="#" class="nav-item">GenLayer Points</a>
          <a href="#" class="nav-item">Testnets</a>
          <a href="#" class="nav-item active indicator">Metrics</a>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-title">Contribute</div>
          <div class="sidebar-nav">
            <a href="#" class="nav-item"><i data-lucide="terminal"></i> Builders</a>
            <a href="#" class="nav-item"><i data-lucide="shield"></i> Validators</a>
            <a href="#" class="nav-item">Community</a>
            <a href="#" class="nav-item">Stewards</a>
          </div>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-title">Discover</div>
          <div class="sidebar-nav">
            <a href="#" class="nav-item">Genesis</a>
            <a href="#" class="nav-item">How it works</a>
            <a href="#" class="nav-item">My Projects</a>
            <a href="#" class="nav-item">My Submissions</a>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <div class="page-header">
          <h1>Portal contributors</h1>
          <span class="last-updated">Updated Aug 17, 2026</span>
        </div>

        <!-- Metrics Grid -->
        <div class="metrics-grid" id="metrics-container">
          <!-- Initial Loading State -->
          <div class="metric-card loading-mode">${getSpinner('medium')}</div>
          <div class="metric-card loading-mode">${getSpinner('medium')}</div>
          <div class="metric-card loading-mode">${getSpinner('medium')}</div>
          <div class="metric-card loading-mode">${getSpinner('medium')}</div>
        </div>

        <!-- Chart -->
        <div class="chart-container">
          <div class="chart-header">
            <div class="chart-title">
              <h2>Growth trajectory</h2>
              <p>Daily cumulative contributors by Portal category.</p>
            </div>
            <button class="btn-outline icon-btn" id="btn-refresh" title="Refresh Chart"><i data-lucide="download"></i></button>
          </div>
          
          <div class="chart-body" id="chart-body">
            <div class="loading-overlay" id="chart-loading">
              ${getSpinner('large')}
              <span>Syncing with Genlayer Network...</span>
            </div>
            <div class="chart-mockup">
              <div class="chart-line"></div>
              <div class="chart-line-2"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
`;

// Initialize lucide icons
createIcons({
  icons: { Search, Bell, Download, ChevronRight, Terminal, Shield, Users, ArrowUp }
});

// --- Logic to handle loading states ---

// 1. Initial Page Load Simulation for Metrics
setTimeout(() => {
  const metricsContainer = document.getElementById('metrics-container');
  if (metricsContainer) {
    metricsContainer.innerHTML = `
      <div class="metric-card">
        <div class="metric-icon orange"><i data-lucide="terminal"></i></div>
        <div class="metric-data">
          <span class="metric-value">2,204</span>
          <span class="metric-label">Builders</span>
        </div>
      </div>
      <div class="metric-card">
        <div class="metric-icon blue"><i data-lucide="shield"></i></div>
        <div class="metric-data">
          <span class="metric-value">46</span>
          <span class="metric-label">Validators</span>
        </div>
      </div>
      <div class="metric-card">
        <div class="metric-icon purple"><i data-lucide="users"></i></div>
        <div class="metric-data">
          <span class="metric-value">16,548</span>
          <span class="metric-label">Creators</span>
        </div>
      </div>
      <div class="metric-card">
        <div class="metric-icon black">
          <div style="width: 24px; height: 24px; background: url('/media_1786988276128.png') no-repeat center/contain;"></div>
        </div>
        <div class="metric-data">
          <span class="metric-value">16,967</span>
          <span class="metric-label">Unique contributors</span>
        </div>
      </div>
    `;
    // Re-initialize icons inside new HTML
    createIcons({
      icons: { Terminal, Shield, Users }
    });
  }
}, 2500);

// 2. Initial Page Load Simulation for Chart
setTimeout(() => {
  const chartLoading = document.getElementById('chart-loading');
  if (chartLoading) {
    chartLoading.style.display = 'none';
  }
}, 3500);


// 3. Button Action Simulation
const submitBtn = document.getElementById('btn-submit') as HTMLButtonElement;
submitBtn?.addEventListener('click', () => {
  // Set to loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `${getSpinner('small', true)} Processing...`;
  
  // Simulate network request
  setTimeout(() => {
    submitBtn.innerHTML = `Submitted Successfully!`;
    submitBtn.style.backgroundColor = '#10b981'; // Green
    
    // Reset after 2 seconds
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Submit a contribution +`;
      submitBtn.style.backgroundColor = ''; // Reset to default
    }, 2000);
  }, 2500);
});

// 4. Targeted Update Simulation (Refresh Chart)
const refreshBtn = document.getElementById('btn-refresh') as HTMLButtonElement;
refreshBtn?.addEventListener('click', () => {
  const chartLoading = document.getElementById('chart-loading');
  if (chartLoading) {
    // Show loading overlay again
    chartLoading.style.display = 'flex';
    
    // Simulate fetching fresh data
    setTimeout(() => {
      chartLoading.style.display = 'none';
    }, 2000);
  }
});
