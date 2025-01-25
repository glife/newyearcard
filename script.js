       // User data with login credentials and messages
       const users = {
        john: {
            password: "1234",
            message: "Happy New Year, John! Wishing you a year of great adventures!",
            song:"DieWithSmile.mp3",
        },
        jane: {
            password: "5678",
            message: "Happy New Year, Jane! May your year be filled with love and happiness!",
        }
    };
    

    // Default song
    const defaultSong = "NoWorries.mp3"; // Replace with your default song file URL

    // Function to handle login and play song
    function loginAndPlay() {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const messageDiv = document.getElementById("personalMessage");
        const songPlayer = document.getElementById("songPlayer");

        // Check if the user exists and the password matches
        if (users[username] && users[username].password === password) {
            // Hide the login form
            document.querySelector(".login-form").style.display = "none";

            // Display personalized message
            document.getElementById("cardMessage").style.display = "block";
            messageDiv.innerText = users[username].message;
            messageDiv.style.fontSize = "1.2rem"; // Reset font size
            const userSong = users[username].song || defaultSong;

            // Play the default song
            songPlayer.src = userSong;
            songPlayer.style.display = "block";
            songPlayer.play().catch((error) => {
                console.error("Error playing audio:", error);
                alert("Audio could not be played. Please check the file path or browser settings.");
            });
        } else {
            alert("Incorrect username or password!");
        }
    }

    // Function to flip the card
    function flipCard() {
        document.querySelector(".thecard").classList.toggle("flipped");
    }