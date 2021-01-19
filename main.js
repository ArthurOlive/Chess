var tab
var out = null

$(document).ready(() => {
    tab = new Tabuleiro()

    let tabuleiro_html = ""

    tab.tabuleiro.forEach((row) => {
        let line = ""
        
        row.forEach((square) => {
            
            let piece = ""
            if (square.piece != null ){ 
                if (square.piece.blackOrwhite == 'B') {
                    switch(square.piece.type) {
                        case 'T':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/torre_white.PNG'>`
                            break
                        case 'C':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/cavalo_white.PNG'>`
                            break
                        case 'D':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/rainha_white.PNG'>`
                            break
                        case 'P':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/peao_white.PNG'>`
                            break
                        case 'B':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/bispo_white.PNG'>`
                            break
                        case 'R':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/rei_white.PNG'>`
                            break
                    }
                } else {
                    switch(square.piece.type) {
                        case 'T':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/torre_black.PNG'>`
                            break
                        case 'C':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/cavalo_black.PNG'>`
                            break
                        case 'D':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/rainha_black.PNG'>`
                            break
                        case 'P':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/peao_black.PNG'>`
                            break
                        case 'B':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/bispo_black.PNG'>`
                            break
                        case 'R':
                            piece = `<img id='${square.piece.id}' class='piece' style='height: 60px; width: 60px;' src='./img/rei_black.PNG'>`
                            break
                    }
                }
            }

            line += `<div id = '${square.position}' class='square' style='background: ${square.isBlack ? 'rgb(181 136 99)' : 'rgb(240 217 181)'}'>${piece}</div>`
            
        })
        tabuleiro_html += "<div class='row'>" + line + "</div>"
    })

    $("#tabuleiro").append(tabuleiro_html)

    $(".piece").draggable()

    $(".square").droppable({
        drop: function(event, ui) {
            //$(this).css('background', 'rgb(0,200,0)');
            //reseta os parametros
            out = null;

            let peca = findPiece(ui.draggable[0].id)
            
            if (peca.type == 'P') {

            }
            
            ui.draggable[0].style.top = 'auto'
            ui.draggable[0].style.left = 'auto'
            ui.draggable[0].style.rigth = 'auto'
            ui.draggable[0].style.bottom = 'auto'
            $(this).html(ui.draggable[0])


            tab.moves.push(new Move(peca, peca.type+''+this.id))
        },
        over: function(event, ui) {
            //$(this).css('background', 'orange');
            //vai mostrar os campos possiveis para mover

            ui.draggable[0].id

        },
        out: function(event, ui) {
            
            //$(this).css('background', 'cyan');
            if (out == null) {
                out = this
            }
        }
    })
})

function findPiece(id) {
    return tab.pieces.find(p => p.id == id)
}

function calcPos(id) {
    let peca = findPiece(id)

    switch(peca.type) {
        case 'T':
            break
        case 'C':
            break
        case 'D':
            break
        case 'P':
            break
        case 'B':
            break
        case 'R':
            
            break
    }
}
