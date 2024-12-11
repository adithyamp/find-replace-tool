const textArea = document.getElementById('textArea');
const findInput = document.getElementById('findInput');
const replaceInput = document.getElementById('replaceInput');
const replaceBtn = document.getElementById('replaceBtn');
const clearBtn = document.getElementById('clearBtn');
const resultDiv = document.getElementById('result');

function findAndReplace() {
  debugger
  const text = textArea.value;
  const findWord = findInput.value;
  const replaceWord = replaceInput.value;

  if (!text || !findWord) {
    resultDiv.textContent = 'Please enter text and a word to find';
    return;
  }

  if(!text.includes(findWord)){
    resultDiv.textContent = 'Word does not exist in text.';
    return;
  }

  const regex = new RegExp(findWord, 'g'); 
  const replacedText = text.replace(regex, replaceWord);

  textArea.value = replacedText;
  resultDiv.textContent = 'Successfully completed replacement !';
}

function clearInputs() {
  textArea.value = '';
  findInput.value = '';
  replaceInput.value = '';
  resultDiv.textContent = '';
}

replaceBtn.addEventListener('click', findAndReplace);
clearBtn.addEventListener('click', clearInputs);
