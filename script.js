const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateTime() {
	const now = new Date();
	const sec = now.getSeconds();
	const min = now.getMinutes();
	const hr = now.getHours();

	const secDeg = (sec*6);
	const minDeg = (min*6 + sec/10);
	const hrDeg = (30*hr + min/2)%360;

	secHand.style.transform = `rotate(${secDeg+90}deg)`;
	minHand.style.transform = `rotate(${minDeg+90}deg)`;
	hourHand.style.transform = `rotate(${hrDeg+90}deg)`;
 

	// hourHand.style.transform = `rotate(${hrRot+90}deg)`;
	// minHand.style.transform = `rotate(${minRot+90}deg)`;
	// secHand.style.transform = `rotate(${secRot+90}deg)`;
}

setInterval(updateTime, 500);