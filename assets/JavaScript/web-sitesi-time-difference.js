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
    let baslangicTarihleri = ['2022-06', '2022-10', '2023-10'];
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


















// aside menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// aside menu end























// Footer icons
const hoverImg = {
    github: "assets/img/github-hover.svg",
    linkedin: "assets/img/linkedin-hover.svg",
    instagram: "assets/img/Instagram-hover.svg",
    facebook: "assets/img/Facebook-hover.svg",
    twitter: "assets/img/Twitter-hover.svg",

}

document.querySelectorAll(".social-link").forEach(link => {
    link.addEventListener("mouseover", () => {
        const socialClass = link.classList[1]; // İkinci sınıf adını al
        const img = link.querySelector("img"); // İçerideki img etiketini seç
        img.src = hoverImg[socialClass]; // Hover resmini belirtilen URL ile değiştir
    });
    
    link.addEventListener("mouseout", () => {
        const socialClass = link.classList[1]; // İkinci sınıf adını al
        const img = link.querySelector("img"); // İçerideki img etiketini seç
        img.src = `assets/img/${socialClass}.svg`; // Orijinal resmi tekrar yükle
    });
});
// Footer icons End


























const emailInput = document.querySelector(".email");

emailInput.addEventListener("click", function(){
    console.log(this);
    if(this.classList.contains("invalidd")){
        this.classList.remove("invalidd");
        this.style.borderColor="#4EE1A0"
        this.style.borderColor=""
    }
    else{
        this.classList.add("invalidd");
        this.style.borderColor = "red";
        this.style.borderColor=""

    }
})