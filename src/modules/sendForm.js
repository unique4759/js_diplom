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
            statusMessage.textContent = 'Введите правильный номер (н-р, +79999999999)';
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

            if(checkForm === 'calculator_form') {
                let checkSeptic = document.getElementById('myonoffswitch').checked,
                    checkBottom = document.getElementById('myonoffswitch-two').checked,
                    meters = document.querySelector('#collapseFour input').value,
                    selects = document.querySelectorAll('#collapseTwo select'),
                    secondTitle = document.querySelectorAll('#collapseTwo .title-text')[1],
                    totalValue = document.getElementById('calc-result').value;

                body['type_septic'] = checkSeptic ? 'Однокамерный' : 'Двухкамерный';
                body['check_bottom'] = `Наличие днища: ${checkBottom ? 'Да' : 'Нет'}`;
                body['first_septic_diameter'] = +selects[0].options[selects[0].selectedIndex].value.slice(0, -6);
                body['first_septic_rings'] = +selects[1].options[selects[1].selectedIndex].value.slice(0, -6);
                if(!checkSeptic) {
                    body['second_septic_diameter'] = +selects[2].options[selects[2].selectedIndex].value.slice(0, -6);
                    body['second_septic_rings'] = +selects[3].options[selects[3].selectedIndex].value.slice(0, -6);
                }
                if(meters) {
                    body['meters'] = meters;
                }
                body['total'] = +totalValue;
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