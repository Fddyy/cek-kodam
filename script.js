function cekKhodam() 
{
  const nama = document.getElementById('namaInput').value
  const hasil = document.getElementById('hasil')
  
  if(!nama){
    alert('Nama tidak boleh kosong')
  } else {

      const kodam = [
        'Tidak ada kodam',
        'asu Lai',
        'Asu komba',
        'coki Lai',
        'Coki birang',
        'rangers pink',
        'kulkas solang',
        'Kelinci',
        'nyarang bolong',
        'macan komba',
        'bembe',
        'anak safing',
        'safing Lai',
        'Manu kampong',
        'Manu potong',
        'Manu ras',
        'Naga emas',
        'polisi bulan sabit'
      ]
    
      const randomKodam = Math.floor(Math.random()*kodam.length)
    
      let hasilKodam = kodam[randomKodam]

      if(nama.toLowerCase() === 'ferdy'){
        hasilKodam = 'Naga Emas'
      }
    
      hasil.innerHTML = '<h2>' + nama + ':' + ' '+ hasilKodam + '</h2>'
  }
}