var typed = new Typed(".text",
    {
        strings: ["Backend Developer", "Web Developer"],
        typeSpeed: 50,
        backSpeed: 100,
        loop: true
    }
);

document.getElementById('downloadPdfBtn').addEventListener('click', function() {
    window.open('assets/FELIX CV.pdf');
});

// document.querySelector('.nav a[href="#about"]').addEventListener('click', function(e) {
//     e.preventDefault(); // Prevent the default anchor behavior

//     // Get the About section element
//     const aboutSection = document.querySelector('#about');

// });