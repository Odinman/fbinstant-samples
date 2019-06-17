function getSource() {
    const assets = [
        './img/bg.jpg',
        './img/title.png',
        './img/start.png',
        './img/test.png',
        './img/Again@2x.png'
    ];

    const audio = [
        './media/bg.mp3',
        './media/game.mp3'
    ]

    return {
        pics: assets.concat(getResultSource()),
        audios: audio
    }
}

function getResultSource() {
    let arr = []
    for (let i = 1; i <= 9; i++) {
        arr.push('./img/l/result_left_pics_' + i + '.png')
    }

    for (let i = 1; i <= 10; i++) {
        arr.push('./img/r/result_right_pics_' + i + '.png')
    }

    for (let j = 1; j <= 13; j++) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
                for (let i = 1; i < 4; i++) {
                    arr.push(`./img/q/Q${j}-k${i}@2x.png`)
                }
                arr.push(`./img/q/Q${j}-Q@2x.png`)
                break
            case 5:
                for (let i = 1; i < 13; i++) {
                    arr.push(`./img/q/Q${j}-${i}@2x.png`)
                }
                arr.push(`./img/q/Q${j}-Q@2x.png`)
                arr.push(`./img/q/Q${j}-Q2@2x.png`)
                break
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
                for (let i = 1; i < 5; i++) {
                    arr.push(`./img/q/Q${j}-${i}@2x.png`)
                }
                arr.push(`./img/q/Q${j}-Q@2x.png`)
                break
        }
    }


    return arr
}