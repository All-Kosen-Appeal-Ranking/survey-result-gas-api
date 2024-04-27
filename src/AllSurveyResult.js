function deliverAllSurveyResult() {
  let spreadsheetId = '14_rlX2PBpnpK4e7Bfv_ewsVepha7uQBxJ0pCmB3Umck';
  let sheetName = 'フォームの回答 1';
  let usingSheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  let maxColNum = 202;

  let selectedData = usingSheet.getDataRange().getValues();
  let rangedData = selectedData.slice(0, maxColNum);
  
  let parsedData = [];
  // row_i = 1の理由: 0行目のラベルを除外するため
  for(let row_i=2-1; row_i<maxColNum; row_i++) {
    let answerDataPerPerson = {};

    for(let col_j=0; col_j<28; col_j++) {
      // console.log(rangedData[row_i][col_j]); // 1セルごとのデータ取得を確認
      let labelCellData = rangedData[0][col_j];
      let cellData = rangedData[row_i][col_j];
      
      // ブランケット記法よりキーに変数の値を使用
      answerDataPerPerson[labelCellData] = cellData;
    }

    // 0行目ラベル処理よりループ内の初期値が1であるため、配列の0番スタート補正を掛けている
    parsedData[row_i-1] = answerDataPerPerson;
  }

  console.log(parsedData);
  return parsedData;
}
