const apiKey = 'D071A547D3B6B4A1959EBA7BB7439506';
      const url = `https://opendict.korean.go.kr/api/search?key=${apiKey}&q=random&method=WORD_INFO`;

      function generateWord() {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const words = data.channel.item;
            const randomWord = words[Math.floor(Math.random() * words.length)];
            const result = document.getElementById('result');
            result.innerHTML = `랜덤한 단어: ${randomWord.word}`;
          })
          .catch(error => console.error(error));
      }

      const btnGenerate = document.getElementById('btn-generate');
      btnGenerate.addEventListener('btn-generate', generateWord);