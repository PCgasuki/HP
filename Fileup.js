const fileInput = document.getElementById('up');
// changeイベントで呼び出す関数
const handleFileSelect = () => {
  const files = fileInput.files();
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);　// 1つ1つのファイルデータはfiles[i]で取得できる
  }
}
/**--------------------------urlを作る------------- */
let btnCheck = document.getElementById('up');

btnCheck.addEventListener('button', function(){
    btnCheck.addEventListener('button', function(){
        console.log('href:' + location.href);
        console.log('protocol:' + location.protocol);
        console.log('host:' + location.host);
        console.log('hostname:' + location.hostname);
        console.log('port:' + location.port);
        console.log('pathname:' + location.pathname);
        console.log('search:' + location.search);
        console.log('hash:' + location.hash);
    });
});

(function(){

	// ------------------------------------------------------------
	// サポートチェック
	// ------------------------------------------------------------
	if(!(window.FormData)) return;

	// ------------------------------------------------------------
	// 空の FormData オブジェクトを作成する
	// ------------------------------------------------------------
	var form_data = new FormData();

	// ------------------------------------------------------------
	// 送信データを追加する
	// ------------------------------------------------------------
	form_data.append( "name_a" , "value_a" );
	form_data.append( "name_b" , "value_b" );
	form_data.append( "name_c" , "value_c" );

	// ------------------------------------------------------------
	// XMLHttpRequest オブジェクトを作成
	// ------------------------------------------------------------
	var xhr = new XMLHttpRequest();

	// ------------------------------------------------------------
	// XHR 通信に成功すると実行されるイベント
	// ------------------------------------------------------------
	xhr.onload = function (e){

		// レスポンスボディを取得する
		console.log(xhr.responseText );

	};

	// ------------------------------------------------------------
	// 「POST メソッド」「接続先 URL」を指定
	// ------------------------------------------------------------
	xhr.open("POST" , ":https://pcgasuki.github.io/PCgasukinahitonoHP/fileup/");

	// ------------------------------------------------------------
	// 「送信データに FormData を指定」「XHR 通信を開始する」
	// ------------------------------------------------------------
	xhr.send(form_data);

})();