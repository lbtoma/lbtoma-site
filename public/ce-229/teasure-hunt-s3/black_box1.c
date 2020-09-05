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
