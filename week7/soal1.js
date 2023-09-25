const persegiModule = require('./persegi')

const sisi = 90
const panjang = 87
const lebar = 55

const luasPersegi = persegiModule.luasPersegi(sisi)
const kelilingPersegi = persegiModule.kelilingPersegi(sisi)
const luasPersegiPanjang = persegiModule.luasPersegi(panjang, lebar)
const kelilingPersegiPanjang = persegiModule.kelilingPersegi(panjang, lebar)

console.log(`Luas Persegi adalah : ${luasPersegi}`)
console.log(`Keliling Persegi adalah : ${kelilingPersegi}`)
console.log(`Luas Persegi Panjang adalah : ${luasPersegiPanjang}`)
console.log(`Keliling Persegi Panjang adalah : ${kelilingPersegiPanjang}`)
