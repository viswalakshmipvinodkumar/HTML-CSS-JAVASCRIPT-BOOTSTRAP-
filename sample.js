 //document.writeln("Hello, World!");
 // //alert("Hello, World!");

 // //variable and data types

// // // var name = "John"; // string
// // // var age = 30; // number
// // // var isStudent = true; // boolean
// // // var hobbies = ["reading", "traveling", "gaming"]; // array
// // // var address = { city: "New York", country: "USA" }; // object 
// // // var x; // undefined
// // // var y = null; // null
// // // document.writeln("Name: " + name + "<br>");
// // // document.writeln("Age: " + age + "<br>");
// // // document.write("Is Student: " + isStudent + "<br>");
// // // document.write(typeof name);  //to get the type of variable

// // //arithmetic operations
// // var a = 10; 
// // var b = 5;
// // var sum = a + b;
// // document.write("Sum: " + sum );
// // document.write(3 ** 3); //exponentiation

// // // //conditional statements
// // var score = 85;
// // if (score >= 90) {
// //     document.write("Grade: A");  
// // } else if (score >= 80) {
// //     document.write("Grade: B");
// // } else if (score >= 70) {
// //     document.write("Grade: C");
// // } else {
// //     document.write("Grade: F");
// // }
// // Document.write("<br>");

// //SWITCH CASE
// // var day = 3;    
// // switch (day) {
// //     case 1:
// //         document.write("Monday");
// //         break;  
// //     case 2:
// //         document.write("Tuesday");
// //         break;  
// //     case 3:
// //         document.write("Wednesday");
// //         break;
// //     case 4:

// //         document.write("Thursday");
// //         break;                              
// //     case 5:
// //         document.write("Friday");
// //         break;

// //     case 6:
// //         document.write("Saturday");
// //         break;
// //     case 7:
// //         document.write("Sunday");       
// //         break;
// //     default:
// //         document.write("Invalid day");
// // }


// //LOOPS
// //  for (var i = 1; i <= 5; i++) {
// //      document.write( i + "<br>");
// //  }


// //  var j = 10;
// //  while (j >= 5) {
// //      document.write(j + "<br>");
// //      j--;
// // }

// //functions
// // function greet(name) {
// //     document.write( "Hello, " + name + "!");
// // }
// // greet("Alice");

// //arrays
// // var fruits = ["apple", "banana", "cherry"];
// // fruits.push("date"); //add element
// // document.write(fruits[1]); //access element
// // fruits.pop(); //remove last element
// // document.write("<br>");
// // document.write(fruits.length); //array length   
// // document.write("<br>");
// // //loop through array
// // for (var i = 0; i < fruits.length; i++) {
// //     document.write(fruits[i] + "<br>");
// // }                   
// // document.write("<br>");

// //string
// // var str = "Hello, World!";
// // document.write(str.length); //string length
// // document.write("<br>");
// // document.write(str.toUpperCase()); //to uppercase
// // document.write("<br>");
// // document.write(str.toLowerCase()); //to lowercase
// // document.write("<br>"); 
// // document.write(str.indexOf("World")); //find substring
// // document.write("<br>");
// // document.write(str.slice(0, 5)); //extract substring
// // document.write("<br>"); 
// // document.write(str.replace("World", "JavaScript")); //replace substring
// // document.write("<br>");
// // //loop through string
// // for (var i = 0; i < str.length; i++) {
// //     document.write(str[i] + "<br>");
// // }           
// // document.write("<br>"); 
// // //date
// // var date = new Date();
// // document.write(date.toDateString()); //date string
// // document.write("<br>");
// // document.write(date.toTimeString());

// // document.write("<br>");

// //math object
//  document.write(Math.PI); //pi value
//     document.write("<br>");
//     document.write(Math.sqrt(16)); //square root
//     document.write("<br>");
//     document.write(Math.pow(2, 3)); //exponentiation
//     document.write("<br>");
//     document.write(Math.abs(-5)); //absolute value
//     document.write("<br>");
//     document.write(Math.ceil(4.3)); //round up
//     document.write("<br>");
//     document.write(Math.floor(4.7)); //round down
//     document.write("<br>");
//     document.write(Math.round(4.5)); //round to nearest
//     document.write("<br>");
//     document.write(Math.min(1, 2, 3, -4, 5)); //minimum value
//     document.write("<br>");
//     document.write(Math.max(1, 2, 3, -4, 5)); //maximum value
//     document.write("<br>");
//     document.write(Math.random()); //random number between 0 and 1
//     document.write("<br>");
//     document.write(Math.floor(Math.random() * 10) + 1); //random number between 1 and 10
//     document.write("<br>");

//DOM manipulation

// var a = document.getElementsByClassName("head1");
// a[0].innerHTML = "Hello, !";
// a[0].style.color = "red";

//oops

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   
    greet() {
        document.write("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }

}

var person1 = new Person("Alice", 25);
person1.greet();
document.write("<br>");
var person2 = new Person("Bob", 30);
person2.greet();
document.write("<br>");

//inheritance
class Student extends Person { //child class student inherits from parent class person
    constructor(name, age, studentId) { 
        super(name, age);
        this.studentId = studentId;
    }
    study() {
        document.write(this.name + " is studying.");
    }

}

var student1 = new Student("Charlie", 20, "S12345");
student1.greet();
document.write("<br>");
student1.study();
document.write("<br>");
