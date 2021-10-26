function checkFilter(inputID) {
     let listCheckbox = document.getElementsByClassName("form-check-input");
     for (let i = 0; i < listCheckbox.length; i++) {
          listCheckbox[i].checked = false;
     }

     document.getElementById(inputID).checked = true;
}

function resetFilter() {
     let listFormControll = document.querySelectorAll(".class-input");
     console.log(listFormControll)
     for (let i = 0; i < listFormControll.length; i++) {

          if (listFormControll[i].getAttribute("type") == "checkbox") {
               listFormControll[i].checked = false;
          } else {
               listFormControll[i].value = "";
          }
     }
}

// function showFilterProduk() {
//      document.querySelector(".filter-produk").classList.add("show-filter");
//      let ui_show_filter = document.querySelector('.filter-produk');
//      ui_show_filter.classList.add('ui_show_filter_fixed');
//      document.querySelector(".btn-show-filter").classList.add("d-none")
// }

// function closeFilterProduk() {
//      document.querySelector(".filter-produk").classList.remove("show-filter");
//      let ui_show_filter = document.querySelector('.filter-produk');
//      ui_show_filter.classList.remove('ui_show_filter_fixed');
//      document.querySelector(".btn-show-filter").classList.remove("d-none")
// }


// section show  filter agen
let btnFilterAgen = document.querySelectorAll(".btn-filter-agen");
function FuncFilterAgen() {
     const uiFilterProduk = document.querySelector(".filter-produk")
     for (let i = 0; i < btnFilterAgen.length; i++) {
          const element = btnFilterAgen[i];
          element.addEventListener("click", () => {
               uiFilterProduk.classList.toggle("d-block");

               ChngeWidthProduk();
          });


     }

}

// menjalankan Fungsi event click pada button filter dan button close filter secara bersamaan
document.addEventListener("DOMContentLoaded", function () {
     FuncFilterAgen();

});

// SECTOIN CHANGE WIDTH COL ALL PRODUK
function ChngeWidthProduk() {
     const colAllProduk = document.querySelectorAll(".section-agen .card_produk .col-lg-3");
     colAllProduk.forEach(elemet => {
          elemet.classList.toggle("c-col-3");
     });
}


// NUMBER FORMAT START
const numberFormat = (value) => {
     if (value.toString()[0] == "-") {
          var negative = "-";
     } else {
          negative = "";
     }
     var raw = value.toString().replace(/(?!\.)\D/g, "").split(".");
     var whole = raw[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     var decimal = false;
     if (raw.length > 1) {
          decimal = raw[1];
     }
     if (decimal !== false && (decimal !== "0" || decimal !== "00")) {
          return negative + whole + "." + decimal;
     } else {
          return negative + whole;
     }
}
// NUMBER FORMAT START



// SECTION DOM PRICE & STOK START

let price = parseInt(document.getElementById("inputHargaHidden").value);
let availableStok = parseInt(document.getElementById("inputStokHidden").value);

const calculatePrice = (action) => {
     let tagStok = document.getElementById("valueStok");
     let tagPrice = document.getElementById("valueTotalPrice");
     let nowStok = parseInt(tagStok.innerText);

     if (action == "minus") {
          nowStok--;

          if (nowStok < 1) {
               alert("Stok tidak boleh dibawah satu!");
               tagStok.innerText = 1;
               nowStok = 1;
          } else {
               tagStok.innerText = nowStok;
          }
     } else {
          nowStok++;

          if (nowStok > availableStok) {
               alert("Stok melebihi jumlah yang tersedia");
               nowStok = availableStok;
          } else {
               tagStok.innerText = nowStok;
          }
     }

     let totalPrice = price * nowStok;
     // console.log(price);
     tagPrice.innerText = `Rp. ${numberFormat(totalPrice)}`;
}

document.getElementById("btnPlusStok").addEventListener("click", function () {
     calculatePrice("plus")
});
document.getElementById("btnMinusStok").addEventListener("click", function () {
     calculatePrice("minus")
});

// SECTION DOM PRICE & STOK END





// EVENT CLICK CHANGE SRC IMAGE LARGE START
const container_produk_image = document.querySelector(".produk-image");
const imgLarge = document.querySelector(".thumbnail");

container_produk_image.addEventListener("click", function (e) {
     // membuat kondisi ketika event click container img ini meng klik sebuah salah satu gambar small
     if (e.target.className == "thumb-small") {
          imgLarge.src = e.target.src;
          imgLarge.classList.add("fade");

          setTimeout(() => {
               imgLarge.classList.remove("fade")
          }, 500);
     }

});
// EVENT CLICK CHANGE SRC IMAGE LARGE END

