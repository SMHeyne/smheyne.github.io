function toggleLanguage() {
    // Get the checkbox
    var checkBox = document.getElementById("languageCheckbox");
    // Get the output text
    var englishPP = document.getElementById("englishPrivacyPolicy");
    var germanPP = document.getElementById("germanPrivacyPolicy");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        germanPP.style.display = "block";
        englishPP.style.display = "none";
    } else {
        germanPP.style.display = "none";
        englishPP.style.display = "block";
    }
  } 