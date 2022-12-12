let btn = document.querySelector('.hero__btn')
let list = document.querySelector('.hero__list')
let listcars = document.querySelector('.hero__listcars')

let cars = [
    {
        name: "Mers",
        narxi: 45000,
        yili: 2022,
    },
    {
        name: "BWN",
        narxi: 75000,
        yili: 2015,
    }, {
        name: "Chevrolet",
        narxi: 60000,
        yili: 2016,
    },
    {
        name: "Porsche",
        narxi: 150000,
        yili: 2018,
    },

]

let result = '';

for (const i of cars) {
    result += "<li>" + i.name + "</li>"
}

list.innerHTML = result;

function func() {
    let inp = document.querySelector('.hero__inp').value;
    cars.map((item) => item.name)
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].name.toUpperCase() == inp.toUpperCase()) {
            console.log(cars[i].name);
            listcars.innerHTML = "<p>" + cars[i].name + "</p>" + "<p>" + cars[i].narxi + "</p>" + "<p>" + cars[i].yili + "</p>"
            document.querySelector('.hero__inp').value = ''
            return ''
        } else if (inp == '') {
            listcars.innerHTML = "Avtomobil nomini kiriting"
        }
        else {
            listcars.innerHTML = "Siz kiritgan avtomobil turi bizda hozircha yo'q"
        }
    }
    document.querySelector('.hero__inp').value = ''
}