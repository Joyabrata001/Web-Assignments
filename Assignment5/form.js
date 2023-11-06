const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        if (req.method === 'GET') {
            // Serve the HTML form
            const indexPath = path.join(__dirname, 'index.html');
            fs.readFile(indexPath, (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error loading index.html');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
        } else if (req.method === 'POST') {
            // Handle form submission and file upload
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                const formData = querystring.parse(body);

                const email = formData.inputEmail4 || '';
                const password = formData.inputPassword4 || '';
                const address = formData.inputAddress || '';
                const address2 = formData.inputAddress2 || '';
                const city = formData.inputCity || '';
                const zip = formData.inputZip || '';
                const ackMail = formData.inlineRadioOptions || '';
                const ackTC = formData.checkTC || '';

                if (
                    email === '' || password === '' || address === '' || address2 === '' ||
                    city === '' || zip === ''
                ) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end("<p style='color: red; display: flex; justify-content: center; margin: auto; text-align: center;'>Form not completely filled</p>");
                } else if (ackTC === '') {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end("<p style='color: red; display: flex; justify-content: center; margin: auto; text-align: center;'>Sorry, but you have to agree to the terms and conditions</p>");
                } else {
                    // Handle file upload
                    const fileData = formData.formFile;
                    if (fileData && fileData.name) {
                        const uploadedFileName = fileData.name;
                        const uploadPath = path.join(__dirname, 'uploads', uploadedFileName);

                        // Save the uploaded file to the "uploads" directory
                        fs.writeFile(uploadPath, fileData.data, (err) => {
                            if (err) {
                                console.error(err);
                            }

                            res.writeHead(200, { 'Content-Type': 'text/html' });
                            res.end(getResponseHTML(email, password, address, address2, city, zip, ackMail, uploadedFileName));
                        });
                    }
                }

                console.log(formData);
            });
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

function getResponseHTML(email, password, address, address2, city, zip, ackMail, uploadedFileName) {
    // Your existing responseHTML code
    // ...

    responseHTML += `<div class='col-12'><strong>Uploaded File</strong>: ${uploadedFileName}</div>`;

    // Rest of your responseHTML code
    // ...

    return responseHTML;
}

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
