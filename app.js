// Default To Do List
let todo = ["Study JS", "Practice Coding", "Exercise"];

// Show List
console.log("Current To Do List:");
for (let i = 0; i < todo.length; i++) {
  console.log((i + 1) + ". " + todo[i]);
}

// User Choice
let choice = prompt("Enter N for New, E for Edit, D for Delete");

if (choice === "N") {

  let newTask = prompt("Enter new task");
  todo.push(newTask);

} 
else if (choice === "E") {

  let editIndex = prompt("Which number you want to edit?");
  let newText = prompt("Enter new task");

  todo[editIndex - 1] = newText;

} 
else if (choice === "D") {

  let delIndex = prompt("Which number you want to delete?");
  todo.splice(delIndex - 1, 1);

} 
else {

  console.log("Invalid option");

}

// Show Updated List
console.log("Updated To Do List:");
for (let i = 0; i < todo.length; i++) {
  console.log((i + 1) + ". " + todo[i]);
}