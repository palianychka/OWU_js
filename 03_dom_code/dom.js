let greenDiv = document.getElementById('divka');

greenDiv.style.backgroundColor = 'green';
greenDiv.innerText = 'balduin';

let boldText = document.getElementsByClassName('boldText');
boldText[0].style.color = 'silver';

for (let i = 0; i < boldText.length; i++) {
    boldText[i].style.fontSize = '25px';
    boldText[i].innerText = `year 202${i}`;

}

let allDivs =  document.getElementsByTagName('div');

let green = Math.random() * 255;
let red = Math.random() * 255;
let blue = Math.random() * 255;


allDivs[1].style.backgroundColor = `rgb(${green}, ${red}, ${blue})`;
allDivs[1].style.width = '200px';
allDivs[1].style.height = '200px';
allDivs[1].style.margin = '20px';

let smallDiv = document.createElement('div');
smallDiv.style.width = '50px';
smallDiv.style.height = '50px';
smallDiv.style.padding = '20px';
smallDiv.style.backgroundColor = 'pink';
// greenDiv.appendChild(smallDiv);
document.body.appendChild(smallDiv);
smallDiv.classList.add('border');

let allP = document.getElementsByTagName('p');
for (let i = 0; i < allP.length; i++) {
    const singleP = allP[i];

    if (i % 2 === 0) {
        singleP.classList.add('peshka');
    }
}

let students = [
    {name: 'vasia', age: 22},
    {name: 'pietia', age: 34},
    {name: 'olia', age: 15},
    {name: 'karina', age: 23},
    {name: 'ruslan', age: 26},
    {name: 'pasha', age: 20}
]

for (let i = 0; i < students.length; i++) {
    const studentDiv = document.createElement('div');
    studentDiv.style.backgroundColor = 'yellow';
    studentDiv.style.margin = '25px';
    studentDiv.innerHTML = `
        hello my dear friend, my name is ${students[i].name}, <br/>
        and a am ${students[i].age}
    `
    document.body.appendChild(studentDiv)
}

let objectUser = {
    name: 'Ivan',
    age: 33,
    wife: undefined,
    son: `Dima`,
}

let jsonUser = JSON.stringify(objectUser);
console.log(jsonUser);

let jsonAnotherUser = JSON.parse(jsonUser);
console.log(jsonAnotherUser);
