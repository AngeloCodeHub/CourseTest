/**
 * https://dev.to/bhagatparwinder/classes-in-js-public-private-and-protected-1lok
 */
class test_class {
	constructor() {
		this.d = 56;
	}

	fn() {
		console.log("類別~~~");
	}
	#A = 6;	//private
	c = 12 + this.#A	//pubic
}


let instance_test = new test_class

instance_test.fn()
console.log(instance_test.A);	//無法讀
console.log(instance_test.c);	//public可被存取

instance_test.c = instance_test.c * 3	//可改變value
console.log(instance_test.c);



