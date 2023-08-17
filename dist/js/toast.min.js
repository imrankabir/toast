const showToast = (message, className) => {
    const toastContainer = document.querySelector('#toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${className}`;
    toast.textContent = message || `This is a toast message.`;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
};
