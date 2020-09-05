<style>
.ant-tabs-tabpane-active p {
  text-align: justify;
}

.ant-tabs-tabpane-active table, th, td {
  border: 1px dotted black;
}

.ant-tabs-tabpane-active pre {
  background-color: #EEEEEE;
  margin: 20px;
  padding: 10px;
  border: 2px dotted black;
  width: 80%;
}
</style>

# Avaliação do programa para cálculo de raízes de uma equação do 2o Grau

Para a atividade, foram criados dois programas para o calculo das raízes, denominados `black_box1` e `black_box2`, cujos códigos fonte se encontram ao final deste relatório.


---

## Especificação do programa:

```
Usage: ./black_box2 $a $b $c
Where: $a, $b, $c are inputs for the equation a*x^2 + b*x^1 + c = 0
Outputs: JSON object with status message, error flag and the results
```

---

## Entradas (Test cases):
|Número|Caso| a | b | c | ... |
|:--:|:---|:--:|:--:|:--:|:--:|
|1| Raízes positivas|    1  |     -5   |      6 | - |
|2| Raízes negativas|    1   |    5     |     6 | - |
|3| Raízes duplas|       1   |    -2     |    1| - |
|4| Raízes complexas|    1   |     2     |    2| - |
|5| Grandes números|     1e100000| -5e100000 | 6e100000| - |
|6| Poucos argumentos| 1 | 2 | - | - |
|7| Muitos argumentos| 1 | 2 | 2 | 1 |
|8| String como entrada | one | two | one | - |

---

## Saídas

### Black Box 1

- 1) **Sucesso**:
```bash
$ ./black_box1 1 -5 6
{"error":false,"msg":"Success","solutions":[2.000000,3.000000],"input":{"a":1.000000,"b":-5.000000,"c":6.000000}}
```

- 2) **Sucesso**:
```bash
$ ./black_box1 1 5 6
{"error":false,"msg":"Success","solutions":[-3.000000,-2.000000],"input":{"a":1.000000,"b":5.000000,"c":6.000000}}
```

- 3) **Sucesso**:
```bash
$ ./black_box1 1 -2 6
{"error":false,"msg":"Success","solutions":[-nan,-nan],"input":{"a":1.000000,"b":-2.000000,"c":6.000000}}
```

- 4) **Falha**:
```bash
$ ./black_box1 1 2 2
{"error":false,"msg":"Success","solutions":[-nan,-nan],"input":{"a":1.000000,"b":2.000000,"c":2.000000}}
```

Obs: apesar do programa considerar as entradas válidas, o resultado está incorreto.

- 5) **Falha**:
```bash
$ ./black_box1 1e100000 -5e100000 6e100000
{"error":false,"msg":"Success","solutions":[-nan,-nan],"input":{"a":inf,"b":-inf,"c":inf}}
```

Obs: apesar do programa considerar as entradas válidas, o resultado está incorreto.

- 6) **Falha**:
```bash
$ ./black_box1 1 2
{"error":true,"msg":"Too few arguments. Usage: ./black_box1 $a $b $c","argumentCount":2}
```

- 7) **Falha**:
```bash
$ ./black_box1 1 2 2 1
{"error":true,"msg":"Too many arguments. Usage: ./black_box1 $a $b $c","argumentCount":4}
```

- 8) **Falha**:
```bash
$ ./black_box1 one two one
{"error":false,"msg":"Success","solutions":[-0.000000,0.000000],"input":{"a":0.000000,"b":0.000000,"c":0.000000}}
```

---

### Black Box 2

- 1) **Sucesso**:
```bash
$ ./black_box1 1 -5 6
{"error":false,"msg":"Success","solutions":[2.000000,3.000000],"input":{"a":1.000000,"b":-5.000000,"c":6.000000}}
```

- 2) **Sucesso**:
```bash
$ ./black_box2 1 5 6
{"error":false,"msg":"Success","solutions":[{"real":-3.000000,"imag":-0.000000},{"real":-2.000000,"imag":0.000000}],"input":{"a":1.000000,"b":5.000000,"c":6.000000}}
```

- 3) **Sucesso**:
```bash
$ ./black_box2 1 -2 1
{"error":false,"msg":"Success","solutions":[{"real":1.000000,"imag":-0.000000},{"real":1.000000,"imag":0.000000}],"input":{"a":1.000000,"b":-2.000000,"c":1.000000}}
```

