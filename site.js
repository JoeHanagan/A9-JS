const output = document.getElementById('output');
const button = document.getElementById('button');
let newJoke = false;

// Store the fetched joke 
let currentJoke = null;

// Toggle button text and fetch jokes
button.addEventListener("click", async () => {
   if (newJoke === true) {
        // Show the punchline 
        if (currentJoke) {
            output.innerHTML = `${currentJoke.setup}<br>${currentJoke.punchline}`;
        }
        button.textContent = "Tell me a joke";
        newJoke = false;
   } else {
        //  Fetch random joke 
        try {
            const response = await fetch('/api/v1/random-joke');
            currentJoke = await response.json();
            
            // Display only the setup first
            output.innerHTML = `${currentJoke.setup}`;
            button.textContent = "What's the punch line";
            newJoke = true;
        } catch (error) {
            output.textContent = 'Failed to load a joke. Try again!';
        }
   }
});