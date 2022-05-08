const password = "123456";

describe("Validar si el password tiene 6 caracteres y no está vacio", () => {
  test("Validar que el password tiene 6 caracteres", () => {
    expect(password).toHaveLength(6);
  });
  test("Validar que el password no está vacio", () => {
    expect(password).not.toHaveLength(0);
  });
});
