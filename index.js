var ReadLineSync = require("readline-sync");

var name = [];
var utm = [];
var pfm = [];
var fm = [];
var mark = [];


for(i=0;i<5;i++){
var names = ReadLineSync.question("Enter Your Name: ");
name.push(names);
var utms = ReadLineSync.question("Enter unit test marks: ");
utm.push(utms);
var pfms = ReadLineSync.question("Enter Pre Final Marks: ");
pfm.push(pfms);
var fms = ReadLineSync.question("Enter Final Marks: ");
fm.push(fms);

var marks = Number(utm[i]) + Number(pfm[i]) + Number(fm[i]);
mark.push(marks);
}

var highest = Math.max(...mark);
for(i=0;i<5;i++){
  if(mark[i] == highest) {
    var index = Number(i)
  }
}

console.log(name[index] + " has the highest marks" );

var total = 0;
for(i=0;i<5;i++){
  var total = total + mark[i]
}

var average = total / 5;
console.log("Average: " + average );