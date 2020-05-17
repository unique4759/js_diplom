const accordion = () => {
    const accHeader = document.getElementById('accordion-two'),
        tab = accHeader.querySelectorAll('.panel-heading'),
        tabContent = accHeader.querySelectorAll('.panel-collapse');

    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++) {
            if(index === i) {
                tabContent[i].classList.add('in');
            } else {
                tabContent[i].classList.remove('in');
            }
        }
    };

    accHeader.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
            target = target.closest('.panel-heading');
            
        if(target) {
            tab.forEach((item, index) => {
                if(item === target) {
                    toggleTabContent(index);
                }
            });
        }
    });
};

export default accordion;