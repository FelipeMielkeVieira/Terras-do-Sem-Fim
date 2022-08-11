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

    if(!horacio3) {
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
        horacio3 = true;
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

})

go("horacio3");