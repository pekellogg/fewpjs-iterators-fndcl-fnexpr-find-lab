function superbowlWin(records) {
  const winner = records.find(record => record.result === "W");
  return winner ? winner.year : undefined
}