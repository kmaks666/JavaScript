var college=[];
var student1={facultyName:"History", yearOfStuding:5};
var student2={facultyName:"Foreign Languages", yearOfStuding:6};
var student3={facultyName:"Foreign Literature", yearOfStuding:5};
var student4={facultyName:"Mathematics", yearOfStuding:4};
var student5={facultyName:"Informatics", yearOfStuding:6};
var student6={facultyName:"Phisics", yearOfStuding:7};
var student7={facultyName:"Programming", yearOfStuding:6};
var student8={facultyName:"Chemistry", yearOfStuding:5};
var student9={facultyName:"Electrical Engineering", yearOfStuding:3};
var student10={facultyName:"Biology", yearOfStuding:5};
college.push(student1,student2,student3,student4,student5,student6,student7,student8,student9,student10);

function alert(array){
	console.log(array);
	console.log('----------------------------------------------------');
	}

alert(college);

function getFaculty(obj){
	return obj.facultyName;
}

var arrayFaculty=college.map(getFaculty);
console.log('List of faculties:')
alert(arrayFaculty.sort());

function sumYears(sumYear, thisYear){
	return sumYear+thisYear.yearOfStuding;
}

var years=college.reduce(sumYears,0);
console.log('All years of studing: '+years);