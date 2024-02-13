const start = `Welcome to the Haunted Mansion Text Adventure Game. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You are trying to find a hidden golden key to escape but have not had any luck yet. Should you...
1. Take the stairs to the basement
OR
2. Stay in the front room and look around
${enter}`;

const gameOver1 = `You still have no luck and got hungry so you give up and absolutely destroy a Big Mac in the McDonald's ball pit. ${gameOver}`;

const q2 = `When you get down stairs you hear something unusual. Should you...
1. Look to see what it is
OR
2. Hide in the closet
${enter}`;

const gameOver2 = `It was a possessed bald man that harmed you very badly. That boy sent you back to the lobby, sorry dawg. ${gameOver}`;

const q3 = `It was a possessed bald man. You let him pass while waiting quietly. Do you...
1. Go to the top floor
OR
2. Keep looking around in the basement
${enter}`;

const gameOver3 = `You slipped on some oil and broke your leg. You might need a med kit for that one lil bro. ${gameOver}`;

const q4 = `You made it up the stairs safely. But, you hear something close behind on your tail. Should you...
1. Run into the bathroom
OR
2. Run into the master bedroom
${enter}`;

const gameOver4 = `You got yourself cornered and your body was never found again. So we're in copper?  ${gameOver}`;

const q5 = `You made it to safety and lost the creature. You see many things in the bedroom. Should you...
1. Look under the bed
OR
2. Look in all the drawers
${enter}`;

const gameOver5 = `You looked under the bed and made eye contact with Medusa! You instantly turned to stone. L in the chat ${gameOver}`;

const q6 = `You found the golden key in one of the drawers! Should you...
1. Run for the door
OR
2. Try to be sneaky and quiet
${enter}`;

const gameOver6 = `You were too slow and the house became alive trapping you inside. It least you don't have to pay rent. ${gameOver}`

const win = `You got to the door and made it out of the mansion! W in the chat`;

// Alerts the user to start the game
alert(start);

// Set's the value of userInput to thr User's entry
let userInput = prompt(q1);

// NESTED CONDITIONAL STATEMENTS
// 1st Conditional Statement
// NOTE: Prompts return the value entered as a string. That is why double equals == is used instead of triple equals (AKA Strict Equality)
if (userInput == 1){
    userInput = prompt(q2)

// 2nd Conditional
    if (userInput == 2){
        userInput = prompt(q3)
    
        // 3rd conditional
        if(userInput == 1){
            userInput = prompt(q4)

            // 4th conditional statement
            if (userInput == 2){
                userInput = prompt(q5);

                // 5th conditional 
                if (userInput == 2){
                    userInput = prompt(q6);

                    // 6th conditional
                    if (userInput == 1){
                        alert(win)
                    } else {
                        alert(gameOver6);
                    }
                } else {
                    alert(gameOver5);
                }

            } else {
                alert(gameOver4);
            }

        }else {
            alert(gameOver3)
        }
    }else {
        alert(gameOver2)
    }
} else{
    alert(gameOver1)
}