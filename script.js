var istatus = document.querySelector("h5")
var add = document.querySelector("#add")
var flag = 0
add.addEventListener("click",function () {

    if( flag==0 ){
    istatus.innerHTML = "Friends"
    add.innerHTML = "UnFriend"
    istatus.style.color = "darkblue"
    flag = 1 
}
    else{
       
            istatus.innerHTML = "Stranger"
            add.innerHTML = "Add Friend"
            istatus.style.color = "red"
            flag = 0 
            

    }
    
})

