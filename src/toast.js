const toast = {
  initialized: false,
  init() {
    if (this.initialized === true) return this;
    this.initialized = true;
    const body = document.querySelector("body");
    const toast = document.createElement("div");
    toast.setAttribute("id", "toastContainer");
    toast.classList.add("toast-container");
    body.append(toast);
    return this;
  },
  show(message = "This is a toast message.", className = "") {
    const toast = document.createElement("div");
    const toastContainer = document.querySelector("#toastContainer");
    toast.className = className ? `toast ${className}` : "toast";
    toast.textContent = message || `This is a toast message.`;
    toastContainer.appendChild(toast);
    setTimeout(e => toast.remove(), 3000);
    return this;
  },
};
toast.init();
