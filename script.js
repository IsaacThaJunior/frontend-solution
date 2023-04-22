const phoneNumberOrEmail = document.getElementById(
	'PHONE_NUMBER_or_EMAIL_ADDRESS'
);
const button = document.getElementById('forward-button');

// function for simulation button click
function handleButtonClick() {
	button.click();
	console.log('Button clicked');
}

function fillFormAndSimulateButtonClick() {
	// Create a code that automatically fills in the form
	phoneNumberOrEmail.value = 'isaac@test.com';

	// Create a code that automatically clicks the button
	if (phoneNumberOrEmail.value === 'isaac@test.com') {
		// Using a setTimeout function to simulate user moving mouse to the continue button.
		setTimeout(() => {
			// calling the buttonClick function
			handleButtonClick();
			alert('Form submitted successfully');
			phoneNumberOrEmail.value = '';
		}, 1000);
	}
}

// Calling the function
fillFormAndSimulateButtonClick();
