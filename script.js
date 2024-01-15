let toastBox = document.getElementById("toastBox");

let successMsg = '<i class="fi fi-sr-badge-check"></i> Successfully submitted';
let errorMsg = '<i class="fi fi-sr-cross-circle"></i> Please fix the error';
let invalidMsg =
  '<i class="fi fi-sr-interrogation"></i> Invalid input, check again';

function showToast(e) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = e;
  toastBox.appendChild(toast);

  if (e.includes("error")) {
    toast.classList.add("error");
  }
  if (e.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
