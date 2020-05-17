const moreBtn = () => {
    const btn = document.querySelector('.add-sentence-btn'),
        sentences = document.querySelectorAll('.sentence .row > div');

    btn.addEventListener('click', (e) => {
        sentences.forEach((item) => {
            if(item.classList.length > 3) {
                for(let i = 3; i < item.classList.length; i++) {
                    item.classList.remove(item.classList[i]);
                }
            }
        });

        e.target.classList.add('hidden');
    });
};

export default moreBtn;