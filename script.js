document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('dvd-logo');
    const container = document.querySelector('.dvd-container');

    let x = 50;
    let y = 50;
    let xSpeed = 2;
    let ySpeed = 2;

    function animate() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const logoWidth = logo.clientWidth;
        const logoHeight = logo.clientHeight;

        x += xSpeed;
        y += ySpeed;

        if (x + logoWidth >= containerWidth || x <= 0) {
            xSpeed *= -1;
        }

        if (y + logoHeight >= containerHeight || y <= 0) {
            ySpeed *= -1;
        }

        logo.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});