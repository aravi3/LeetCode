const largestNumber = (nums) => {
  let isZero = true;

  nums = nums.map((num) => {
    if (num !== 0) {
      isZero = false;
    }

    return num.toString();
  });

  if (isZero) {
    return "0";
  }

  nums.sort((str1, str2) => {
    const combo1 = str1 + str2;
    const combo2 = str2 + str1;

    return combo1 - combo2;
  }).reverse();

  return nums.join("");
};

console.log(largestNumber([9, 30, 34, 5, 3]));
