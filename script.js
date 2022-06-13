
const persen = document.querySelector('.percentage');

persen.addEventListener('click', (event) => {
    // console.log('Percentage button is pressed');
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})

inputPercentage = () => {
    if(currentNumber.includes('%')) {
        return
    }
    currentNumber = currentNumber/100;
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber); 
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot;
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    // console.log('AC button is pressed');
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const calculate = () => {
    let result = '';
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    // console.log('equal button is pressed')
    calculate();
    updateScreen(currentNumber);
    clearAll();
})


const operators = document.querySelectorAll('.operator');

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

// Yang Anda butuhkan untuk melakukan suatu kalkulasi adalah 2 angka dan sebuah operator.

// Definisikan 3 variable, yaitu “prevNumber”, “currentNumber” dan “calculationOperator” untuk menyimpan 2 angka dan and 1 operator. Nilai awal “currentNumber” seharusnya adalah 0.
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// Anda dapat merubah angka yang ditampilkan di layar dengan cara memperbarui atribut nilai dari tag <input>. Mari kita tarik element di code JS dan definisikan function “updateScreen” untuk memperbarui nilai.

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const calculatorScreenHistory = document.querySelector('.calculator-screen-history')

const numbers = document.querySelectorAll(".number");
// Anda dapat mengambil element menggunakan document.querySelectorAll(“.class name”) atau document.querySelector(“.class name”)
    // querySelectorAll digunakan saat Anda ingin mendapatkan beberapa element, dan querySelector digunakan saat Anda ingin mendapatkan satu jenis element.

numbers.forEach((number) => {
// Event listener harus ditambahkan ke setiap element, jadi kita harus mengambilnya satu persatu. Anda bisa menggunakan method forEach.
    number.addEventListener("click", (event) => {
    // Mari kita tambahkan click event ke setiap element menggunakan addEventListener.
        
        // console.log("number is pressed")
        // Jika Anda menekan tombol dan teks “number is pressed” ditampilkan di console berarti code Anda sudah benar.

        // console.log(event.target.value)
        // Anda perlu menambahkan argument event dan setelah itu Anda bisa mengakses angka menggunakan event.target.value. Nilai ini berasal dari atribut nilai yang Anda telah berikan ke tag <button> sebelumnya.

        inputNumber(event.target.value)
        // Didalam function “inputNumber”, berikan angka yang di klik ke currentNumber. Jangan lupa untuk merubah argument “updateScreen” menjadi currentNumber.

        updateScreen(currentNumber)
        // Jalankan function “updateScreen” menggunakan event.target.value  argument saat tombol di klik.
    })
})