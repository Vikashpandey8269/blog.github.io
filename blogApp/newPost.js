
  const new_form=document.querySelector("#newForm");
const write_title = document.querySelector("#writeTitle");
const write_des = document.querySelector("#writeDes");
const user_input = document.querySelector("#userName")


new_form.addEventListener('submit',(e) =>{
       e.preventDefault();
       
       const task = write_title.value;
       console.log(task);
       const task1 =write_des.value;
       console.log(task1);
       const task3 =user_input.value;

       

const new_home = document.createElement('div');
new_home.classList.add('newHome');
home_page.appendChild(new_home);

const new_image = document.createElement('div');
new_image.classList.add('newImage');
new_home.appendChild(new_image);
/** function for random images */
let image_url ="https://jsonplaceholder.typicode.com/photos?_limit=1";
fetch(image_url).then((responce) =>
     responce.json())
     .then(result =>{
/** for geting url of image by map */
        result.map((value) =>{
            let key =value.url;
           /* console.log(key); */


           const new_img = document.createElement('img');
           new_img.src=`https://picsum.photos/400/400?random=${key}`;
           new_image.appendChild(new_img);

          

           
        })
      
    
    
})
/*const new_img = document.createElement('img');
new_image.appendChild(new_img);*/


const newprofile_img =document.createElement('div');
       
       newprofile_img.classList.add('newProfile');
       new_home.appendChild(newprofile_img);
       const new_profile = document.createElement('img');
       new_profile.src="https://i.pinimg.com/originals/24/4a/70/244a70a7916bf9b411deb294af95076c.jpg";
      newprofile_img.appendChild(new_profile);

      const new_div = document.createElement('div');
      new_div.classList.add('newDiv');
      new_home.appendChild(new_div);
      const new_title = document.createElement('a');
      new_title.innerText=task;
      
    
      new_div.appendChild(new_title);

       /**discription */
       const new_dis = document.createElement('p');
       console.log(new_dis);
       new_dis.innerText= task1;
       
       
      
        new_home.appendChild(new_dis);

         /** user */
      const use_name =document.createElement('div');
      use_name.innerHTML='<i class="fa-solid fa-user"></i>';
      use_name.classList.add('userName1');
      new_home.append(use_name);
    const use_h2 =document.createElement('h3');
    use_h2.innerText=task3;
    console.log(task3);
    use_name.appendChild(use_h2);

    /**time */
    let Time = new Date();
    let CurrentTime = Time.toString().slice(4,21);
    const pos_time =document.createElement('div');
      pos_time.innerHTML='<i class="fa-solid fa-calendar-days"></i>';
      pos_time.classList.add('postTime1');
      new_home.append(pos_time);
    const tim_h3 =document.createElement('h3');
    tim_h3.innerHTML=`${CurrentTime}`;
    pos_time.appendChild(tim_h3);

    
    new_form.addEventListener('click',function(){
      document.getElementsByClassName('creat')[0].style.display="none";
      document.getElementsByClassName('home')[0].style.display="block";
      document.getElementsByClassName('loginSection')[0].style.display="none";
     
  
  })
       
})





