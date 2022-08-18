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
loadSprite("player2", "/sprites/player2.png");

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
loadSprite("ana", "/sprites/ana.png");
loadSprite("olga", "/sprites/olga.png");

loadSprite("raimunda", "/sprites/raimunda.png");
loadSprite("cartorio", "/sprites/cartorio.png");
loadSprite("destrocos", "/sprites/destrocos.png");
loadSprite("gota", "/sprites/gota.png");

loadSprite("aleatorio1", "/sprites/aleatorio1.png");
loadSprite("aleatorio2", "/sprites/aleatorio2.png");
loadSprite("aleatorio3", "/sprites/aleatorio3.png");

loadSprite("fogo", "/sprites/fogo.png");
loadSprite("palacete", "/sprites/palacete.png");
loadSprite("homemArmado2", "/sprites/homemArmado2.png");
loadSprite("lapide", "/sprites/lapide.png");
loadSprite("arco", "/sprites/arco.png");
loadSprite("play", "/sprites/play.png")

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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })

    onKeyDown("up", () => {
        if (player.isGrounded()) {
            player.jump(800)
        }
    })
    onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(800)
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    const gramaPos = totalHeight - 10 - (6 * 12);
    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, gramaPos),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, gramaPos),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, gramaPos),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, gramaPos),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, gramaPos),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, gramaPos),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, gramaPos),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, gramaPos),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, gramaPos),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, gramaPos),
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
        pos(totalWidth * 0.6, totalHeight - (12 * 32) - (6 * 12) - 10),
    ])

    //Capela
    add([
        "capela",
        sprite("capela"),
        scale(8),
        area(),
        pos(totalWidth * 0.3, totalHeight - (8 * 32) - (6 * 12) - 10),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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
            pos(totalWidth * 0.735, totalHeight * 0.7),
            scale(1.5),
            area()
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    const maneca = add([
        "maneca",
        sprite("maneca"),
        pos(totalWidth * 0.3, totalHeight * 0.8),
        area(),
    ])

    const virgilio = add([
        "virgilio",
        sprite("virgilio"),
        pos(totalWidth * 0.6, totalHeight * 0.8),
        area(),
        scale(4),
    ])

    add([
        "cadeira",
        sprite("cadeira"),
        pos(totalWidth * 0.4, totalHeight * 0.8),
        scale(4),
    ])

    add([
        "mesa",
        sprite("mesa"),
        pos(totalWidth * 0.475, totalHeight * 0.8),
        scale(6),
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
    let textManeca = false;

    player.onCollide("horacio", () => {
        if (!textHoracio) {
            textHoracio = true;
            textVirgilio = false;
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
            textManeca = false;
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

    player.onCollide("maneca", () => {
        if (!textManeca) {
            textVirgilio = false;
            textHoracio = false;
            textManeca = true;
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
                text("Sou apenas um compadre"),
                pos(maneca.pos.x / 1.5, maneca.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("do Horacio!"),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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
        scale(4),
    ])

    const firmo = add([
        "firmo",
        sprite("firmo"),
        pos(totalWidth * 0.3, totalHeight * 0.8),
        area(),
        scale(4),
    ])

    const maneca = add([
        "maneca",
        sprite("maneca"),
        pos(totalWidth * 0.5, totalHeight * 0.8),
        area(),
    ])

    const damiao = add([
        "damiao",
        sprite("damiao"),
        pos(totalWidth * 0.6, totalHeight * 0.8),
        area(),
        scale(4),
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

    const gramaPos = totalHeight - 10 - (6 * 12);

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
        pos(totalWidth * 0.1, gramaPos),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, gramaPos),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, gramaPos),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, gramaPos),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, gramaPos),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, gramaPos),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, gramaPos),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, gramaPos),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, gramaPos),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, gramaPos),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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
        pos(totalWidth * 0.6, totalHeight - (128 * 2.5) - (12 * 6) - 10),
        scale(2.5),
        area(),
        layer("1")
    ])

    const quadro = add([
        "quadro",
        sprite("quadro"),
        pos(fazenda.pos.x * 1.25, (totalHeight - (128 * 2.5) - (12 * 6) - 10) * 0.6 + totalHeight - (128 * 2.5) - (12 * 6) - 10),
        area(),
        scale(2),
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

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            go("parte7")
        }
    })
})

