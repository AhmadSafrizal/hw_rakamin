// const registration= document.getElementById('registration');
// const registerList = document.getElementById('register-list');
// const resume = document.getElementById('resume');

// registration.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const nama = document.getElementById('nama');
//     const umur = document.getElementById('umur');
//     const uangSaku = document.getElementById('uangSaku');

//     if (nama.value.length < 10 || umur.value < 25 || uangSaku.value < 100000 || uangSaku.value > 1000000) {
//         alert('Data tidak valid! Pastikan nama minimal 10 karakter, umur minimal 25 tahun, dan uang Saku antara 100 ribu dan 1 juta.');
//         return;
//     }

//     const newRow = registerList.insertRow(-1);
//     const namaCell = newRow.insertCell(0);
//     const umurCell = newRow.insertCell(1);
//     const uangSakuCell = newRow.insertCell(2);

//     namaCell.innerHTML = nama.value;
//     umurCell.innerHTML = umur.value;
//     uangSakuCell.innerHTML = uangSaku.value;

//     nama.value = '';
//     umur.value = '';
//     uangSaku.value = '';

//     Resum();
// });

// function Resum() {
//   const tbody = registerList.getElementsByTagName('tbody')[0];
//   const rows = tbody.getElementsByTagName('tr');
//   let totaluangSaku = 0;
//   let totalUmur = 0;

//     for (let i = 0; i < rows.length; i++) {
//         const cells = rows[i].getElementsByTagName('td');
//         const uangSaku = parseInt(cells[2].textContent);
//         const umur = parseInt(cells[1].textContent);

//             totaluangSaku += uangSaku;
//             totalUmur += umur;
//     }

//     console.log(uangSaku)
//     console.log(umur)
//     console.log(totaluangSaku)
//     console.log(totalUmur)

//     const rataRatauangSaku = totaluangSaku / rows.length;
//     const rataRataUmur = totalUmur / rows.length;

//     resume.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRatauangSaku} dengan rata-rata umur ${rataRataUmur}`;

//     console.log(rataRatauangSaku)
//     console.log(rataRataUmur)
// }

let data = []

const registration= document.getElementById('registration');
const resume = document.getElementById('resume');
const registerList = document.getElementById('register-list');

registration.addEventListener("submit", function (e) {
  e.preventDefault()

  let nama = document.getElementById('nama').value;
  let umur = document.getElementById('umur').value;
  let uangSaku = document.getElementById('uangSaku').value;

  let entry = [nama, umur, uangSaku]
  data.push(entry)

  let newRow = registerList.insertRow()

  for( let i = 0; i < entry.length; i++) {
    let cell = newRow.insertCell(i)
    cell.textContent = entry[i]
  }

  nama = ''
  umur = ''
  uangSaku = ''

  resumeUpdate()
})

const resumeUpdate = () => {
  const tbody = registerList.getElementsByTagName('tbody')[0];
  const rows = tbody.getElementsByTagName('tr');
  let totaluangSaku = 0;
  let totalUmur = 0;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    const uangSakuCell = parseInt(cells[2].textContent);
    const umurCell = parseInt(cells[1].textContent);

    if (!isNaN(uangSangu) && !isNaN(umur)) {
      totaluangSaku += uangSakuCell;
      totalUmur += umurCell;
    }
  }

  console.log(totaluangSaku)
  console.log(totalUmur)

  const rataRatauangSaku = totaluangSaku / rows.length;
  const rataRataUmur = totalUmur / rows.length;

  resume.innerHTML = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRatauangSaku} dengan rata-rata umur ${rataRataUmur}`;

  console.log(rataRatauangSaku)
  console.log(rataRataUmur)
}