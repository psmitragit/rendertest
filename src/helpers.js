export function showToastMsg(message, type, time = 5) {
    const toastContainer = document.createElement('div');
    toastContainer.className = `toast-container ${type}`;
    toastContainer.innerText = message;
  
    document.body.appendChild(toastContainer);
  
    setTimeout(() => {
      toastContainer.classList.add('hide');
      setTimeout(() => {
        document.body.removeChild(toastContainer);
      }, 500);
    }, time * 1000); 
}