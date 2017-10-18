def phone_permutations(num)
  dic = {
    0 => "",
    1 => "",
    2 => "abc",
    3 => "def",
    4 => "ghi",
    5 => "jkl",
    6 => "mno",
    7 => "pqrs",
    8 => "tuv",
    9 => "wxyz"
  }
  
  return dic[num].chars if num < 10
  
  first = num.to_s[0].to_i
  result = []
  
  dic[first].chars.each do |letter|
    prev_perms = phone_permutations(num.to_s[1..-1].to_i)
    
    prev_perms.each do |combo|
      result.push(letter + combo)
    end
  end
  
  result
end

p phone_permutations(234)