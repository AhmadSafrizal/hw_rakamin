// Luas persegi
const luasPersegi = (sisi) => {
  return sisi * sisi
}

// Keliling persegi
const kelilingPersegi = (sisi) => {
  return sisi * 4
}

// Luas persegi panjang
const luasPersegiPanjang = (panjang, lebar) => {
  return panjang * lebar
}

// Keliling persegi panjang
const kelilingPersegiPanjang = (panjang, lebar) => {
  return 2 * (panjang + lebar)
}

module.exports = {
  luasPersegi,
  kelilingPersegi,
  luasPersegiPanjang,
  kelilingPersegiPanjang
}