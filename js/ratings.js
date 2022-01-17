let test = {
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
            test.count = 0;
            test.sum = 0;
        }

    elements.forEach(element => {
        rating = parseInt(element.id.replace("star", ""));
        test.count += parseInt(element.value);
        test.sum += parseInt(element.value) * rating;
    });

    if(test.count !== 0)
    {
        test.average = test.sum / test.count;
        avg.value = test.average.toFixed(2);
    }
})
