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

function getMonth() {
	let month = new Date();
	return month.getMonth() + 1;
};

function padZero (time) {
	return time.toString().length === 1 ? time.toString().padStart(2, '0') : time;
};

function removeReminderMsg() {
	if (document.getElementById("small-message")) {
		document.getElementById("small-message").remove();
	} else {
		return;
	}
};

function addReminderMsg() {
	let message = document.createElement("small");
	message.textContent = "Count must be greater than or equal to 0!";
	countObj.numOutput.insertAdjacentElement("afterend", message);
	message.classList.add("small-message", "spacing");
	message.setAttribute("id", "small-message");
}

countObj.decrementBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (countObj.count) {
		countObj.count -= 1;
		countObj.numOutput.textContent = countObj.count;
	} else {
		if (!document.getElementById("small-message")) {
			addReminderMsg();
		} else {
			return;
		}
	}
	
});

countObj.incrementBtn.addEventListener("click", (e) => {
	e.preventDefault();
	countObj.count += 1;
	countObj.numOutput.textContent = countObj.count;
	removeReminderMsg();

});

countObj.saveBtn.addEventListener("click", (e) => {
	e.preventDefault();
	
	let dateList = document.createElement("p");
	let countList = document.createElement("p");
	
	dateList.textContent = getDateTime();
	countList.textContent = countObj.numOutput.textContent;
	
	countObj.divDateList.append(dateList);
	countObj.divCountList.append(countList);
	
	countObj.count = 0;
	countObj.numOutput.textContent = countObj.count;
	removeReminderMsg();
});


