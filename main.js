
//1.
function strikeOut() {
    let strikeThru = document.querySelector('li');//only grabs 1 item at a time, the first one it finds..first li in your HTML.
    //let strikeThru = document.querySelector('#arguments li') //selectrs the first <li> from the #arguments list
    strikeThru.style.textDecoration = "line-through"

}

//2.
strikeOut();



//3.
/*
function setImage(id,url)
id: "string"
url: "string"
*/
function setImage(id, url) {
    let img = document.querySelector(`#${id} `);
    img.src = url;
    img.style.height = "200px";
}

//4.
setImage("image-1", "https://f4.bcbits.com/img/0028786320_10.jpg");
setImage("image-2", "https://f4.bcbits.com/img/0028788547_10.jpg");
setImage("image-3", "https://f4.bcbits.com/img/0029057602_10.jpg");

//5.
function remover() {
    let li = document.querySelector('#arguments li')
    li.remove();
}
//6.
remover();
remover();


/*
function
2 parameters
fontSize: string
id: string
*/

//7.
function setTextSize(fontSize, id) {
    let text = document.querySelector(id);
    text.style.fontSize = fontSize;
}

setTextSize(`${Math.floor(Math.random() * 100)}px`
    , '#heading');
setTextSize('50px', '#thing-1');


//part 2


function addChild(element) {
    let list = document.querySelector('#arguments');
    list.appendChild(element); //list is NOW arguments UL element
}
let newElement = document.createElement('li');
newElement.innerText = "whoa, its a list item"
addChild(newElement)
//2.
let newImg = document.createElement('img')
newImg.src =('https://f4.bcbits.com/img/0028836400_20.jpg')
addChild(newImg)

//3.
function imgSize(img){
img.style.height = "30px"
}
//4.
imgSize(newImg);

//5.
function invis(sneak){
 sneak.className = 'invisible';
}
//6.
let ghost= document.querySelector('h1')
invis(ghost);

//part 3

//1.
function textCreator(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}

let testItem = textCreator("Hi globe");
addChild(testItem)


function createHeader(hSize, text){
    // let header = document.createElement(`'h'+Size}`); //same thing with concatination
    let header = document.createElement(`h${hSize}`);
    header.innerText = text;
return header;
    // let one = "h1";
    // let two = "h2";
    // let three = "h3";
    // let four = "h4";
    // let five = "h5";
    // let six = "h6";

    // if(hSize ==='1'){
    //     let header = document.createElement("h1");
    // }
}

let headerTest = createHeader('2', 'some text');
addChild(headerTest);



