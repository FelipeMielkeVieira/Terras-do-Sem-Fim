const { text } = require("express");

let totalWidth = window.innerWidth * 0.98;
let totalHeight = window.innerHeight * 0.96;

let speed = 200;

kaboom({
    debug: true,
    font: "sinko",
    width: totalWidth,
    height: totalHeight,
    background: [67, 197, 245]
});

let bgImage = loadSprite("capa", "/img/capa.jpg");

loadSprite("grama", "https://i.ibb.co/XzwXz89/New-Piskel-5.png");
loadSprite("porto", "/sprites/porto.png");
loadSprite("arvore", "/sprites/arvore.png")
loadSprite("player", "/sprites/player.png");

loadSprite("antonio", "/sprites/antonio.png");
loadSprite("joao", "/sprites/joao.png");
loadSprite("margot", "/sprites/margot.png");
loadSprite("virgilio", "/sprites/virgilio.png");

loadSprite("horacio", "/sprites/horacio.png");
loadSprite("balao", "/sprites/balao.png");
loadSprite("balao2", "/sprites/balao2.png");
loadSprite("caxixe", "/sprites/caxixe.png");

loadSprite("igreja", "/sprites/igreja.png");
loadSprite("capela", "/sprites/capela.png");

loadSprite("ester", "/sprites/ester.png");
loadSprite("cadeira", "/sprites/cadeira.png");
loadSprite("mesa", "/sprites/mesa.png")
loadSprite("piano", "/sprites/piano.png")
loadSprite("nota", "/sprites/nota.png")
loadSprite("porta", "/sprites/porta.png")

loadSprite("firmo", "/sprites/firmo.png");
loadSprite("maneca", "/sprites/maneca.png");
loadSprite("damiao", "/sprites/homemArmado.png")

loadSprite("fazenda", "/sprites/fazenda.png");
loadSprite("quadro", "/sprites/quadro.png");
loadSprite("sinho", "/sprites/sinho.png");
loadSprite("juca", "/sprites/juca.png");

scene("inicio", () => {

    add([
        sprite("capa"),
        pos(width() / 2, height() / 2),
        origin("center"),
        scale(1),
        fixed(),
    ]);

    add([
        text("Terras do Sem-Fim"),
        pos(totalWidth * 0.3, totalHeight * 0.2),
        scale(4),
        color(255, 128, 0)
    ])

    add([
        text("Jorge Amado"),
        pos(totalWidth * 0.45, totalHeight * 0.3),
        scale(2),
    ])

    add([
        text("Feito por Felipe Vieira e Kenzo Sato"),
        pos(totalWidth * 0.01, totalHeight * 0.95),
        scale(1.5),
    ])

    add([
        "botaoContinuar",
        pos(totalWidth * 0.425, totalHeight * 0.65),
        color(255, 128, 0),
        rect(totalWidth * 0.15, 40),
        outline(2),
        area()
    ])

    add([
        text("Continuar"),
        pos(totalWidth * 0.45, totalHeight * 0.67),
        scale(2),
    ])

    onClick("botaoContinuar", () => {
        go("parte1");
    })
})

