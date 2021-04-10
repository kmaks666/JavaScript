function Robot() {
	this.name = 'Robot';
	this.typeOfWork = ' - I just work';
	this.setName = function(name) {
		this.name = name;
	}
	this.setTypeOfWork = function(typeOfWork) {
		this.typeOfWork = typeOfWork;
	}
	this.work = function() {
		return this.name + this.typeOfWork;
	}

}

function CoffeeRobot() {
	Robot.call(this);
	this.introduce='I am a ';
}

function RobotDancer() {
	Robot.call(this);
	this.introduce='I am a ';
}

function RobotCoocker() {
	Robot.call(this);
	this.introduce='I am a ';
}



console.log('<---   With functions   --->');
console.log('');


var robot = new Robot();
console.log('I am a ' + robot.work());

var coffeeRobot = new CoffeeRobot();
coffeeRobot.setName('CoffeeRobot');
coffeeRobot.setTypeOfWork(' - I just make coffee');
console.log(coffeeRobot.introduce + coffeeRobot.work());

var robotDancer = new RobotDancer();
robotDancer.setName('RobotDancer');
robotDancer.setTypeOfWork(' - I am just dancing');
console.log(robotDancer.introduce + robotDancer.work());

var robotCoocker = new RobotCoocker();
robotCoocker.setName('RobotCoocker');
robotCoocker.setTypeOfWork(' - I am just cooking');
console.log(robotCoocker.introduce + robotCoocker.work());

console.log('');
console.log('<---   With loop ForEach   --->');
console.log('');
var arrayOfRobot = [];
var robot = {
	name : 'Robot',
	typeOfWork : ' - I just work'
}
var coffeeRobot = {
	name : 'CoffeeRobot',
	typeOfWork : ' - I just make coffee'
};
var robotDancer = {
	name : 'RobotDancer',
	typeOfWork : ' - I am just dancing'
};
var robotCoocker = {
	name : 'RobotCoocker',
	typeOfWork : ' - I am just cooking'
};
arrayOfRobot.push(robot, coffeeRobot, robotDancer, robotCoocker);

var robots = new Robot();
arrayOfRobot.forEach(function(item) {
	robots.setName(item.name);
	robots.setTypeOfWork(item.typeOfWork);
	console.log('I am a ' + robots.work());
});
