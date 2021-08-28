document.getElementById('add-border').addEventListener('click', function () {
    console.log('click')
    const addBorder = document.getElementById('friends');
    // for (const friend of friends) {
    //     friends.style.border = "1px solid red"
    // }
    addBorder.style.border = '1px solid red';
});
function addBgc() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "red";
    }

};
document.getElementById('add-friend').addEventListener('onmouseover', function () {
    const addFriend = document.getElementsByClassName('friends');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
                    <h2>New friend-1</h2>
                    <p>lorem10</p>
    `
    addFriend.appendChild(friendDiv);
})