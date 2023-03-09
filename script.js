
const imgContain = document.querySelector('.container');
const addImgBtn = document.querySelector('.addBtn');

addImgBtn.addEventListener('click', function(e){
    e.preventDefault();
    let url = document.querySelector('#url').value;
    let top = document.querySelector('#top').value;
    let btm = document.querySelector('#btm').value;

    console.log(url, top, btm);
    const divImgBox = document.createElement('div');
    divImgBox.classList.add("imgBox");
    
    const imgBox = document.createElement('img');
    imgBox.classList.add("imgAdd");
    imgBox.setAttribute("src", url);

    const textDiv = document.createElement('div');
    textDiv.classList.add("textBox");

    const topBox = document.createElement('h4');
    topBox.classList.add("top-center");
    topBox.innerHTML = top;
    const midBox = document.createElement('h4');
    midBox.classList.add("centered");
    midBox.innerHTML = "X";            
    const btmBox = document.createElement('h4');
    btmBox.classList.add("bottom-center");
    btmBox.innerHTML = btm;

    divImgBox.addEventListener('click', function(e){
        e.target.parentNode.remove();
    })

    textDiv.append(topBox, midBox, btmBox);
    divImgBox.append(imgBox, textDiv);
    imgContain.append(divImgBox);
})


