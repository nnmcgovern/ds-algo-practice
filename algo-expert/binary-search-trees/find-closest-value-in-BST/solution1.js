function findClosestValueInBst(tree, target) {
  // Write your code here.
  const helper = (tree, target, closest) => {
    if (!tree) return closest;

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    }

    if (target < tree.value) return helper(tree.left, target, closest);
    else if (target > tree.value) return helper(tree.right, target, closest);
    else return closest;
  };

  return helper(tree, target, Infinity);
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Average: Time: O(log(n)), Space: O(log(n)) [callstack]
// Worst (if tree is one long branch): Time: O(n), Space O(n)
