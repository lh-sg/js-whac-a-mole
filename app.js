/*
プロジェクトで使う主な機能
- document.querySelector
- textContent
- forEach
- addEventListener
- setInterval
- classList.add
*/


// 定数
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

// 変数
let result = 0
let hitPosition
let currentTime = 30
let timerId = null

// グリッドにランダムにモグラを表示させるファンクション（関数）
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    // 配列の要素番号をランダムに選ぶ
    let randomSquare = squares[Math.floor(Math.random() * 9)]

    // 選ばれた要素にクラス'mole'を追加
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

// randomSquare() を繰り返し呼び出すファンクション（関数）
function moveMole() {
    timerId = setInterval(randomSquare,800)
}

moveMole()


// モグラの位置をクリックしたら得点が加算される（イベント待機）
squares.forEach(square => {
    square.addEventListener('mousedown',() => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

// 時間制限を設定するファンクション（関数）
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your score is ' + result)
    }
}
let countDownTimerId = setInterval(countDown,1000)

