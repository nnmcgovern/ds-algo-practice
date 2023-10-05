var deepestLeavesSum = function (root) {
  if (root === null) {
    return 0;
  }

  let queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    let levelSize = queue.length;
    sum = 0;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      sum += currentNode.val;

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  return sum;
};
