const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
<<<<<<< HEAD
=======

const elfade = document.querySelectorAll('.fade');
elfade.forEach((el) => observer.observe(el));nmnm        
>>>>>>> parent of c8ec2ae (Update slideanimation.js)
