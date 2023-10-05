fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
.then((data)=> data.json())
.then((foodItems)=>{
    /////////creating name list for food
    let foodNameArray = []
    for(var i=0; i<foodItems.meals.length; i++)
  {
    foodNameArray.push(foodItems.meals[i].strMeal)
    displayCard(i)
  }
  ///////to creat auto suggestion
  let searchBox = document.getElementById("foodSearch")
  //search suggestions
  searchBox.onkeyup = function onKeyUp()
  {

    let searchText = document.getElementById("foodSearch").value;
     let unorderList = document.getElementById("foodList");
     unorderList.innerHTML="";
     var i=0;
     
     var cardHolder = document.getElementById("cardHolder")
     cardHolder.innerHTML="";
    for(ele of foodNameArray)
    {
        if(ele.toLowerCase().includes(searchText.toLowerCase()) && searchText != "")
        {
          console.log(i);
            if(i<5)
            {
              console.log(ele); 
            let list = document.createElement("li");
            list.innerHTML = ele;
            unorderList.appendChild(list);

            ////clicking suggestions to autocomplete
            list.onclick = function searchComplete() {
                searchBox.value = `${list.innerHTML}`
                unorderList.innerHTML = "";
                cardHolder.innerHTML="";
                
            ///for displaying cards
                for(j=0; j<foodNameArray.length; j++)
                {
                    if(foodItems.meals[j].strMeal == list.innerHTML)
                    {
                        displayCard(j);
                    }
                }
              }
            i++
            }
            
            displayCard(i)
        }
        else if(searchText == "")
        {
          document.getElementById("cardHolder").innerHTML="";
          for(i=0; i<foodItems.meals.length; i++)
          {
            displayCard(i);
          }
        }
    }
  }

  /////////////function to creat cards
  function displayCard(index){
    var cardHolder = document.getElementById("cardHolder");
        let card = document.createElement("div");
        card.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${foodItems.meals[index].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${foodItems.meals[index].strMeal}</h5>
          <a href="${foodItems.meals[index].strYoutube}" class="btn btn-primary">Watch video</a>
        </div>
      </div>`;
      cardHolder.appendChild(card);
    }
})