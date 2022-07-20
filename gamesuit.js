var tanya = true
while (tanya) {
    // menangkap pilihan player
    var p = prompt('Selamat datang di game kecil Raiya. \nSilahkan pilih : gunting, kertas, batu');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();
    if(comp <0.35) {
        comp = 'gunting';
    } else if(comp >= 0.35 && comp < 0.65) {
        comp = 'kertas';
    } else {
        comp = 'batu';
    }

    var hasil = '';
    // menentukan rules
    if(p == comp) {
        hasil = 'SERI!';
    } else if(p == 'gunting') {
        //dibawah ini adalah komen untuk cara yang panjan
        //if(comp == kertas) {
        //    hasil = 'MENANG!';
        //} else {
        //    hasil = 'KALAH!';
        //}
        hasil = (comp == 'kertas') ? 'MENANG!' : 'KALAH!';
    } else if(p == 'kertas') {
        //ini juga komen untuk cara panjang
        //if(comp == gunting) {
        //    hasil = 'KALAH!';
        //} else {
        //    hasil = 'MENANG!'//
        //}
        hasil = (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
    } else if(p == 'batu') {
        hasil = (compt == 'kertas') ? 'KALAH!' : 'MENANG!'; 
    } else {
        hasil = 'ANDA MEMASUKAN PILIHAN YANG SALAH! \nCoba masukkan gunting,kertas, atau batu'
    }
    // menampikan hasil
    alert('Kamu memilih ' + p + ' \nkomputer memilih ' + comp + ' \nmaka hasilnya kamu ' + hasil );

    tanya = confirm('Mau coba lagi..?');
}

alert('Terimakasih sudah mau mencoba permainan nya Raiya hihi \nDadaaahh sampai jumpaa....');