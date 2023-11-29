var isIsomorphic = function (s, t) {
  const mapST = Array(256).fill(-1);
  const mapTS = Array(256).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const charS = s.charCodeAt(i);
    const charT = t.charCodeAt(i);

    if (mapST[charS] !== mapTS[charT]) {
      return false;
    }

    mapST[charS] = i;
    mapTS[charT] = i;
  }

  return true;
};

// time: O(n)
// space: O(1)
