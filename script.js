const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.topbar nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.topbar nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const filterButtons = document.querySelectorAll('.filters button');
const members = document.querySelectorAll('.member');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    members.forEach(member => {
      const show = selected === 'all' || member.dataset.category === selected;
      member.classList.toggle('hide', !show);
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
