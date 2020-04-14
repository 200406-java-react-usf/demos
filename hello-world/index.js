let checkcondition = () => {
	let a = 'variable' 
	let b = null

	return a && b //the type coercion of a is truthy and b is falsy
}

console.log(checkcondition()); //output is '' (empty string)
