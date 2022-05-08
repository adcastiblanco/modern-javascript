const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

describe("Validar funciones de suma y resta", () => {
  test("Validar función de suma", () => {
    expect(suma(1, 2)).toBe(3);
  });
  test("Validar función de resta", () => {
    expect(resta(3, 2)).toBe(1);
  });
});
