## Explicación (Mini-Max Sum)

Dados cinco enteros positivos, encuentre los valores mínimo y máximo que se pueden calcular sumando exactamente cuatro de los cinco enteros. Luego imprima los respectivos valores mínimo y máximo.  

### Ejemplo
`arr=[1,3,5,7,9]` 

La mínima suma es __1+3+5+7=16__ y la máxima es __3+5+7+9=24__. La funcion imprime __16 24__.

### Descripción  
Completa la función miniMaxSum  
miniMaxSum tiene los siguientes parametros:  
- _arr_: un arreglo de 5 enteros.

### Regresa
_string_: Retorna una cadena con dos enteros separados por espacios en una línea: la suma mínima y la suma máxima de elementos.

### Mi solución
1. Ordenar el arreglo, con el fin de tener los numeros menores al principio y los numeros mas altos al final, para poder sumar los 4 primeros y los 4 ultimos.
```
const sortedArray = arr.sort((a, b) => a - b);
```
2. Recorrer el arreglo ordenado de izquierda a derecha para obtener la suma menor y recorremos el arreglo ordenado de derecha a izquierda para obtener la suma mayor
```
while (leftPointer < 4 && rightPointer > 0) {
    sumMin += sortedArray[leftPointer];
    sumMax += sortedArray[rightPointer];

    leftPointer++;
    rightPointer--;
  }
```