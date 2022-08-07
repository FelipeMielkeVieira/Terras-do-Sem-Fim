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
        "porto",
        sprite("porto"),
        scale(8),
        pos(totalWidth * 0.1, totalHeight * 0.9)
    ])

    //Grama 1
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.4, totalHeight * 0.9)
    ])

    //Grama 2
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.5, totalHeight * 0.9)
    ])

    //Grama 3
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.9)
    ])

    //Grama 4
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.7, totalHeight * 0.9)
    ])

    //Grama 5
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.8, totalHeight * 0.9)
    ])

    //Grama 6
    add([
        "grama",
        sprite("grama"),
        scale(6),
        pos(totalWidth * 0.9, totalHeight * 0.9)
    ])

    //Árvore 1
    add([
        "arvore",
        sprite("arvore"),
        scale(6),
        pos(totalWidth * 0.6, totalHeight * 0.6)
    ])

    //Árvore 2
    add([
        "arvore",
        sprite("arvore"),
        scale(6),
        pos(totalWidth * 0.75, totalHeight * 0.65)
    ])
})

go("inicio");