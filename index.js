(()=>{
    const nameInputElm = document.getElementById('nameInput');
    const pickButtonElm = document.getElementById('pickButton');
    const pickCount = document.getElementById('pickCount');
    const resultElm = document.getElementById('result');
    const selectedNameElm = document.getElementById('selectedNames');
    
    let names = nameInputElm.value
    let count = 1
    nameInputElm.addEventListener('input', (e) => {
        names = e.target.value
    });
    pickCount.addEventListener('input', (e) => {
        if (e.target.value < 1) {
            e.target.value = 1
        }
        count = e.target.value
    });
    
    pickButtonElm.addEventListener('click', () => {
        if (names === '') {
            alert('Please enter names')
            return
        }
        const nameArray = names.split(',')
        if (nameArray.length < 2) {
            alert('Please enter more than 1 name')
            return
        }
        const selectedName = pickRandomName(nameArray, count);
        displayResult(selectedName);
        updateNameInput(nameArray);
    })
    
    function pickRandomName(nameArray, count) {
        if (count === 1) {
            const randomIndex = Math.floor(Math.random() * nameArray.length);
            const selectedName = nameArray[randomIndex];
            nameArray.splice(randomIndex, 1);        
            return selectedName ;
        }
        const selectedNames = [];
        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * nameArray.length);
            if (selectedNames.includes(nameArray[randomIndex])) {
                i--;
                continue;
            }
            selectedNames.push(nameArray[randomIndex]);
            nameArray.splice(randomIndex, 1);
        }
        return selectedNames.join(',');
    }
    
    function displayResult(selectedName) {
        selectedNameElm.textContent = selectedName;
    }
    
    function updateNameInput(nameArray) {
        nameInputElm.value = nameArray.join(', ');
        names = nameArray.join(', '); 
    }
})()