scene("familia1", () => {

    layers([
        "1",
        "2",
        "3"
    ], "2")

    add([
        "legendaQuadro",
        rect(totalWidth, totalHeight * 0.2),
        pos(0, totalHeight * 0.8),
    ])

    const legenda = add([
        "legenda",
        pos(totalWidth * 0.1, totalHeight * 0.88),
        text("Familia Badaro"),
        scale(2)
    ])

    const juca = add([
        "juca",
        sprite("juca"),
        scale(4),
        pos(totalWidth * 0.02, totalHeight * 0.3),
        area(),
        layer("1")
    ])

    const sinho = add([
        "sinho",
        sprite("sinho"),
        scale(4),
        pos(totalWidth * 0.2, totalHeight * 0.2),
        area(),
        layer("1")
    ])

    const ana = add([
        "ana",
        sprite("ana"),
        scale(4),
        pos(totalWidth * 0.4, totalHeight * 0.25),
        area(),
        layer("1")
    ])

    const olga = add([
        "olga",
        sprite("olga"),
        scale(4),
        pos(totalWidth * 0.6, totalHeight * 0.22),
        area(),
        layer("1")
    ])

    onHover("juca", () => {
        legenda.text = "Juca Badaro, irmao de Sinho. Enquanto seu irmao sempre tentava ser \no mais pacifico possivel, ele resolvia tudo com tiros."
    })

    onHover("sinho", () => {
        legenda.text = "Sinho Badaro, irmao de Juca, que sempre optava pela paz"
    })

    onHover("ana", () => {
        legenda.text = "Don'Ana, filha de Sinho, era conhecida como uma moca seria e enraizada"
    })

    onHover("olga", () => {
        legenda.text = "Olga, esposa de Juca, que raramente era vista na fazenda dos Badaro"
    })

    onKeyPress("escape", () => {
        go("parte6")
    })
})

