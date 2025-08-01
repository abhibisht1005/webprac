// Add smooth scroll for anchor links
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjust offset for sticky navbar
      behavior: 'smooth'
    });
  });
});

 const texts = ['Web Developer', 'Computer Science Student', 'Tech Enthusiast'];
        let count = 0;
        let index = 0;
        let currText = '';
        let letter = '';
const  typingfont = document.querySelector('.typing-text');
        typingfont.style.fontFamily = 'Courier New, monospace';
        typingfont.style.fontSize = '22px';
        typingfont.style.color = 'var(--text-primary)';

function type() {
            if (count === texts.length) {
                count = 0;
            }
            currText = texts[count];
            letter = currText.slice(0, ++index);
            
            document.querySelector('.typing-text').textContent = letter;
            if (letter.length === currText.length) {
                count++;
                index = 0;
                setTimeout(type, 2000);
            } else {
                setTimeout(type, 100);
            }
        }
        type();
        
// // Dark mode functionality
     const themeBtn = document.getElementById('themebtn');
  const sunIcon = themeBtn.querySelector('.sun');
  const moonIcon = themeBtn.querySelector('.moon');

  // Load saved theme on page load
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('darkmode');
    sunIcon.style.display = 'inline';
    moonIcon.style.display = 'none';
  } else {
    document.documentElement.classList.remove('darkmode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
  }

  // Toggle theme on button click
  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('darkmode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (isDark) {
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
    }
  });

