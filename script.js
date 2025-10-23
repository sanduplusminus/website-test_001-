// Get the input elements
const nr1Input = document.getElementById('nr1');
const nr2Input = document.getElementById('nr2');

// Get the button
const button = document.querySelector('button.centered');

// Create a place to show the result
const output = document.createElement('p');
output.className = 'centered';
document.body.appendChild(output);

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// When the button is clicked
button.addEventListener('click', () => {
    const nr1 = Number(nr1Input.value);
    const nr2 = Number(nr2Input.value);

    // Check if inputs are valid numbers
    if (isNaN(nr1) || isNaN(nr2)) {
        output.textContent = 'Please enter valid numbers!';
        return;
    }

    // Determine min and max so it works even if nr2 < nr1
    const min = Math.min(nr1, nr2);
    const max = Math.max(nr1, nr2);

    const randomValue = getRandomInt(min, max);
    output.textContent = `Random number: ${randomValue}`;
});
