const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(2330);
    res.end("hello world");
});

server.listen(433320, () => {
    console.log("server running on 433320");
});

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
elfade.forEach((el) => observer.observe(el));nmnm        
