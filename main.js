let form = document.getElementById('expense-form');
let harcamaInput = document.getElementById('expense-name');
let fiyatInput = document.getElementById('expense-amount');
let harcamaKapsayici = document.getElementById("expense");
let toplam = document.getElementById("toplam-span");

let toplamMiktar = 0; // Toplam miktarı tutmak için değişken

form.addEventListener('submit', ekle);

function ekle(e) {
    e.preventDefault();
    
    // Girdilerin boş olup olmadığını kontrol et
    if (fiyatInput.value === "" || harcamaInput.value === "") {
        alert('Lütfen tüm alanları doldurun!');
        return;
    }
    
    let harcamaAdi = harcamaInput.value;
    let fiyat = parseFloat(fiyatInput.value); // Fiyatı sayıya dönüştür
    
    // Harcama Div oluştur ve içeriğini ayarla
    let harcamaDiv = document.createElement("div");
    harcamaDiv.classList.add("harcama");
    harcamaDiv.innerHTML = `
        <h1>${harcamaAdi}</h1>
        <h3>${fiyat}₺</h3>
        <img id='silBtn' src="images/trash.png" alt="Sil">
    `;
    harcamaKapsayici.appendChild(harcamaDiv);
    
    // Toplam miktarı güncelle
    toplamMiktar += fiyat;
    toplam.innerText = `${toplamMiktar}₺`;

    // Girdileri temizle
    harcamaInput.value = "";
    fiyatInput.value = "";
}

harcamaKapsayici.addEventListener("click", sil);

function sil(e) {
    var element = e.target;
    if(element.id === 'silBtn'){
        let silinenFiyat = parseFloat(element.previousElementSibling.innerText.replace('₺', ''));
        toplamMiktar -= silinenFiyat;
        toplam.innerText = `${toplamMiktar.toFixed(2)}₺`;
        element.parentElement.remove();
    }
}
