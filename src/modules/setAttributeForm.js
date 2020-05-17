const setAttributeForm = () => {
    let forms = document.querySelectorAll('.popup');

    forms.forEach((item) => {
        let pathClass = item.classList[0].split('-')[1],
            formAttr = item.querySelector('.capture-form');

        formAttr.setAttribute('name', `${pathClass}_form`);
    });
};

export default setAttributeForm;