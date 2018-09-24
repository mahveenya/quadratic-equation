module.exports = function solveEquation(equation) {
let arr = equation.split(' ');
let a, b, c, d, x1, x2, result;

  a = Number(arr[0]);
  b = Number(arr[3] + arr[4]);
  c = Number(arr[7] + arr[8]);
  d = b*b - 4*a*c;

  if (d > 0) {
    x1 = (-b - Math.sqrt(d)) / (2*a);
    x2 = (-b + Math.sqrt(d)) / (2*a);
  } 
  else if (d == 0) {
    x1 = x2 = -b / (2*a);
  } 
  else {x1 = x2 = null}

  result = [Math.round(x1), Math.round(x2)];
  
  let compare = (i, j) => i - j;
  
  result.sort(compare);

  return result;

}
