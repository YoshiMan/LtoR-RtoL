document.addEventListener("DOMContentLoaded", function(event) {

    inputtext = document.getElementById('inputtext')
    inputtext.addEventListener('paste', (e) => {

        e.stopPropagation();
        e.preventDefault();

        // Get pasted data via clipboard API
        var clipboardData = e.clipboardData || window.clipboardData;
        var pastedData = clipboardData.getData('Text');



        changeToRandomUTF = pastedData.replaceAll('l', '񅪜')
        changeToRandomUTF = changeToRandomUTF.replaceAll('L', 'ѯ')
        changeToRandomUTF = changeToRandomUTF.replaceAll('r', '𫍪')
        changeToRandomUTF = changeToRandomUTF.replaceAll('R', '񣙧')


        changeBack = changeToRandomUTF.replaceAll('񅪜', 'r')
        changeBack = changeBack.replaceAll('ѯ', 'R')
        changeBack = changeBack.replaceAll('𫍪', 'l')
        changeBack = changeBack.replaceAll('񣙧', 'L')

        e.target.value = changeBack
    });


    speakButton = document.getElementById('speakButton')
    speakButton.addEventListener('click', (e) => {

        e.stopPropagation();
        e.preventDefault();

        var msg = new SpeechSynthesisUtterance();
        msg.text = inputtext.value;
        window.speechSynthesis.speak(msg);

    });

});
