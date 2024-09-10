window.addEventListener('scroll', () => {
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
      const servicePosition = service.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
  
      if (servicePosition < screenPosition) {
        service.classList.add('active');
      }
    });
  });

