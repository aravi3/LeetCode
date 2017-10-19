const canCompleteCircuit = (gas, cost) => {
  let sum = 0;
  let total = 0;
  let result = 0;

  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    total += sum;

    if (sum < 0) {
      result = i + 1;
      sum = 0;
    }
  }

  if (total < 0) {
    return -1;
  }
  else {
    return result;
  }
};
