function update(){
  const targetContent  = document.getElementById('targetObject1');
  const targetText  = document.getElementById('targetObject2');
  const inputValue  = document.getElementById('inputValue');
  const selection = document.getElementById('selection');


  switch (selection.value) {
    case "Warna Latar":
      targetContent.style.backgroundColor = inputValue.value
      break;
    case "Warna Text":
      targetText.style.color = inputValue.value
      break;
    case "Ukuran Text":
      targetText.style.fontSize = inputValue.value+'px'
      break;
    case "Jenis Font":
      targetText.style.fontFamily = inputValue.value
      break;
    case "Lebar Konten":
      targetContent.style.width = inputValue.value+'px'
      break;
    case "Tinggi Konten":
      targetContent.style.height = inputValue.value+'px'
      break;
  }
}