scene("parte7", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    const background = add([
        "background",
        rect(totalWidth, totalHeight),
        pos(0, 0),
        layer("1"),
        color(67, 197, 245)
    ])

    const gramaPos = totalHeight - 10 - (6 * 12);

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, gramaPos),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, gramaPos),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, gramaPos),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, gramaPos),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, gramaPos),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, gramaPos),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, gramaPos),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, gramaPos),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, gramaPos),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, gramaPos),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    let cartorio = add([
        "cartorio",
        sprite("cartorio"),
        pos(totalWidth * 0.6, totalHeight - (128 * 2) - (6 * 12) - 10),
        scale(2),
        solid(),
        area()
    ])

    const juca = add([
        "juca",
        sprite("juca"),
        area(),
        pos(totalWidth * 0.85, totalHeight * 0.8),
    ])

    const virgilio = add([
        "virgilio",
        sprite("virgilio"),
        area(),
        pos(totalWidth * 0.2, totalHeight * 0.75),
        scale(4)
    ])

    let jucaX = 0;
    player.onCollide("cartorio", () => {
        shake(30)
        add([
            "text",
            text("Agora so preciso que o Joao Magalhaes \nfaca a medicao da mata para mim"),
            scale(2),
            pos(juca.pos.x / 1.5, juca.pos.y - (totalHeight * 0.1))
        ])
        setTimeout(() => {
            destroyAll("text");
            jucaX = 100;
        }, 4000);
    })

    onUpdate(() => {
        juca.move(jucaX, 0)
    })

    const balao = add([
        "balao",
        sprite("balao2"),
        pos(totalWidth * 0.025, totalHeight * 0.05),
        scale(4),
        area()
    ])

    let intervalo;
    onClick("balao", () => {
        background.use(color(142, 142, 142))
        destroyAll("balao");
        intervalo = setInterval(() => {
            let width = randi(0, totalWidth);
            add([
                "gota",
                pos(width, 0),
                sprite("gota"),
                scale(3),
                area(),
                solid(),
                body()
            ])
        }, 200);
        setTimeout(() => {
            destroyAll("cartorio");
            cartorio = add([
                "destrocos",
                sprite("destrocos"),
                pos(totalWidth * 0.6, totalHeight - (128 * 2) - (6 * 12) - 10),
                scale(2),
                area()
            ])
        }, 4000);
    })

    let textVirgilio = false;
    player.onCollide("virgilio", () => {
        if (!textVirgilio) {
            textVirgilio = true;
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
                text("Eu tinha feito a medicao da mata, mas"),
                pos(virgilio.pos.x / 1.5, virgilio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            add([
                "text",
                text("esses Badaros queimaram o cartorio!"),
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

    onCollide("gota", "grama", (gota) => {
        destroy(gota);
    })
    onCollide("gota", "cartorio", (gota) => {
        destroy(gota);
    })
    onCollide("gota", "player", (gota) => {
        destroy(gota);
    })

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            clearInterval(intervalo);
            go("parte8")
        }
    })
})

scene("parte8", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    const gramaPos = totalHeight - 10 - (6 * 12);

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, gramaPos),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, gramaPos),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, gramaPos),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, gramaPos),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, gramaPos),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, gramaPos),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, gramaPos),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, gramaPos),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, gramaPos),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, gramaPos),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    const aleatorio1 = add([
        "aleatorio1",
        sprite("aleatorio1"),
        area(),
        pos(totalWidth * 0.5, totalHeight * 0.8),
    ])

    const aleatorio2 = add([
        "aleatorio2",
        sprite("aleatorio2"),
        area(),
        pos(totalWidth * 0.6, totalHeight * 0.8),
    ])

    const aleatorio3 = add([
        "aleatorio3",
        sprite("aleatorio3"),
        area(),
        pos(totalWidth * 0.8, totalHeight * 0.8),
    ])

    let text1 = false;
    let text2 = false;
    let text3 = false;

    player.onCollide("aleatorio1", () => {
        if (!text1) {
            text1 = true;
            text2 = false;
            text3 = false;
            destroyAll("text")
            add([
                "text",
                text("Fiquei sabendo que Margot esta com \nJuca Badaro agora!"),
                pos(aleatorio1.pos.x / 1.5, aleatorio1.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                text1 = false;
            }, 5000);
        }
    })

    player.onCollide("aleatorio2", () => {
        if (!text2) {
            text1 = false;
            text2 = true;
            text3 = false;
            destroyAll("text")
            add([
                "text",
                text("Ester tambem deve estar com Virgilio aqui \nno palacio do Horacio"),
                pos(aleatorio2.pos.x / 1.5, aleatorio2.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                text2 = false;
            }, 5000);
        }
    })

    player.onCollide("aleatorio3", () => {
        if (!text3) {
            text1 = false;
            text2 = false;
            text3 = true;
            destroyAll("text")
            add([
                "text",
                text("Toda a cidade ja ficou sabendo disso"),
                pos(aleatorio3.pos.x / 1.5, aleatorio3.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                text3 = false;
            }, 5000);
        }
    })

    const palacete = add([
        "palacete",
        sprite("palacete"),
        scale(10),
        pos(totalWidth * 0.1, totalHeight - (32 * 10) - (6 * 12) - 10),
        layer("1")
    ])

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            go("parte9")
        }
    })
})

scene("parte9", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    const gramaPos = totalHeight - 10 - (6 * 12);

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, gramaPos),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, gramaPos),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, gramaPos),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, gramaPos),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, gramaPos),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, gramaPos),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, gramaPos),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, gramaPos),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, gramaPos),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, gramaPos),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    let intervalo = setInterval(() => {
        let width = randi(totalWidth * 0.3, totalWidth);
        add([
            "fogo",
            sprite("fogo"),
            lifespan(2),
            scale(8),
            area(),
            solid(),
            pos(width, totalHeight - (8 * 8) - (12 * 6))
        ])
    }, 1000);

    player.onCollide("fogo", () => {
        shake(20),
        player.moveTo(totalWidth * 0.02, totalHeight * 0.7)
    })

    const firmo = add([
        "firmo",
        sprite("firmo"),
        pos(totalWidth * 0.2, totalHeight * 0.8),
        area(),
        scale(4)
    ])

    let textFirmo = false;
    player.onCollide("firmo", () => {
        if (!textFirmo) {
            textFirmo = true;
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
                text("A familia Badaro matou os Irmaos Merenda e queimaram \na minha fazenda! Isso e inaceitavel!"),
                pos(firmo.pos.x / 1.5, firmo.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textFirmo = false;
            }, 5000);
        }
    })

    add([
        "cartorio",
        sprite("cartorio"),
        area(),
        pos(totalWidth * 0.65, totalHeight - (128 * 2) - (12 * 6) - 10),
        layer("1"),
        scale(2)
    ])

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            clearInterval(intervalo);
            go("parte10")
        }
    })
})

