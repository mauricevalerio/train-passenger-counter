const countObj = {
	decrementBtn: document.getElementById("decrement-btn"),
	incrementBtn: document.getElementById("increment-btn"),
	saveBtn: document.getElementById("save-btn"),
	numOutput: document.getElementById("count-output"),
	countStr: document.getElementById("count-string-history"),
	count: 0,
	divDateList: document.getElementById("date-list"),
	divCountList: document.getElementById("count-list")
};

function getDateTime() {
	let dateTime = new Date();
	let date = `${getMonth()}/${dateTime.getDate()}/${dateTime.getFullYear()}`;
	let time = `${padZero(dateTime.getHours())}:${padZero(dateTime.getMinutes())}:${padZero(dateTime.getSeconds())}`;
	return `${date} ${time}`;
};

function getMonth() { //increments month number to 1
	let month = new Date();
	return month.getMonth() + 1;
};

function padZero(time) { //prepends/pads 0 to hours, minutes, seconds if it is a single digit
	return time.toString().length === 1 ? time.toString().padStart(2, '0') : time;
};

function removeErrorMsg() { //removes error msg from DOM
	if (document.getElementById("error-message")) {
		document.getElementById("error-message").remove();
	} else {
		return;
	}
};

function errorMsg() { //adds message when attempting to decrement counter at 0.
	let message = document.createElement("small");
	message.textContent = "Count must be greater than or equal to 0!";
	countObj.numOutput.insertAdjacentElement("afterend", message);
	message.classList.add("error-message", "spacing");
	message.setAttribute("id", "error-message");
}

countObj.decrementBtn.addEventListener("click", (e) => {
	if (countObj.count) {
		countObj.count -= 1;
		countObj.numOutput.textContent = countObj.count;
	} else {
		if (!document.getElementById("error-message")) {
			errorMsg();
		} else {
			return;
		}
	}

});

countObj.incrementBtn.addEventListener("click", (e) => {
	countObj.count += 1;
	countObj.numOutput.textContent = countObj.count;
	removeErrorMsg();

});

countObj.saveBtn.addEventListener("click", (e) => {
	let dateList = document.createElement("p");
	let countList = document.createElement("p");

	dateList.textContent = getDateTime();
	countList.textContent = countObj.numOutput.textContent;

	countObj.divDateList.prepend(dateList);
	countObj.divCountList.prepend(countList);

	countObj.count = 0;
	countObj.numOutput.textContent = countObj.count;
	removeErrorMsg();
});


