// case1
const array = []
const evenArray = []
const oddArray = []


for (let i = 1 ; i <= 100; i++) {

  // Array 100 nilai random 
  const randomNumber = Math.floor(Math.random() * 100)
  array.push(randomNumber)
}

for (let i = 0; i < array.length; i++) {
  
    if (i % 2 === 0) {
  
      // array nilai genap
      evenArray.push(array[i])
  
    } else {
  
      // array nilai ganjil
      oddArray.push(array[i])
  
    }

}

const minimal = (number) => Math.min(...number)
const maksimal = (number) => Math.max(...number)
const totalNilai = (array) => array.reduce((total, value) => total + value, 0);
const rataRata = (array) => totalNilai(array) / array.length;

// Hasil array genap
const evenMin = minimal(evenArray)
const evenMax = maksimal(evenArray)
const evenTotal = totalNilai(evenArray)
const evenAve = rataRata(evenArray)

// Hasil array ganjil
const oddMin = minimal(oddArray)
const oddMax = maksimal(oddArray)
const oddTotal = totalNilai(oddArray)
const oddAve = rataRata(oddArray)

// Perbandingan Min 
const perbandinganMin = (evenMin, oddMin) => {
  if (evenMin > oddMin) {
    return "Nilai terkecil (min) array ganjil lebih besar dari Nilai terkceil (min) array genap"
  } else if (evenMin < oddMin) {
    return "Nilai terkecil (min) array genap lebih besar dari Nilai terkceil (min) array ganjil"
  } else {
    return "Nilai terkecil (min) array genap sama dengan Nilai terkceil (min) array ganjil"
  }
}

// Perbandingan Max
const perbandinganMax = (evenMax, oddMax) => {
  if (evenMax > oddMax) {
    return "Nilai terbesar (max) array ganjil lebih besar dari Nilai terbesar (max) array genap"
  } else if (evenMax < oddMax) {
    return "Nilai terbesar (max) array genap lebih besar dari Nilai terbesar (max) array ganjil"
  } else {
    return "Nilai terbesar (max) array genap sama dengan Nilai terbesar (max) array ganjil"
  }
}

const perbandinganTotal = (evenTotal, oddTotal) => {
  if (evenTotal > oddTotal) {
    return "Nilai total array ganjil lebih besar dari Nilai total array genap"
  } else if (evenTotal < oddTotal) {
    return "Nilai total array genap lebih besar dari Nilai total array ganjil"
  } else {
    return "Nilai total array genap sama dengan Nilai total array ganjil"
  }
}

const perbandingaAve = (evenAve, oddAve) => {
  if (evenAve > oddAve) {
    return "Nilai rata-rata array ganjil lebih besar dari Nilai rata-rata array genap"
  } else if (evenAve < oddAve) {
    return "Nilai rata-rata array genap lebih besar dari Nilai rata-rata array ganjil"
  } else {
    return "Nilai rata-rata array genap sama dengan Nilai rata-rata array ganjil"
  }
}

console.log("Array dengan julah index 100 :\n", array, "\n")
console.log("Array genap :\n", evenArray, "\n")
console.log("Array ganjil :\n", oddArray, "\n")

// array genap
console.log("Nilai dari array genap")
console.log("- Nilai terkecil (min) dari aray genap adalah : ", evenMin)
console.log("- Nilai terbesar (max) dari aray genap adalah : ", evenMax)
console.log("- Nilai Total dari aray genap adalah : ",evenTotal)
console.log("- Nilai Rata-Rata dari aray genap adalah : ",evenAve, "\n")

// array genap
console.log("Nilai dari array ganjil")
console.log("- Nilai terkecil (min) dari aray ganjil adalah : ", oddMin)
console.log("- Nilai terbesar (max) dari aray ganjil adalah : ", oddMax)
console.log("- Nilai Total dari aray ganjil adalah : ",oddTotal)
console.log("- Nilai Rata-Rata dari aray ganjil adalah : ",oddAve, "\n")

// Perbadingan
console.log("Perbandingan");
console.log("- ", perbandinganMin(evenMin, oddMin))
console.log("- ", perbandinganMax(evenMax, oddMax))
console.log("- ", perbandinganTotal(evenTotal, oddTotal))
console.log("- ", perbandingaAve(evenAve, oddAve))
