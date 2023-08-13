<template>
  <div>
    <h1>TIC TAC TOE</h1>

    <div class="game">
      <div
        v-for="(subSquare, index) in arrBoard"
        :key="index"
        class="square"
        @click="handleClick(index)"
      >
        {{ subSquare }}
      </div>
    </div>
    <div v-if="winner">
      <p>{{ winner }} wins!</p>
    </div>
    <div v-if="draw">
      <p>The game ended in a draw.</p>
    </div>
    <p><input @click="reset" class="reset" type="button" value="RESET" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrBoard: ["", "", "", "", "", "", "", "", ""],
      player: "X",
      winner: null,
      draw: false,
    };
  },
  methods: {
    handleClick(index) {
      if (!this.arrBoard[index] && !this.winner && !this.draw) {
        this.arrBoard[index] = this.player;
        if (this.checkWinner(this.player)) {
          this.winner = this.player;
        } else if (this.checkDraw()) {
          this.draw = true;
        } else {
          this.player = this.player === "X" ? "O" : "X";
        }
      }
    },
    checkWinner(currentPlayer) {
      const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const [a, b, c] = condition;
        if (
          this.arrBoard[a] === currentPlayer &&
          this.arrBoard[b] === currentPlayer &&
          this.arrBoard[c] === currentPlayer
        ) {
          return true;
        }
      }
      return false;
    },
    checkDraw() {
      for (let i = 0; i < this.arrBoard.length; i++) {
        if (this.arrBoard[i] === "") {
          return false;
        }
      }
      return true;
    },
    reset() {
      for (let i = 0; i < this.arrBoard.length; i++) {
        this.arrBoard[i] = "";
      }
      this.player = "X";
      this.winner = null;
      this.draw = false;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #4f2bc6;
}

h1 {
  margin-top: 100px;
  text-align: center;
}

p {
  text-align: center;
  margin-top: 20px;
}

.reset {
  height: 50px;
  width: 300px;
  font-size: large;
  background-color: #df7aaf;
  border: none;
}

.reset:hover {
  background-color: #d998bb;
}

.game {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
}

.square {
  border: 1px solid;
  height: 100px;
  width: 100px;
  background-color: #00ffff;
  cursor: pointer;
  text-align: center;
  border: 1px solid white;
  color: black;
  font-size: 3em;
  font-weight: bold;
}

.square:hover {
  background-color: rgb(0, 255, 255, 0.5);
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #fc354c 0%,
    #0abfbc 51%,
    #fc354c 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
