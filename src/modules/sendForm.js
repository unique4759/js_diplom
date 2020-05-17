const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
        form = document.querySelector('.main-form'),
        form2 = document.querySelectorAll('.capture-form'),
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
            let checkForm = data.getAttribute('name');

            statusMessage.style.cssText = 'color: #333;';
            const formData = new FormData(data);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            if(checkForm === 'consultation_form') {
                let question = document.querySelector('input[name="user_quest"]').value;
                body['user_question'] = question;
            }

            postData(body).then(res => {
                let question = document.querySelector('input[name="user_quest"]'),
                    btnConsultation = document.querySelector('.consultation-btn');
                    
                if(res.status !== 200) {
                    throw new Error('status not 200!');
                }
                statusMessage.textContent = successMessage;

                data.reset();

                if(question.value !== '') {
                    question.value = '';
                    btnConsultation.disabled = true;
                }

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

    form2.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            proccessForm(item);
        });
    });
    

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;