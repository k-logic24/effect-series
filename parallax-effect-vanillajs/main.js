const imgNodes = document.querySelectorAll('section img');

let degree = 0.5;
window.addEventListener('scroll', () => {
  const scrollY =  window.scrollY;

  imgNodes.forEach((item) => {
    const id = item.id
    switch (id) {
      case `moon`:
        item.style.left = `-${scrollY * degree}px`;
        break;
      case `road` && `mountain` && `text`:
        degree = 0.15;
        item.style.top = `-${scrollY * degree}px`
        break;
      default:
        item.style.top = `-${scrollY * degree}px`
    }
  });
});
