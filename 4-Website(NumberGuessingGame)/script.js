
        const minNum = 1;
        const maxNum = 100;
        const answer = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        function checkGuess()
        {
            const guess = Number(document.getElementById("guessInput").value);
            const message = document.getElementById("message");
            const attemptText = document.getElementById("attempts");

            if (isNaN(guess))
            {
                message.textContent = "❌ Please enter a valid number";
                message.className = "error";
                return;
            }

            if (guess < minNum || guess > maxNum)
            {
                message.textContent = "⚠️ Number must be between 1 and 100";
                message.className = "error";
                return;
            }

            attempts++;

            if (guess < answer)
            {
                message.textContent = "📉 Too low! Try again.";
                message.className = "low";
            }
            else if (guess > answer)
            {
                message.textContent = "📈 Too high! Try again.";
                message.className = "high";
            }
            else
            {
                message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
                message.className = "success";
            }

            attemptText.textContent = `Attempts: ${attempts}`;
        }
