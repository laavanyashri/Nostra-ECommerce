//declaration

let selectedCollection = [];
/* collections*/
var navbarsearch = document.getElementById("searchcontainer");
var searchalldiv = navbarsearch.querySelectorAll("div");
var serachtextbox = document.getElementById("searchtext");
var collectionitems =document.querySelectorAll('.images')
//setup click event handlers on our checkboxes
var checkBoxes = document.querySelectorAll(".collecton_filter  input")

serachtextbox.addEventListener("keyup", function ()//oneneteing key
{
    var enteredvalue = this.value.toUpperCase(); //change it to uppper case to avoid case sensitive
    for (count = 0; count < searchalldiv.length; count++) {
        var collectionname = searchalldiv[count].querySelector("h3").textContent;
        console.log(collectionname.toUpperCase().indexOf(enteredvalue));

        if (collectionname.toUpperCase().indexOf(enteredvalue) < 0) {
            searchalldiv[count].style.display = "none";
        }
        else {
            searchalldiv[count].style.display = "block";
        }
    }
})


//checbox event
//https://codepen.io/Mudriy_K/pen/JRwyyY

// for (var i = 0; i < checkBoxes.length; i++) {
//     checkBoxes[i].addEventListener("onchange", filterFunc, false);
//    // checkBoxes[i].addEventListener("click", filterItems, false);

//     // checkBoxes[i].checked = true;
// }
// function filterItems(e) {
//     var clickedItem = e.target;
//     if (clickedItem.checked == true) {
//         var selectedvalue = clickedItem.value.toUpperCase();

//         selectedCollection.push(selectedvalue);

//     // console.log("the serachdiv ",searchalldiv);
//         for (count = 0; count < searchalldiv.length; count++) {
//             var collectionname = searchalldiv[count].querySelector("h3").textContent;
//            // console.log(collectionname.toUpperCase().indexOf(selectedvalue));

//             for (i = 0; i < selectedCollection.length; i++) {

//                 console.log("the colection name index",collectionname.toUpperCase().indexOf(selectedCollection[i]));

//                 if (collectionname.toUpperCase().indexOf(selectedCollection[i]) < 0)
//                 {

//                     searchalldiv[count].style.display = "none";
//                 }
//                 else {
//                     console.log("the filter items",selectedCollection[i]);

//                     searchalldiv[count].style.display = "block";
//                 }
//             }
//         }
//     }

//     // else{
//     //     console.log("uncheck");
//     //     var selectedvalue =clickedItem.value.toUpperCase();
//     //     for (count = 0; count < searchalldiv.length; count++) 
//     //         {

//     //         }
//     // }
// }


var filterCheckboxes = document.querySelectorAll("input[type='checkbox']");


//new function 


//function to filteritems
function filterItems()
{

    //object declaration
    const selectedfilters={
        occasion:[],
        color:[],
        aarival:[]
    }

    //filter checkbox checked
    filterCheckboxes.forEach(checkbox=>{
        if(checkbox.checked)
        {
            selectedfilters[checkbox.getAttribute("name")].push(checkbox.value)
        }
    })


    //loop all imag div item with filtered checkbox 
    collectionitems.forEach(items=>
    {
        let isMatch=true;
        for(let category in selectedfilters)
        {
            const selectedValues=selectedfilters[category];
            const itemValue=items.getAttribute(`data-${category}`);

            if(selectedValues.length>0 && !selectedValues.includes(itemValue))
            {
                isMatch=false;
                break;
            }
        }
        items.style.display = isMatch ? 'block' : 'none';

    });


}

// Attach event listeners to checkboxes
filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', filterItems);
});

console.log("the aod");
filterItems(); //initial load function call
