
// all buttons
const btn_clear = document.getElementById('clear')
const btn_ans = document.getElementById('ans')

const btn_0 = document.getElementById('ze')
const btn_1 = document.getElementById('on')
const btn_2 = document.getElementById('tw')
const btn_3 = document.getElementById('th')
const btn_4 = document.getElementById('fo')
const btn_5 = document.getElementById('fi')
const btn_6 = document.getElementById('si')
const btn_7 = document.getElementById('se')
const btn_8 = document.getElementById('ei')
const btn_9 = document.getElementById('ni')
const btn_decimal = document.getElementById('dec')
const btn_plus = document.getElementById('plus')
const btn_minus = document.getElementById('minus')
const btn_multi = document.getElementById('multi')
const btn_div = document.getElementById('div')

const all_opr_btns = document.querySelectorAll('.operator')
const all_number_btns = document.querySelectorAll('.number')

// screen pad
const screen_text = document.getElementById('screen-text')
const screen_result = document.getElementById('screen-result')


// Functionality


all_opr_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // console.log(btn.innerText )
        typeToScreen(btn.innerText)
    })
})
all_number_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {

        typeToScreen(btn.innerText)
    })
})

btn_clear.addEventListener('click', () => {
    screen_result.innerText = screen_text.innerText = ''
})
btn_ans.addEventListener(('click'), () => {
    calculate()
})
document.onkeyup = (e) => {
    if (e.key === "Enter")
        calculate()
}


const isOperator = opr => opr === "+" || opr === "-" || opr === "." || opr === "*" || opr === "/" || opr === "%"

function typeToScreen(num) {
    if (screen_text.innerText === "")
        screen_text.innerText = num
    else if (screen_text.innerText.length <= 23) {
        screen_text.innerText = screen_text.innerText + num
    } else {
        alert("Limit upto 23 digits.")
    }

}

function calculate() {
    let text = screen_text.innerText

    if (text.indexOf('%') == -1) {
        if (text.indexOf('×') !== -1)
            text = text.replaceAll('×', '*')
    } else {
        test = text.replace('%', '')
        if (text.indexOf('×') !== -1) {
            let res_arr = text.split('×');
            let total = eval(res_arr[0]);
            let need = eval(res_arr[1]);
            text = (need / 100) * total;
        } else {
            alert("Math error. Percent can't be evaluate without multiplication")
        }
    }
    screen_result.innerText = eval(text)
}