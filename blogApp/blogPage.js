const home_page = document.querySelector(".home");
const user_inpu = document.querySelector("#userName")




/** function for title and dis */
let url ="https://jsonplaceholder.typicode.com/posts?_limit=8";
fetch(url).then(res =>{
    return res.json();

}).then(data => {
  /* console.log(data);*/
    displayTitle(data);
})


/** using for grid tiles
 * 
 */
const blog_tile = document.createElement('div');
       blog_tile.classList.add('blogTile');
       home_page.appendChild(blog_tile);

const displayTitle = (data) => {
  const task4 =user_inpu.value;
    for(let i=0;i <4; i++){
       /**console.log([i].title); */ 
       
    
     
      

       

       const blog_page = document.createElement('div');
       blog_page.classList.add('blogPage');
       blog_tile.appendChild(blog_page);

       const blog_img =document.createElement('div');
       blog_img.classList.add('blogImage');
       blog_page.appendChild(blog_img);

       

      const image = document.createElement('img');
       image.src='https://media.istockphoto.com/id/1383963898/photo/technology-icons-transfer-data-through-programming-codes.jpg?b=1&s=170667a&w=0&k=20&c=XGN9MqaC8YZ4vvH9b4MF-FBmgiDUyA1mr1fS4u1TKpQ=';
       blog_img.appendChild(image);

       const profile_img =document.createElement('div');
       
       profile_img.classList.add('profile');
       blog_page.appendChild(profile_img);

       let image_url ="https://jsonplaceholder.typicode.com/photos?_limit=1";
fetch(image_url).then((responce) =>
     responce.json())
     .then(result =>{
/** for geting url of image by map */
        result.map((value) =>{
            let key =value.url;
           /* console.log(key); */


           const profile = document.createElement('img');
           profile.src=`https://picsum.photos/100/100?random=${key}`;
           profile_img.appendChild(profile);

          

           
        })
      
    
    
})



       
 

       /*const profile = document.createElement('img');
       profile.src="https://i.pinimg.com/originals/24/4a/70/244a70a7916bf9b411deb294af95076c.jpg";
      profile_img.appendChild(profile);*/


      /*title*/
      const title_div = document.createElement('div');
      title_div.classList.add('titleDiv');
      blog_page.appendChild(title_div);
      const blog_title = document.createElement('a');
      blog_title.innerHTML= data[i].title;
      title_div.appendChild(blog_title);

      /**discription */
      const blog_dis = document.createElement('p');
      blog_dis.innerHTML= data[i].body;

      blog_page.appendChild(blog_dis);


      /** user */
      const user_name =document.createElement('div');
      user_name.innerHTML='<i class="fa-solid fa-user"></i>';
      user_name.classList.add('userName');
      blog_page.append(user_name);
    const user_h2 =document.createElement('h3');
 
    user_h2.innerHTML = "vikash pandey";
   
    user_name.appendChild(user_h2);

    /**time */
    let time = new Date();
    let currentTime = time.toString().slice(4,21)
    const post_time =document.createElement('div');
      post_time.innerHTML='<i class="fa-solid fa-calendar-days"></i>';
      post_time.classList.add('postTime');
      blog_page.append(post_time);
    const time_h3 =document.createElement('h3');
    time_h3.innerHTML=`${currentTime}`;
    post_time.appendChild(time_h3);


      

    }
}


document.getElementsByClassName('postBtn')[0].addEventListener('click',function(){
  document.getElementsByClassName('creat')[0].style.display="block";
  document.getElementsByClassName('home')[0].style.display="none";
  document.getElementsByClassName('loginSection')[0].style.display="none";
 

})