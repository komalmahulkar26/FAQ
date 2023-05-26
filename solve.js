console.log('hello');
console.log('working');
const desc = document.querySelectorAll('.description');
document.querySelectorAll('.accordion').forEach((value, index) => {
  value.addEventListener('click', () => {
    desc[index].classList.toggle('hidden');
  });
});
