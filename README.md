# 空氣品質監控工具 Air Quality Monitor
此專案主要是為了在圖表化空氣感測器數據，
以提供監測者查看空氣指標走勢用於分析數據。

### Live Demo 
###### _目前運行中的版本為因應計畫需求修改後的版本，主要實作功能為 Day Query 頁面，其餘頁面因應計畫主持人之架構需求改為較為簡易的後端渲染 HTML Template_
https://em2lab.comm.yzu.edu.tw/epa


## 功能

- 依時間區段選擇指定時段監測數據
- 可自訂 Moving Average 的 Window Size


## 專案架構

- 此專案實現部份為 Web Application -> Backend Server -> Database 部份

![](https://github.com/s951080603/DB-Monitor/blob/main/files/architecture.png?raw=true)

## 使用技術

- 前端： JavaScript, React, Material UI 
- 後端： Node.js, Express
- 資料庫： PostgreSQL
