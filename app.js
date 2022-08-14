let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function rotate() {
	let date = new Date();
	let getHours = date.getHours();
	let getMinutes = date.getMinutes();
	let getSeconds = date.getSeconds();

    let sF = getSeconds / 60;
    let mF = (sF + getMinutes) /60;
    let hF = (mF + getHours) / 12;

    let sD = sF * 360;
    let mD = mF * 360;
    let hD = hF * 360;

    hours.style.transform = `rotate(${hD}deg)`;
    minutes.style.transform = `rotate(${mD}deg)`;
    seconds.style.transform = `rotate(${sD}deg)`;
}

setInterval(rotate, 1000);