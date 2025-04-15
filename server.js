const http = require("http");//node.js successfully installed

const hostname = "localhost";//localhost
const port = 8001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n This is a simple Node.js server.");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);//callback function
});


