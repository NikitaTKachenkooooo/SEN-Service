const servicesLinks = document.querySelectorAll('.services-link');
const servicesInfo = document.querySelectorAll('.services-info');

servicesLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.dataset.target;
    servicesInfo.forEach(info => {
      if (info.id === target) {
        info.style.display = 'block';
      } else {
        info.style.display = 'none';
      }
    });
  });
});