module.exports = function count(s, pairs) {
  
  function Nod(A) //A = array
{   
    var n = A.length, x = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
     { var y = Math.abs(A[i]);
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
     }
    return x;
}

var n = 1; //N

for (let i = 0; i < pairs.length; i++) {
  n *= Math.pow(pairs[i][0], pairs[i][1]);
}

var greatestComonDivisors = [];

for(let i = 0; i <= n; n++){
    greatestComonDivisors[i] = [];
}



for (let j = 0; j < s.length; j++){
for (let k = 0; k <= n; k++) {
  greatestComonDivisors[k][0] = Nod([k, n]);
}}



}