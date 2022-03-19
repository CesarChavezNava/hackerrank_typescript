## Explicación (Flipping the Matrix)

Sean invento un juego que involucra una matrix de __2n x 2n__ donde cada celda de la matriz contiene un número entero.  
Puede invertir cualquiera de sus filas o columnas cualquier número de veces. El objetivo de juego es maximazar la suma de los elementos en la submatriz __n x n__ ubicada en el cuadrante superior izquierdo de la matriz.  
Dadas las configuraciones iniciales para _q_ matrices, ayuda a Sean a inviertir las filas y columnas de cada matriz, de la mejor manera posible para que la suma de los elementos en el cuadrante superior izquierdo de la matriz sea la máxima.  

### Ejemplo
`matrix = [[1,2],[3,4]]`

```
1 2
3 4
```
Es __2 x 2__ y nosotros queremos maximizar el cuadrante superior izquierdo, a una matriz __1 x 1__, Invertir el celda 1:

```
1 2
4 3
```
y ahora invertimos la columna 0:
```
4 2
1 3
```
La suma máxima es __4__.  

### Descripción  
Complete la función flippingMatrix.  
__flippingMatrix__ tiene los siguientes parámetros:
- _int matrix[2n][2n]_: una matriz bidimensional de enteros

### Regresa
- _int_: La máxima suma posible.

### Mi solución
1. Obtener la longitud de los cuadrantes
```
const quadrantLength: number = matrix.length / 2;
```
2. Recorrer cada valor del primer cuadrante 
```
for (let row = 0; row < quadrantLength; row++) {
    for (let column = 0; column < quadrantLength; column++) {
        ...
    }
}
```
3. Obtener el valor mayor de los 4 cuadrantes, se checa con la posicion simil en otro cuadrante

- Se inicializa el máximo valor con el valor del primer cuadrante:  
```
maxNumberQuadrant = matrix[row][column];
```

- Obtener el valor máximo contra el cuadrante superior derecho:  
```
maxNumberQuadrant = Math.max(
    matrix[row][getQuadrantIndex(matrixlength, column)],
    maxNumberQuadrant
);
```  

- Obtener el valor máximo contra el cuadrante inferior Izquierdo: 
``` 
maxNumberQuadrant = Math.max(
    matrix[getQuadrantIndex(matrix.length, row)][column],
    maxNumberQuadrant
);
```

- Obtener el valor máximo contra el cuadrante inferior derecho:  
```
maxNumberQuadrant = Math.max(
    matrix  [getQuadrantIndex(matrix.length, row)]
            [getQuadrantIndex(matrix.length, column)],
    maxNumberQuadrant
);
```

4. El valor máximo se suma a la suma del primer cuadrante
```
sumQuadrantTopLeft += maxNumberQuadrant;
```

