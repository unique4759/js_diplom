const validateFormInputs = () => {
    const phoneInputs = document.querySelectorAll('.phone-user'),
        nameInputs = document.querySelectorAll('input[name="user_name"]');

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
};

export default validateFormInputs;