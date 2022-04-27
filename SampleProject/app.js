const SelectTAgs = document.querySelectorAll("select");
let fromText = document.querySelector(".from-text");
const exChange = document.querySelector(".exchange");
const icons = document.querySelectorAll(".row i")
let toText = document.querySelector(".to-text");
let translateButton = document.querySelector("#btn");


function populateLanguagesField (){
    SelectTAgs.forEach((selectTag, id) => {
      for (const countryCode in countries) {
        let selected;
        if (id == 0 && countryCode == "en-GB") {
          selected = "selected";
        } else if (id == 1 && countryCode == "hi-IN") {
          selected = "selected";
        }
        let options = `<option value="${countryCode}" ${selected} >${countries[countryCode]}</option>`;
        selectTag.insertAdjacentHTML("beforeend", options); //
      }
    });
}
async function TranslateToLanguage(text, langFrom, langTo){
    let URL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${langFrom}|${langTo}`;
    const response = await fetch(URL)
    const langobject = await response.json()
    return langobject
}
populateLanguagesField()
translateButton.addEventListener("click", () => {
    let text = fromText.value;
    let langTranslateFrom = SelectTAgs[0].value;
    let langTranslateTo = SelectTAgs[1].value;
    if(text){
          TranslateToLanguage(text, langTranslateFrom, langTranslateTo).then((response) => {
          toText.value = response.responseData.translatedText;
        }).catch((err) => {console.error(err)});
    }
    else{
     toText.setAttribute('placeholder',"Translation")
    }
});
icons.forEach(icon=>{
        icon.addEventListener("click", ({target}) => {
            if(target.classList.contains("fa-copy")){
                if(target.id =="from"){
                    navigator.clipboard.writeText(fromText.value)
                }
                else{
                    navigator.clipboard.writeText(toText.value)
                }
            }
            else{
                let utterance;
                if(target.id =="from"){
                    utterance = new SpeechSynthesisUtterance(fromText.value)
                    utterance.lang= SelectTAgs[0].value
                }
                else{
                    utterance = new SpeechSynthesisUtterance(toText.value)
                    utterance.lang= SelectTAgs[1].value
                }
                var synth = window.speechSynthesis;
                synth.speak(utterance);
            }
            
        })
    })
exChange.addEventListener("click",()=>{
    let temp = SelectTAgs[0].value;
    SelectTAgs[0].value = SelectTAgs[1].value;
    SelectTAgs[1].value = temp
    
    let text = fromText.value
    fromText.value = toText.value
    toText.value =text
})
