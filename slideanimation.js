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

const elfade = document.querySelectorAll('.fade');
<<<<<<< HEAD
elfade.forEach((el) => observer.observe(el)); 
=======
elfade.forEach((el) => observer.observe(el));
>>>>>>> 60bcabf94bfd9323f61aee1ae9b47573f8e0ed72
