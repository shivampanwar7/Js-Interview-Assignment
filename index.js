
const usersDiv = document.getElementById("userDiv");
const userProfile = document.getElementById("userProfile");
const userBtnId = document.getElementById("userBtnId");
const profileBtnId = document.getElementById("profileBtnId");
//calling user api
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => appendUserData(data))
    .catch((error)=>  {
        console.error('Error:',error);
    });

//appending user data in html
const appendUserData = userData =>{
    if(!userData){
        alert('User details not found.');
    }else{
        let userDataDiv='';
        userData.data.map(user=>{
            userDataDiv += `<tr onclick='userProfileEvent(${user.id})'><td><img src="${user.avatar}" /></td><td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td></tr>`
        });
        usersDiv.innerHTML=`<table class="table"><thead class="thead-light"><tr>
        <th>Profile</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
     </tr></thead><tbody>${userDataDiv}</tbody></table>`;
    }


}   

//fetching user profile
function userProfileEvent(id){
   fetch('https://reqres.in/api/users/'+id)
    .then(response=>response.json())
    .then(data=>appendUserProfile(data))
    .catch((error)=>  {
        console.error('Error:',error);
    });
}

//appending user profile
const appendUserProfile = userProfileData=>{
    if(!userProfileData){
        alert('User profile details not found.');
    }else{
    usersDiv.style.display = "none";
    userBtnId.className =""
    profileBtnId.className += 'active';
    let userProfileDiv = '';
    userProfileDiv += `<tr><td><img src="${userProfileData['data'].avatar}" /></td><td>${userProfileData['data'].first_name}</td><td>${userProfileData['data'].last_name}</td><td>${userProfileData['data'].email}</td></tr>`;
    userProfile.innerHTML=`<table class="table"><thead class="thead-light"><tr>
    <th>Profile</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Email</th>
 </tr></thead><tbody>${userProfileDiv}</tbody></table>`;
}
}

//on click event fired after recheck user data
userBtnId.addEventListener('click',(event)=>{
    event.target.className += 'active';
    usersDiv.style.display = "block";
    profileBtnId.className = "";
    userProfile.innerHTML = "";
})