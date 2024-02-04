const buttons = document.querySelectorAll('.btn')
// console.log(buttons);
const body = document.querySelector('body')
console.log(body);
buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        // console.log(e.target);
        if(e.target.id ==='violet'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'indigo'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
    })
})