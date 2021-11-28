# Jared Worsham Password Generator

This website is a demonstration of my skills as a web developer, utilizing Javascript to create a password generator which allows the user to choose their desired number of characters, as well as the type of characters, including lowercase, uppercase, numbers, and symbols.


## How to Use the Password Generator

When the user clicks the "Generate Password" button, this begins the process by opening a window prompt asking them to input how many characters they'd like to include in their random password, anywhere between 8 through 128 characters.

Then the user is asked, through confirm prompts, if they would like lowercase, uppercase, numbers, and symbols in their password. They can choose any combination they wish, so long as at least one is chosen.

## Failsafes

1. The user must enter a number into the prompt asking how many characters they want in their password.
2. The number must be between 8 and 128.
3. The user cannot leave the entry blank.
4. The user must choose at least 1 of the character types. If they choose none, they will be looped back to choose again.

## Javascript Used

* let and const variables
* if/else statements
* for loops
* window prompts & alerts
* confirm prompts
* math.floor & math.random
* .length property
* .toString method
* .push method
* isNaN method
