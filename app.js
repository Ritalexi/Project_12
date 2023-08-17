const id = document.querySelectorAll('[data-id]')
const role = document.querySelectorAll('[data-role]')
const level = document.querySelectorAll('[data-level]')
const language = document.querySelectorAll('[data-language]')
const tools = document.querySelectorAll('[data-tools]')
const roleLevelLanguage = document.querySelectorAll('.role_level_language li');

const filters = document.querySelector('.filters');
const filterSection = document.querySelector('.filtered_section');
const clear = document.querySelector('.clear');
const closeIcon = document.querySelector('.close_icon');
/** 
for(var i = 0; i < roleLevelLanguage.length; i++){
        roleLevelLanguage[i].addEventListener('click', () => {
            filters.classList.add('active');
            console.log(roleLevelLanguage[i])
               }) 
}
*/
        
var filter = document.createElement("div");
var span = document.createElement("div");
var image = document.createElement("img");
image.src = "./images/icon-remove.svg";
role.forEach(item => {
    item.addEventListener('click', () => {
        filters.classList.add('active');
        filter.innerHTML = item.dataset.role;
        if (item.values != filter.innerHTML){
            
        }
        span.append(image);
        span.classList.add('close_icon');

        filterSection.append(filter);
       filter.append(span);
       filter.classList.add('filter')
       if (filter.style.display = "flex"){
        span.addEventListener('click', () => {
            filter.style.display = "none";
            })
       }
       else{
            filter.style.display = "flex";
              }
      
    })
})
  

       var filter2 = document.createElement("div");
        var span2 = document.createElement("div");
        var image2 = document.createElement("img");
        image2.src = "./images/icon-remove.svg";
level.forEach(item => {
    item.addEventListener('click', () => {
        
        
        filters.classList.add('active');
        filter2.innerHTML = item.dataset.level;
        span2.append(image2);
        span2.classList.add('close_icon');

        filterSection.append(filter2);
       filter2.append(span2);
       filter2.classList.add('filter')

       if (filter2.style.display = "flex"){
        span2.addEventListener('click', () => {
            filter2.style.display = "none";
            })
       }
       else{
                  filter2.style.display = "flex";
              }
    })
})
clear.addEventListener('click', () =>{
    filters.classList.remove('active');
})
