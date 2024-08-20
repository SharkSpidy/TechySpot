document.addEventListener('DOMContentLoaded', () => {
    // Load courses from JSON file
    fetch('courses.json')
        .then(response => response.json())
        .then(data => {
            const courseList = document.getElementById('course-list');
            data.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.className = 'category';
                courseItem.innerHTML = `
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                `;
                courseList.appendChild(courseItem);
            });
        })
        .catch(error => console.error('Error loading courses:', error));
    
    // Navigation active link highlight
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
