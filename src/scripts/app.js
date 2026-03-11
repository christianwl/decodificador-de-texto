const TAG_TEXT = document.getElementById("text-area-cript");

const TAG_TEXT_DESCRIPT = document.getElementById("text-descript");

const COPY_AREA_ID = "copy-area";

const CRIPT_CODES_LIST = [
  { encrypt: "enter", decrypt: "e" },
  { encrypt: "imes", decrypt: "i" },
  { encrypt: "ai", decrypt: "a" },
  { encrypt: "ober", decrypt: "o" },
  { encrypt: "ufat", decrypt: "u" },
];

const BTN_EVENTS_LIST = [
  { id: "btn-encrypt", action: encrypt },
  { id: "btn-decrypt", action: decrypt },
  { id: "btn-copy", action: copy },
];

function encrypt() {
  document.getElementById(COPY_AREA_ID).style.display = "none";
  TAG_TEXT_DESCRIPT.innerHTML = "";
  TAG_TEXT_DESCRIPT.innerHTML += criptTextFormatter(TAG_TEXT.value);
}

function decrypt() {
  TAG_TEXT_DESCRIPT.innerHTML = criptTextFormatter(TAG_TEXT.value, false);
}

function criptTextFormatter(text, isCript = true) {
  let params = CRIPT_CODES_LIST.map((obj) => {
    return isCript
      ? { param1: obj.decrypt, param2: obj.encrypt }
      : { param1: obj.encrypt, param2: obj.decrypt };
  });

  params.forEach((obj) => {
    if (text.includes(obj.param1)) {
      text = text.replace(new RegExp(obj.param1, "gi"), obj.param2);
    }
  });

  return text;
}

function copy() {
  navigator.clipboard.writeText(TAG_TEXT_DESCRIPT.innerHTML);
}

BTN_EVENTS_LIST.forEach((obj) => {
  const btn = document.getElementById(obj.id);
  btn.addEventListener("click", () => {
    obj.action();
  });
});
