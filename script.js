// Modal Functionality
document.querySelectorAll('.modal-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = document.getElementById(this.getAttribute('data-modal'));
        modal.style.display = 'block';
    });
});

document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Project Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all filter buttons
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.classList.remove('active');
        });

        // Add active class to clicked button
        this.classList.add('active');

        // Get filter value
        const filter = this.getAttribute('data-filter');
        
        // Get all projects
        const projects = document.querySelectorAll('.project');

        // Show or hide projects based on filter
        projects.forEach(project => {
            if (filter === 'all' || project.classList.contains(filter)) {
                project.style.display = 'block';
                project.classList.remove('fade-out');
                project.classList.add('fade-in');
            
            } else {
                project.classList.remove('fade-in');
                project.classList.add('fade-out');
                setTimeout(() => project.style.display = 'none', 500);
            }
        });
    });
});
