console.log('début du chargement');
loaded(function(){
    //console.log('page chargée');
    let dataToggle = qSAll('[data-toggle]');
    //console.log(dataToggle);
    dataToggle.forEach(toggle=>{
        toggle.addEventListener('click', function(clickToggle){
            clickToggle.preventDefault();
            console.log(toggle);
            console.log(toggle.dataset.target);
            if(toggle.dataset.toggle === 'modal'){
                qS(`#${toggle.dataset.target}`).classList.remove('hidden');
                qS(`#${toggle.dataset.target}`).classList.add('active');
            }
        });
    });

    let dataAction = qSAll('[data-action]');
    dataAction.forEach(actionButton=>{
        actionButton.addEventListener('click', function(){
            action = actionButton.dataset.action;
            console.log(action);
            switch(action){
                case 'hide':
                    actionButton.parentNode.classList.add('hidden');
                    actionButton.parentNode.classList.remove('active');
                break;
                default:
            }
        });
        console.log(actionButton.parentNode.classList);
    })

    document.addEventListener('keyup', event=>{
        console.log(event);
        if( event.key === 'Escape'){
            document.querySelectorAll('.active').forEach(function(element){
                element.classList.remove('active');
                element.classList.add('hidden');
            });
        }
    });
})