let generatedOTP = "1234"; // demo ke liye fixed OTP

function sendOTP() {
  const phone = document.getElementById("phone").value;
  if(phone === "") {
    alert("Please enter phone number");
  } else {
    alert("OTP sent to " + phone + " (Demo OTP: 1234)");
    document.getElementById("phone-step").style.display = "none";
    document.getElementById("otp-step").style.display = "block";
  }
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;
  if(otp === generatedOTP) {
    alert("OTP Verified Successfully!");
    window.location.href = "info.html"; // next page redirect
  } else {
    alert("Invalid OTP. Please try again.");
  }
}
