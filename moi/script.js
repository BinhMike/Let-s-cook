const button = document.getElementById('search');
button.addEventListener('click', () => {
    const customerInput = document.getElementById('customerInput');
    const row = document.getElementById('row');

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${customerInput.value}`)
        .then(response => response.json())
        .then(data => {
            let html = " ";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                        <div class="col-md-3" style="margin-top: 20px;" data-id="${meal.idMeal}">
                        <div class=" card text-center "  style="background-color:#F8F7F5;border-radius: 2%; ">
                            <img src="${meal.strMealThumb}" data-id="${meal.idMeal}" class="card-img-top " style="width: 100%; border-top-right-radius: 2%; border-top-left-radius: 2%; ">
                            <div class="card-body " data-id="${meal.idMeal}" style="padding-top: 7px;padding-bottom: 7px; ">
                                <h3 class="card-text text-center " data-id="${meal.idMeal}" style="font-size:17px">${meal.strMeal}</h3>
                            </div>
                        </div>
                    </div>
                        `;
                });
            } else {
                html = "Didn't Find Any Food for You.";
                row.classList.add('not-found');
            }
            row.innerHTML = html;
        })
});