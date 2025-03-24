function openInNewTab(url) {
    var win = window.open(url, '_blank');
    if (win) {
        win.focus();
    } else {
        alert('Lütfen bu web sitesi için açılır pencerelere izin verin.');
    }
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });
    var activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }
}

function showSubSection(subSectionId) {
    var subSections = document.querySelectorAll('.subsection');
    subSections.forEach(function(subSection) {
        subSection.classList.remove('show');
    });
    var activeSubSection = document.getElementById(subSectionId);
    if (activeSubSection) {
        activeSubSection.classList.add('show');
    }
}