const home_page = document.querySelector(".home");

let image_url ="https://jsonplaceholder.typicode.com/photos?_limit=10";
fetch(image_url).then((responce) =>
     responce.json())
     .then(result =>{
/** for geting url of image by map */
        result.map((value) =>{
            let key =value.url;
           /* console.log(key); */
           
          

           
        })
      
    
    
})

/** function for title and dis */
let url ="https://jsonplaceholder.typicode.com/posts?_limit=10";
fetch(url).then(res =>{
    return res.json();

}).then(data => {
  /* console.log(data);*/
    displayTitle(data);
})


const displayTitle = (data) => {
    for(let i=0;i <10; i++){
       /**console.log(data[i].title); */ 
     
