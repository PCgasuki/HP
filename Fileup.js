const handleFileSelect = () => {
  const fileInput = document.getElementById('up');
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const imageURL = URL.createObjectURL(file);
    console.log(imageURL);
    // ここで得られたimageURLを使って処理を行うことができます
  }
}

const fileInput = document.getElementById('up');
fileInput.addEventListener('change', handleFileSelect);
