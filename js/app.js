// document.addEventListener('DOMContentLoaded', () => {
//   // Get the div element
//   const start = document.getElementById('start');

//   // Function to hide the div after 5 seconds
//   function hideDiv() {
//       start.style.display = 'none';
//   }

//   // Set timeout to hide the div after 5 seconds
//   setTimeout(hideDiv, 5000); // 5000 milliseconds = 5 seconds
// });

const add = document.getElementById('add');
const closead = document.getElementById('closead');
const closead1 = document.getElementById('closead1');
const bulrconrc = document.getElementById('bulrconrc');
const bulrcondl = document.getElementById('bulrcondl');
const btndl = document.getElementById('btndl');
const btnrc = document.getElementById('btnrc');

add.addEventListener('click', () => {
  bulrconrc.style.display = 'flex';
});

closead.addEventListener('click', () => {
  bulrconrc.style.display = 'none';
});
closead1.addEventListener('click', () => {
  bulrcondl.style.display = 'none';
});
btndl.addEventListener('click', () => {
  bulrconrc.style.display = 'none';
  bulrcondl.style.display = 'flex';
});

btnrc.addEventListener('click', () => {
  bulrcondl.style.display = 'none';
  bulrconrc.style.display = 'flex';
});
