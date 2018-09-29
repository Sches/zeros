module.exports = function getZerosCount(number) {
  // your implementation
   let count = 0;
   while(number >= 5)
   {
     count += ~~(number / 5);
     number /= 5;
   }
   return count;
}