scene("parte1", () => {

    layers([
        "1",
        "2",
        "3"
    ], "2")

    add([
        "agua",
        rect(totalWidth * 0.1, totalHeight * 0.1),
        pos(0, totalHeight * 0.9),
        color(0, 0, 255)
    ])

    add([
        "porto",
        sprite("porto"),
        scale(8),
        pos(totalWidth * 0.1, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Árvore 1
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.6, totalHeight * 0.6),
    ])

    //Árvore 2
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.75, totalHeight * 0.65)
    ])

    const player = add([
        "player",
        sprite("player"),
        pos(totalWidth * 0.1, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    const antonio = add([
        "antonio",
        sprite("antonio"),
        pos(totalWidth * 0.2, totalHeight * 0.75),
        area(),
        scale(4)
    ])

    const joao = add([
        "joao",
        sprite("joao"),
        pos(totalWidth * 0.3, totalHeight * 0.75),
        area(),
        scale(4)
    ])

    const margot = add([
        "margot",
        sprite("margot"),
        pos(totalWidth * 0.4, totalHeight * 0.75),
        area(),
        scale(4)
    ])

    const virgilio = add([
        "virgilio",
        sprite("virgilio"),
        pos(totalWidth * 0.9, totalHeight * 0.75),
        area(),
        scale(4)
    ])

    let textAntonio = false;
    let textJoao = false;
    let textMargot = false;
    let textVirgilio = false;

    player.onCollide("antonio", () => {
        if (!textAntonio) {
            textAntonio = true;
            textJoao = false;
            textMargot = false;
            textVirgilio = false;
            destroyAll("text")
            add([
                "text",
                text("Antonio Vitor"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Queria uma roca de"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("cacau so minha!"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
        }
    })

    player.onCollide("joao", () => {
        if (!textJoao) {
            textJoao = true;
            textAntonio = false;
            textMargot = false;
            textVirgilio = false;
            destroyAll("text")
            add([
                "text",
                text("Joao Magalhaes"),
                pos(joao.pos.x / 1.5, joao.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Ganhei um bom dinheiro com"),
                pos(joao.pos.x / 1.5, joao.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("as cartas desta vez!"),
                pos(joao.pos.x / 1.5, joao.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
        }
    })

    player.onCollide("margot", () => {
        if (!textMargot) {
            textMargot = true;
            textJoao = false;
            textAntonio = false;
            textVirgilio = false;
            destroyAll("text")
            add([
                "text",
                text("Margot"),
                pos(margot.pos.x / 1.5, margot.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Deixei Salvador so para"),
                pos(margot.pos.x / 1.5, margot.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("encontrar o advogado!"),
                pos(margot.pos.x / 1.5, margot.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
        }
    })

    player.onCollide("virgilio", () => {
        if (!textVirgilio) {
            textVirgilio = true;
            textJoao = false;
            textAntonio = false;
            textMargot = false;
            destroyAll("text")
            add([
                "text",
                text("Advogado Virgilio"),
                pos(virgilio.pos.x / 1.5, virgilio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Vou barganhar esses coroneis"),
                pos(virgilio.pos.x / 1.5, virgilio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("muito rapido!"),
                pos(virgilio.pos.x / 1.5, virgilio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
        }
    })

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            go("parte2")
        }
    })

})

scene("parte2", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Árvore 1
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.05, totalHeight * 0.6),
    ])

    //Árvore 2
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.8, totalHeight * 0.65)
    ])

    const player = add([
        "player",
        sprite("player"),
        pos(totalWidth * 0.1, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    add([
        "familia",
        sprite("joao"),
        pos(totalWidth * 0.2, totalHeight * 0.8),
        area(),
        scale(4)
    ])
    add([
        "familia",
        sprite("joao"),
        pos(totalWidth * 0.25, totalHeight * 0.82),
        area(),
        scale(4)
    ])
    add([
        "familia",
        sprite("joao"),
        pos(totalWidth * 0.3, totalHeight * 0.78),
        area(),
        scale(4)
    ])
    add([
        "familia",
        sprite("joao"),
        pos(totalWidth * 0.35, totalHeight * 0.81),
        area(),
        scale(4)
    ])
    const antonio = add([
        "antonio",
        sprite("antonio"),
        pos(totalWidth * 0.4, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    const horacio = add([
        "horacio",
        sprite("horacio"),
        scale(4),
        area(),
        pos(totalWidth * 0.7, totalHeight * 0.8)
    ])

    let textAntonio = false;
    let textHoracio = false;

    player.onCollide("antonio", () => {
        if (!textAntonio) {
            textHoracio = false;
            destroyAll("text")
            add([
                "text",
                text("Familia Badaro"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Vamos tomar o Sequeiro Grande"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("nem que seja a forca!"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
        }
    })

    player.onCollide("horacio", () => {
        if (!textHoracio) {
            textHoracio = true;
            textAntonio = false;
            destroyAll("text")
            add([
                "balao",
                sprite("balao"),
                pos(horacio.pos.x / 1.1, horacio.pos.y - (totalHeight * 0.08)),
                scale(8),
                layer("3"),
                area(),
                solid()
            ])
            add([
                "balao",
                sprite("balao"),
                pos(horacio.pos.x / 1.3, horacio.pos.y - (totalHeight * 0.2)),
                scale(8),
                layer("3"),
                area(),
                solid()
            ])
            add([
                "balao",
                sprite("balao"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.32)),
                scale(8),
                layer("3"),
                area(),
                solid()
            ])
            add([
                "balao2",
                sprite("balao2"),
                pos(horacio.pos.x / 2, horacio.pos.y - (totalHeight * 0.8)),
                scale(12),
                layer("3"),
                area(),
                solid()
            ])
        }
    })

    player.onCollide("balao2", () => {
        go("horacio1");
    })
})

let horacio1 = false;
let horacio2 = false;
let horacio3 = false;

scene("horacio1", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Árvore 1
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.1, totalHeight * 0.6),
    ])

    //Árvore 2
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.3, totalHeight * 0.6),
    ])

    //Árvore 3
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.5, totalHeight * 0.6),
    ])

    //Árvore 4
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.7, totalHeight * 0.6),
    ])

    //Árvore 5
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.9, totalHeight * 0.6),
    ])

    const player = add([
        "player",
        sprite("player"),
        pos(totalWidth * 0.02, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    const horacio = add([
        "horacio",
        sprite("horacio"),
        pos(totalWidth * 0.42, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    let textHoracio = false;
    player.onCollide("horacio", () => {
        if (!textHoracio) {
            destroyAll("text")
            add([
                "text",
                text("Horacio"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Sinto que vou ficar rico"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("com todo esse cacau!"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textHoracio = false;
            }, 5000);
        }
    })

    if(!horacio1) {
        add([
            "caxixe",
            layer("1"),
            sprite("caxixe"),
            pos(totalWidth * 0.7, totalHeight * 0.8),
            area(),
            scale(1.5)
        ])
    }

    player.onCollide("caxixe", () => {
        destroyAll("caxixe");
        horacio1 = true;
        if(horacio1 && horacio2 && horacio3) {
            go("parte4");
        }

        add([
            "textCaxixe",
            text("Pedaco de caxixe pego"),
            pos(totalWidth * 0.35, totalHeight * 0.4),
            scale(2.5)
        ])

        setTimeout(() => {
            destroyAll("textCaxixe")
        }, 3000);
    })

    const botao1 = add([
        "botao1",
        rect(40, 40),
        pos(totalWidth * 0.05, totalHeight * 0.05),
        area(),
        color(0, 255, 0)
    ])

    const botao2 = add([
        "botao2",
        rect(40, 40),
        pos(totalWidth * 0.1, totalHeight * 0.05),
        area(),
        color(255, 255, 255)
    ])

    const botao3 = add([
        "botao3",
        rect(40, 40),
        pos(totalWidth * 0.15, totalHeight * 0.05),
        area(),
        color(255, 255, 255)
    ])

    onClick("botao2", () => {
        go("horacio2");
    })

    onClick("botao3", () => {
        go("horacio3");
    })
})

scene("horacio2", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Árvore 1
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.1, totalHeight * 0.6),
    ])

    //Árvore 2
    add([
        "arvore",
        sprite("arvore"),
        scale(8),
        pos(totalWidth * 0.9, totalHeight * 0.6),
    ])

    //Igreja
    add([
        "igreja",
        sprite("igreja"),
        scale(12),
        area(),
        pos(totalWidth * 0.6, totalHeight * 0.4)
    ])

    //Capela
    add([
        "capela",
        sprite("capela"),
        scale(8),
        area(),
        pos(totalWidth * 0.3, totalHeight * 0.5)
    ])

    const player = add([
        "player",
        sprite("player"),
        pos(totalWidth * 0.02, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    const horacio = add([
        "horacio",
        sprite("horacio"),
        pos(totalWidth * 0.42, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    let textHoracio = false;
    player.onCollide("horacio", () => {
        if (!textHoracio) {
            destroyAll("text")
            add([
                "text",
                text("Horacio"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Essas construcoes sao so alguns"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("dos meus grandes feitos!"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textHoracio = false;
            }, 5000);
        }
    })

    if(!horacio2) {
        add([
            "caxixe",
            layer("1"),
            sprite("caxixe"),
            pos(totalWidth * 0.735, totalHeight * 0.6),
            area(),
            scale(1.5)
        ])
    }

    player.onCollide("caxixe", () => {
        destroyAll("caxixe");
        horacio2 = true;
        if(horacio1 && horacio2 && horacio3) {
            go("parte4");
        }

        add([
            "textCaxixe",
            text("Pedaco de caxixe pego"),
            pos(totalWidth * 0.35, totalHeight * 0.4),
            scale(2.5)
        ])

        setTimeout(() => {
            destroyAll("textCaxixe")
        }, 3000);
    })

    const botao1 = add([
        "botao1",
        rect(40, 40),
        pos(totalWidth * 0.05, totalHeight * 0.05),
        area(),
        color(255, 255, 255)
    ])

    const botao2 = add([
        "botao2",
        rect(40, 40),
        pos(totalWidth * 0.1, totalHeight * 0.05),
        area(),
        color(0, 255, 0)
    ])

    const botao3 = add([
        "botao3",
        rect(40, 40),
        pos(totalWidth * 0.15, totalHeight * 0.05),
        area(),
        color(255, 255, 255)
    ])

    onClick("botao1", () => {
        go("horacio1");
    })

    onClick("botao3", () => {
        go("horacio3");
    })
})

scene("horacio3", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, totalHeight * 0.9),
        area(),
        solid()
    ])

    const player = add([
        "player",
        sprite("player"),
        pos(totalWidth * 0.02, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(600)
            ester.jump(600)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(600)
            ester.jump(600)
        }
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    const horacio = add([
        "horacio",
        sprite("horacio"),
        pos(totalWidth * 0.2, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    let textHoracio = false;
    player.onCollide("horacio", () => {
        if (!textHoracio) {
            destroyAll("text")
            add([
                "text",
                text("Horacio"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Essa e a minha bela esposa!"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("Temos um filho!"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textHoracio = false;
            }, 5000);
        }
    })

    if(!horacio3) {
        add([
            "caxixe",
            layer("1"),
            sprite("caxixe"),
            pos(totalWidth * 0.85, totalHeight * 0.8),
            area(),
            scale(1.5)
        ])
    }

    player.onCollide("caxixe", () => {
        destroyAll("caxixe");
        horacio3 = true;
        if(horacio1 && horacio2 && horacio3) {
            textHoracio = false;
            destroyAll("text");
            esterX = 0;
            add([
                "text",
                text("Ester"),
                pos(ester.pos.x / 1.5, ester.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Ele nem sequer sabe que"),
                pos(ester.pos.x / 1.5, ester.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("eu nao amo ele!"),
                pos(ester.pos.x / 1.5, ester.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textHoracio = false;
            }, 5000);
            setTimeout(() => {
                go("parte4");
            }, 4000);
        }

        add([
            "textCaxixe",
            text("Pedaco de caxixe pego"),
            pos(totalWidth * 0.35, totalHeight * 0.4),
            scale(2.5)
        ])

        setTimeout(() => {
            destroyAll("textCaxixe")
        }, 3000);
    })

    let esterX = -100;

    const ester = add([
        "ester",
        sprite("ester"),
        scale(3),
        solid(),
        area(),
        body(),
        pos(totalWidth * 0.8, totalHeight * 0.6),
    ])

    ester.onCollide("horacio", () => {
        esterX = 100;
    })

    onUpdate(() => {
        ester.move(esterX, 0);
        if(ester.pos.x > totalWidth * 0.9) {
            esterX = -100;
        }
    })

    const botao1 = add([
        "botao1",
        rect(40, 40),
        pos(totalWidth * 0.05, totalHeight * 0.05),
        area(),
        color(255, 255, 255)
    ])

    const botao2 = add([
        "botao2",
        rect(40, 40),
        pos(totalWidth * 0.1, totalHeight * 0.05),
        area(),
        color(255, 255, 255)
    ])

    const botao3 = add([
        "botao3",
        rect(40, 40),
        pos(totalWidth * 0.15, totalHeight * 0.05),
        area(),
        color(0, 255, 0)
    ])

    onClick("botao1", () => {
        go("horacio1");
    })

    onClick("botao2", () => {
        go("horacio2");
    })
})

scene("parte4", () => {

    layers([
        "1",
        "2",
        "3"
    ], "2")

    //Background
    add([
        "background",
        rect(totalWidth, totalHeight),
        pos(0, 0),
        layer("1"),
        color(67, 0, 0)
    ])

    //Chão
    add([
        "chao",
        rect(totalWidth, 80),
        pos(0, totalHeight * 0.9),
        area(),
        solid(),
        color(120, 0, 0)
    ])

    const player = add([
        "player",
        sprite("player"),
        pos(totalWidth * 0.02, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    const horacio = add([
        "horacio",
        sprite("horacio"),
        pos(totalWidth * 0.2, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    const virgilio = add([
        "virgilio",
        sprite("virgilio"),
        pos(totalWidth * 0.6, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    add([
        "cadeira",
        sprite("cadeira"),
        pos(totalWidth * 0.4, totalHeight * 0.8),
        scale(4)
    ])

    add([
        "mesa",
        sprite("mesa"),
        pos(totalWidth * 0.475, totalHeight * 0.8),
        scale(6)
    ])

    const piano = add([
        "piano",
        sprite("piano"),
        pos(totalWidth * 0.8, totalHeight * 0.75),
        scale(4),
        area(),
    ])

    loop(1, () => {
        add([
            "nota",
            sprite("nota"),
            scale(3),
            lifespan(1),
            pos(piano.pos.x + 60, piano.pos.y - (totalHeight * 0.05)),
            move(-100, 50)
        ])
    })

    let textHoracio = false;
    let textVirgilio = false;
    player.onCollide("horacio", () => {
        if (!textHoracio) {
            textHoracio = true;
            textVirgilio = false;
            destroyAll("text")
            add([
                "text",
                text("Horacio"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Convidei o Virgilio para o"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("jantar gracas aos servicos dele!"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textHoracio = false;
            }, 5000);
        }
    })

    player.onCollide("virgilio", () => {
        if (!textVirgilio) {
            textVirgilio = true;
            textHoracio = false;
            destroyAll("text")
            add([
                "text",
                text("Virgilio"),
                pos(virgilio.pos.x / 1.5, virgilio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Essa mulher do Horacio e"),
                pos(virgilio.pos.x / 1.5, virgilio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("muito talentosa!"),
                pos(virgilio.pos.x / 1.5, virgilio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textVirgilio = false;
            }, 5000);
        }
    })

    add([
        "porta",
        sprite("porta"),
        pos(totalWidth * 0.1, totalHeight * 0.7),
        layer('1'),
        scale(8),
        area()
    ])

    onClick("porta", () => {
        go("parte5")
    })
})

scene("parte5", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    //Background
    add([
        "background",
        rect(totalWidth, totalHeight),
        pos(0, 0),
        layer("1"),
        color(2, 0, 134)
    ])

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, totalHeight * 0.9),
        area(),
        solid()
    ])

    const player = add([
        "player",
        sprite("player"),
        pos(totalWidth * 0.02, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    const horacio = add([
        "horacio",
        sprite("horacio"),
        pos(totalWidth * 0.2, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    const firmo = add([
        "firmo",
        sprite("firmo"),
        pos(totalWidth * 0.3, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    const maneca = add([
        "maneca",
        sprite("maneca"),
        pos(totalWidth * 0.5, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    const damiao = add([
        "damiao",
        sprite("damiao"),
        pos(totalWidth * 0.6, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    let textHoracio = false;
    let textFirmo = false;
    let textManeca = false;
    player.onCollide("horacio", () => {
        if (!textHoracio) {
            textHoracio = true;
            textFirmo = false;
            textManeca = false;
            destroyAll("text")
            add([
                "text",
                text("Horacio"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Sinto que a luta de Sequeiro"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("grande vai comecar logo!"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textHoracio = false;
            }, 5000);
        }
    })

    player.onCollide("firmo", () => {
        if (!textFirmo) {
            textFirmo = true;
            textHoracio = false;
            textManeca = false;
            destroyAll("text")
            add([
                "text",
                text("Firmo"),
                pos(firmo.pos.x / 1.5, firmo.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Quase fui assassinado pela"),
                pos(firmo.pos.x / 1.5, firmo.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("familia Badaro!"),
                pos(firmo.pos.x / 1.5, firmo.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textFirmo = false;
            }, 5000);
        }
    })

    player.onCollide("maneca", () => {
        if (!textManeca) {
            textManeca = true;
            textHoracio = false;
            textFirmo = false;
            destroyAll("text")
            add([
                "text",
                text("Maneca Dantas"),
                pos(maneca.pos.x / 1.5, maneca.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Horacio pediu para eu e Damiao"),
                pos(maneca.pos.x / 1.5, maneca.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("chamarmos a populacao para a guerra!"),
                pos(maneca.pos.x / 1.5, maneca.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textManeca = false;
            }, 5000);
        }
    })

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            go("parte6")
        }
    })
})

scene("parte6", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    //Background
    add([
        "background",
        rect(totalWidth, totalHeight),
        pos(0, 0),
        layer("1"),
        color(2, 0, 134)
    ])

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, totalHeight * 0.9),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, totalHeight * 0.9),
        area(),
        solid()
    ])

    const player = add([
        "player",
        sprite("player"),
        pos(totalWidth * 0.02, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(600)
        }
    })

    onKeyDown("down", () => {
        player.move(0, speed);
    })
    onKeyDown("s", () => {
        player.move(0, speed);
    })

    const fazenda = add([
        "fazenda",
        sprite("fazenda"),
        pos(totalWidth * 0.6, totalHeight * 0.4),
        scale(2.5),
        area(),
        layer("1")
    ])

    const quadro = add([
        "quadro",
        sprite("quadro"),
        pos(fazenda.pos.x * 1.25, fazenda.pos.y * 2),
        area(),
        scale(2),
        layer("1")
    ])

    const antonio = add([
        "antonio",
        sprite("antonio"),
        pos(totalWidth * 0.2, totalHeight * 0.75),
        area(),
        scale(4)
    ])

    const juca = add([
        "juca",
        sprite("juca"),
        pos(totalWidth * 0.45, totalHeight * 0.75),
        area(),
    ])

    let textAntonio = false;
    let textJuca = false;
    let textQuadro = false;

    player.onCollide("antonio", () => {
        if (!textAntonio) {
            textAntonio = true;
            textJuca = false;
            textQuadro = false;
            destroyAll("text")
            add([
                "text",
                text("Antonio Vitor"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Meu sonho era so uma bobagem!"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("Agora sou so um capanga da lavoura!"),
                pos(antonio.pos.x / 1.5, antonio.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
        }
    })

    player.onCollide("juca", () => {
        if (!textJuca) {
            textJuca = true;
            textAntonio = false;
            textQuadro = false;
            destroyAll("text")
            add([
                "text",
                text("Juca Badaro"),
                pos(juca.pos.x / 1.5, juca.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Salvei a vida dele, entao"),
                pos(juca.pos.x / 1.5, juca.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("ele me deve tudo isso!"),
                pos(juca.pos.x / 1.5, juca.pos.y - (totalHeight * 0.05)),
                scale(2),
                layer("3")
            ])
        }
    })

    player.onCollide("quadro", () => {
        if (!textQuadro) {
            textQuadro = true;
            textAntonio = false;
            textJuca = false;
            destroyAll("text")
            add([
                "text",
                text("Quadro da familia Badaro"),
                pos(quadro.pos.x / 1.5, quadro.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
        }
    })

    onClick("quadro", () => {
        go("familia1")
    })
})

scene("familia1", () => {
    // add([
    //     "legendaQuadro",
    //     rect(totalWidth, totalHeight * 0.2),
    //     pos(0, totalHeight * 0.8),
    // ])

    // const legenda = add([
    //     "legenda",
    //     pos(totalWidth * 0.1, totalHeight * 0.85),
    //     text("Familia Badaro")
    // ])
})

go("familia1");