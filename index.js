function sumSquareDifference(n) {
  let sumOfSquares = 0
  let squareOfSums = 0 
  for (let i=1;i<=n;i++) {
    sumOfSquares += i*i
    squareOfSums += i
  }
  return (-sumOfSquares + (squareOfSums*squareOfSums))
 
}

sumSquareDifference(100);
