import './style.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, payments, and order management.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: '🛍️',
    fullDescription: 'This e-commerce platform is a comprehensive solution for online retail businesses. It includes features such as product catalog management, shopping cart functionality, secure payment processing, user authentication, order tracking, and an admin dashboard for managing inventory and orders.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    websiteUrl: 'https://example-ecommerce.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task tracking application with real-time updates and team features.',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    icon: '✅',
    fullDescription: 'A powerful task management application designed for teams and individuals. Features include task creation and assignment, priority levels, due dates, real-time collaboration, project boards with drag-and-drop functionality, file attachments, and progress tracking with analytics.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Vuex', 'Firebase Realtime Database'],
    websiteUrl: 'https://example-tasks.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with forecasts and interactive maps.',
    tags: ['JavaScript', 'API', 'Charts.js'],
    icon: '🌤️',
    fullDescription: 'An intuitive weather dashboard that provides real-time weather data and forecasts. The application integrates multiple weather APIs to deliver accurate information including current conditions, hourly and daily forecasts, weather maps, severe weather alerts, and historical weather data visualization.',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Leaflet.js', 'HTML5', 'CSS3'],
    websiteUrl: 'https://example-weather.com'
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    description: 'Mobile app for tracking workouts, nutrition, and fitness goals.',
    tags: ['React Native', 'TypeScript', 'SQLite'],
    icon: '💪',
    fullDescription: 'A comprehensive fitness tracking application that helps users monitor their health and fitness journey. Features include workout logging, exercise library, nutrition tracking, calorie counter, goal setting, progress photos, workout plans, and detailed analytics with charts to visualize progress over time.',
    technologies: ['React Native', 'TypeScript', 'SQLite', 'Redux', 'React Navigation'],
    websiteUrl: 'https://example-fitness.com'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts.',
    tags: ['Angular', 'D3.js', 'Node.js'],
    icon: '📊',
    fullDescription: 'A centralized dashboard for managing and analyzing social media presence across multiple platforms. Features include post scheduling, engagement analytics, audience insights, competitor analysis, content performance metrics, automated reporting, and integration with major social media platforms.',
    technologies: ['Angular', 'D3.js', 'Node.js', 'Express', 'PostgreSQL', 'Social Media APIs'],
    websiteUrl: 'https://example-social.com'
  },
  {
    id: 6,
    title: 'Portfolio Website Builder',
    description: 'Drag-and-drop website builder for creating professional portfolios.',
    tags: ['React', 'TypeScript', 'AWS'],
    icon: '🎨',
    fullDescription: 'An innovative website builder that enables users to create stunning portfolio websites without coding knowledge. Features include drag-and-drop interface, customizable templates, responsive design, SEO optimization, custom domain support, image galleries, contact forms, and one-click deployment.',
    technologies: ['React', 'TypeScript', 'AWS S3', 'AWS Lambda', 'DynamoDB', 'CloudFront'],
    websiteUrl: 'https://example-portfolio-builder.com'
  }
];

function renderPortfolio() {
  const portfolioGrid = document.getElementById('portfolioGrid');

  portfolioGrid.innerHTML = projects.map(project => `
    <div class="portfolio-card" data-project-id="${project.id}">
      <div class="portfolio-image">
        <span>${project.icon}</span>
      </div>
      <div class="portfolio-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="portfolio-tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.projectId);
      showProjectDetail(projectId);
    });
  });
}

function showProjectDetail(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  const mainSections = document.querySelectorAll('.hero-section, .features-section, .portfolio-section, .resume-section, .contact-section, .footer');
  mainSections.forEach(section => section.style.display = 'none');

  let detailSection = document.querySelector('.project-detail');
  if (!detailSection) {
    detailSection = document.createElement('section');
    detailSection.className = 'project-detail';
    document.body.appendChild(detailSection);
  }

  detailSection.innerHTML = `
    <div class="project-header">
      <div class="container">
        <h1>${project.icon} ${project.title}</h1>
        <p>${project.description}</p>
      </div>
    </div>
    <div class="project-body">
      <div class="container">
        <a href="#portfolio" class="back-button">← Back to Portfolio</a>

        <div class="project-info">
          <h3>About the Project</h3>
          <p>${project.fullDescription}</p>

          <h3 style="margin-top: 2rem;">Technologies Used</h3>
          <div class="portfolio-tags" style="margin-top: 1rem;">
            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
          </div>

          <h3 style="margin-top: 2rem;">Visit Project</h3>
          <a href="${project.websiteUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary project-link">
            View Live Project →
          </a>
        </div>
      </div>
    </div>
  `;

  detailSection.classList.add('active');
  window.scrollTo(0, 0);

  document.querySelector('.back-button').addEventListener('click', (e) => {
    e.preventDefault();
    hideProjectDetail();
  });
}

function hideProjectDetail() {
  const detailSection = document.querySelector('.project-detail');
  if (detailSection) {
    detailSection.classList.remove('active');
  }

  const mainSections = document.querySelectorAll('.hero-section, .features-section, .portfolio-section, .resume-section, .contact-section, .footer');
  mainSections.forEach(section => section.style.display = '');

  document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

document.querySelector('.download-cv').addEventListener('click', (e) => {
  e.preventDefault();

  const cvContent = `
MUKHTAR AHMED
Software Engineer
Email: mukhtar.ahmed@example.com
Phone: +1 (555) 123-4567
Location: City, Country
LinkedIn: linkedin.com/in/mukhtar-ahmed

PROFESSIONAL SUMMARY
Experienced software engineer with a passion for building exceptional digital experiences.
Specialized in full-stack development with expertise in modern web technologies.

EXPERIENCE

Senior Software Engineer - Tech Company Inc. (2022 - Present)
- Led development of enterprise applications
- Mentored junior developers
- Implemented best practices across the team

Software Engineer - Digital Solutions Ltd. (2020 - 2022)
- Developed full-stack web applications
- Collaborated with cross-functional teams
- Improved system performance

Junior Developer - StartUp Innovations (2018 - 2020)
- Built responsive web interfaces
- Maintained codebases
- Participated in agile development processes

EDUCATION
Bachelor of Science in Computer Science - University Name (2014 - 2018)
Focused on software engineering, algorithms, and data structures. Graduated with honors.

SKILLS
JavaScript, TypeScript, React, Node.js, Python, HTML/CSS, SQL, Git, AWS, Docker
  `;

  const blob = new Blob([cvContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Mukhtar_Ahmed_CV.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
});

renderPortfolio();
