"use strict"
/*
	naming conversion:
	cameCase for:
		variables, function, and class methods 
*/

/*
	algorithms for performing calculations:
	1. wait for user to click a button(listen for clicks)
	2. when user clicks a button get the button's (elem) className
	3. while the className is not(equal-sign) do
	4. if(elem == "num-btn") 
			v = getElemInnerValue
		else if(elem == "operand-btn")
			//check type of operand
			if(elem == "addition")
				ans = add(v)

*/

const calculationArea = document.querySelector(".calculations-area"); 
const buttonArea = document.querySelector(".buttons-area");
const operandBtn = document.querySelector("operand-btn");
const numBtn = document.querySelectorAll(".num-btn");
// calculationArea.innerHTML = buttonArea.innerHTML + operand;
// calculationArea.innerHTML = 
// console.log(numBtn);

const btns = document.querySelectorAll(".buttons-area button");
btns.forEach(button => {
	button.addEventListener("click", () =>{
		alert("button clicked");
	});
});

console.log(btns);