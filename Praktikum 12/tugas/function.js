function sumNumbers() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;

  // Validasi apakah kedua bilangan telah diisi
  if (number1 !== "" && number2 !== "") {
    $("#error-msg").hide(); // Sembunyikan pesan error
    var data = {
      number1: number1,
      number2: number2,
    };
  }

  $.ajax({
    type: "POST",
    url: "sum.php",
    data: JSON.stringify(data),
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      document.getElementById("result").textContent = response.result;
    },
    error: function () {
      console.log("Terjadi kesalahan saat mengirim permintaan AJAX.");
    },
  });
}

// fungsi untuk menerima nomor saja pada inputan
function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}
