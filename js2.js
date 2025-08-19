/*let today = new Date();

console.log("date",today);*/

let students = ["oggy", "jack"];
students.push("usb");
console.log(students);

students.unshift("usp");
console.log(students);

students.splice(3, 1, "sanagempalli");
console.log(students);


for (let student of students) {
    console.log(student);
}

console.log("While loop- Roll Numbers:");
let p = 101;
while(p<=854)
{
    console.log("Roll No:",p);
    p++;
}


console.log("Round 4.7:", Math.round(4.7));    // 5
console.log("Round 4.3:", Math.round(4.3));    // 4
console.log("Ceil 4.1:", Math.ceil(4.1));      // 5
console.log("Floor 4.9:", Math.floor(4.9));    // 4
console.log("Truncate 4.9:", Math.trunc(4.9)); // 4
console.log("Absolute of -25:", Math.abs(-25)); // 25
console.log("2^3:", Math.pow(2, 3));           // 8
console.log("Square root of 49:", Math.sqrt(49)); // 7

let studentMap = new Map();
studentsMap.set("101",{name:"oggy",dept:"CSE"});
studentsMap.set("101",{name:"jack",dept:"CSE"});
console.log("Student101: ",studentMap.get("101"));

