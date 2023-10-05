var word;
let search = document.getElementById("search");
let icon = document.getElementById("magGlass");
icon.onclick = searchWord;
    search.addEventListener("keypress", ()=>{if(event.key=="Enter")searchWord()})
    function searchWord()
{
    word=search.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
.then((data)=> data.json())
.then((data)=>{
    let displayDefContainer = document.getElementById("displayBody");
    displayDefContainer.innerHTML="";
    if(data.length != undefined)
    {
    for(i=0; i<data.length; i++)
    {
        for(j=0; j<data[i].meanings.length; j++)
        {
            let heading1 = document.createElement("h3")
            heading1.innerHTML=data[i].meanings[j].partOfSpeech;
            displayDefContainer.appendChild(heading1);
            
            for(k=0; k<data[i].meanings[j].definitions.length; k++)
            {
                let definition = document.createElement("div")
                definition.innerHTML = data[i].meanings[j].definitions[k].definition;
                displayDefContainer.appendChild(definition);
            }
        }        
    }
    }
})
}

