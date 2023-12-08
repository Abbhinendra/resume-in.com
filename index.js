function addNewF() {
    let newT = document.createElement('textarea');
    newT.classList.add('form-control');
    newT.classList.add('wef');
    newT.classList.add('mt-2');
    newT.classList.add('sabhi')
    newT.setAttribute('rows', 3);
    newT.setAttribute('placeholder', 'Enter Here');
    let w = document.getElementById('wa');
    w.appendChild(newT);
}
function second() {
    let newT = document.createElement('textarea');
    newT.classList.add('form-control');
    newT.classList.add('wef');
    newT.classList.add('mt-2');
    newT.classList.add('qa');
    newT.setAttribute('rows', 3);
    newT.setAttribute('placeholder', 'Enter Here');
    let quali = document.getElementById('quali');
    quali.appendChild(newT);
}

function third() {
    let div = document.createElement("div");
    div.classList.add("mt-2");
    let label = document.createElement("label");
    label.classList.add("mt-4");
    label.innerHTML = "Project description";
    let textarea = document.createElement("textarea");
    textarea.classList.add("form-control");
    textarea.classList.add("tx");
    // textarea.classList.add("mt-2")
    textarea.setAttribute("placeholder", "Enter Here");
    textarea.setAttribute("rows", 3);

    let label1 = document.createElement("label");
    label1.classList.add("mt-4");
    label1.innerHTML = "Project Link";
    let input = document.createElement("input");
    input.classList.add("form-control");
    input.classList.add("in");
    // input.classList.add("mx-2");
    input.setAttribute("placeholder", "Enter Here");

    div.appendChild(label);
    div.appendChild(textarea);
    div.appendChild(label1);
    div.appendChild(input);

    pro.appendChild(div);
}

let nameF1 = document.querySelector('.name');
let phone = document.querySelector('.phone');
let pata = document.querySelector('.pata');
let face = document.querySelector('.face');
let ins = document.querySelector('.ins');
let lin = document.querySelector('.lin');
let name1 = document.querySelector('.name1');
let tive = document.querySelector('#tive');
let objec = document.querySelector('.objec');
let ence = document.querySelector('#ence');
let tion = document.querySelector('#tion');
let box_tion = document.querySelector('#box-tion');
let box_ence = document.querySelector('#box-ence');
let catdetails = document.querySelector('.cat-details');

let nameR = document.getElementById('name');
let phoneR = document.getElementById("phone");
let pataR = document.getElementById("pata");
let faceR = document.getElementById("face");
let insR = document.getElementById('ins');
let linR = document.getElementById('lin');
let objecR = document.getElementById('objec');


let make = document.getElementById('make');

