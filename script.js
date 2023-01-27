let userpaddel = document.querySelector('#user-padel');
let comppaddel = document.querySelector('#comp-padel');
let ball = document.querySelector('#ball');
userpaddel.style.marginLeft = '5%';
userpaddel.style.marginTop = '0px';
comppaddel.style.marginLeft = '95%'
comppaddel.style.marginTop = '0px';
ball.style.marginLeft = '531px';
ball.style.marginTop = '250px';


// movements
let w_pressed = false;
let s_pressed = false;

let ID;

document.addEventListener('keydown', (e) => {
    if (e.keyCode == '87') {
        w_pressed = true;
    }
    else if (e.keyCode == '83') {
        s_pressed = true;
    }
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode == '87') {
        w_pressed = false;
    }
    else if (e.keyCode == '83') {
        s_pressed = false;
    }
})

gameLoop();
function gameLoop() {
        ID = setInterval(() => {
            if (w_pressed == true && marginTop(userpaddel) > 0) {
                userpaddel.style.marginTop = `${marginTop(userpaddel) - 2}px`
            }
            else if (s_pressed == true && marginTop(userpaddel) < 442) {
                userpaddel.style.marginTop = `${marginTop(userpaddel) + 2}px`
            }
        }, 5);
}

function marginTop(elem) {
    return Number(elem.style.marginTop.split('p')[0]);
}
function marginLeft(elem) {
    return Number(elem.style.marginLeft.split('p')[0]);
}