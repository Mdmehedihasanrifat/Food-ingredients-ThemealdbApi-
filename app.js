
let show=document.getElementById('Show-food');
document.getElementById('Details').style.display="none";




let meal=0;

document.getElementById('Search').addEventListener('click',function () {
    let Food = document.getElementById('Food').value;

    console.log(Food);
if(Food==''){

console.log(Food);
    alert("Enter Proper Value");
}
else {

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + Food + '')
        .then(response => response.json())
        .then(data => displayData(data));
}

});

const displayData=data=>{
    console.log(data.meals);
    const showFood=document.getElementById('Show-food');

    meal=data["meals"];

    console.log(meal);


    meal.forEach(data=>{
        const name=data["strMeal"];
        const image=data["strMealThumb"]
        console.log(name);
        const  show=document.createElement('div');

        const showInfo=`
                <div class="row row-cols-3">

                      <div class="card m-5" onclick="displayDetail('${name}')" id="ImageClick" style="width: 18rem;">
                            <img src="${image}" class="card-img-top" alt="...">
                           <div class="card-body">
                         <h5 class="card-title">${name}</h5>

                   </div>
                   </div>
               </div>


                    `
        ;
        show.innerHTML=showInfo;
        showFood.appendChild(show);




    })





}


function displayDetail (data) {


    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + data + '';

    console.log(url);


    fetch(url)
        .then(response => response.json())
        .then(data => FoodDAta(data))

}
const FoodDAta = data => {
    document.getElementById('Details').style.display="block";
    let ul=document.getElementById('ingrade');
    let div=document.getElementById('Details');

    show.style.display='none';

    let food = data["meals"][0];

    console.log(food);
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {

        let li=document.createElement('li');
        if (food[`strIngredient${i}`]) {
            console.log(food[`strIngredient${i}`]);
            li.innerHTML=food[`strIngredient${i}`]
            ul.appendChild(li);
        //     const showDetails=`    <div class="card" style="width:50%;">
        // <img src="${food['strMealThumb']}" class="card-img-top" alt="...">
        // <div class="card-body">
        //     <h5 class="card-title">${food['strMeal']}</h5>
        //
        // </div>
        // <ul class="list-group list-group-flush">
        //     <li class="list-group-item">${food[`strIngredient${i}`]}</li>
        //
        // </ul> `;
        //     div.appendChild(showDetails);

        } else {

            break;
        }
    }
    div.appendChild(ul);



}


// const showDetails=`    <div class="card" style="width:50%;">
//         <img src="${food['strMealThumb']}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${food['strMeal']}</h5>
//
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">${food[`strIngredient${i}`]}</li>
//
//         </ul>
//      `







