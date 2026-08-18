import './style.css';
import { createIcons, Search, Bell, Download, Terminal, Shield, Users, ArrowUp, BarChart2, Coins, Globe, Layers, Settings, Boxes, Puzzle, Home, Activity, Code, Server, CheckCircle2, Clock, Sliders } from 'lucide';

const getSpinner = (size: 'small' | 'medium' | 'large' | 'custom', whiteStroke = false) => `
<div class="genlayer-spinner ${size}">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path class="gl-path gl-center ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 99,95 L 92,109 L 92,111 L 86,122 L 86,124 L 98,130 L 101,130 L 113,124 L 113,122 Z" />
    <path class="gl-path gl-right ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 107,28 L 107,77 L 132,128 L 130,132 L 109,142 L 174,167 Z" />
    <path class="gl-path gl-left ${whiteStroke ? 'white-stroke filled-white' : ''}" d="M 92,28 L 25,167 L 90,142 L 69,132 L 67,128 L 92,77 Z" />
  </svg>
</div>
`;

const pages: Record<string, string> = {
  'metrics': `
    <div class="page-header"><h1>Portal contributors</h1></div>
    <div class="metrics-grid">
      <div class="metric-card"><div class="metric-icon orange"><i data-lucide="terminal"></i></div><div class="metric-data"><span class="metric-value">2,204</span><span class="metric-label">Builders</span></div></div>
      <div class="metric-card"><div class="metric-icon blue"><i data-lucide="shield"></i></div><div class="metric-data"><span class="metric-value">46</span><span class="metric-label">Validators</span></div></div>
      <div class="metric-card"><div class="metric-icon purple"><i data-lucide="users"></i></div><div class="metric-data"><span class="metric-value">16,548</span><span class="metric-label">Creators</span></div></div>
      <div class="metric-card"><div class="metric-icon black"><div style="width: 24px; height: 24px; background: url('/media_1786988276128.png') no-repeat center/contain;"></div></div><div class="metric-data"><span class="metric-value">16,967</span><span class="metric-label">Unique contributors</span></div></div>
    </div>
    <div class="chart-container">
      <div class="chart-header">
        <div class="chart-title"><h2>Growth trajectory</h2><p>Daily cumulative contributors by Portal category.</p></div>
        <button class="icon-btn" id="btn-refresh"><i data-lucide="download"></i></button>
      </div>
      <div class="chart-body">
        <div class="loading-overlay" id="chart-loading">${getSpinner('large')}<span>Syncing Chart...</span></div>
        <svg viewBox="0 0 800 300" class="real-chart" preserveAspectRatio="none">
          <defs>
            <linearGradient id="orange-grad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f97316" stop-opacity="0.3"/><stop offset="100%" stop-color="#f97316" stop-opacity="0"/></linearGradient>
          </defs>
          <line x1="0" y1="100" x2="800" y2="100" stroke="#cbd5e1" stroke-dasharray="4,4"/><line x1="0" y1="200" x2="800" y2="200" stroke="#cbd5e1" stroke-dasharray="4,4"/>
          <path d="M 0,280 Q 50,280 100,260 T 200,240 T 300,180 T 400,160 T 500,80 T 600,60 T 700,30 T 800,20" fill="none" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>
          <path d="M 0,280 Q 50,280 100,260 T 200,240 T 300,180 T 400,160 T 500,80 T 600,60 T 700,30 T 800,20 L 800,300 L 0,300 Z" fill="url(#orange-grad)"/>
          <path d="M 0,290 Q 150,290 200,280 T 300,230 T 400,200 T 500,120 T 600,110 T 700,90 T 800,80" fill="none" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  `,
  'playground': `
    <div class="page-header"><h1>Spinner Playground</h1></div>
    <p style="margin-bottom: 24px; color: var(--text-muted);">Customize the GenLayer SVG spinner. Variables apply in real-time!</p>
    
    <div style="display: flex; gap: 32px; flex-wrap: wrap;">
      <!-- Controls -->
      <div class="chart-container" style="flex: 1; min-width: 300px; min-height: auto; padding: 32px;">
        <h3 style="margin-bottom: 24px;">CSS Variables</h3>
        
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <label style="display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 500;">
              <span>Size</span> <span id="val-size">64px</span>
            </label>
            <input type="range" id="input-size" min="16" max="250" value="64" style="width: 100%;" />
          </div>
          
          <div>
            <label style="display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 500;">
              <span>Stroke Color</span> <span id="val-color">#a855f7</span>
            </label>
            <input type="color" id="input-color" value="#a855f7" style="width: 100%; height: 40px; border: none; border-radius: 8px; cursor: pointer;" />
          </div>
          
          <div>
            <label style="display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 500;">
              <span>Animation Speed</span> <span id="val-speed">2.0s</span>
            </label>
            <input type="range" id="input-speed" min="0.5" max="5" step="0.1" value="2" style="width: 100%;" />
          </div>
          
          <div>
            <label style="display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 500;">
              <span>Stroke Width</span> <span id="val-stroke">3px</span>
            </label>
            <input type="range" id="input-stroke" min="1" max="15" step="0.5" value="3" style="width: 100%;" />
          </div>
        </div>
      </div>
      
      <!-- Live Preview -->
      <div class="chart-container" style="flex: 1; min-width: 300px; display: flex; justify-content: center; align-items: center; background: var(--bg-solid); position: relative;">
        <div style="position: absolute; top: 16px; left: 16px; font-size: 0.8rem; font-weight: 600; color: var(--text-light); text-transform: uppercase;">Live Preview</div>
        
        <div id="preview-wrapper" style="width: 64px; height: 64px; --spinner-color: #a855f7; --spinner-speed: 2s; --spinner-stroke: 3;">
          ${getSpinner('custom')}
        </div>
      </div>
    </div>
  `,
  'overview': `<div class="page-header"><h1>Overview Dashboard</h1></div><div class="metrics-grid"><div class="metric-card" style="grid-column: span 2; background: linear-gradient(135deg, var(--purple-brand), var(--accent-blue)); color: white;"><div class="metric-data" style="color: white;"><span class="metric-label" style="color: rgba(255,255,255,0.8);">Welcome back,</span><span class="metric-value">Moriarty</span><p style="margin-top: 12px; font-size: 0.9rem; opacity: 0.9;">Your GenLayer node is running perfectly. You have earned 450 points this week.</p></div></div><div class="metric-card"><div class="metric-icon purple"><i data-lucide="activity"></i></div><div class="metric-data"><span class="metric-value">99.9%</span><span class="metric-label">Network Uptime</span></div></div></div><div class="table-container"><h3>Recent Activity</h3><table class="data-table"><tr><th>Action</th><th>Tx Hash</th><th>Time</th><th>Status</th></tr><tr><td>Contract Deployed</td><td>0x8f4b...3a91</td><td>2 mins ago</td><td><span class="badge success"><i data-lucide="check-circle-2"></i> Success</span></td></tr><tr><td>Validator Reward</td><td>0x22c1...9b00</td><td>1 hour ago</td><td><span class="badge success"><i data-lucide="check-circle-2"></i> Success</span></td></tr><tr><td>Node Sync</td><td>-</td><td>3 hours ago</td><td><span class="badge pending"><i data-lucide="clock"></i> Syncing</span></td></tr></table></div>`,
  'points': `<div class="page-header"><h1>GenLayer Points</h1></div><div class="metrics-grid"><div class="metric-card" style="grid-column: span 2; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 8px;"><span class="metric-label">Total Accumulated Points</span><span class="metric-value" style="font-size: 3rem; color: var(--purple-brand);">14,582.50 <span style="font-size: 1rem; color: var(--text-muted);">PTS</span></span></div></div><div class="table-container"><h3>Points Breakdown</h3><table class="data-table"><tr><th>Category</th><th>Amount</th><th>Last Updated</th></tr><tr><td>Early Adopter Bonus</td><td>+5,000.00</td><td>Jan 12, 2026</td></tr><tr><td>Validator Uptime Rewards</td><td>+7,240.50</td><td>Aug 17, 2026</td></tr><tr><td>GitHub Contributions</td><td>+2,342.00</td><td>Aug 15, 2026</td></tr></table></div>`,
  'testnets': `<div class="page-header"><h1>Active Testnets</h1></div><div class="metrics-grid"><div class="metric-card"><div class="metric-data" style="width: 100%;"><div style="display: flex; justify-content: space-between; margin-bottom: 16px;"><strong>GenLayer Sepolia</strong><span class="badge success">Active</span></div><p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">Block Height: <strong>14,592,102</strong></p><div class="rpc-box">rpc.sepolia.genlayer.network</div></div></div><div class="metric-card"><div class="metric-data" style="width: 100%;"><div style="display: flex; justify-content: space-between; margin-bottom: 16px;"><strong>GenLayer Devnet-3</strong><span class="badge pending">Upgrading</span></div><p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">Block Height: <strong>8,102,441</strong></p><div class="rpc-box">rpc.devnet.genlayer.network</div></div></div></div>`,
  'builders': `<div class="page-header"><h1>Builders Portal</h1><button class="btn-primary"><i data-lucide="code"></i> Deploy Contract</button></div><div class="table-container"><h3>Your Deployed Contracts</h3><table class="data-table"><tr><th>Contract Name</th><th>Address</th><th>Network</th><th>Interactions</th></tr><tr><td>GenToken.sol</td><td>0x44a...11f8</td><td>Sepolia</td><td>14,204</td></tr><tr><td>LiquidityPool.sol</td><td>0x99b...88a1</td><td>Sepolia</td><td>3,102</td></tr><tr><td>OracleConsumer.sol</td><td>0x11c...77b2</td><td>Devnet-3</td><td>45</td></tr></table></div>`,
  'validators': `<div class="page-header"><h1>Validators Hub</h1></div><div class="metrics-grid"><div class="metric-card"><div class="metric-icon blue"><i data-lucide="server"></i></div><div class="metric-data"><span class="metric-value">Active</span><span class="metric-label">Node Status</span></div></div><div class="metric-card"><div class="metric-icon orange"><i data-lucide="activity"></i></div><div class="metric-data"><span class="metric-value">45%</span><span class="metric-label">CPU Usage</span></div></div><div class="metric-card"><div class="metric-icon purple"><i data-lucide="boxes"></i></div><div class="metric-data"><span class="metric-value">50,000</span><span class="metric-label">Staked GL</span></div></div></div><div class="table-container"><h3>Node Health Logs</h3><div style="background: #1e293b; color: #38bdf8; padding: 16px; border-radius: 8px; font-family: monospace; font-size: 0.85rem;">> [INFO] Syncing block 14,592,102... SUCCESS<br>> [INFO] Validating consensus signature... VERIFIED<br>> [INFO] Connected to 24 peers.<br><span style="color: #4ade80;">> [SUCCESS] Node operating optimally.</span></div></div>`,
  'genesis': `<div class="page-header"><h1>Genesis Allocation</h1></div><div style="display: flex; gap: 32px; align-items: center; background: white; padding: 40px; border-radius: 16px; border: 1px solid var(--border-color);"><div style="width: 200px; height: 200px; border-radius: 50%; background: conic-gradient(var(--purple-brand) 0% 40%, var(--accent-blue) 40% 70%, var(--accent-orange) 70% 90%, #cbd5e1 90% 100%); box-shadow: 0 10px 25px rgba(0,0,0,0.1);"></div><div style="flex: 1;"><h3 style="margin-bottom: 16px; font-size: 1.4rem;">Token Distribution</h3><ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;"><li style="display: flex; align-items: center; gap: 8px;"><span style="width: 16px; height: 16px; border-radius: 4px; background: var(--purple-brand);"></span> <strong>40%</strong> Community Rewards & Airdrop</li><li style="display: flex; align-items: center; gap: 8px;"><span style="width: 16px; height: 16px; border-radius: 4px; background: var(--accent-blue);"></span> <strong>30%</strong> Ecosystem Development</li><li style="display: flex; align-items: center; gap: 8px;"><span style="width: 16px; height: 16px; border-radius: 4px; background: var(--accent-orange);"></span> <strong>20%</strong> Core Contributors</li><li style="display: flex; align-items: center; gap: 8px;"><span style="width: 16px; height: 16px; border-radius: 4px; background: #cbd5e1;"></span> <strong>10%</strong> Initial Liquidity Providers</li></ul></div></div>`
};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="app-container">
    <aside class="sidebar">
      <div class="brand"><div class="brand-logo"></div>GenLayer</div>
      <div class="sidebar-nav" id="sidebar-menu">
        <a data-page="overview" class="nav-item"><i data-lucide="home"></i> Overview</a>
        <a data-page="points" class="nav-item"><i data-lucide="coins"></i> Points</a>
        <a data-page="testnets" class="nav-item"><i data-lucide="globe"></i> Testnets</a>
        <a data-page="metrics" class="nav-item active indicator"><i data-lucide="bar-chart-2"></i> Metrics</a>
        <a data-page="playground" class="nav-item"><i data-lucide="sliders"></i> Playground <span class="badge pending" style="margin-left:auto; font-size:0.6rem; padding: 2px 6px;">NEW</span></a>
        
        <div class="sidebar-section-title">Contribute</div>
        <a data-page="builders" class="nav-item"><i data-lucide="terminal"></i> Builders</a>
        <a data-page="validators" class="nav-item"><i data-lucide="shield"></i> Validators</a>
        
        <div class="sidebar-section-title">Discover</div>
        <a data-page="genesis" class="nav-item"><i data-lucide="layers"></i> Genesis</a>
      </div>
    </aside>

    <div class="main-wrapper">
      <header class="navbar">
        <div class="search-container"><i data-lucide="search"></i><input type="text" class="search-input" placeholder="Search addresses, blocks..." /></div>
        <div class="nav-right">
          <button class="icon-btn"><i data-lucide="bell"></i></button>
          <button class="btn-primary" id="btn-submit">Submit a contribution</button>
          <div class="user-profile"></div>
        </div>
      </header>

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

