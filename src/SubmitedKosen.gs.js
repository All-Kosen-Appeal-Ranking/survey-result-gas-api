function deliverSubmitedKosenData() {
  let spreadsheetId = '14_rlX2PBpnpK4e7Bfv_ewsVepha7uQBxJ0pCmB3Umck';
  let sheetName = '参加校円グラフ';
  let usingSheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  let maxColNum = 74;

  let selectedData = usingSheet.getDataRange().getValues();
  let rangedData = selectedData.slice(1, maxColNum); // 0行目はラベルのため除外
  // console.log(rangedData);
  
  let parsedData = [];
  // 0行目ラベルの除外より個数はmaxColNum-1となる。よって個数合わせでマイナス1する。
  for(let row_i=0; row_i<(maxColNum-1); row_i++) {
    let answerDataPerSchool = {};
    let schoolName = rangedData[row_i][0];
    // console.log(schoolName);
    let isSubmited = (rangedData[row_i][1] === "✅") ? true : false;
    // console.log(isSubmited);

    answerDataPerSchool['school'] = schoolName;
    answerDataPerSchool['isSubmited'] = isSubmited;

    parsedData[row_i] = answerDataPerSchool;
  }

  console.log(parsedData);
  return parsedData;
}
