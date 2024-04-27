function doGet() {
  let doGetData = [
    // functions
    deliverAllSurveyResult(),
    deliverSubmitedKosenData(),
  ];

  console.log(doGetData);

  let jsonData = JSON.stringify(doGetData);

  return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);
}