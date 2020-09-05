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
