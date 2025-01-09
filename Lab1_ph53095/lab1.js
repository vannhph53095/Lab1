const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 38 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
  ];
  

  function isValidPlayer(player) {
    return player?.name && typeof player.goals === 'number';
  }
  

  const validPlayers 
  = players.filter(isValidPlayer);

  let topScorer = validPlayers[1];
  validPlayers.forEach(player => {
    if (player.goals > topScorer.goals) {
      topScorer = player;
    }
  });
  

  console.log("Danh sách cầu thủ hợp lệ:", validPlayers);
  console.log("Cầu thủ ghi nhiều bàn thắng nhất:", topScorer);
  