const http = require('http');
const PORT = 3002;

const server = http.createServer(async (req, res) => {
    try {
        const data = await fetch("https://fakestoreapi.com/products");
        const jsondata = await data.json();
        console.log(jsondata[0].title);

        const htmltemplate = `
        <html>
        <head>
            <title>Online Clothes Shop</title>
            <style>
                body { background-color: #f0f0f0; font-family: Arial, sans-serif; }
                h2 { color: red; }
            </style>
        </head>
        <body>
            <h2>${jsondata[0].title}</h2>
            <div>
                <img src="${jsondata[0].image}" height="200px" width="200px" alt="Product Image"/>
            </div>
        </body>
        </html>`;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmltemplate);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