scene("parte10", () => {
    //Emboscada para Juca, que não dá certo
    layers([
        "1",
        "2",
        "3"
    ], "2")

    const background = add([
        "background",
        rect(totalWidth, totalHeight),
        pos(0, 0),
        layer("1"),
        color(67, 197, 245)
    ])

    const gramaPos = totalHeight - 10 - (6 * 12);

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, gramaPos),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, gramaPos),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, gramaPos),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, gramaPos),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, gramaPos),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, gramaPos),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, gramaPos),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, gramaPos),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, gramaPos),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, gramaPos),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    const juca = add([
        "juca",
        sprite("juca"),
        pos(totalWidth * 0.15, totalHeight - 128 - (12 * 6) - 10),
        area(),
    ])

    const antonio = add([
        "antonio",
        sprite("antonio"),
        pos(totalWidth * 0.2, totalHeight - (32 * 4) - (12 * 6) - 10),
        area(),
        scale(4)
    ])

    const homem = add([
        "homemArmado2",
        sprite("homemArmado2"),
        pos(totalWidth * 0.9, totalHeight - (32 * 4) - (12 * 6) - 10),
        area(),
        scale(-4, 4)
    ])

    let intervalo = setInterval(() => {
        add([
            "bala",
            rect(10, 10),
            pos(totalWidth * 0.8, totalHeight * 0.7 + 45),
            move(LEFT, 100),
            area(),
            solid(),
            color(0,0,0)
        ])
    }, 2500);

    let textJuca = false;
    player.onCollide("juca", () => {
        if (!textJuca) {
            textJuca = true;
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
                text("Essa emboscada nao ira dar certo! Tenho o antonio para \nme ajudar aqui!"),
                pos(juca.pos.x / 1.5, juca.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textJuca = false;
            }, 5000);
        }
    })

    player.onCollide("bala", (bala) => {
        player.moveTo(totalWidth * 0.02, totalHeight * 0.7)
        shake(20);
        destroy(bala);
    })

    antonio.onCollide("bala", (bala) => {
        destroy(bala);
    })

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            clearInterval(intervalo);
            go("parte11")
        }
    })
    
})

scene("parte11", () => {
    //Horácio doente e Ester morta
    layers([
        "1",
        "2",
        "3"
    ], "2")

    const gramaPos = totalHeight - 10 - (6 * 12);

    const background = add([
        "background",
        rect(totalWidth * 0.5, totalHeight),
        pos(0, 0),
        layer("1"),
        color(67, 0, 0)
    ])

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, gramaPos),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, gramaPos),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, gramaPos),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, gramaPos),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, gramaPos),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, gramaPos),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, gramaPos),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, gramaPos),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, gramaPos),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, gramaPos),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    const chao = add([
        "chao",
        rect(totalWidth * 0.5, totalHeight * 0.1),
        pos(0, totalHeight * 0.8),
        color(120, 0, 0),
        solid(),
        area()
    ])

    const horacio = add([
        "horacio",
        sprite("horacio"),
        pos(totalWidth * 0.25, totalHeight - (32 * 4) - (6 * 12) - (totalHeight * 0.1)),
        scale(4),
        area()
    ])

    const lapide1 = add([
        "lapide",
        sprite("lapide"),
        pos(totalWidth * 0.6, totalHeight - (12 * 6) - (12 * 6) - 10),
        scale(6),
        area()
    ])

    const lapide2 = add([
        "lapide2",
        sprite("lapide"),
        pos(totalWidth * 0.7, totalHeight - (12 * 6) - (12 * 6) - 10),
        scale(6),
        area()
    ])

    const lapide3 = add([
        "lapide",
        sprite("lapide"),
        pos(totalWidth * 0.8, totalHeight - (12 * 6) - (12 * 6) - 10),
        scale(6),
        area()
    ])

    let textHoracio = false;
    let textEster = false;
    player.onCollide("horacio", () => {
        if (!textHoracio) {
            textHoracio = true;
            textEster = false;
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
                text("Acabei pegando febre, mas ja melhorei, porem a Ester\nnao conseguiu aguentar!"),
                pos(horacio.pos.x / 1.5, horacio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textHoracio = false;
            }, 5000);
        }
    })

    player.onCollide("lapide2", () => {
        if (!textEster) {
            textHoracio = false;
            textEster = true;
            destroyAll("text")
            add([
                "text",
                text("Aqui jaz Ester"),
                pos(lapide2.pos.x, lapide2.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
            setTimeout(() => {
                destroyAll("text");
                textEster = false;
            }, 5000);
        }
    })

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            go("parte12")
        }
    })
})

