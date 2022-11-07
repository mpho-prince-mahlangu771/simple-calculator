// contains my thoughts related to the project
//when i'm stuck I come here to gain enlightment by working out the problem



/*
1. 
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




/*

2. 
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
