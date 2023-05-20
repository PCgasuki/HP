(function() {
  // フォーム要素を取得
  var form = document.getElementById('uploadForm');

  // フォームの送信イベントを監視
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // FormDataオブジェクトを作成
    var formData = new FormData(form);

    // XMLHttpRequestオブジェクトを作成
    var xhr = new XMLHttpRequest();

    // 送信データを設定
    xhr.open('POST', 'https://funyanya123.github.io/PCgasukinahitonoHP/Fileup.html'); // アップロード先のURLを指定

    // レスポンス受信時の処理
    xhr.onload = function() {
      if (xhr.status === 200) {
        // アップロード成功時の処理
        console.log(xhr.responseText); // レスポンスの内容を出力

        // 画像のURLをランダムに作成
        var imageURL = 'https://funyanya123.github.io/PCgasukinahitonoHP/Fileup.html/uploads/' + generateRandomString() + '.jpg';
        console.log('画像のURL:', imageURL);

        // ここで取得した画像のURLを利用して必要な処理を行います
        // 例: 画像の表示や別の要素にURLをセットするなど
      } else {
        // アップロード失敗時の処理
        console.error('アップロードエラー:', xhr.status);
      }
    };

    // リクエスト送信
    xhr.send(formData);
  });

  // ランダムな文字列を生成する関数
  function generateRandomString() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var length = 8;
    var randomString = '';
    for (var i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  }
})();
