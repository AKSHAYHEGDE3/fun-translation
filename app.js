let input_text = document.getElementById("text_input");
let output_text = document.getElementById("output");
const translate_btn_1 = document.getElementById("btn-1");
const translate_btn_2 = document.getElementById("btn-2");
const btns=[translate_btn_1,translate_btn_2]
let url=''


function getURL(input) {
  return url + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function translate() {
  console.log("clicked")
  let text = input_text.value;
  console.log(text)
  fetch(getURL(text))
    .then(response => response.json())
    .then(json => {
      let translated_Text = json.contents.translated;
      output_text.innerText = translated_Text;
    })
    .catch(errorHandler);
}

// adding events to both buttons

btns.forEach(btn=>{
 btn.addEventListener('click',e=>{
   url=e.target.value;
   translate()
 })
  })


  

