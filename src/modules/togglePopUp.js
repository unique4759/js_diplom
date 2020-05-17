const togglePopUp = () => {
    document.addEventListener('click', (e) => {
        let target = e.target;
        
        if(!target.matches('.call-btn, .discount-btn, .check-btn, .consultation-btn')) {
            return;
        }

        e.preventDefault();

        let pathClassName = target.classList[0].split('-')[0],
            popup = document.querySelector(`.popup-${pathClassName}`),
            popupContent = popup.querySelector('.popup-content'),
            getForm = popup.querySelector('.capture-form'),
            inputs = popup.querySelectorAll('input');

        inputs.forEach((item) => {
            let checkReq = item.getAttribute('required');

            if(!checkReq) {
                item.required = true;
            }
        });

        if(document.documentElement.clientWidth > 768) {
            popupContent.style.opacity = 0;
            popupContent.style.transition = "1s";

            setTimeout(function () {
                popupContent.style.opacity = 1;
            }, 500);

            popup.style.display = 'block';
        } else {
            popup.style.display = 'block';
        }

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('popup-close')) {
                popup.style.display = 'none';

                if(document.documentElement.clientWidth > 768) {
                    popupContent.style.opacity = 0;
                }

                inputs.forEach((item) => {
                    item.removeAttribute("required");
                });
            } else {
                target = target.closest('.popup-content');

                if(!target) {
                    popup.style.display = 'none';

                    if(document.documentElement.clientWidth > 768) {
                        popupContent.style.opacity = 0;
                    }

                    inputs.forEach((item) => {
                        item.removeAttribute("required");
                    });
                }
            }
        });
    });
};

export default togglePopUp;