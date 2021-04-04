let login = "admin";
let password = "TheMaster";

switch (login) {
	case "admin": {
		switch (password) {
			case "TheMaster": {
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
