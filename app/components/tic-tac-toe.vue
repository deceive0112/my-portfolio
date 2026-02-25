<script setup>
const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
])

const calculateWinner = (board) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

const winner = computed(() => calculateWinner(board.value.flat()))

const makeMove = (x, y) => {
  if (winner.value || board.value[x][y]) return
  board.value[x][y] = player.value
  player.value = player.value === 'X' ? 'O' : 'X'
}

const resetGame = () => {
  board.value = [['', '', ''], ['', '', ''], ['', '', '']]
  player.value = 'X'
}
</script>

<template>
  <div class="text-center p-2">

    <h3 v-if="!winner" class="text-base md:text-xl mb-2 font-bold">
      Player <span :class="player === 'X' ? 'text-pink-500' : 'text-sky-500'">{{ player }}</span>'s turn
    </h3>

    <div class="flex flex-col items-center mb-2">
      <div v-for="(row, x) in board" :key="x" class="flex">
        <div v-for="(cell, y) in row" :key="y"
          class="border shadow-md border-white/30 
                 w-12 h-12 md:w-15 md:h-15
                 hover:bg-white/5 flex items-center justify-center 
                 text-2xl md:text-4xl font-bold cursor-pointer transition-colors duration-200"
          :class="cell === 'X' ? 'text-pink-500' : 'text-sky-500'"
          @click="makeMove(x, y)">
          {{ cell }}
        </div>
      </div>
    </div>

    <div class="text-center">
      <h2 v-if="winner" class="text-base md:text-lg font-bold mb-2">
        Player <span :class="winner === 'X' ? 'text-pink-500' : 'text-sky-500'">'{{ winner }}'</span> wins! 🎉
      </h2>
      <h2 v-else-if="board.flat().every(c => c)" class="text-base md:text-lg font-bold mb-2 text-green-400">
        It's a Draw!
      </h2>
      <button @click="resetGame"
        class="px-4 py-2 rounded-xl bg-blue-500 border-2 uppercase font-bold hover:bg-blue-600 transition-colors duration-300 cursor-pointer text-xs md:text-sm shadow-md">
        Reset
      </button>
    </div>
  </div>
</template>
