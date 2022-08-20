import { hello } from "../src";

describe("Hello world", () => {
	it("Should return world", () => {
		expect(hello()).toBe("World");
	});
});
