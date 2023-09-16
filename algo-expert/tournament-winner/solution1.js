function tournamentWinner(competitions, results) {
  // Write your code here.
  let teamPoints = {};

  // calculate team points
  for (let i = 0; i < competitions.length; i++) {
    // get teams
    const homeTeam = competitions[i][0];
    const awayTeam = competitions[i][1];

    if (results[i]) {
      // home team won
      if (!teamPoints[homeTeam]) teamPoints[homeTeam] = 3;
      else teamPoints[homeTeam] += 3;
    } else {
      // away team won
      if (!teamPoints[awayTeam]) teamPoints[awayTeam] = 3;
      else teamPoints[awayTeam] += 3;
    }
  }

  // find winner
  let winner;
  let highestPoints = 0;

  Object.keys(teamPoints).forEach((team) => {
    if (teamPoints[team] > highestPoints) {
      highestPoints = teamPoints[team];
      winner = team;
    }
  });

  return winner;
}

// Time: O(n) where n is the number of competitions,
// Space: O(k) where k is the number of teams
