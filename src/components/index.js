// src/components/News/index.js

import fs from 'fs';
import path from 'path';

// ファイル名から拡張子を除いた名前を取得する関数
const getFileNameWithoutExtension = (file) => {
  return path.basename(file, path.extname(file));
};

// src/components/News ディレクトリ内のすべてのJavaScriptファイルを動的にインポートする
const articleComponents = {};

// src/components/News ディレクトリ内のファイルをすべて読み込む
const files = fs.readdirSync(__dirname);

// JavaScriptファイル（.jsで終わるファイル）のみをフィルタリングしてインポートする
files.forEach(file => {
  if (file !== 'index.js' && file.endsWith('.js')) {
    const componentName = getFileNameWithoutExtension(file);
    articleComponents[componentName] = require(`./${file}`).default;
  }
});

export default articleComponents;
