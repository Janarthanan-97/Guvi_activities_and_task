
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
.then((data)=> data.json())
.then((foodItems)=>{

    let foodNameArray = []
    for(var i=0; i<foodItems.meals.length; i++)
  {
    foodNameArray.push(foodItems.meals[i].strMeal)
    displayCard(i)
  }
//   console.log(foodNameArray);
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
            if(i<5)
            {
              let list = document.createElement("li");
            list.innerHTML = ele;
            unorderList.appendChild(list)
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
        i++
    }

  }
  
    // //food name
    // let foodName = document.getElementsByClassName("card-title")[0];
    // foodName.innerHTML = foodItems.meals[0].strMeal
    
    // //image
    // let foodImage = document.getElementsByClassName("card-img-top")[0];
    // foodImage.setAttribute("src", foodItems.meals[0].strMealThumb);

    // //text
    // let foodText = document.getElementsByClassName("card-text")[0];
    // foodText.innerHTML = foodItems.meals[0].strInstructions;

    // //video
    // let foodVideo = document.getElementsByClassName("btn btn-primary")[0];
    // foodVideo.setAttribute("href", foodItems.meals[0].strYoutube);
    // console.log(foodImage.attributes[0]);
    // console.log(foodItems.meals[0].strInstructions);
   
    

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

      card.onclick = function (){
        document.getElementById("displayContainer").style.display ="block";
      
        
        ///name
        let name = document.getElementById("foodName")
        name.innerHTML=foodItems.meals[index].strMeal
        
        //ingerdients
        let ingerdientsList=document.getElementById("ingredientsList");
        
          let ingredientsList=[];
          let objectToArray =Object.entries(foodItems.meals[index]);
          for(ele of objectToArray)
          {
            if(ele[0].includes("strIngredient") && ele[1] !="") 
            {ingredientsList.push(ele[1])}
          }
          let ingredientsMeasurementList=[]
          for(ele of objectToArray)
          {
            if(ele[0].includes("strMeasure") && ele[1] !="") 
            {ingredientsMeasurementList.push(ele[1])}
          }
      

          // ingerdientsList and instruction;
          for(i=0; i<ingredientsList.length; i++)
          {
            let ingList = document.createElement("li");
            ingList.innerHTML=`${ingredientsList[i]}: ${ingredientsMeasurementList[i]}`
            ingerdientsList.appendChild(ingList);
          }
          let instruction = document.getElementById("instruction");
          instruction.innerHTML = foodItems.meals[index].strInstructions; 
    }

    ///on click close
    document.getElementById("closeSpan").onclick = function close()
    {
      document.getElementById("displayContainer").style.display ="none";
    }
    }
})