scene("parte12", () => {
    //Casamentos e Juca morto (Don'Ana e João, Raimunda e Antônio)
    layers([
        "1",
        "2",
        "3"
    ], "2")

    const background = add([
        "background",
        rect(totalWidth, totalHeight),
        pos(0, 0),
        layer("1"),
        color(67, 197, 245)
    ])

    const gramaPos = totalHeight - 10 - (6 * 12);

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.1, gramaPos),
        area(),
        solid()
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.2, gramaPos),
        area(),
        solid()
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.3, gramaPos),
        area(),
        solid()
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, gramaPos),
        area(),
        solid()
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, gramaPos),
        area(),
        solid()
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, gramaPos),
        area(),
        solid()
    ])

    //Grama 7
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, gramaPos),
        area(),
        solid()
    ])

    //Grama 8
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, gramaPos),
        area(),
        solid()
    ])

    //Grama 9
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, gramaPos),
        area(),
        solid()
    ])

    //Grama 10
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(0, gramaPos),
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
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    const ana = add([
        "ana",
        sprite("ana"),
        pos(totalWidth * 0.25, totalHeight - 128 - (12 * 6) - 10),
        area()
    ])

    const joao = add([
        "joao",
        sprite("joao"),
        pos(totalWidth * 0.4, totalHeight - (4 * 32) - (12 * 6) - 10),
        scale(-4, 4)
    ])

    const arco1 = add([
        "arco",
        sprite("arco"),
        pos(totalWidth * 0.225, totalHeight - (128 * 2) - (12 * 6) - 10),
        scale(2)
    ])

    const raimunda = add([
        "raimunda",
        sprite("raimunda"),
        pos(totalWidth * 0.6, totalHeight - 128 - (12 * 6) - 10),
        area()
    ])

    const antonio = add([
        "antonio",
        sprite("antonio"),
        pos(totalWidth * 0.775, totalHeight - (32 * 4) - (12 * 6) - 10),
        scale(-4, 4)
    ])

    const arco2 = add([
        "arco",
        sprite("arco"),
        pos(totalWidth * 0.6, totalHeight - (128 * 2) - (12 * 6) - 10),
        scale(2)
    ])

    let textAna = false;
    let textRaimunda = false;
    player.onCollide("ana", () => {
        if (!textAna) {
            textRaimunda = false;
            textAna = true;
            destroyAll("text")
            add([
                "text",
                text("Don'Ana"),
                pos(ana.pos.x, ana.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Que felicidade! Eu e Joao casamos finalmente!"),
                pos(ana.pos.x, ana.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
        }
    })

    player.onCollide("raimunda", () => {
        if (!textRaimunda) {
            textRaimunda = true;
            textAna = false;
            destroyAll("text")
            add([
                "text",
                text("Raimunda"),
                pos(raimunda.pos.x, raimunda.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Fiquei sabendo que Juca Badaro\n foi assassinado! Horacio \nprecisa ser morto!"),
                pos(raimunda.pos.x, raimunda.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
        }
    })

    onUpdate(() => {
        if (player.pos.x >= totalWidth) {
            go("parte13")
        }
    })
})

scene("parte13", () => {
    layers([
        "1",
        "2",
        "3"
    ], "2")

    add([
        "legendaQuadro",
        rect(totalWidth, totalHeight * 0.2),
        pos(0, totalHeight * 0.8),
    ])

    const legenda = add([
        "legenda",
        pos(totalWidth * 0.1, totalHeight * 0.88),
        text("O governo federal interviu, desse jeito o governador renunciou \ne a oposicao tomou o poder"),
        scale(2)
    ])

    const play1 = add([
        "play1",
        sprite("play"),
        scale(4),
        pos(totalWidth * 0.07, totalHeight * 0.3),
        area(),
        layer("1")
    ])

    const play2 = add([
        "play2",
        sprite("play"),
        scale(4),
        pos(totalWidth * 0.25, totalHeight * 0.3),
        area(),
        layer("1")
    ])

    const play3 = add([
        "play3",
        sprite("play"),
        scale(4),
        pos(totalWidth * 0.43, totalHeight * 0.3),
        area(),
        layer("1")
    ])

    const sinho = add([
        "sinho",
        sprite("sinho"),
        scale(4),
        pos(totalWidth * 0.56, totalHeight * 0.2),
        area(),
        layer("1")
    ])

    onClick("play1", () => {
        legenda.text = "Interventor demitiu o prefeito e nomeou Dr. Jesse para o cargo"
    })

    onClick("play2", () => {
        legenda.text = "Sinho Badaro se tornou a oposicao e Horacio imaginava \nVirgilio como deputado federal"
    })

    onClick("play3", () => {
        legenda.text = "O cerco da casa Grande dos Badaro pelos homens de Horacio pos fim \nna luta pela mata."
    })

    onClick("sinho", () => {
        legenda.text = "Quando Sinho Badaro caiu, Don'Ana o mandou para Ilheus. \nAlem disso, Capitao Magalhaes fez com que Olga e Raimunda fossem junto. \nTerminando com um incendio na Casa Grande."
    })

    onKeyPress("escape", () => {
        go("parte14")
    })
})

scene("parte14", () => {

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
        sprite("player2"),
        pos(totalWidth * 0.9, totalHeight * 0.7),
        area(),
        solid(),
        scale(3),
        body()
    ])

    onKeyDown("left", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })
    onKeyDown("a", () => {
        player.move(-speed, 0);
        player.use(sprite("player2"));
    })

    onKeyDown("right", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
    })
    onKeyDown("d", () => {
        player.move(speed, 0);
        player.use(sprite("player"));
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

    const virgilio = add([
        "virgilio",
        sprite("virgilio"),
        pos(totalWidth * 0.4, totalHeight * 0.75),
        area(),
        scale(4)
    ])

    const maneca = add([
        "maneca",
        sprite("maneca"),
        pos(totalWidth * 0.5, totalHeight * 0.75),
        area(),
        scale(1)
    ])

    let textVirgilio = false;
    let textManeca = false;

    player.onCollide("virgilio", () => {
        if (!textVirgilio) {
            textVirgilio = true;
            textManeca = false;
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
                text("Agradeco Maneca, porem para mim \ne triste viver sem Ester. \nNada faz mais sentido..."),
                pos(virgilio.pos.x / 1.5, virgilio.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
        }
    })

    player.onCollide("maneca", () => {
        if (!textManeca) {
            textManeca = true;
            textVirgilio = false;
            destroyAll("text")
            add([
                "text",
                text("Maneca Dantes"),
                pos(maneca.pos.x / 1.5, maneca.pos.y - (totalHeight * 0.15)),
                scale(2),
                layer("3"),
                color(255, 0, 0)
            ])
            add([
                "text",
                text("Nao va para Ferradas meu amigo..."),
                pos(maneca.pos.x / 1.5, maneca.pos.y - (totalHeight * 0.09)),
                scale(2),
                layer("3")
            ])
        }
    })

    onUpdate(() => {
        if (player.pos.y >= totalHeight) {
            go("fim")
        }
    })

})

scene("fim", () => {
    add([
        text("Fim"),
        pos(totalWidth * 0.45, totalHeight * 0.4),
        scale(5)
    ])
})

go("inicio");