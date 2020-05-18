const accordion = () => {
    document.addEventListener('click', (e) => {
        let target = e.target;
            
        if(!target.closest('.panel-group')) {
            return;
        }

        if(target.tagName === "A") {
            e.preventDefault();
        }

        let accHeader = '';
        if(target.closest('#accordion')) {
            accHeader = document.getElementById('accordion');
        } else {
            accHeader = document.getElementById('accordion-two');
        }

        const tab = accHeader.querySelectorAll('.panel-heading'),
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