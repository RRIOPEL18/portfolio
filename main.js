const imgs = document.querySelectorAll('.bigify img');

[].forEach.call(imgs, (img) => {
  img.addEventListener('click', (e) => {
    e.target.classList.toggle('bigify-me');
  });
});