- 4) **Sucesso**:
```bash
$ ./black_box2 1 2 2
{"error":false,"msg":"Success","solutions":[{"real":-1.000000,"imag":-1.000000},{"real":-1.000000,"imag":1.000000}],"input":{"a":1.000000,"b":2.000000,"c":2.000000}}
```

- 5) **Falha**:
```bash
$ ./black_box2 1e100000 -5e100000 6e100000
{"error":false,"msg":"Success","solutions":[{"real":-nan,"imag":nan},{"real":-nan,"imag":-nan}],"input":{"a":inf,"b":-inf,"c":inf}}
```

Obs: apesar do programa considerar as entradas válidas, o resultado está incorreto.

- 6) **Falha**:
```bash
$ ./black_box2 1 2
{"error":true,"msg":"Too few arguments. Usage: ./black_box2 $a $b $c","argumentCount":2}
```

- 7) **Falha**:
```bash
$ ./black_box2 1 2 2 1
{"error":true,"msg":"Too many arguments. Usage: ./black_box2 $a $b $c","argumentCount":4}
```

- 8) **Falha**:
```bash
$ ./black_box2 one two one
{"error":false,"msg":"Success","solutions":[{"real":-0.000000,"imag":-0.000000},{"real":0.000000,"imag":0.000000}],"input":{"a":0.000000,"b":0.000000,"c":0.000000}}
```

---

## Códigos fonte

### `black_box1.c`:
```c
//%cflags:-lm
#include <stdio.h>
#include <math.h>
#include <stdlib.h>

#define MAX_ARGS 4

double * roots(double a, double b, double c) {
  double delta = b*b - 4.0*a*c;
  static double solutions[2];
  solutions[0] = (-b - sqrt(delta))/2.0;
  solutions[1] = (-b + sqrt(delta))/2.0;
  
  return(solutions);
}


int main(char argc, char* argv[]) {
  if (argc < MAX_ARGS) {
    printf("{\"error\":true,\"msg\":\"Too few arguments. Usage: ./black_box1 $a $b $c\",\"argumentCount\":%d}\n", argc - 1);
    return 1;
  } else if (argc > MAX_ARGS) {
    printf("{\"error\":true,\"msg\":\"Too many arguments. Usage: ./black_box1 $a $b $c\",\"argumentCount\":%d}\n", argc - 1);
    return 1;
  } else {
    double a = atof(argv[1]);
    double b = atof(argv[2]);
    double c = atof(argv[3]);
    double* solutions = roots(a, b, c);

    printf(
      "{\"error\":false,\"msg\":\"Success\",\"solutions\":[%f,%f],\"input\":{\"a\":%f,\"b\":%f,\"c\":%f}}\n",
      solutions[0],
      solutions[1],
      a,
      b,
      c
    );

    return 0;
  }
}
```

### `black_box2.c`:
```c
//%cflags:-lm
#include <stdio.h>
#include <math.h>
#include <complex.h>
#include <stdlib.h>

#define MAX_ARGS 4

complex double * roots(double a, double b, double c) {
    complex double delta = b*b - 4.0*a*c;
    complex double phi = carg(delta)/2.0;
    complex double delta_square = sqrt(cabs(delta))*(cos(phi) + I*sin(phi));

    static complex double x[2];
    x[0] = (-b - delta_square)/2.0;
    x[1] = (-b + delta_square)/2.0;
    
    return(x);
}

int main(char argc, char* argv[]) {
  if (argc < MAX_ARGS) {
    printf("{\"error\":true,\"msg\":\"Too few arguments. Usage: ./black_box2 $a $b $c\",\"argumentCount\":%d}\n", argc - 1);
    return 1;
  } else if (argc > MAX_ARGS) {
    printf("{\"error\":true,\"msg\":\"Too many arguments. Usage: ./black_box2 $a $b $c\",\"argumentCount\":%d}\n", argc - 1);
    return 1;
  } else {
    double a = atof(argv[1]);
    double b = atof(argv[2]);
    double c = atof(argv[3]);
    complex double* solutions = roots(a, b, c);

    printf(
      "{\"error\":false,\"msg\":\"Success\",\"solutions\":[{\"real\":%f,\"imag\":%f},{\"real\":%f,\"imag\":%f}],\"input\":{\"a\":%f,\"b\":%f,\"c\":%f}}\n",
      creal(solutions[0]),
      cimag(solutions[0]),
      creal(solutions[1]),
      cimag(solutions[1]),
      a,
      b,
      c
    );

    return 0;
  }
}
```
