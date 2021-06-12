const expandBtns = document.getElementById("expand");
const heartBtn = document.getElementById("heart");

expandBtns.addEventListener("click", expandRecipe);
heartBtn.addEventListener("click", favorite);

function expandRecipe(event) {
    let recipe = document.getElementById("recipe");
    recipe.style.height = "auto";
    document.getElementById("expand").remove();
    document.getElementById("blur").remove();
}

function favorite(event) {
    if (heartBtn.classList.contains("far")) {
        heartBtn.classList.remove("far");
        heartBtn.classList.add("fas");
        heartBtn.style.color = "red";

    } else {
        heartBtn.classList.remove("fas");
        heartBtn.classList.add("far");
        heartBtn.style.color = "black";
    }
}