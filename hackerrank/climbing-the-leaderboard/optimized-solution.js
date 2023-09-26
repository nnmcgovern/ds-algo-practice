function climbingLeaderboard(ranked, player) {
  const uniqueRanked = [...new Set(ranked)]; // Remove duplicate scores and keep the order.
  const ranks = [];

  let rankIndex = uniqueRanked.length - 1; // Start from the last rank

  for (let i = 0; i < player.length; i++) {
    const scorePlayer = player[i];
    while (rankIndex >= 0 && scorePlayer >= uniqueRanked[rankIndex]) {
      // Move down the ranked list until you find the correct rank for the player's score.
      rankIndex--;
    }
    const playerRank = rankIndex + 2; // Add 1 for 0-based index and 1 because the player's score is greater.
    ranks.push(playerRank);
  }

  return ranks;
}

// Time: O(m * log(n)) where m is the number of player scores
// and n is the number of unique ranked scores