const refreshIcons = () => createIcons({ icons: { Search, Bell, Download, Terminal, Shield, Users, ArrowUp, BarChart2, Coins, Globe, Layers, Settings, Boxes, Puzzle, Home, Activity, Code, Server, CheckCircle2, Clock, Sliders } });
refreshIcons();

// Routing Logic
const pageLoader = document.getElementById('page-loader')!;
const routerView = document.getElementById('router-view')!;
const sidebarLinks = document.querySelectorAll('.nav-item[data-page]');

sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('data-page') || 'overview';
    sidebarLinks.forEach(l => l.classList.remove('active', 'indicator'));
    link.classList.add('active', 'indicator');
    pageLoader.classList.add('active');
    
    setTimeout(() => {
      routerView.innerHTML = pages[pageId];
      refreshIcons();
      pageLoader.classList.remove('active');
      setupPageScripts(pageId);
    }, 1200); 
  });
});

// Setup Page-Specific Logic
function setupPageScripts(pageId: string) {
  if (pageId === 'metrics') {
    const refreshBtn = document.getElementById('btn-refresh');
    refreshBtn?.addEventListener('click', () => {
      const chartLoading = document.getElementById('chart-loading');
      if (chartLoading) {
        chartLoading.classList.add('active');
        setTimeout(() => chartLoading.classList.remove('active'), 2000);
      }
    });
  }
  
  if (pageId === 'playground') {
    const wrapper = document.getElementById('preview-wrapper');
    const inputSize = document.getElementById('input-size') as HTMLInputElement;
    const inputColor = document.getElementById('input-color') as HTMLInputElement;
    const inputSpeed = document.getElementById('input-speed') as HTMLInputElement;
    const inputStroke = document.getElementById('input-stroke') as HTMLInputElement;
    
    const valSize = document.getElementById('val-size');
    const valColor = document.getElementById('val-color');
    const valSpeed = document.getElementById('val-speed');
    const valStroke = document.getElementById('val-stroke');

    const updatePreview = () => {
      if (!wrapper) return;
      wrapper.style.width = `\${inputSize.value}px`;
      wrapper.style.height = `\${inputSize.value}px`;
      wrapper.style.setProperty('--spinner-color', inputColor.value);
      wrapper.style.setProperty('--spinner-speed', `\${inputSpeed.value}s`);
      wrapper.style.setProperty('--spinner-stroke', inputStroke.value);
      
      if(valSize) valSize.innerText = `\${inputSize.value}px`;
      if(valColor) valColor.innerText = inputColor.value;
      if(valSpeed) valSpeed.innerText = `\${inputSpeed.value}s`;
      if(valStroke) valStroke.innerText = `\${inputStroke.value}px`;
    };

    inputSize?.addEventListener('input', updatePreview);
    inputColor?.addEventListener('input', updatePreview);
    inputSpeed?.addEventListener('input', updatePreview);
    inputStroke?.addEventListener('input', updatePreview);
  }
}

// Initial setup
setupPageScripts('metrics');

// Global submit button
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

