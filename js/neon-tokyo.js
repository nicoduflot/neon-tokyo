console.log('début du chargement');
loaded(function(){
    //console.log('page chargée');
    let dataToggle = qSAll('[data-toggle]');
    //console.log(dataToggle);
    dataToggle.forEach(toggle=>{
        toggle.addEventListener('click', function(clickToggle){
            clickToggle.preventDefault();
            //console.log(toggle);
            //console.log(toggle.dataset.target);
            switch(toggle.dataset.toggle){
                case 'modal':
                    qS(`#${toggle.dataset.target}`).classList.remove('hidden');
                    qS(`#${toggle.dataset.target}`).classList.add('active');
                    break;
                case 'bounty':
                    qS(`#${toggle.dataset.target}`).classList.toggle('opacity-0');
                    qS(`#${toggle.dataset.target}`).classList.toggle('display-none');
                    qS(`#${toggle.dataset.target}`).classList.toggle('bounty');
                break;
            }
            
            
        });
    });

    let dataAction = qSAll('[data-action]');
    dataAction.forEach(actionButton=>{
        actionButton.addEventListener('click', function(){
            action = actionButton.dataset.action;
            switch(action){
                case 'hide':
                    actionButton.parentNode.classList.add('hidden');
                    actionButton.parentNode.classList.remove('active');
                break;
                case 'call':
                    let target = actionButton.dataset.target;
                    console.log(target);
                    qS('#search-call').classList.remove('search-call');
                    setTimeout(function(){
                        qS('#call-target').innerHTML = `Calling ${target}...`;
                        qS('#call-sign').classList.add('bi', 'bi-telephone-fill', 'clignotant');
                        qS('#search-call').classList.add('search-call');
                        qS('#call-sign').classList.remove('opacity-0');
                        qS('#call-number').innerHTML = actionButton.dataset.callnumber;
                    }, 1);
                break;
                default:
                    qS(`#${action}`).classList.toggle(action);
            }
        });
        console.log(actionButton.parentNode.classList);
    })

    document.addEventListener('keyup', event=>{
        //console.log(event);
        if( event.key === 'Escape'){
            document.querySelectorAll('.active').forEach(function(element){
                element.classList.remove('active');
                element.classList.add('hidden');
            });
        }
    });
})