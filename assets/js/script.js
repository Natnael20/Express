// Navbar scroll effect - white with slight blur
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const header = document.getElementById('main-head');
    const navLinks = document.querySelectorAll('.nav-link');
    const brand = document.querySelector('.navbar-brand');
    
    if (!navbar) return;
    
    navbar.style.background = 'transparent';
    navbar.style.transition = 'all 0.3s ease';
    
    // Add hover styles for nav links
    navLinks.forEach(link => {
        link.style.transition = 'all 0.8s ease';
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ff6b35'; // or var(--bs-orange)
            this.style.opacity = '1';
        });
        link.addEventListener('mouseleave', function() {
            // Revert to the current scroll state color
            if (window.scrollY > (header ? header.offsetHeight - 50 : 100)) {
                this.style.color = '#333333';
                this.style.opacity = '1';
            } else {
                this.style.color = '#ffffff';
                this.style.opacity = '0.8';
            }
        });
    });
    
    function checkScroll() {
        let triggerHeight = 100;
        
        if (header) {
            triggerHeight = header.offsetHeight - 100;
        }
        
        if (window.scrollY > triggerHeight) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.webkitBackdropFilter = 'blur(10px)';
            navbar.style.borderBottom = '1px solid #e0e0e0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
            navbar.style.marginTop = '0';
            
            navLinks.forEach(link => {
                // Only change if not being hovered
                if (!link.matches(':hover')) {
                    link.style.color = '#333333';
                    link.style.opacity = '1';
                }
            });
            
            if (brand) {
                brand.style.color = '#333333';
            }
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.webkitBackdropFilter = 'none';
            navbar.style.borderBottom = 'none';
            navbar.style.boxShadow = 'none';
            navbar.style.marginTop = '40px';
            
            navLinks.forEach(link => {
                if (!link.matches(':hover')) {
                    link.style.color = '#ffffff';
                    link.style.opacity = '0.8';
                }
            });
        
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});