const servicesLinks = document.querySelectorAll('.services-link');
const servicesInfo = document.querySelectorAll('.services-info');

let currentInfo = null;

servicesLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.dataset.target;
    servicesInfo.forEach(info => {
      if (info.id === target) {
        if (currentInfo && getComputedStyle(currentInfo).display !== 'none') {
          currentInfo.animate([{opacity: '1'}, {opacity: '0'}], {duration: 300, fill: 'forwards'})
            .onfinish = function() {
              currentInfo.style.display = 'none';
              currentInfo = info;
              currentInfo.style.display = 'block';
              currentInfo.animate([{opacity: '0'}, {opacity: '1'}], {duration: 300, fill: 'forwards'});
            };
        } else {
          currentInfo = info;
          currentInfo.style.display = 'block';
          currentInfo.animate([{opacity: '0'}, {opacity: '1'}], {duration: 300, fill: 'forwards'});
        }
      } else {
        info.animate([{opacity: '1'}, {opacity: '0'}], {duration: 300, fill: 'forwards'})
          .onfinish = function() {
            info.style.display = 'none';
          };
      }
    });
  });
});