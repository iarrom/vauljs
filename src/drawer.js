// src/drawer.js

class Drawer {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.overlay = null;
      this.content = null;
      this.isOpen = false;
      this.startY = 0;
      this.currentY = 0;
    }
  
    createDrawer(content) {
      this.overlay = document.createElement('div');
      this.overlay.className = 'drawer-overlay';
  
      this.content = document.createElement('div');
      this.content.className = 'drawer-content';
      this.content.innerHTML = content;
  
      this.overlay.appendChild(this.content);
      this.container.appendChild(this.overlay);
  
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });
  
      this.addTouchEvents();
    }
  
    addTouchEvents() {
      this.content.addEventListener('touchstart', (e) => {
        this.startY = e.touches[0].clientY;
      });
  
      this.content.addEventListener('touchmove', (e) => {
        this.currentY = e.touches[0].clientY;
        const deltaY = this.currentY - this.startY;
  
        if (deltaY > 0) {
          this.content.style.transform = `translateY(${deltaY}px)`;
        }
      });
  
      this.content.addEventListener('touchend', () => {
        const deltaY = this.currentY - this.startY;
        if (deltaY > 100) {
          this.close();
        } else {
          this.content.style.transform = `translateY(0)`;
        }
      });
    }
  
    open(content) {
      if (this.isOpen) return;
  
      this.createDrawer(content);
      setTimeout(() => {
        this.overlay.classList.add('active');
        this.content.classList.add('active');
        this.isOpen = true;
      }, 10);
    }
  
    close() {
      if (!this.isOpen) return;
  
      this.overlay.classList.remove('active');
      this.content.classList.remove('active');
  
      setTimeout(() => {
        this.container.removeChild(this.overlay);
        this.overlay = null;
        this.content = null;
        this.isOpen = false;
      }, 300);
    }
  }
  
  // Default export
  const drawerInstance = new Drawer('modal-container');
  export default drawerInstance;
  