def can_complete_circuit(gas, cost)
  idx = 0
  sum = 0
  total = 0
  result = 0

  while idx < gas.length
    sum += gas[idx] - cost[idx]
    total += sum

    if sum < 0
      result = idx + 1
      sum = 0
    end

    idx += 1
  end

  if total < 0
    return -1
  else
    return result
  end
end
