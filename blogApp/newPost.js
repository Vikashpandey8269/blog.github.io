

const new_form=document.querySelector("#newForm");
const write_title = document.querySelector("#writeTitle");
const write_des = document.querySelector("#writeDes");

new_form.addEventListener('submit',(e) =>{
       e.preventDefault();
       
       const task = write_title.value;
       console.log(task);
       const task1 =write_des.value;
       console.log(task1);

const new_home = document.createElement('div');
new_home.classList.add('newHome');
home_page.appendChild(new_home);
/**new image 
const new_image = document.createElement('div');
new_image.classList.add('newImage');
new_home.appendChild(new_image);

const new_img = document.createElement('img');
new_img.src='https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4=';
new_image.appendChild(new_img);

end image */

      let url ="https://api.unsplash.com/search/photos?query=random&client_id=g5xvm1h2ZLCZxfT0isDtDSUGIndOjfUFZ8GVVrSeLhM&per_page=1";
       fetch(url).then(function(res){
              return res.json()
              console.log(res);
       }).then(function(data){
              console.log(data);

       })


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
      new_title.innerHTML=task.value;
      new_title.setAttribute("readonly","readonly");
    
      new_div.appendChild(new_title);

       /**discription */
       const new_dis = document.createElement('p');
       new_dis.value= write_des;
       console.log(new_dis)
      
        new_home.appendChild(new_dis);

         /** user */
      const use_name =document.createElement('div');
      use_name.innerHTML='<i class="fa-solid fa-user"></i>';
      use_name.classList.add('userName1');
      new_home.append(use_name);
    const use_h2 =document.createElement('h3');
    use_h2.innerHTML="Vikash Pandey"
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

       
})

