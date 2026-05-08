document.addEventListener("DOMContentLoaded", function () {

	// Init EmailJS
	emailjs.init("iA2eQARFp4DEzI_YW");

	const form = document.getElementById("contact-form");

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const message = document.getElementById("message").value;

		// extra safety validation
		if (!name || !email || !message) {
			alert("Please fill in all fields.");
			return;
		}

		emailjs.send("service_portfolio2026", "template_ldqut55", {
			name: name,
			email: email,
			message: message
		})
		.then(() => {
			alert("Message sent successfully!");
			form.reset();
		})
		.catch((error) => {
			console.log("FAILED...", error);
			alert("Failed to send message.");
		});
	});

});