function createCv() {
    if (nameR.value.trim() == "" || nameR.value.trim().length <= 1) {

        nameF1.style.display = "none";
        name1.style.display = "none";
    }
    else {
        document.querySelector('.name').innerHTML = document.getElementById('name').value;
        document.querySelector('.name1').innerHTML = document.getElementById('name').value;
    }
    if (phoneR.value.trim() == " " || phoneR.value.trim().length <= 9 || phoneR.value.trim().length > 10) {
        phone.style.display = "none";

    }
    else {
        document.querySelector('.phone').innerHTML = document.getElementById('phone').value;
    }
    if (pataR.value.trim() == "" || pataR.value.trim().length <= 2) {
        pata.style.display = "none";
    }
    else {
        document.querySelector('.pata').innerHTML = document.getElementById('pata').value;
    }
    // document.querySelector('.face').innerHTML=document.getElementById('face').value;
    if (faceR.value.trim() == "") {
        face.style.display = "none";
    }
    else {
        document.querySelector('.face').href = document.getElementById('face').value;
    }
    // document.querySelector('.ins').innerHTML=document.getElementById('ins').value;
    if (insR.value.trim() == "") {
        ins.style.display = "none";
    }
    else {
        document.querySelector('.ins').href = document.getElementById('ins').value;
    }
    // document.querySelector('.lin').innerHTML=document.getElementById('lin').value;
    if (linR.value.trim() == "") {
        lin.style.display = "none";

    }
    else {
        document.querySelector('.lin').href = document.getElementById('lin').value;
    }

    let twit = document.querySelector(".twit");
    let you = document.querySelector(".you");
    let git = document.querySelector(".git");
    let port = document.querySelector(".port");

    if (twitter.value.trim() == "") {
        twit.style.display = "none";
    }
    else {
        twit.href = twitter.value;
    }

    if (Youtube.value.trim() == "") {
        you.style.display = "none";
    }
    else {
        you.href = Youtube.value;
    }

    if (GitHub.value.trim() == "") {
        git.style.display = "none";
    }
    else {
        git.href = GitHub.value;
    }

    if (Portfolio.value.trim() == "") {
        port.style.display = "none";
    }
    else {
        port.href = Portfolio.value;
    }

    if (objecR.value.trim() == "") {
        objec.style.display = "none";
        tive.style.display = "none";

    }
    else {
        document.querySelector('.objec').innerHTML = document.getElementById('objec').value;
    }

    let ab = document.querySelector('.ab');
    let none = document.getElementById("none");
    if (ab.value.trim() == "") {
        none.style.display = "none";
    }
    else {
        catdetails.innerHTML = ab.value;
    }

    let projectname = document.querySelector(".projectname");
    let tx = document.querySelector(".tx");
    let input = document.querySelector(".in")
    let noned = document.getElementById("noned");

    let projectname1 = document.querySelector(".projectname1");
    let tx1 = document.querySelector(".tx1");
    let input1 = document.querySelector(".in1")

    let projectname2 = document.querySelector(".projectname2");
    let tx2 = document.querySelector(".tx2");
    let input2 = document.querySelector(".in2")

    let projectname3 = document.querySelector(".projectname3");
    let tx3 = document.querySelector(".tx3");
    let input3 = document.querySelector(".in3")


    let promax = document.querySelector("#promax");


    if (projectname.value.trim() == "" || tx.value.trim() == "" || input.value.trim() == "") {
        noned.style.display = "none";
    }
    else {
        noned.innerHTML += `
        <div id="promax" class="mt-4">
        <div class="Cate">
        <h4>${projectname.value}</h4>
    </div>
    <div id="prod">
        <div class="cat">
        ${tx.value}
            <a href="${input.value}" class="link">Live Demo</a>
        </div>
    </div>
    </div>
        `;
    }

    if (projectname1.value.trim() == "" || tx1.value.trim() == "" || input1.value.trim() == "") {
        promax.style.display = "none";
    }
    else {
        noned.innerHTML += `
        <div id="promax" class="mt-4">
        <div class="Cate">
        <h4>${projectname1.value}</h4>
    </div>
    <div id="prod">
        <div class="cat">
        ${tx1.value}
            <a href="${input1.value}" class="link">Live Demo</a>
        </div>
    </div>
    </div>
        `;
    }


    if (projectname2.value.trim() == "" || tx2.value.trim() == "" || input2.value.trim() == "") {
        promax.style.display = "none";
    }
    else {
        noned.innerHTML += `
           <div id="promax" class="mt-4">
           <div class="Cate">
           <h4>${projectname2.value}</h4>
       </div>
       <div id="prod">
           <div class="cat">
           ${tx2.value}
               <a href="${input2.value}" class="link">Live Demo</a>
           </div>
       </div>
       </div>
           `;
    }


    if (projectname3.value.trim() == "" || tx3.value.trim() == "" || input3.value.trim() == "") {
        promax.style.display = "none";
    }
    else {
        noned.innerHTML += `
           <div id="promax" class="mt-4">
           <div class="Cate">
           <h4>${projectname3.value}</h4>
       </div>
       <div id="prod">
           <div class="cat">
           ${tx3.value}
               <a href="${input3.value}" class="link">Live Demo</a>
           </div>
       </div>
       </div>
           `;
    }

    let about = document.getElementById("About");
    let aboutnone = document.getElementById("aboutnone");
    if (about.value.trim() == "") {
        aboutnone.style.display = "none";
    }
    else {
        aboutnone.innerHTML += `
    <div class="aboutme">
        ${about.value}
    </div>`;
    }

    function certi() {


        if (certificateImage.files[0] == null || certificateDescription.value.trim() == "") {
            certificate.style.display = "none";
        }
        else {
            let file = certificateImage.files[0];
            let url = URL.createObjectURL(file);
            certificate.innerHTML = ` 
        <div class="certi-title">
                    <h2>Experience Certificate</h2>
                </div>
    <div class="box">
        <img src="${url}" alt="" id="certi">
    </div>
    <div id="certi-d">
    <h2>
        Certificate Description
    </h2>
</div>
    <div class="certi-desc">
${certificateDescription.value}
    </div>`;

        }

    }

    certi();
    // document.querySelector('.li').innerHTML=document.querySelector('.work').value;
    // document.querySelectorAll('.li').innerHTML=document.querySelectorAll('.sabhi').value;

    let file = document.getElementById('file').files[0];
    let photoImg = document.getElementById('photoImg');

    let reader = new FileReader();

    reader.readAsDataURL(file);


    reader.onloadend = function () {
        photoImg.src = reader.result;
    }

    let d = document.querySelectorAll('.sabhi');
    let qa = document.querySelectorAll('.qa');



    Array.from(d).forEach(element => {
        if (element.value.trim() == "") {
            //  box_ence.style.display="none";
            //  ence.style.display="none";
            element.style.display = "none";
        }
        else {
            val = element.value;
            box.innerHTML += `<li class="li">${val}</li>`;
        }
    })
    Array.from(qa).forEach(element => {
        if (element.value.trim() == "") {
            //    box_tion.style.display="none";
            //    tion.style.display="none";
            element.style.display = "none";
        }
        else {
            va = element.value;
            boxqa.innerHTML += `<li class="lo">${va}</li>`;
        }
    })







    formmain.style.display = "none";
    cv.style.display = "flex";

    document.body.classList.remove('color-body');
}
make.addEventListener('click', function () {
    createCv();
    cv.style.display = "flex";
})

