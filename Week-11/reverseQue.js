
	// Javascript program to reverse a Queue
	
	let queue = [];

	// Utility function to print the queue
	function Print()
	{
		while (queue.length > 0) {
			console.log( queue[0] + " ");
			queue.shift();
		}
	}

	// Function to reverse the queue
	function reversequeue()
	{
		let stack = [];
		while (queue.length > 0) {
			stack.push(queue[0]);
			queue.shift();
		}
		while (stack.length > 0) {
			queue.push(stack[stack.length - 1]);
			stack.pop();
		}
	}
	
	queue = []
	queue.push(1)
	queue.push(2)
	queue.push(3)
	queue.push(4)
	queue.push(5)
	

	reversequeue();
	Print();
	

