const validateFormInputs = () => {
    const phoneInputs = document.querySelectorAll('.phone-user'),
        nameInputs = document.querySelectorAll('input[name="user_name"]'),
        btnConsultation = document.querySelector('.consultation-btn'),
        valQuestion = document.querySelector('input[name="user_quest"]');

    btnConsultation.disabled = true;

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^\d+]/g, '');
        });
    });
    
    nameInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^а-я\s]/gi, '');
        });
    });

    valQuestion.addEventListener('input', (e) => {
        if(e.target.value === '') {
            btnConsultation.disabled = true;
        } else {
            btnConsultation.disabled = false;
        }
    });
};

export default validateFormInputs;