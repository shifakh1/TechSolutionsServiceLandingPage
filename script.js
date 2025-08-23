document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        mirror: false
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Toggle hamburger animation
        if (this.classList.contains('active')) {
            this.querySelectorAll('span').forEach((span, index) => {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            });
        } else {
            this.querySelectorAll('span').forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            hamburger.querySelectorAll('span').forEach(span => {
                span.style.transform = '';
                span.style.opacity = '';
            });
        });
    });

    // Theme toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const mobileThemeToggle = document.querySelector('.mobile-theme');
    
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    mobileThemeToggle.addEventListener('click', toggleTheme);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Team member filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const teamCards = document.querySelectorAll('.team-card');
            
            teamCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-role') === filterValue) {
                    card.style.display = 'block';
                    // Add animation when showing cards
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Add animation when hiding cards
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Team member data with enhanced information
    const teamMembers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            bio: 'Sarah is the visionary leader behind TechSolutions with over 15 years of experience in the tech industry. She founded the company in 2010 with a mission to bridge the gap between technology and business needs. Under her leadership, the company has grown from a small startup to an industry leader with over 50 employees.',
            shortBio: 'Visionary leader with 15+ years in tech industry. Passionate about creating solutions that make a difference.',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            skills: ['Leadership', 'Strategy', 'Business Development', 'Public Speaking'],
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Lead Developer',
            bio: 'Michael is our full-stack development expert with 8 years of experience building scalable web applications. He specializes in React, Node.js, and cloud architecture. Michael leads our development team and ensures all our projects meet the highest coding standards. He\'s passionate about mentoring junior developers and creating efficient, maintainable code.',
            shortBio: 'Full-stack wizard specializing in React, Node.js, and cloud architecture. Loves solving complex problems.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            skills: ['JavaScript', 'React', 'Node.js', 'AWS', 'MongoDB', 'GraphQL'],
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            id: 3,
            name: 'Emma Rodriguez',
            role: 'UX/UI Designer',
            bio: 'Emma is our creative force with a keen eye for user experience. With 6 years in the design industry, she creates intuitive and beautiful interfaces that users love. Emma conducts user research, creates wireframes, and designs pixel-perfect UIs. She believes good design should be both aesthetically pleasing and highly functional.',
            shortBio: 'Creative designer focused on user-centered solutions. Believes good design should be both beautiful and functional.',
            image: 'https://randomuser.me/api/portraits/women/68.jpg',
            skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
            social: {
                linkedin: '#',
                twitter: '#',
                dribbble: '#'
            }
        },
        {
            id: 4,
            name: 'David Kim',
            role: 'Backend Developer',
            bio: 'David is our database and API specialist with 5 years of experience in backend development. He builds robust, secure, and scalable server-side applications. David is passionate about optimizing database queries and creating efficient APIs. He ensures our backend systems are performant and reliable under heavy loads.',
            shortBio: 'Database and API specialist. Enjoys optimizing systems for maximum performance and reliability.',
            image: 'https://randomuser.me/api/portraits/men/75.jpg',
            skills: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'Docker', 'Redis'],
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#'
            }
        },
        {
            id: 5,
            name: 'Priya Patel',
            role: 'Graphic Designer',
            bio: 'Priya is our visual storyteller with a talent for creating compelling brand identities. With 4 years of design experience, she produces stunning graphics, illustrations, and marketing materials. Priya has an exceptional eye for color, typography, and composition. She ensures all our visual communications are on-brand and impactful.',
            shortBio: 'Visual storyteller with a keen eye for detail. Specializes in branding and digital illustration.',
            image: 'https://randomuser.me/api/portraits/women/63.jpg',
            skills: ['Illustration', 'Branding', 'Adobe Creative Suite', 'Typography', 'Print Design'],
            social: {
                linkedin: '#',
                twitter: '#',
                dribbble: '#'
            }
        },
        {
            id: 6,
            name: 'James Wilson',
            role: 'Project Manager',
            bio: 'James is our agile expert who keeps all projects on track and within budget. With 7 years of project management experience, he coordinates between clients and our development team to ensure smooth delivery. James is certified in Scrum and Kanban methodologies. He\'s skilled at identifying risks early and keeping teams motivated.',
            shortBio: 'Agile expert who ensures projects are delivered on time and exceed expectations. Master of team coordination.',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            skills: ['Agile', 'Scrum', 'Kanban', 'JIRA', 'Client Communication', 'Risk Management'],
            social: {
                linkedin: '#',
                twitter: '#'
            }
        }
    ];

    // Function to update team cards with social links
    function enhanceTeamCards() {
        const teamCards = document.querySelectorAll('.team-card');
        
        teamCards.forEach(card => {
            const memberId = parseInt(card.querySelector('.view-profile').getAttribute('data-member'));
            const member = teamMembers.find(m => m.id === memberId);
            
            if (member) {
                const socialContainer = card.querySelector('.social-links');
                
                // Clear existing social links
                socialContainer.innerHTML = '';
                
                // Add social links based on member data
                if (member.social.linkedin) {
                    socialContainer.innerHTML += `<a href="${member.social.linkedin}"><i class="fab fa-linkedin"></i></a>`;
                }
                if (member.social.twitter) {
                    socialContainer.innerHTML += `<a href="${member.social.twitter}"><i class="fab fa-twitter"></i></a>`;
                }
                if (member.social.github) {
                    socialContainer.innerHTML += `<a href="${member.social.github}"><i class="fab fa-github"></i></a>`;
                }
                if (member.social.dribbble) {
                    socialContainer.innerHTML += `<a href="${member.social.dribbble}"><i class="fab fa-dribbble"></i></a>`;
                }
                
                // Update short bio if needed
                const shortBioElement = card.querySelector('.short-bio');
                if (shortBioElement && member.shortBio) {
                    shortBioElement.textContent = member.shortBio;
                }
            }
        });
    }

    // Call function to enhance team cards
    enhanceTeamCards();

    // Modal functionality
    const modal = document.getElementById('memberModal');
    const modalContent = modal.querySelector('.modal-body');
    const closeModal = modal.querySelector('.close-modal');
    
    // Open modal when view profile button is clicked
    document.querySelectorAll('.view-profile').forEach(button => {
        button.addEventListener('click', function() {
            const memberId = parseInt(this.getAttribute('data-member'));
            const member = teamMembers.find(m => m.id === memberId);
            
            if (member) {
                // Populate modal with member data
                modalContent.innerHTML = `
                    <div class="modal-profile">
                        <img src="${member.image}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p class="role">${member.role}</p>
                        <div class="social-links">
                            ${member.social.linkedin ? `<a href="${member.social.linkedin}"><i class="fab fa-linkedin"></i></a>` : ''}
                            ${member.social.twitter ? `<a href="${member.social.twitter}"><i class="fab fa-twitter"></i></a>` : ''}
                            ${member.social.github ? `<a href="${member.social.github}"><i class="fab fa-github"></i></a>` : ''}
                            ${member.social.dribbble ? `<a href="${member.social.dribbble}"><i class="fab fa-dribbble"></i></a>` : ''}
                        </div>
                        <div class="modal-bio">
                            <p>${member.bio}</p>
                        </div>
                        <div class="modal-skills">
                            <h4>Skills & Expertise</h4>
                            <div>
                                ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside content
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Animate achievement numbers
    const animateNumbers = () => {
        const stats = document.querySelectorAll('.stat');
        
        stats.forEach(stat => {
            const numberElement = stat.querySelector('.number');
            const target = parseInt(numberElement.getAttribute('data-count'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                numberElement.textContent = Math.floor(current);
            }, 16);
        });
    };

    // Trigger number animation when achievements section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const achievementsSection = document.querySelector('.achievements');
    if (achievementsSection) {
        observer.observe(achievementsSection);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add shadow to navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'var(--shadow)';
        }
    });

    // Enhanced scroll animations
    const scrollElements = document.querySelectorAll('.value-item, .team-card, .stat');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('aos-animate');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.2)) {
                displayScrollElement(el);
            }
        });
    };
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Initial check on page load
    handleScrollAnimation();
});