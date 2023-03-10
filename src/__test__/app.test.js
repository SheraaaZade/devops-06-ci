const { getCurrentMonth } = require("../app");
const { isAdmin } = require("../app");

describe("app tests suites - getCurrentMonth", () => {
  test("should return the current month", () => {
    const result = getCurrentMonth();
    expect(result).toBe("December");
  });
});

describe("app tests suites - isAdmin", () => {
  test("should return false as user is not admin", () => {
    const result = isAdmin("user");
    expect(result).toBe(false);
  });

  test("should return true as user is not admin", () => {
    const result = isAdmin("admin");
    expect(result).toBe(true);
  });
});
