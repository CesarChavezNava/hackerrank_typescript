## Explicación (Subarray Division 1)

Dos niños, Lily y Ron, quieren compartir una barra de chocolate. Cada uno de los cuadrados tiene un número entero.  
Lily decide compartir un segmento contiguo de la barra seleccionada, de modo que:  
- La longitud del segmento coincide con el mes de nacimiento de Ron.
- La suma de enteros en los cuadrados es igual al día de nacimiento de Ron.  

Determina de cuantas maneras Lily puede dividir el chocolate.

### Ejemplo
s = [2,2,1,3,2]  
d = 4  
m = 2

Lily quiere encontrar segmentos que sumen el día de nacimiento de Ron _d = 4_, con una longitud igual a su mes de nacimiento _m = 2_. En este caso hay dos segmentos que cumplen sus criterios: _[2,2]_ y _[1,3]_.

### Descripción  
Completa la función __birthday__.  
__birthday__ tiene los siguientes parametros:  
- _int s[n]_: Los números en cada uno de los cuadrados del chocolate.
- _int d_: Dia de cumpleaños de Ron.
- _int m_: Mes de cumpleaños de Ron.  

### Regresa
- _int_: El número de formas en que se puede dividir la barra.

### Mi solución
1. Me aseguro de pasar por todos los cuadrados del chocolate.   
```
while(initSquare < squares.length) {
    ...
    initSquare++;
}
```
2. Sabemos que solo podemos sumar un numero determinado de cuadrados, el cual equivale al mes de cumpleaños de Ron.
```
for(let currentSquare = 0; currentSquare < month - 1; currentSquare++) {
    squaresSum += squares[initSquare + currentSquare];
}

```
la instrucción `squaresSum += squares[initSquare + currentSquare]` suma los indices de los cuadrados que ya han sido comporbados.

3. Finalmente se valida si la suma es igual al día de nacimiento de Ron, si es verdadero se suma a las formas de dividir el chocolate.

```
if (squaresSum === day) ways += 1;
```

