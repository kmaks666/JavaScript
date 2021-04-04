let login = "admin";
let password = "1234";

switch (login) {
	case "admin": {
		switch (password) {
			case "1234": {
				console.log("Welcome!");
			break;
			}
		default: {
			console.log("Wrong password!");
		}
	}
	break;
	}
default:
	console.log("I don't you know");
}