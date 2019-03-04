let isIslemDefine = false,islemText,ilkSayi,ikinciSayi;
function yazdir(sayi){
  if(isIslemDefine)
    document.getElementById("ekran").innerHTML = "";
  
  isIslemDefine = false;
  document.getElementById("ekran").innerHTML += sayi;
}

function temizle(){
  document.getElementById("ekran").innerHTML = "";
  ilkSayi = "";
  ikinciSayi = "";
  isIslemDefine = false;
}

function sil(){
  let screenText = document.getElementById("ekran").innerHTML;
  document.getElementById("ekran").innerHTML = screenText.substring(0,screenText.length-1);
}

function islem(islem){
  
  if(islem == "-" && document.getElementById("ekran").innerHTML.trim() == ""){
    yazdir(islem);
    return 0;
  }
  
  if(islem == "." && document.getElementById("ekran").innerHTML.indexOf(".") == -1 && document.getElementById("ekran").innerHTML != "" ){
    yazdir(islem);
    return 0;
  } else if(islem == ".") return 0;
  
  ilkSayi = Number(document.getElementById("ekran").innerHTML);
  isIslemDefine = true;
  islemText = islem;
}  

function esittir(){
  ikinciSayi = Number(document.getElementById("ekran").innerHTML);
  
  switch(islemText){
    case "+":
      document.getElementById("ekran").innerHTML = ilkSayi+ikinciSayi;
      break;
    case "-":
      document.getElementById("ekran").innerHTML = ilkSayi-ikinciSayi;
      break;
    case "x":
      document.getElementById("ekran").innerHTML = ilkSayi*ikinciSayi;
      break;
    case "/":
      document.getElementById("ekran").innerHTML = ilkSayi / ikinciSayi;
      break;
    case "%":
      document.getElementById("ekran").innerHTML = ilkSayi * ikinciSayi / 100;
      break;
  }
  isIslemDefine = true;
  ilkSayi = "";
  ikiniSayi = "";
}