let printcv = document.getElementById('print-cv');
printcv.addEventListener('click', () => {
    window.print();

})


let leftCv = document.querySelector("#cv .left");
let aboutme = document.querySelector(".aboutme");
let green = document.getElementById("green");
let certiTitle = document.querySelector(".certi-title");
let certiD = document.getElementById("certi-d");

green.addEventListener("click", () => {
    leftCv.style.background = "#172D13";
    leftCv.style.color = "white";
    tive.style.background = "#172D13";
    tive.style.color = "white";
    ence.style.background = "#172D13";
    ence.style.color = "white";
    tion.style.background = "#172D13";
    tion.style.color = "white";
    name1.style.background = "#172D13";
    name1.style.color = "white";
    skill.style.background = "#172D13";
    skill.style.color = "white";
    project.style.background = "#172D13";
    project.style.color = "white";
    shrikant.style.background = "#172D13";
    shrikant.style.color = "white";





})

purple.addEventListener("click", () => {
    leftCv.style.background = "#490B3D";
    leftCv.style.color = "white";
    tive.style.background = "#490B3D";
    tive.style.color = "white";
    ence.style.background = "#490B3D";
    ence.style.color = "white";
    tion.style.background = "#490B3D";
    tion.style.color = "white";
    name1.style.background = "#490B3D";
    name1.style.color = "white";
    skill.style.background = "#490B3D";
    skill.style.color = "white";
    project.style.background = "#490B3D";
    project.style.color = "white";
    shrikant.style.background = "#490B3D";
    shrikant.style.color = "white";


})

cl3.addEventListener("click", () => {
    leftCv.style.background = "#161F6D";
    leftCv.style.color = "white";
    tive.style.background = "#161F6D";
    tive.style.color = "white";
    ence.style.background = "#161F6D";
    ence.style.color = "white";
    tion.style.background = "#161F6D";
    tion.style.color = "white";
    name1.style.background = "#161F6D";
    name1.style.color = "white";
    skill.style.background = "#161F6D";
    skill.style.color = "white";
    project.style.background = "#161F6D";
    project.style.color = "white";
    shrikant.style.background = "#161F6D";
    shrikant.style.color = "white";


})

cl4.addEventListener('click', () => {
    leftCv.style.background = "#1D2228";
    leftCv.style.color = "white";
    tive.style.background = "#1D2228";
    tive.style.color = "white";
    ence.style.background = "#1D2228";
    ence.style.color = "white";
    tion.style.background = "#1D2228";
    tion.style.color = "white";
    name1.style.background = "#1D2228";
    name1.style.color = "white";
    skill.style.background = "#1D2228";
    skill.style.color = "white";
    project.style.background = "#1D2228";
    project.style.color = "white";
    shrikant.style.background = "#1D2228";
    shrikant.style.color = "white";



})

cl5.addEventListener("click", () => {
    leftCv.style.background = "aqua";
    leftCv.style.color = "white";
    tive.style.background = "aqua";
    tive.style.color = "white";
    ence.style.background = "aqua";
    ence.style.color = "white";
    tion.style.background = "aqua";
    tion.style.color = "white";
    name1.style.background = "aqua";
    name1.style.color = "white";
    skill.style.background = "aqua";
    skill.style.color = "white";
    project.style.background = "aqua";
    project.style.color = "white";
    shrikant.style.background = "aqua";
    shrikant.style.color = "white";


})

cl6.addEventListener("click",()=>{
    leftCv.style.background = "#4A5FC1";
    leftCv.style.color = "white";
    tive.style.background = "#4A5FC1";
    tive.style.color = "white";
    ence.style.background = "#4A5FC1";
    ence.style.color = "white";
    tion.style.background = "#4A5FC1";
    tion.style.color = "white";
    name1.style.background = "#4A5FC1";
    name1.style.color = "white";
    skill.style.background = "#4A5FC1";
    skill.style.color = "white";
    project.style.background = "#4A5FC1";
    project.style.color = "white";
    shrikant.style.background = "#4A5FC1";
    shrikant.style.color = "white";

})

