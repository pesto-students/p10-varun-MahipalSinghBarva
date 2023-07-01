
	class petrolPump {
		constructor(petrol, distance) {
			this.petrol = petrol;
			this.distance = distance;
		}
	};

	const printTour = (arr, n) => {
		
		let start = 0;
		let end = 1;

		let curr_petrol = arr[start].petrol - arr[start].distance;

		while (end != start || curr_petrol < 0) {
			
			while (curr_petrol < 0 && start != end) {
				
				curr_petrol -= arr[start].petrol - arr[start].distance;
				start = (start + 1) % n;

				if (start == 0)
					return -1;
			}

			curr_petrol += arr[end].petrol - arr[end].distance;

			end = (end + 1) % n;
		}

		return start;
	}

	let arr = [new petrolPump(6, 4), new petrolPump(3, 6), new petrolPump(7, 3)];
	let n = arr.length;
	let start = printTour(arr, n);

	(start == -1) ? console.log("No solution") : console.log(`Start = ${start}`);




