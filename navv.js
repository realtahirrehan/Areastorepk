
    function loadNavbar() {
        fetch('nav.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-container').innerHTML = data;
            })
            .catch(error => {
                console.error('Error fetching navbar:', error);
            });
    }

    function toggleNavbar() {
        const navbar = document.getElementById('nav-links');
        navbar.classList.toggle('hidden');
    }

    document.addEventListener('DOMContentLoaded', loadNavbar);