function callApi(word, callback) {
  const api_key = "556E9F2C933C47780505F6267438F7FD";
  const url = `https://cors-anywhere.herokuapp.com/https://opendict.korean.go.kr/api/search?key=${api_key}&advanced=y&pos=명사&sort=dict&method=WORD_INFO&format=json&pagenum=1&pagesize=1&query=${word}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // 단어 정보에서 필요한 정보 추출
      const { word, word_info } = data.channel.item[0];
      const { pos, dfn } = word_info;
      const definition = dfn ? dfn[0] : "정의를 찾을 수 없습니다.";

      // 콜백 함수 호출하여 닉네임 생성
      callback(word, pos, definition);
    })
    .catch(error => console.error(error));
}

// 닉네임 생성 함수
function generateNickname() {
  const nouns = ["사과", "바나나", "딸기", "오렌지"]; // 단어 리스트
  const randomIndex = Math.floor(Math.random() * nouns.length); // 임의의 인덱스 생성
  const randomNoun = nouns[randomIndex]; // 임의의 단어 선택
  
  callApi(randomNoun, (word, pos, definition) => {
    // 선택한 단어의 정보를 바탕으로 닉네임 생성
    const nickname = `${word}의 ${pos}(${definition})`;
    console.log(nickname);
  });
}
