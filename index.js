function addNewF(){
    let newT=document.createElement('textarea');
    newT.classList.add('form-control');
    newT.classList.add('wef');
    newT.classList.add('mt-2');
    newT.classList.add('sabhi')
    newT.setAttribute('rows',3);
    newT.setAttribute('placeholder','Enter Here');
    let w=document.getElementById('wa');
    w.appendChild(newT);
}
function second(){
    let newT=document.createElement('textarea');
    newT.classList.add('form-control');
    newT.classList.add('wef');
    newT.classList.add('mt-2');
    newT.classList.add('qa');
    newT.setAttribute('rows',3);
    newT.setAttribute('placeholder','Enter Here');
    let quali=document.getElementById('quali');
    quali.appendChild(newT);
}

let make=document.getElementById('make');

function createCv(){
    document.querySelector('.name').innerHTML=document.getElementById('name').value;
    document.querySelector('.name1').innerHTML=document.getElementById('name').value;

    document.querySelector('.phone').innerHTML=document.getElementById('phone').value;

    document.querySelector('.pata').innerHTML=document.getElementById('pata').value;

    // document.querySelector('.face').innerHTML=document.getElementById('face').value;
    document.querySelector('.face').href=document.getElementById('face').value;

    // document.querySelector('.ins').innerHTML=document.getElementById('ins').value;
    document.querySelector('.ins').href=document.getElementById('ins').value;

    // document.querySelector('.lin').innerHTML=document.getElementById('lin').value;
    document.querySelector('.lin').href=document.getElementById('lin').value;
    
    document.querySelector('.objec').innerHTML=document.getElementById('objec').value;

    // document.querySelector('.li').innerHTML=document.querySelector('.work').value;
    // document.querySelectorAll('.li').innerHTML=document.querySelectorAll('.sabhi').value;
   
    let file=document.getElementById('file').files[0];
    let photoImg=document.getElementById('photoImg');
    
    let reader=new FileReader();

    reader.readAsDataURL(file);
    
   
    reader.onloadend=function(){
        photoImg.src=reader.result;
    }
    let d=document.querySelectorAll('.sabhi');
    let qa=document.querySelectorAll('.qa');
    Array.from(d).forEach(element=>{
        val=element.value;
        box.innerHTML+=`<li class="li">${val}</li>`;
    })
    Array.from(qa).forEach(element=>{
        va=element.value;
        boxqa.innerHTML+=`<li class="lo">${va}</li>`;
    })
    formmain.style.display="none";
    cv.style.display="flex";

    document.body.classList.remove('color-body');
}   
make.addEventListener('click',function(){
    createCv();
})

let printcv=document.getElementById('print-cv');
printcv.addEventListener('click',()=>{
    window.print();
})
