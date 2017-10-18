const phonePermutations = (num) => {
  const dic = {
    0: "",
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  
  if (num < 10) {
    return dic[num].split("");
  }
  
  const first = parseInt(num.toString()[0]);
  const result = [];
  
  dic[first].split("").forEach((letter) => {
    const prevPerms = phonePermutations(parseInt(num.toString().slice(1)));
    
    prevPerms.forEach((combo) => {
      result.push(letter + combo);
    });
  });
  
  return result;
};

console.log(phonePermutations(234));