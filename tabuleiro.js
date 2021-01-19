var ids = 1

function Tabuleiro() {
    this.pieces = []
    this.moves = []
    this.tabuleiro = []
    this.yScale = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    this.xScale = ['1', '2', '3', '4', '5', '6', '7', '8'] 

    //inicializa o tabuleiro
    let line_count = 1;
    this.xScale.forEach(number => {
        let collumn = 1;
        line = [];
        this.yScale.forEach(letter =>  {
            let isBlack = false;
            let piece = null;
            if (line_count % 2 != 0 && collumn % 2 != 0) {
                isBlack = true
            }
            if (line_count % 2 == 0 && collumn % 2 == 0) {
                isBlack = true
            } 

            //colunas que tem peças
            if (line_count == 1) {
                if (collumn == 1 || collumn == 8) {
                    piece = new Piece('T', 'B')
                }
                if (collumn == 2 || collumn == 7) {
                    piece = new Piece('C', 'B')
                }
                if (collumn == 3 || collumn == 6) {
                    piece = new Piece('B', 'B')
                }
                if (collumn == 4) {
                    piece = new Piece('D', 'B')
                }
                if (collumn == 5) {
                    piece = new Piece('R', 'B')
                }
            }

            if (line_count == 8) {
                if (collumn == 1 || collumn == 8) {
                    piece = new Piece('T', 'P')
                }
                if (collumn == 2 || collumn == 7) {
                    piece = new Piece('C', 'P')
                }
                if (collumn == 3 || collumn == 6) {
                    piece = new Piece('B', 'P')
                }
                if (collumn == 4) {
                    piece = new Piece('D', 'P')
                }
                if (collumn == 5) {
                    piece = new Piece('R', 'P')
                }
            }

            if (line_count == 2){
                piece = new Piece('P', 'B')
            }

            if (line_count == 7){
                piece = new Piece('P', 'P')
            }

            collumn ++;

            if (piece != null) {
                piece.caseActual = letter+''+number
                this.pieces.push(piece)
            }
            line.push({position : letter+''+number, piece: piece, isBlack: isBlack});
        })
        line_count ++;
        this.tabuleiro.push(line)
    })
    
    this.movePiece = function movePiece(blackOrWhite, move) {
        this.moves.push(new Move(blackOrWhite, move))
    }
}

function Piece(type, blackOrWhite) {
    //possiveis - P:Peão, B: bispo, C: Cavalo, D: Dama ou rainha, R: Rei, T: torre
    this.id = ids++;
    this.type = type
    //B or P
    this.blackOrwhite = blackOrWhite
    this.caseActual = null
    this.posibleMovie = []
    this.history = []
}

function Move(piece, move) {
    this.piece = piece
    this.move = move
}