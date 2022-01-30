const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      while (this.prevGuesses[this.prevGuesses.length-1] != this.secretNum){
      this.prevGuesses.push(this.getGuess())
    this.render()  
    }

  },
getGuess: function (){
  let usersGuess 
  do {
    usersGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
  } while(isNaN(usersGuess) || usersGuess <=this.smallestNum || usersGuess >= this.biggestNum)
return usersGuess
},
render : function () {
 if (this.prevGuesses[this.prevGuesses.length-1]===this.secretNum){
  alert(`Congrats! You guessed the number in ${this.prevGuesses.length}`)}
else if (this.prevGuesses[this.prevGuesses.length-1]<this.secretNum){
  alert (`Too low!`)
}
else {
  alert (`Too High!`)
}
}


}

game.play()