
document.body.addEventListener('click', function(e){
    const x = 'clientX';
    const y = 'clientY';

    if(e.x%2==0 && e.y%2==0){
    document.body.style.backgroundColor = 'red'
    }
    else if (e.x%2==1 && e.y%2==1){
        document.body.style.backgroundColor = 'blue'
    }
    else {
        document.body.style.backgroundColor = 'green'
    }
    console.log(e.clientX, e.clientY)
}) 
