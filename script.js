document.addEventListener('DOMContentLoaded', function() {
    function showSection(id) {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            if (section.id === id) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    function showSubSection(id) {
        const subsections = document.querySelectorAll('.subsection');
        subsections.forEach(subsection => {
            if (subsection.id === id) {
                subsection.classList.add('active');
            } else {
                subsection.classList.remove('active');
            }
        });
    }

    window.showSection = showSection;
    window.showSubSection = showSubSection;
});