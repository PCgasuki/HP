(function() {
  var form = document.getElementById('uploadForm');
  var input = document.getElementById('avatarInput');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var file = input.files[0];
    var randomURL = generateRandomURL();

    // ここでランダムなURLを使用して何らかの処理を行う
    console.log('ランダムなURL:', randomURL);
    
    // 画像をアップロードするための処理を実行する
    uploadImage(file, randomURL);
  });

  function generateRandomURL() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var length = 8;
    var randomURL = '';

    for (var i = 0; i < length; i++) {
      randomURL += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomURL;
  }

  function uploadImage(file, randomURL) {
    var formData = new FormData();
    formData.append('avatar', file);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://funyanya123.github.io/PCgasukinahitonoHP/Fileup.html/' + randomURL);
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log('画像のアップロードに成功しました');
      } else {
        console.log('画像のアップロードに失敗しました');
      }
    };
    xhr.send(formData);
  }
})();
