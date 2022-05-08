const user = {
  name: "John",
  balance: 500,
};

describe("Validate if the user is premium and the name is John", () => {
  test("Validate if the user is premium", () => {
    expect(user.balance).toBeGreaterThan(400);
  });
  test("Validate if the name is John", () => {
    expect(user.name).toBe("John");
  });
});
