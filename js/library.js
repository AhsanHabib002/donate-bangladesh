function getInputValuById(id){
    const inputValue = document.getElementById(id).value;
    const inputMoneyNumber = parseFloat(inputValue)
    return inputMoneyNumber;
}

// for text value

function getTextValuById(id){
    const textValue = document.getElementById(id).innerText;
    const textMoneyNumber = parseFloat(textValue)
    return textMoneyNumber;
}


// toggle

function showSectionById(id){
    document.getElementById('donate').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// color change

function activeMode(id){
    document.getElementById('tg-donate').classList.remove('bg-[#B4F461]');
    document.getElementById('tg-donate').classList.add('btn-outline');
    document.getElementById('tg-history').classList.remove('bg-[#B4F461]');
    document.getElementById('tg-history').classList.add('btn-outline');
    document.getElementById(id).classList.add('bg-[#B4F461]');
    document.getElementById(id).classList.remove('btn-outline');
}

// modal
function showModal() {
    document.getElementById('my_modal_1').classList.remove('hidden'); // Show modal
    document.getElementById('my_modal_1').classList.add('flex');     // Ensure it's visible
  }