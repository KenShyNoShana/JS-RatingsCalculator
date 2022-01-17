let ratings = {
    count: 0,
    sum: 0,
    average: 0
};

let rating = 0;
const mainDiv = document.getElementsByClassName("ratings");
const elements = document.querySelectorAll(".rating");
let avg = document.getElementById("average");

mainDiv[0].addEventListener("change", () => {

    if(avg.value > 0)
        {
            ratings.count = 0;
            ratings.sum = 0;
        }

    elements.forEach(element => {
        rating = parseInt(element.id.replace("star", ""));
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value) * rating;
    });

    if(ratings.count !== 0)
    {
        ratings.average = ratings.sum / ratings.count;
        avg.value = ratings.average.toFixed(2);
    }
})