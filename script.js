const apiKey = "D443BCC1477C358FFE112845B64E5884";

function generateNickname() {
    const xhr = new XMLHttpRequest();
    const url = "https://opendict.korean.go.kr/api/view?q=기린&key=" + apiKey;
    xhr.open("GET", url, true);
    xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const wordList = response.return_object.entry_list.entry;
            const word = wordList[Math.floor(Math.random() * wordList.length)];
            const nickname = word.word + Math.floor(Math.random() * 100);
            document.getElementById("result").textContent = nickname;
        }
    };
    xhr.send();
}

document.getElementById("generate-btn").addEventListener("click", generateNickname);
