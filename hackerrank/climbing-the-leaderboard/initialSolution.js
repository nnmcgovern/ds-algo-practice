function climbingLeaderboard(ranked, player) {
  // Write your code here
  let ranks = [];

  for (let i = 0; i < player.length; i++) {
    let scorePlayer = player[i];
    let rankCount = 1;

    for (let j = 0; j < ranked.length; j++) {
      let score = ranked[j];
      let nextScore = ranked[j + 1];

      if (scorePlayer < score) {
        if (score !== nextScore) rankCount++;
      }
    }

    ranks.push(rankCount);
  }

  return ranks;
}

// Time: O(m * n) where m is the number of player scores
// and n is the number of ranked scores
