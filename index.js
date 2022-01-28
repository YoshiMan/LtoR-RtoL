function changeLetters() {

  var textarea = document.getElementById('inputtext');


  changeToRandomUTF = textarea.value.replaceAll('l', '񅪜')
  changeToRandomUTF = changeToRandomUTF.replaceAll('L', 'ѯ')
  changeToRandomUTF = changeToRandomUTF.replaceAll('r', '𫍪')
  changeToRandomUTF = changeToRandomUTF.replaceAll('R', '񣙧')


  changeBack = changeToRandomUTF.replaceAll('񅪜', 'r')
  changeBack = changeBack.replaceAll('ѯ', 'R')
  changeBack = changeBack.replaceAll('𫍪', 'l')
  changeBack = changeBack.replaceAll('񣙧', 'L')

  textarea.value=changeBack
}
