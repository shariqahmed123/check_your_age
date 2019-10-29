function checkAge(){
let d = new Date();
let bYear = document.getElementById("ageYear").value; 
let result = d.getFullYear() - bYear ;
document.querySelector("h1").innerHTML = result;
}
