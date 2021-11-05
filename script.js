function computerPlay(){
    let rock = 'Rock'
    let paper = 'Paper'
    let scissors = 'Scissors'
    let x = Math.floor(Math.random() *101 )

    if(x <= 33.32){
        return(rock)
    }
    else if(x >= 33.33 && x <= 66.66){
        return(paper)
    }
    else {return(scissors)}
}