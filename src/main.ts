import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>GenLayer Spinner</h1>
  </div>
  
  <div class="spinner-sizes">
    <div class="size-label sm">
      <div class="spinner-container">
        <div class="spinner-base"></div>
        <div class="spinner-mask">
          <div class="spinner-sweep"></div>
        </div>
      </div>
      Small (24px)
    </div>
    
    <div class="size-label md">
      <div class="spinner-container">
        <div class="spinner-base"></div>
        <div class="spinner-mask">
          <div class="spinner-sweep"></div>
        </div>
      </div>
      Medium (48px)
    </div>
    
    <div class="size-label lg">
      <div class="spinner-container">
        <div class="spinner-base"></div>
        <div class="spinner-mask">
          <div class="spinner-sweep"></div>
        </div>
      </div>
      Large (96px)
    </div>
  </div>

  <div class="controls">
    <button id="theme-toggle">Toggle Light/Dark Theme</button>
  </div>
`

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn?.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
});
