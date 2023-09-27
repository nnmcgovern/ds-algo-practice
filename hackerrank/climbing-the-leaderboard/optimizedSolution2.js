function climbingLeaderboard(ranked, player) {
  const uniqueRanked = [...new Set(ranked)];
  const playerRanks = [];
  let rank = uniqueRanked.length - 1;

  for (let i = 0; i < player.length; i++) {
    let right = uniqueRanked[rank];

    if (player[i] >= right) {
      rank--;
      i--;
    } else playerRanks.push(rank + 2);
  }
  return playerRanks;
}

// Time: O(m * n) where m is the number of player scores
// and n is the number of unique ranked scores
