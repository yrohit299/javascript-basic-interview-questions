
function throttle(func, limit) {
    let isThrottle;
    return function (){
        const args = arguments;
        const ctx = this;
        
        if(!isThrottle){
            func.apply(ctx, args)
            isThrottle = true
            setTimeout(() => {
               isThrottle = false
            }, limit);
        }
    }
}

const shoot = () => {
    console.log('Shoot');
}

const shootApi = throttle(shoot, 500)


document.getElementById('shootBtn').addEventListener('click', () => {
    shootApi()
})