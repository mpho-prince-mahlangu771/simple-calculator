/*acknowledgements - resources I used for help:
	1. https://www.devhandbook.com/javascript/dom/event-target/
*/
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
	button.addEventListener("click", (e) =>{
		//pseudocode
		//get 

		
		//check btn attribute  to check what number it is
		//get btn num-btn innerHTML value and append to calculationArea 
		// if(clicked-btn == numBtn) {
		// 	//check buttons attribute to check button type i.e. num-btn or operand-btn or
		// 	calculationArea.innerHTML = getClickedBtn.value
		// }

		//check buttons attribute to check button type i.e. num-btn or operand-btn or
		const clickedBtn = e.target; 
		const clickedBtnAttribute = clickedBtn.getAttribute("class");
		const clickedBtnValue = clickedBtn.innerHTML; 



		if (clickedBtnAttribute == "num-btn") {
			calculationArea.innerHTML = clickedBtnValue;
			// alert("you clicked a number");
		}



		alert(clickedBtnValue);
	});
});


/*
lets say in file index.html we have a button:
	<button class="x-squared" name="test">x^2</button>
...and in app.js we want to check if 1 of the attributes has a value(test):

	const attrValue = btns[0].attributes.getNamedItem("name").value

if (attrValue == "test") {
	alert("the attribute has a value of test");
} 

//used console to test how to access contents of the DOM
console.log(btns);
console.log(btns[0]);
console.log(btns[3]);
console.log(btns[0].attributes.getNamedItem("name").value);
console.log(btns[3].attributes[0]);
console.log(btns[0].attributes[1]);
console.log(btns[0].attributes);
// .attributes[0].nodeName.value

*/
// console.log(btns);
// console.log(btns[0]);
// console.log(btns[3]);
// console.log(btns[3].attributes[0]);
// console.log(btns[0].attributes[1]);
// console.log(btns[0].attributes);
