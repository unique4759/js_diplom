const calculator = () => {
    let calc = document.getElementById('accordion'),
        checkSeptic = document.getElementById('myonoffswitch'),
        checkBottom = document.getElementById('myonoffswitch-two'),
        meters = document.querySelector('#collapseFour input'),
        selects = document.querySelectorAll('#collapseTwo select'),
        secondTitle = document.querySelectorAll('#collapseTwo .title-text')[1],
        totalValue = document.getElementById('calc-result'),
        speed = 500;

    secondTitle.classList.add('hidden');
    selects[2].closest('.select-box').classList.add('hidden');
    selects[3].closest('.select-box').classList.add('hidden');

    //Переключалка шагов
    calc.addEventListener('click', (e) => {
        let target = e.target,
            nextStep = target.closest('.construct-btn');

        if(target.closest('.construct-btn') && !target.matches('.call-btn')) {
            e.preventDefault();

            let hrefAttr = nextStep.closest('a').getAttribute('href');

            target = target.closest('.panel');
            target.querySelector('.panel-collapse').classList.remove('in');
            document.querySelector(hrefAttr).classList.add('in');
        }
        if (target.matches('.call-btn')) {
            let form = document.querySelector('.popup-call .capture-form');

            form.setAttribute('name', 'calculator_form');
        }
    });

    //Функционал калькулятора
    const countSum = (newVal) => {
        let total = 0,
            countValue = 10000,
            diameter = +selects[0].options[selects[0].selectedIndex].value.slice(0, -6),
            rings = +selects[1].options[selects[1].selectedIndex].value.slice(0, -6),
            diameterTwo = +selects[2].options[selects[2].selectedIndex].value.slice(0, -6),
            ringsTwo = +selects[3].options[selects[3].selectedIndex].value.slice(0, -6);

        totalValue.disabled = false;

        if (checkSeptic.checked) {
            secondTitle.classList.add('hidden');
            selects[2].closest('.select-box').classList.add('hidden');
            selects[3].closest('.select-box').classList.add('hidden');
        } else {
            secondTitle.classList.remove('hidden');
            selects[2].closest('.select-box').classList.remove('hidden');
            selects[3].closest('.select-box').classList.remove('hidden');
        }

        if(diameter === 2) {
            countValue *= 1.2; 
        }
        if(rings === 2) {
            countValue *= 1.3; 
        } 
        if(rings === 3) {
            countValue *= 1.5; 
        } 
        if(checkBottom.checked) {
            countValue += 1000; 
        }

        if(!checkSeptic.checked) {
            countValue += 15000;

            if(diameterTwo === 2) {
                countValue *= 1.2; 
            }
            if(ringsTwo === 2) {
                countValue *= 1.3; 
            } 
            if(ringsTwo === 3) {
                countValue *= 1.5; 
            } 
            if(checkBottom.checked) {
                countValue += 2000; 
            }
        }

        total = Math.round(countValue);

        let count = newVal ? 0 : +totalValue.value;
        const inc = Math.round(+total / speed);

        if(count < total) {
            totalValue.value = count + inc;
            setTimeout(countSum, 1);
        } else {
            totalValue.value = total;
        }
    };

    //Слушатель изменений калькулятора
    calc.addEventListener('change', (e) => {
        const target = e.target;
    
        if(target.matches('select') || target.matches('input')) {
            countSum(true);
        }
    });    
};

export default calculator;