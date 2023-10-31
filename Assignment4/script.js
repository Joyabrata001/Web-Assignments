// function displayMessage() {
//     const outputDiv = document.getElementById('output');
//     console.log(outputDiv.style.display)
//     if (outputDiv.style.display === 'none' || outputDiv.style.display === '') {
//         fetch('hello.php')
//             .then(response => response.text())
//             .then(data => {
//                 outputDiv.innerHTML = data;
//                 outputDiv.style.display = 'block';
//             });
//     } else {
//         outputDiv.innerHTML = '';
//         outputDiv.style.display = 'none';
//     }
// }

function displayMessage() {
    document.getElementById('output').style.backgroundColor = 'rgb(226, 241, 255, 0.592)';
    document.getElementById('output').classList.add('text-center');
    fetch('hello.php')
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        });
}

function displayGrade() {
    document.getElementById('output').style.backgroundColor = 'rgb(226, 241, 255, 0.592)';
    document.getElementById('output').classList.add('text-center');
    var marks = prompt("Enter the student's marks:");
    if (marks === null || marks === '') {
        console.log("User canceled or left the input empty.");
        document.getElementById('output').innerHTML = "Marks cannot be null!";
        return;
    }
    fetch('grade.php?marks=' + marks)
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        });
}

function displayOddNumbers() {
    document.getElementById('output').style.backgroundColor = 'rgb(226, 241, 255, 0.592)';
    document.getElementById('output').classList.add('text-center');
    var N = prompt("Enter the value of N:");
    if (N === null || N === '') {
        console.log("User canceled or left the input empty.");
        document.getElementById('output').innerHTML = "N cannot be null!";
        return;
    }
    fetch('oddNumbers.php?N=' + N)
        .then(response => response.text())
        .then(data => {
            // document.getElementById('output').classList.add("whenPressed");
            document.getElementById('output').innerHTML = data;
        });
}

function sortNumbers() {
    document.getElementById('output').style.backgroundColor = 'rgb(226, 241, 255, 0.592)';
    document.getElementById('output').classList.add('text-center');
    var N = prompt("Enter the number of elements:");
    var inputNumbersArray = prompt("Enter the " + N + " numbers (space-separated): ");
    var sortOrder = prompt("Enter 'asc' for ascending or 'dsc' for descending:");
    // document.getElementById('output').classList.add("whenPressed");
    if (N === null || N === '') {
        console.log("User canceled or left the input empty.");
        document.getElementById('output').innerHTML = "N cannot be null!";
        return;
    }

    if (sortOrder !== 'asc' && sortOrder !== 'dsc') {
        sortOrder = '';
    }

    fetch('sortNumbers.php?inputNumbers=' + inputNumbersArray + '&sortOrder=' + sortOrder)
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        });
}

function displayAnimalNames() {
    document.getElementById('output').style.backgroundColor = 'rgb(226, 241, 255, 0.592)';
    document.getElementById('output').classList.add('text-center');
    var N = prompt("Enter the number of names you want to see:");
    if (N === null || N === '') {
        console.log("User canceled or left the input empty.");
        document.getElementById('output').innerHTML = "N cannot be null!";
        return;
    }
    fetch('displayAnimalNames.php?N=' + N)
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        });
}

function displayAnimalImages() {
    document.getElementById('output').style.backgroundColor = 'rgb(226, 241, 255, 0.592)';
    document.getElementById('output').classList.add('text-center');
    var N = prompt("Enter the number of names you want to see:");
    if (N === null || N === '') {
        console.log("User canceled or left the input empty.");
        document.getElementById('output').innerHTML = "N cannot be null!";
        return;
    }
    fetch('displayAnimalImages.php?N=' + N)
        .then(response => response.text())
        .then(data => {
            document.getElementById('output').innerHTML = data;
        });
}

function displayFeedbackForm() {
    const outputDiv = document.getElementById('output');
    fetch('form.html')
        .then(response => response.text())
        .then(data => {
            outputDiv.classList.remove('text-center');
            outputDiv.style.backgroundColor = 'transparent';
            outputDiv.innerHTML = data;
            const form = document.querySelector('form');
            form.addEventListener('submit', function (e) {
                e.preventDefault(); // Prevent the default form submission behavior

                // Collect form data
                const formData = new FormData(form);

                // Submit the form data to the server
                fetch('submitFeedback.php', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.text())
                    .then(responseData => {
                        outputDiv.innerHTML = responseData;
                        console.log(outputDiv.innerHTML);
                    });
            });
        });
}