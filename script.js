const API_KEY = "D443BCC1477C358FFE112845B64E5884";
      const generateBtn = document.getElementById("generate-btn");
      const result = document.getElementById("result");

      generateBtn.addEventListener("click", () => {
        fetch(
          `https://opendict.korean.go.kr/api/search?key=${API_KEY}&target=example&sort=random&q=%EC%9E%90%EB%8F%99`
        )
          .then((response) => response.text())
          .then((data) => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const word = xmlDoc.getElementsByTagName("word")[0].childNodes[0]
              .nodeValue;
            result.innerText = `${word}님`;
          })
          .catch((error) => console.log(error));
      });