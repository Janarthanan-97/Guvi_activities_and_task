let pageContainer = document.getElementById("pageNumbers")
let currentPage;
    fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
      .then((data)=>{
        return data.json();
      })
      .then((data)=>{
        /////////////////////////title
        console.log(data);
        function title(){
        printPageNumber(1);
        printPageInfo(1);
        }
        title();
         ////////////////////////////////first
         document.getElementById("first").addEventListener("click", ()=>{
          pageNumbers.innerText="";
          title();
         })
         ///////////////////////////////////onclick previous
         document.getElementById("previous").addEventListener("click",()=>{
          if(current>1 && current<=100)
          {
            pageNumbers.innerText="";
          printPageNumber(current-1);
          printPageInfo(current-1);
          }})
    //////////////////////////on click page info
      function printPageInfo(index){//ondex=1
        let name = document.getElementById("name")
        name.innerText=data[index-1].name;
        let email = document.getElementById("email")
        email.innerText = data[index-1].email;
      
       }
        /////////////////////////onclick page number
       function printPageNumber(index){
        if(index<6)
        {
          var temp=index;
          index=6;
        }
        else if(index>95)
        {
          temp = index;
          index=95;
        }
        else
        {
          temp = index
        }
        for(let i=index-5; i<=index+5; i++)
        {
          let linkTag = document.createElement("a");
          let pageNumber= document.createElement("div");
          // pageNumber.className = "pageNumber";
          if(i!=temp)
          {
            pageNumber.className = "pageNumber";
            current=temp;
          }
          else{
            pageNumber.className = "activePage";
          }
          pageNumber.innerText=i;
          linkTag.appendChild(pageNumber);
          pageContainer.appendChild(linkTag);
         
          ///////////////////////////////linktag event listener
          linkTag.addEventListener("click", ()=>{
            pageNumbers.innerText="";
            let number = pageNumber.innerText;
            ///////////////////////////////////////////style
            linkTag.className="activePage";
              pageNumber.className="activePage"
            ////////////calling page number function
            printPageNumber(number);
            ///////////calling pageinfo function
            printPageInfo(number)
          })
        }
       }
      })