// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         const indexPath = path.join(__dirname, 'index.html');
//         // console.log(indexPath);
//         fs.readFile(indexPath, (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Error loading index.html');
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404);
//         res.end('Not Found');
//     }
// });

// const port = 3000;

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const querystring = require('querystring');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         console.log(req.method);
//         if (req.method === 'GET') {
//             const indexPath = path.join(__dirname, 'index.html');
//             fs.readFile(indexPath, (err, data) => {
//                 if (err) {
//                     res.writeHead(500);
//                     res.end('Error loading index.html');
//                 } else {
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 }
//             });
//         } else if (req.method === 'POST') {
//             // Handle form submission
//             let body = '';
//             req.on('data', (chunk) => {
//                 body += chunk.toString();
//             });

//             req.on('end', () => {
//                 const formData = querystring.parse(body);
//                 // console.log(formData);
//                 // Log individual form fields one by one
//                 console.log('User data submitted:');
//                 console.log('Email:', formData.inputEmail4);
//                 console.log('Password:', formData.inputPassword4);
//                 console.log('Address Line 1:', formData.inputAddress);
//                 console.log('Address Line 2:', formData.inputAddress2);
//                 console.log('Country:', formData.inputCountry);
//                 console.log('State:', formData.inputState);
//                 console.log('City:', formData.inputCity);
//                 console.log('Zip:', formData.inputZip);
//                 console.log('File:', formData.formFile);
//                 console.log('Newsletter Subscription:', formData.inlineRadioOptions);
//                 console.log('Terms and Conditions:', formData.checkTC);

//                 res.writeHead(200, { 'Content-Type': 'text/plain' });
//                 res.end('Data received and logged to console.');
//             });
//         }
//     } else {
//         res.writeHead(404);
//         res.end('Not Found');
//     }
// });

// const port = 3000;

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

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
                    // const path1 = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

                    // if (path1 === '/assets/images/qr-code.jpg') {
                    //     serveFiles(res, 'assets/images/qr-code.jpg', 'image/jpg');
                    // }
                    res.end(data);
                }
            });
        } else if (req.method === 'POST') {
            // Handle form submission
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
                const uploadedFile = formData.formFile;

                console.log(uploadedFile);

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
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(getResponseHTML(email, password, address, address2, city, zip, ackMail));
                }

                console.log(formData);
            });
        }
    } else if (req.url === '/assets/images/qr-code.jpg') {
        const path1 = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
        serveFiles(res, '/assets/images/qr-code.jpg', 'image/jpg');
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

// server.on('/assets/', (req, res) => {
//     res.send('./assets/images/qr-code.jpg','image/jpg');
// })

const serveFiles = (res, path, contentType) => {
    // if (!responseCode) responseCode = 200;

    fs.readFile(__dirname + path, (err, data) => {// async
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    })
}


function getResponseHTML(email, password, address, address2, city, zip, ackMail) {
    const random = Math.floor(Math.random() * 101);

    let responseHTML = `<div class='formEditing'>
        <form class='row g-0'>
            <div class='col-12'></div>
            <div class='col-12'></div>`;

    if (random < 0) {
        responseHTML += `<div class='col-12 text-center' style='color: red; font-size: 40px;'><strong>Sorry! Better luck next time</strong></div>`;
    } else {
        responseHTML += `<div class='col-12 text-center'>
            <div class='col-12 text-center' style='color: green; font-size: 40px;'><strong>Here's your reward!</strong></div>
            <img src='./qr-code.jpg' alt='qr-code' style='max-width: 25%; height: auto;'>
        </div>`;
    }

    responseHTML += `<br>
        <div class='col-12 text-center' style='color: green; font-size: 30px;'><strong>Here's your submitted info</strong></div>
        <br><br><br>
        <div class='col-md-6'><strong>Email:</strong> ${email}</div>
        <div class='col-md-6'><strong>Password:</strong> ${password}</div>
        <div class='col-12'><strong>Address Line 1:</strong> ${address}</div>
        <div class='col-12'><strong>Address Line 2</strong>: ${address2}</div>
        <div class='col-md-3'><strong>Country</strong>: India</div>
        <div class='col-md-3'><strong>State</strong>: West Bengal</div>
        <div class='col-md-3'><strong>City</strong>: ${city}</div>
        <div class='col-md-3'><strong>Zip</strong>: ${zip}</div>`;
    // <div class='col-md-3'><strong>Zip</strong>: ${uploadedFile}</div>

    if (ackMail === 'option1') {
        responseHTML += `<div class='col-md-12' style='color: green;'><strong>User has subscribed to the monthly newsletters</strong></div>`;
    } else if (ackMail === 'option2') {
        responseHTML += `<div class='col-md-12' style='color: red'><strong>User has not subscribed to the monthly newsletters</strong></div>`;
    }

    responseHTML += `</div></form>`;

    return responseHTML;
}

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});