// Create the entire HTML page using document.write

document.write('<!DOCTYPE html>');
document.write('<html lang="en">');
document.write('<head>');
document.write('<meta charset="UTF-8">');
document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
document.write('<title>HTML Page</title>');
document.write('<link rel="stylesheet" href="styles1.css" type="text/css">');
document.write('</head>');
document.write('<body>');

document.write('<header>');
document.write('<h1>Welcome to My HTML Page</h1>');
document.write('</header>');

document.write('<nav>');
document.write('<ul>');
document.write('<li><a href="#">Home</a></li>');
document.write('<li><a href="#">About</a></li>');
document.write('<li><a href="#">Contact</a></li>');
document.write('</ul>');
document.write('</nav>');

document.write('<main>');
document.write('<section>');
document.write('<h2>Section 1</h2>');
document.write('<p>This is the first section of the page.</p>');
document.write('</section>');

document.write('<section>');
document.write('<h2>Section 2</h2>');
document.write('<p>This is the second section of the page.</p>');
document.write('</section>');
document.write('</main>');

document.write('<footer>');
document.write('<p>&copy; 2023 My HTML Page</p>');
document.write('</footer>');

// Add a button to print the page
document.write('<button onclick="window.print()">Print this Page</button>');

document.write('</body>');
document.write('</html>');