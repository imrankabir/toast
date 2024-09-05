const show = (message, className) => {
  const toastContainer = document.querySelector("#toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${className}`;
  toast.textContent = message || `This is a toast message.`;
  toastContainer.appendChild(toast);
  setTimeout(e => toast.remove(), 3000);
};
