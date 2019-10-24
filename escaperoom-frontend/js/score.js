class Score {
  constructor(name, time) {
    this.time = time;
    this.name = name;
  }

  appendScores() {
    document.getElementById('top-scores-container').style.display = "flex";
    const topScoresNameOl = document.getElementById("top-scores-name");
    const topScoresOl = document.getElementById("top-scores");
    topScoresOl.style.listStyle = "none";
    const liName = document.createElement("li");
    const liScore = document.createElement("li");

    liName.textContent = `Name: ${this.name}`;
    liScore.textContent = `Score: ${this.time}`;

    topScoresNameOl.append(liName);
    topScoresOl.append(liScore);
  }
}
