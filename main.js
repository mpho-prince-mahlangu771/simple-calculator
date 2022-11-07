/*acknowledgements - resources I used for help:
	1. https://www.devhandbook.com/javascript/dom/event-target/
*/


/*
	naming conversion:
	under_scores for: variables
	cameCase for: function

*/


"use strict"

const calculation_area = document.querySelector(".calculations-area"); 
const button_area = document.querySelector(".buttons-area");
const operand_btn = document.querySelector("operand-btn");
const num_btn = document.querySelectorAll(".num-btn");
const btns = document.querySelectorAll(".buttons-area button");
let num_inputs = "";
let operand_inputs;
let output = "";
const btn_inputs = [];

btns.forEach(button => {
	button.addEventListener("click", (e) =>{
		//check buttons attribute to check button type i.e. num-btn or operand-btn or
		const clicked_btn = e.target; 
		const clicked_btn_Value = clicked_btn.innerHTML; 
		const btn_id_Attribute = clicked_btn.getAttribute("id");
		const btn_class_Attribute = clicked_btn.getAttribute("class");

		if (btn_class_Attribute  == "num-btn") {
			num_inputs += clicked_btn_Value;
			output += clicked_btn_Value;
			calculation_area.innerHTML = output;

		} else if (btn_class_Attribute == "operand-btn") {
			//call corresponding operand method and pass btn_inputs
			if (num_inputs.length == 0) {
				output = " 0 " + clicked_btn_Value;
				calculation_area.innerHTML = output;
				

			} 
			
			btn_inputs.push(num_inputs);
			num_inputs = ""; 
			output = output + " " + clicked_btn_Value + " ";
			calculation_area.innerHTML = output;
			

		} else if (btn_id_Attribute == "delete") {
			alert("deleting value");
		} else if (btn_id_Attribute == "clear-btn") {
			calculation_area.innerHTML = "";
		} else if (btn_id_Attribute == "equal-sign") {
			alert("equals to");
		}


	});
});


