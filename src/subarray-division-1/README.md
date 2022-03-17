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
