# TWIndieMusic 台灣硬地音樂搜尋器

台灣硬地音樂搜尋器為一 React 網頁應用，使用者可以在上面搜尋台灣獨立音樂的演出。所有資訊來源為台灣政府的文化部開源資料，詳情請見最底下的開源資料授權。

TWIndieMusic is a React App that can let user to search Taiwan's concert of indie music. All information is from Taiwan's goverment's [Indie Music's open data](https://data.gov.tw/dataset/6006) .

### 技術特色
+ 使用 Redux 非同步資料流
+ 第三方資料 API 串接
+ Material-UI + SASS 規劃 RWD 網頁 

## 展示 DEMO
[**live demo**](https://klareh.github.io/TWIndieMusic/)

<img src='./src/images/Screenshot_2018-11-07 INDIE LIVE.png' />
<img src='./src/images/Screenshot_2018-11-07 INDIE LIVE(1).png' />
<img src='./src/images/Screenshot_2018-11-07 INDIE LIVE(2).png' />

## 工具 TOOLS
| Tool             | Description   |
| :-------------:|--------------|
| [React](http://facebook.github.io/react/index.html) | 實現前端界面主要框架 |
| [Material-UI](https://github.com/mui-org/material-ui) | Mmaterial design 風格的 React 元件庫 |
| [SASS](http://sass-lang.com/) | CSS 前處理語言 |
| [Babel](https://babeljs.io/) | 在本專案主要使用 ECMAScript 6 語法 |
| [webpack](https://github.com/webpack/webpack) | 強大的開發環境包，用來管理模組以及方便分檔以利維護 |

## 安裝 Installation

如果你沒有安裝 node.js, 請先至 [node.js](https://nodejs.org/en/) 官方網站下載。
If you dont have node.js, please install it from the [official page](https://nodejs.org/en/) .

```console
$ git clone https://github.com/klareh/TWIndieMusic.git  ## Clone the repo
$ cd TWIndieMusic
$ npm install ## install required module
$ npm start   ## Then it will open the browser at: http://localhost:8080
```

## Open Data Liscense

##### 中文授權
+ 開放資料來源：文化部 2018年 獨立音樂
+ 此開放資料依政府資料開放授權條款 (Open Government Data License) 進行公眾釋出，使用者於遵守本條款各項規定之前提下，得利用之。
+ 政府資料開放授權條款：https://data.gov.tw/license

##### English Liscense
+ Data Providing from Ministry of Culture, Taiwan (R.O.C.) 2018 Indie Music
+ The Open Data is made available to the public under the Open Government Data License, User can make use of it when complying to the condition and obligation of its terms.
+ Open Government Data License:https://data.gov.tw/license

