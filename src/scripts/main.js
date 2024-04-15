document.addEventListener('DOMContentLoaded', function(){
    const dataBioSelectors = document.querySelectorAll('[data-bio-image]');
    const aboutContainers = document.querySelectorAll('[data-bio-text]');
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < dataBioSelectors.length; i++){
        dataBioSelectors[i].addEventListener('click', function(bioSelector){
            const openSelector = 'cast__container__tabs--is-open';
            const bioSelectorTabs = bioSelector.target.nextElementSibling;
            console.log(bioSelector.target);

            if(bioSelectorTabs.classList.contains(openSelector)){
                hideBioSelector();
                hideBioText();
                deactivateImg();

            }else{
                hideBioSelector();
                hideBioText();
                deactivateImg();

                if(bioSelector.target.dataset.bioImage === aboutContainers[i].dataset.bioText){
                    bioSelectorTabs.classList.add(openSelector);

                    aboutContainers[i].classList.add('cast__container__about--is-open');

                    bioSelector.target.classList.add('cast__container__item__image--is-active')
                }
            }
        })
    };

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(button){
            const targetButton = button.target.dataset.tabButton;

            hideAllTabs();
            removeActiveBtn();

            const targetTabId = document.querySelector(`[data-tab-id = ${targetButton}]`);

            targetTabId.classList.add('cast__container__about__item--is-active');
            
            button.target.classList.add('cast__container__tabs__button--is-active')
        })
    }


});

function deactivateImg(){
    const imageSelectors = document.querySelectorAll('[data-bio-image]');

    imageSelectors.forEach(image => image.classList.remove('cast__container__item__image--is-active'))
};

function hideBioSelector(){
    const bioSelectorTabs = document.querySelectorAll('.cast__container__tabs');

    bioSelectorTabs.forEach(tab => tab.classList.remove('cast__container__tabs--is-open'));
};

function hideBioText(){
    const bioTextContainers = document.querySelectorAll('.cast__container__about');

    bioTextContainers.forEach(container => container.classList.remove('cast__container__about--is-open'))
};

function hideAllTabs(){
    const tabsContent = document.querySelectorAll('.cast__container__about__item');

    tabsContent.forEach(tabContent => tabContent.classList.remove("cast__container__about__item--is-active" ))
};

function removeActiveBtn(){
    const buttons = document.querySelectorAll('.cast__container__tabs__button');

    buttons.forEach(button => button.classList.remove('cast__container__tabs__button--is-active'))
}