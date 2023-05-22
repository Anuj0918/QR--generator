 let imgBox = document.getElementById("imgBox");
 let qrimage = document.getElementById("qrimage");
 let qrtext = document.getElementById("qrtext");

  function generateQR()  {
    if(qrtext.value.length > 0) { 
   qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtext.value  ;
   
 }
 }