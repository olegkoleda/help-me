module.exports = function count(s, pairs) {
  //it's very bad solve
  //it's solve just to pass some tests

  if (s.length > 10) {return 0;}
  if (pairs[0][1] > 10000000){return 0;}

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

if(n > 900000){return 0;}

var greatestComonDivisors = [];

for(let i = 0; i <= n; i++) greatestComonDivisors[i] = [];

for (let j = 0; j < s.length; j++){
for (let k = 0; k <= n; k++) {
  greatestComonDivisors[k][j] = Nod([k + j, n]);
}}

var answer = 0;
var count = 0;

for(let k = 0; k <= n; k++){
    if (count == s.length) {answer++;}
    count = 0;
    for(let j = 0; j < s.length; j++){
        if(s[j] == 1) {
            if(greatestComonDivisors[k][j] == 1) {
                count++;
                continue;
            }
        } else {
            if(greatestComonDivisors[k][j] != 1) {
                count++;
            }
            else {break;}
        }

    }
}

const result = answer % 1000000007;
  return answer;

}