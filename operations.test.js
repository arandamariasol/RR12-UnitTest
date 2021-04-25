import * as operations from "./operations";

//1

test('El texto ingresado es "hola" ', () => {
    expect(operations.texto('hola')).toBe('hola');
});

//2

test('Sumar 1 + 2 es igual a 3', () => {
  expect(operations.suma(1, 2)).toBe(3);
});

//3 

test('Restar 5 - 3 es igual a 2', () => {
    expect(operations.resta(5, 3)).toBe(2);
});

//4

test('Multiplicar 3 por 4 es igual a 12', () => {
    expect(operations.multiplicacion(3, 4)).toBe(12);
});

//5

test('Dividir 10 por 2 es igual a 5', () => {
    expect(operations.division(10, 2)).toBe(5);
});

test('Dividir 10 por 0 no se puede realizar por divisor = 0', () => {
    expect(operations.division(10, 0)).toBe('No se puede dividir por 0');
});

//6

test('La tabla de multiplicar del n° 4 hasta 5 es igual a [0, 4, 8, 12, 16, 20]', () => {
    expect(operations.tablaMultiplicar(4, 5)).toStrictEqual([0, 4, 8, 12, 16, 20]);
});

test('La tabla de multiplicar del n° 4 hasta undefined es igual a [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]', () => {
    expect(operations.tablaMultiplicar(4, undefined)).toStrictEqual([0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40]);
});

//7

test('Elevar 3 a la segunda potencia es igual a 9', () => {
    expect(operations.potencia(3, 2)).toBe(9);
});

//8

test('Sumar el producto de 2*2 y el producto de 3*3 es igual a 13', () => {
    expect(operations.anidada(2, 3)).toBe(13);
});

//9

test('El n° 2 contará con 3 ceros a la izquierda, resultando un string de longitud 4 igual a "0002" ', () => {
    expect(operations.cerosIzq(2, 4)).toBe("0002");
});