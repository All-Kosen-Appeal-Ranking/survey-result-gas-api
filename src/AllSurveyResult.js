function deliverAllSurveyResult() {
  let spreadsheetId = '14_rlX2PBpnpK4e7Bfv_ewsVepha7uQBxJ0pCmB3Umck';
  let sheetName = 'フォームの回答 1';
  let usingSheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
  let maxColNum = 202;

  let selectedData = usingSheet.getDataRange().getValues();
  let rangedData = selectedData.slice(1, maxColNum); // 0行目ラベルの除外
  
  let parsedData = [];
  // 0行目ラベルでデータ数が1つ少ないため、maxColNum-1
  for(let row_i=0; row_i<(maxColNum-1); row_i++) {
    let answerDataPerPerson = {};

    for(let col_j=0; col_j<28; col_j++) {
      // console.log(rangedData[row_i][col_j]); // 1セルごとのデータ取得を確認
      let labelCellData = [
        "timeStamp",
        "studentGrade",
        "school",
        "sexRatio",
        "professorInterest",
        "trandition",
        "beautySchool",
        "goodFacilities",
        "tasteCafeteriaFood",
        "workingRenovation",
        "learnAssist",
        "remedialTraining",
        "numRetainedStudent",
        "clubActibity",
        "playingSports",
        "awardsReceived",
        "communityAttractive",
        "communityProsperity",
        "easeGoSchool",
        "storeLocationSchool",
        "beautyDormitory",
        "tasteDormitoryFood",
        "storeLocationDormitory",
        "friendshipDormitory",
        "strictHierarchy",
        "fullDormitoryEvents",
        "kosenAttractiveness",
        "kosenYouKnow",
      ]
      let cellData = rangedData[row_i][col_j];
      
      // ブランケット記法よりキーに変数の値を使用
      answerDataPerPerson[labelCellData[col_j]] = cellData;
    }

    parsedData[row_i] = answerDataPerPerson;
  }

  console.log(parsedData);
  return parsedData;
}
