function origCode() {
  var arrayMax = 4;
  var resArray = new Array(arrayMax);
  // アニメ用の4枚のアスキーアートを返す

  var w = 80;
  var h = 40;
  var illumination = 160;

  // キャンバス用配列を初期化
  var canvasArray = new Array(4);
  for (var a = 0; a < arrayMax; a ++) {
    canvasArray[a] = new Array(h);
    for (var y = 0; y < h; y ++) {
      canvasArray[a][y] = new Array(w);
    }
  }

  // ツリーを作成
  for (var a = 0; a < arrayMax; a ++) {
    for (var y = 0; y < h; y ++) {
      for (var x = 0; x < w; x ++) {
        canvasArray[a][y][x] = "_";

        var treeTop = Math.floor(y / 8) * 4;
        var treeW = Math.floor(y / 8 + 1) * 8;

        if (Math.abs(x - w / 2) < (y - treeTop) % treeW) {
          canvasArray[a][y][x] = "%";
        }
      }
    }
  }

  // イルミネーションを作成
  for (var a = 0; a < arrayMax; a ++) {
    for (var i = 0; i < illumination; i ++) {
      var r = (a + i) * i * 49999 + 59999 & 0xFFFF;
      var x = 1 + r % (w - 2);
      var y = 1 + r % (h - 2);

      canvasArray[a][y][x] = "*";
      canvasArray[a][y][x - 1] = "-";
      canvasArray[a][y][x + 1] = "-";
      canvasArray[a][y - 1][x] = "|";
      canvasArray[a][y + 1][x] = "|";
    }
  }

  // 文字列化
  for (var a = 0; a < arrayMax; a ++) {
    var arrayY = new Array(h);
    for (var y = 0; y < h; y ++) {
      arrayY[y] = canvasArray[a][y].join("");
    }
    resArray[a] = arrayY.join("\n");
  }

  // 戻り値を戻して終了
  return resArray;
}

function yourCode() {
  %YOUR_CODE%
}

function resConv(r) {
  var a = [];
  for (var i = 0; i < 4; i++)
    a[i] = r[i];
  return a;
}