cl7.addEventListener("click",()=>{
    leftCv.style.background = "#00458B";
    leftCv.style.color = "white";
    tive.style.background = "#00458B";
    tive.style.color = "white";
    ence.style.background = "#00458B";
    ence.style.color = "white";
    tion.style.background = "#00458B";
    tion.style.color = "white";
    name1.style.background = "#00458B";
    name1.style.color = "white";
    skill.style.background = "#00458B";
    skill.style.color = "white";
    project.style.background = "#00458B";
    project.style.color = "white";
    shrikant.style.background = "#00458B";
    shrikant.style.color = "white";
})

cl8.addEventListener("click",()=>{
    leftCv.style.background = "#E6E2DD";
    leftCv.style.color = "black";
    tive.style.background = "#E6E2DD";
    tive.style.color = "black";
    ence.style.background = "#E6E2DD";
    ence.style.color = "black";
    tion.style.background = "#E6E2DD";
    tion.style.color = "black";
    name1.style.background = "#E6E2DD";
    name1.style.color = "black";
    skill.style.background = "#E6E2DD"
    skill.style.color = "black";
    project.style.background = "#E6E2DD";
    project.style.color = "black";
    shrikant.style.background = "#E6E2DD";
    shrikant.style.color = "black";
})

cl9.addEventListener("click",()=>{
    leftCv.style.background = "#051622";
    leftCv.style.color = "white";
    tive.style.background = "#051622";
    tive.style.color = "white";
    ence.style.background = "#051622";
    ence.style.color = "white";
    tion.style.background = "#051622";
    tion.style.color = "white";
    name1.style.background = "#051622";
    name1.style.color = "white";
    skill.style.background = "#051622";
    skill.style.color = "white";
    project.style.background = "#051622";
    project.style.color = "white";
    shrikant.style.background = "#051622";
    shrikant.style.color = "white";
})
cl10.addEventListener("click",function(){
    leftCv.style.background = "#E40C2B";
    leftCv.style.color = "white";
    tive.style.background = "#E40C2B";
    tive.style.color = "white";
    ence.style.background = "#E40C2B";
    ence.style.color = "white";
    tion.style.background = "#E40C2B";
    tion.style.color = "white";
    name1.style.background = "#E40C2B";
    name1.style.color = "white";
    skill.style.background = "#E40C2B";
    skill.style.color = "white";
    project.style.background = "#E40C2B";
    project.style.color = "white";
    shrikant.style.background = "#E40C2B";
    shrikant.style.color = "white";
})
cl11.addEventListener("click",()=>{
    leftCv.style.background = "#9E15BF";
    leftCv.style.color = "white";
    tive.style.background = "#9E15BF";
    tive.style.color = "white";
    ence.style.background = "#9E15BF";
    ence.style.color = "white";
    tion.style.background = "#9E15BF";
    tion.style.color = "white";
    name1.style.background = "#9E15BF";
    name1.style.color = "white";
    skill.style.background = "#9E15BF";
    skill.style.color = "white";
    project.style.background = "#9E15BF";
    project.style.color = "white";
    shrikant.style.background = "#9E15BF";
    shrikant.style.color = "white";
})

cl12.addEventListener("click",()=>{
    leftCv.style.background = "#5626C4";
    leftCv.style.color = "white";
    tive.style.background = "#5626C4";
    tive.style.color = "white";
    ence.style.background = "#5626C4";
    ence.style.color = "white";
    tion.style.background = "#5626C4";
    tion.style.color = "white";
    name1.style.background = "#5626C4";
    name1.style.color = "white";
    skill.style.background = "#5626C4";
    skill.style.color = "white";
    project.style.background = "#5626C4";
    project.style.color = "white";
    shrikant.style.background = "#5626C4";
    shrikant.style.color = "white";
})

let rightImg = document.getElementById("right-img");
let templateStyles = document.getElementById("template-styles");
chose.addEventListener("click", () => chngeImg.click());
chngeImg.addEventListener("change", () => {
    let file = chngeImg.files[0];
    let url1 = URL.createObjectURL(file);
    rightImg.style.backgroundImage = `url(${url1})`;
    document.querySelector(".objec").style.color = "darkblue";
    box.style.color = "darkblue";
    boxqa.style.color = "darkblue";
    document.querySelector(".cat-details").style.color = "darkblue";
    aboutnone.style.color = "darkblue";
    noned.style.color = "darkblue";
    document.querySelector(".change-resume-img").style.color = "darkblue";
    document.querySelector(".change-color").style.color = "darkblue";
    templateStyles.style.color = "darkblue";
    certificate.style.color = "darkblue";

})

let cv1 = document.querySelector("#cv .left");
let cv2 = document.querySelector("#cv .right");

function design() {
    cv.style.display = "flex";
    cv.style.justifyContent = "center";
    cv.style.alignItems = "center";
    cv.style.flexDirection = "column";
    cv1.style.width = "100%";
    cv2.style.width = "100%";
    cv1.style.paddingBottom = "16px";

}

hori.addEventListener("click", design);
