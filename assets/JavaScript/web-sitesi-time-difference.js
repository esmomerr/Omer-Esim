// 'zamanFarkiHesapla' fonksiyonu, verilen başlangıç tarihinden itibaren geçen süreyi hesaplar.
function zamanFarkiHesapla(baslangicTarihi) {
    // Mevcut tarihi al.
    let simdikiZaman = new Date();
    // Parametre olarak verilen başlangıç tarihini Date objesine dönüştür.
    let baslangic = new Date(baslangicTarihi);
    // Mevcut yıl ile başlangıç yılını karşılaştırarak yıl farkını hesapla.
    let yilFarki = simdikiZaman.getFullYear() - baslangic.getFullYear();
    // Mevcut ay ile başlangıç ayını karşılaştırarak ay farkını hesapla.
    let ayFarki = simdikiZaman.getMonth() - baslangic.getMonth();
    
    // Eğer ay farkı negatifse (yani şu anki ay, başlangıç ayından önceyse) bir önceki yıla geç.
    if (ayFarki < 0) {
        yilFarki--;
        ayFarki += 12; // 12 ay ekleyerek ay farkını pozitife çevir.
    }

    // Hesaplanan yıl ve ay farkını bir string olarak döndür.
    return `${yilFarki} year, ${ayFarki} month`;
}

// 'zamanFarkiniGuncelle' fonksiyonu, HTML'deki belirli elemanların içeriğini zaman farkı ile günceller.
function zamanFarkiniGuncelle() {
    // Farklı başlangıç tarihlerini içeren bir dizi.
    let baslangicTarihleri = ['2023-06', '2023-07', '2023-11'];
    // .experices-span class'ına sahip tüm elemanları seç.
    let zamanFarkiElemanlari = document.querySelectorAll('.experices-span');

    // Seçilen elemanlar üzerinde döngü yap.
    zamanFarkiElemanlari.forEach((eleman, index) => {
        // Eğer döngüdeki index, başlangıç tarihleri dizisinin uzunluğundan küçükse işlem yap.
        // Bu kontrol, dizi sınırlarını aşmamak için önemlidir.
        if (index < baslangicTarihleri.length) {
            // İlgili index için başlangıç tarihini al.
            let baslangicTarihi = baslangicTarihleri[index];
            // İlgili elemanın metnini, hesaplanan zaman farkı ile güncelle.
            eleman.textContent = zamanFarkiHesapla(baslangicTarihi);
        }
    });
}

// Sayfa tamamen yüklendiğinde 'zamanFarkiniGuncelle' fonksiyonunu çağır.
document.addEventListener('DOMContentLoaded', zamanFarkiniGuncelle);
