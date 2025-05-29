const bundles = document.querySelectorAll('.bundle-option');
const totalDisplay = document.getElementById('total');

function selectBundle(index) {
  bundles.forEach((bundle, i) => {
    bundle.classList.remove('active');
    bundle.querySelector('input').checked = false;
  });
  const selected = bundles[index - 1];
  selected.classList.add('active');
  selected.querySelector('input').checked = true;
}
window.onload = function () {
  selectBundle(2);
};