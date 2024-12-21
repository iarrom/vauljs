class s {
  constructor(t) {
    this.container = document.getElementById(t), this.overlay = null, this.content = null, this.isOpen = !1, this.startY = 0, this.currentY = 0;
  }
  createDrawer(t) {
    this.overlay = document.createElement("div"), this.overlay.className = "drawer-overlay", this.content = document.createElement("div"), this.content.className = "drawer-content", this.content.innerHTML = t, this.overlay.appendChild(this.content), this.container.appendChild(this.overlay), this.overlay.addEventListener("click", (e) => {
      e.target === this.overlay && this.close();
    }), this.addTouchEvents();
  }
  addTouchEvents() {
    this.content.addEventListener("touchstart", (t) => {
      this.startY = t.touches[0].clientY;
    }), this.content.addEventListener("touchmove", (t) => {
      this.currentY = t.touches[0].clientY;
      const e = this.currentY - this.startY;
      e > 0 && (this.content.style.transform = `translateY(${e}px)`);
    }), this.content.addEventListener("touchend", () => {
      this.currentY - this.startY > 100 ? this.close() : this.content.style.transform = "translateY(0)";
    });
  }
  open(t) {
    this.isOpen || (this.createDrawer(t), setTimeout(() => {
      this.overlay.classList.add("active"), this.content.classList.add("active"), this.isOpen = !0;
    }, 10));
  }
  close() {
    this.isOpen && (this.overlay.classList.remove("active"), this.content.classList.remove("active"), setTimeout(() => {
      this.container.removeChild(this.overlay), this.overlay = null, this.content = null, this.isOpen = !1;
    }, 300));
  }
}
const n = new s("modal-container");
window.Drawer = n;
