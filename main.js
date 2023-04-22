const apiKey = "D443BCC1477C358FFE112845B64E5884";
const apiEndpoint = "https://opendict.korean.go.kr/api/view";

function generateNickname() {
  // Generate a random word
  const word = Math.random().toString(36).substr(2);
  
  // Make an API request to get the definition of the word
  fetch(`${apiEndpoint}?key=${apiKey}&q=${word}`)
    .then(response => response.text())
    .then(data => {
      // Parse the XML response and extract the definition
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "text/xml");
      const definition = xml.querySelector("item[sense='1'] def").textContent;
      
      // Display the nickname on the page
      document.getElementById("nickname").textContent = `${word} (${definition})`;
    })
    .catch(error => console.log(error));
}

document.getElementById("generate-nickname-btn").addEventListener("click", generateNickname);