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
