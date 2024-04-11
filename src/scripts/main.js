document.addEventListener('DOMContentLoaded', function(){
    const dataBioSelectors = document.querySelectorAll('[data-bio-image]');
    const aboutContainers = document.querySelectorAll('[data-bio-text]');

    for(let i = 0; i < dataBioSelectors.length; i++){
        dataBioSelectors[i].addEventListener('click', function(bioSelector){
            const openSelector = 'cast__container__tabs--is-open';
            const bioSelectorTabs = bioSelector.target.nextElementSibling;

            if(bioSelectorTabs.classList.contains(openSelector)){
                hideBioSelector();
                hideBioText();

            }else{
                hideBioSelector();
                hideBioText();

                if(bioSelector.target.dataset.bioImage === aboutContainers[i].dataset.bioText){
                    bioSelectorTabs.classList.add(openSelector);
                    aboutContainers[i].classList.add('cast__container__about--is-open')
                    ;
                }
            }

        })
    };
});

function hideBioSelector(){
    const bioSelectorTabs = document.querySelectorAll('.cast__container__tabs');

    bioSelectorTabs.forEach(tab => tab.classList.remove('cast__container__tabs--is-open'));
};

function hideBioText(){
    const bioTextContainers = document.querySelectorAll('.cast__container__about');
    bioTextContainers.forEach(container => container.classList.remove('cast__container__about--is-open'))
};
















































