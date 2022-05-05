const canWin = n => {
    if (n < 2) {
        return false
    }

    let moves = [2, 3, 5]

    legalMoves.forEach(move => {
        if (!canWin(n - move)) {
            return true
        }
    })
    return false
} 