const bg = document.getElementById('bg');
const moon = document.getElementById('moon');
const mountain = document.getElementById('mountain');
const road = document.getElementById('road');
const title = document.getElementById('title');

window.addEventListener('scroll', () => {
  const { scrollY } = window;
  bg.style.transform = `translateY(${scrollY * 0.5}px)`;
  moon.style.transform = `translateX(${scrollY * -0.9}px)`;
  mountain.style.transform = `translateY(${scrollY * -0.12}px)`;
  road.style.transform = `translateY(${scrollY * 0.2}px)`;
  title.style.transform = `translateY(${scrollY * 0.8}px)`;
});