var deepestLeavesSum = function (root) {
  let maxDepth = 0;
  let sum = 0;

  function helper(node, depth) {
    if (!node) return;

    if (depth > maxDepth) {
      maxDepth = depth;
      sum = 0;
    }

    if (depth === maxDepth) {
      sum += node.val;
    }

    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  }

  helper(root, 1);

  return sum;
};
