let content = [];
let translations = {};
let currentKey = "";
let currentLang = "en";

fetch("data.json")
.then(res => res.json())
.then(data => {
  content = data;
  renderIcons();
});

fetch("translations.json")
.then(res => res.json())
.then(data => translations = data);

function renderIcons(){
  const container = document.getElementById("icons");
  container.innerHTML = "";

  content.forEach(item => {
    const div = document.createElement("div");
    div.className = "icon";
    div.textContent = item.icon;

    div.onclick = () => showMessage(item.key);
    container.appendChild(div);
  });
}

function showMessage(key){
  currentKey = key;
  document.getElementById("message").textContent =
    translations[currentLang][key];
}

document.getElementById("languageSelect").onchange = e => {
  currentLang = e.target.value;
  if(currentKey) showMessage(currentKey);
};

function speak(){
  if(!currentKey) return;

  const msg = new SpeechSynthesisUtterance(
    translations[currentLang][currentKey]
  );

  msg.lang =
    currentLang === "fr" ? "fr-FR" :
    currentLang === "sw" ? "sw-KE" :
    currentLang === "es" ? "es-ES" :
    "en-US";

  speechSynthesis.speak(msg);
}
