'use strict'

const linkedin = document.querySelector(".linkedin");
const twitter = document.querySelector(".twitter");
// const element3 = document.querySelector("");
const div = document.querySelector(".container")

const body = document.querySelector("body")

linkedin.addEventListener("click", () => {
	linkedin.src ="public/img/linkedin-light.png"
});

twitter.addEventListener("click", () => {
	twitter.src ="public/img/twitter-light.png"
});

body.addEventListener("mouseover", () => {
	linkedin.src ="public/img/linkedin-dark.png"
	twitter.src ="public/img/twitter-dark.png"

});

	let hour = (new Date).getHours();
	
	document.body.classList.toggle('light')

	var className = body.className
	if (hour >= 17 || hour <=6) {
        document.body.classList.toggle('dark')
		console.log('dark')
	} else {
		// document.body.classList.toggle('light')
		console.log('light')
	}
	console.log(hour);