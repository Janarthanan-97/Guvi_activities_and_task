let firstName, lastName, gender, address, country, state, pinCode, food, countryData;
let arr = []

function onSubmit() {
    arr[0] = document.getElementById('firstNameInput').value;
    document.getElementById('firstNameInput').value = ""
    arr[1] = document.getElementById("lastNameInput").value;
    document.getElementById("lastNameInput").value=""
    gender = document.getElementsByName("gender");
    for(let ele of gender)
    {
        if(ele.checked) arr[2] = ele.value;
        ele.checked=false;
    }
    arr[3] = document.getElementById("addressLineInput").value;
    document.getElementById("addressLineInput").value=""
    arr[4] = document.getElementById("countrySelect").value;
    document.getElementById("countrySelect").innerHTML="<option>--select country--</option>";
    countryName();
    arr[5] = document.getElementById("stateSelect").value;
    document.getElementById("stateSelect").innerHTML = "<option>--select state--</option>";
    getSelectedValue();
    arr[6] = document.getElementById("pinInput").value;
    document.getElementById("pinInput").value=""
    food = document.getElementsByName("foodType");
    let i=0
    arr[7]=[]
    for(ele of food)
    {   
        if(ele.checked) 
        {
        arr[7][i] = ele.value;
        ele.checked = false;
        i++;
        }
    }
    if(arr[7].length<2)
    {
        alert("Enter atleast 2 food")
    }
    else{
        let table = document.getElementById("displayTable")
        let tableRow = document.createElement("tr");
        for(ele of arr)
        {
        let tableCell = document.createElement("td");
        if(ele ==arr[7])
        {
            let items = ele.join(", ")
            tableCell.innerHTML = items;
        tableRow.appendChild(tableCell);
        }
        else{
            tableCell.innerHTML = ele;
            tableRow.appendChild(tableCell);
        }
        }
        table.appendChild(tableRow);
        console.log(table);
        event.preventDefault();
        
    }
   

    

}
fetch("https://countriesnow.space/api/v0.1/countries/states")
    .then((data) => {
        return data.json();
    })
    .then(data => {
        countryData = data;
        // console.log(countryData.data[0].name);
        // console.log(countryData.data[0].states[0].name);
        countryName();
    })

function countryName() {
    let countrySelect = document.getElementById("countrySelect");
    for (country of countryData.data) {
        let countryOption = document.createElement("option");
        countryOption.innerText = country.name;
        countryOption.value = country.iso3;
        countrySelect.appendChild(countryOption);
    }
}

function getSelectedValue() {
    var selectedValue = document.getElementById("countrySelect").value;
    for(country of countryData.data)
    {
        if(selectedValue==country.iso3)
        {
        let stateSelect = document.getElementById("stateSelect");
        stateSelect.innerHTML= "";
        for(state of country.states)
        {   
            let stateOption = document.createElement("option");
            stateOption.innerText = state.name;
            stateSelect.appendChild(stateOption);
        }
        }
    }
    }
