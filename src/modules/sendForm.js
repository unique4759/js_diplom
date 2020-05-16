const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
        form = document.querySelector('.main-form'),
        form2 = document.querySelector('.capture-form'),
        statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 14px; color: #333;';
    
    const proccessForm = (data) => {
        let inputPhone = data.querySelector('.phone-user').value;

        data.appendChild(statusMessage);

        statusMessage.textContent = loadMessage;

        if(!/^(\+7)[0-9]{10}$/g.test(inputPhone)) {
            statusMessage.style.cssText = 'color: red;';
            statusMessage.textContent = 'Проверьте правильность ввода телефона';
        } else {
            const formData = new FormData(data);

            postData(formData).then(res => {
                if(res.status !== 200) {
                    throw new Error('status not 200!');
                }
                statusMessage.textContent = successMessage;

                data.reset();

                setTimeout(function() {
                    statusMessage.remove();
                }, 3000);
            }).catch(err => {
                statusMessage.textContent = errorMessage;
                data.reset();
                console.log(err);
            });
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        proccessForm(form);
    });

    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        proccessForm(form2);
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            body: body
        });
    };
};

export default sendForm;