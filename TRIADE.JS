document.addEventListener('DOMContentLoaded', () => {
    const brandText = document.getElementById('brand-text');
    const orderButton = document.getElementById('order-button');
    
    // Animate brand text appearance letter by letter
    const animateText = () => {
      const text = brandText.innerText;
      brandText.innerHTML = '';
      
      let index = 0;
      const interval = setInterval(() => {
        brandText.innerHTML += text[index];
        index++;
        if (index === text.length) {
          clearInterval(interval);
        }
      }, 100);
    };
  
    animateText();
  
    // Add smooth scroll on Order Now button click
    orderButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    });
  });
  