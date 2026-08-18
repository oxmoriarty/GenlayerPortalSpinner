import './style.css';
import { createIcons, Search, Bell, Download, Terminal, Shield, Users, ArrowUp, BarChart2, Coins, Globe, Layers, Settings, Boxes, Puzzle, Home } from 'lucide';

// The SVG Spinner Function
const getSpinner = (size: 'small' | 'medium' | 'large', whiteStroke = false) => `
<div class="genlayer-spinner ${size}">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path class="gl-path gl-center ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 99,95 L 92,109 L 92,111 L 86,122 L 86,124 L 98,130 L 101,130 L 113,124 L 113,122 Z" />
    <path class="gl-path gl-right ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 107,28 L 107,77 L 132,128 L 130,132 L 109,142 L 174,167 Z" />
    <path class="gl-path gl-left ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 92,28 L 25,167 L 90,142 L 69,132 L 67,128 L 92,77 Z" />
  </svg>
</div>
`;

// Define Page Content Templates
const pages: Record<string, string> = {
  'metrics': `
    <div class="page-header">
      <h1>Portal contributors</h1>
    </div>
    <div class="metrics-grid">
      <div class="metric-card">
        <div class="metric-icon orange"><i data-lucide="terminal"></i></div>
        <div class="metric-data"><span class="metric-value">2,204</span><span class="metric-label">Builders</span></div>
      </div>
      <div class="metric-card">
        <div class="metric-icon blue"><i data-lucide="shield"></i></div>
        <div class="metric-data"><span class="metric-value">46</span><span class="metric-label">Validators</span></div>
      </div>
      <div class="metric-card">
        <div class="metric-icon purple"><i data-lucide="users"></i></div>
        <div class="metric-data"><span class="metric-value">16,548</span><span class="metric-label">Creators</span></div>
      </div>
      <div class="metric-card">
        <div class="metric-icon black"><div style="width: 24px; height: 24px; background: url('/media_1786988276128.png') no-repeat center/contain;"></div></div>
        <div class="metric-data"><span class="metric-value">16,967</span><span class="metric-label">Unique contributors</span></div>
      </div>
    </div>
    <div class="chart-container">
      <div class="chart-header">
        <div class="chart-title">
          <h2>Growth trajectory</h2>
          <p>Daily cumulative contributors by Portal category.</p>
        </div>
        <button class="icon-btn" id="btn-refresh"><i data-lucide="download"></i></button>
      </div>
      <div class="chart-body">
        <div class="loading-overlay" id="chart-loading">${getSpinner('large')}<span>Syncing Chart...</span></div>
        <svg viewBox="0 0 800 300" class="real-chart" preserveAspectRatio="none">
          <defs>
            <linearGradient id="orange-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#f97316" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <line x1="0" y1="100" x2="800" y2="100" stroke="#cbd5e1" stroke-dasharray="4,4"/>
          <line x1="0" y1="200" x2="800" y2="200" stroke="#cbd5e1" stroke-dasharray="4,4"/>
          <!-- Realistic Wavy Line Chart -->
          <path d="M 0,280 Q 50,280 100,260 T 200,240 T 300,180 T 400,160 T 500,80 T 600,60 T 700,30 T 800,20" fill="none" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>
          <path d="M 0,280 Q 50,280 100,260 T 200,240 T 300,180 T 400,160 T 500,80 T 600,60 T 700,30 T 800,20 L 800,300 L 0,300 Z" fill="url(#orange-grad)"/>
          <path d="M 0,290 Q 150,290 200,280 T 300,230 T 400,200 T 500,120 T 600,110 T 700,90 T 800,80" fill="none" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  `,
  'overview': `<div class="empty-state"><i data-lucide="home"></i><h2>Overview Dashboard</h2><p>Welcome back, Moriarty.</p></div>`,
  'points': `<div class="empty-state"><i data-lucide="coins"></i><h2>GenLayer Points</h2><p>Your total staked points and rewards.</p></div>`,
  'testnets': `<div class="empty-state"><i data-lucide="globe"></i><h2>Active Testnets</h2><p>Network status: Healthy.</p></div>`,
  'builders': `<div class="empty-state"><i data-lucide="terminal"></i><h2>Builders Portal</h2><p>Deploy contracts and view documentation.</p></div>`,
  'genesis': `<div class="empty-state"><i data-lucide="layers"></i><h2>Genesis Allocation</h2><p>View genesis block distribution.</p></div>`
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app-container">
    <!-- Floating Sidebar -->
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo"></div>
        GenLayer
      </div>
      <div class="sidebar-nav" id="sidebar-menu">
        <a data-page="overview" class="nav-item"><i data-lucide="home"></i> Overview</a>
        <a data-page="points" class="nav-item"><i data-lucide="coins"></i> Points</a>
        <a data-page="testnets" class="nav-item"><i data-lucide="globe"></i> Testnets</a>
        <a data-page="metrics" class="nav-item active indicator"><i data-lucide="bar-chart-2"></i> Metrics</a>
        
        <div class="sidebar-section-title">Contribute</div>
        <a data-page="builders" class="nav-item"><i data-lucide="terminal"></i> Builders</a>
        <a data-page="validators" class="nav-item"><i data-lucide="shield"></i> Validators</a>
        
        <div class="sidebar-section-title">Discover</div>
        <a data-page="genesis" class="nav-item"><i data-lucide="layers"></i> Genesis</a>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="main-wrapper">
      <!-- Floating Navbar -->
      <header class="navbar">
        <div class="search-container">
          <i data-lucide="search"></i>
          <input type="text" class="search-input" placeholder="Search addresses, blocks..." />
        </div>
        <div class="nav-right">
          <button class="icon-btn"><i data-lucide="bell"></i></button>
          <button class="btn-primary" id="btn-submit">Submit a contribution</button>
          <div class="user-profile"></div>
        </div>
      </header>

      <!-- Main Router View -->
      <main class="main-content">
        <div class="page-loader" id="page-loader">
          ${getSpinner('large')}
          <p>Connecting to GenLayer...</p>
        </div>
        <div id="router-view">
          ${pages['metrics']}
        </div>
      </main>
    </div>
  </div>
`;

// Re-initialize icons
const refreshIcons = () => createIcons({ icons: { Search, Bell, Download, Terminal, Shield, Users, ArrowUp, BarChart2, Coins, Globe, Layers, Settings, Boxes, Puzzle, Home } });
refreshIcons();

// --- Routing & Loading Logic ---
const pageLoader = document.getElementById('page-loader')!;
const routerView = document.getElementById('router-view')!;
const sidebarLinks = document.querySelectorAll('.nav-item[data-page]');

sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('data-page') || 'overview';
    
    // Update active class
    sidebarLinks.forEach(l => l.classList.remove('active', 'indicator'));
    link.classList.add('active', 'indicator');

    // Show Full Page Spinner
    pageLoader.classList.add('active');
    
    setTimeout(() => {
      // Inject new page content or empty state
      routerView.innerHTML = pages[pageId] || `<div class="empty-state"><i data-lucide="puzzle"></i><h2>\${pageId}</h2><p>Content is still syncing.</p></div>`;
      refreshIcons();
      pageLoader.classList.remove('active');
      setupChartRefresh(); // Re-attach event listener if metrics page
    }, 1500); // 1.5s simulated wait
  });
});

// --- Action Logic ---
const submitBtn = document.getElementById('btn-submit') as HTMLButtonElement;
submitBtn?.addEventListener('click', () => {
  submitBtn.disabled = true;
  submitBtn.innerHTML = `${getSpinner('small', true)} Processing...`;
  setTimeout(() => {
    submitBtn.innerHTML = `Success!`;
    submitBtn.style.backgroundColor = '#10b981';
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Submit a contribution`;
      submitBtn.style.backgroundColor = '';
    }, 2000);
  }, 2500);
});

const setupChartRefresh = () => {
  const refreshBtn = document.getElementById('btn-refresh');
  refreshBtn?.addEventListener('click', () => {
    const chartLoading = document.getElementById('chart-loading');
    if (chartLoading) {
      chartLoading.classList.add('active');
      setTimeout(() => chartLoading.classList.remove('active'), 2000);
    }
  });
};
setupChartRefresh();

