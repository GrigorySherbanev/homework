let firstInput = document.querySelector(".first");

let secondInput = document.querySelector(".second");

let button = document.querySelector("button");

let newDiv = document.querySelector(".outdiv")

button.addEventListener("click", ()=>{

    let valueFirst = +firstInput.value;
    
    let valueSecond = +secondInput.value 
    
    if (valueFirst<100 || valueFirst>300){
        newDiv.innerHTML = '<p>число больше 300 или меньше 100<p>'
    } else{
        if(valueSecond<100 || valueSecond>300){
            newDiv.innerHTML = '<p>число больше 300 или меньше 100<p>'
        } else {
            result(`https://picsum.photos/${valueFirst}/${valueSecond}`)

            let text = `<div class="card">
                <img class="img" src = "" >
                </div>`;

            newDiv.innerHTML = text;

            let img1 = document.querySelector(".img")

            function result (url){
                fetch(url)
                    .then(Response => {
                    return Response
                })
                .then((data)=> {
                    let imgResult = data.url
                    img1.src = imgResult
                })
            }
        }
    }
    
})
