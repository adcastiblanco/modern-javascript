const productos = ["producto 1", "producto 2", "producto 3"];

describe("Validar si el producto está en el array y que el array tenga 3 items", () => {
  test("Validar que el producto está en el array", () => {
    expect(productos).toContain("producto 2");
  });
  test("Validar que el array tenga 3 items", () => {
    expect(productos).toHaveLength(3);
  });
});
