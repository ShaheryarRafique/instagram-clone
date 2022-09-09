const posts = [
    {
        id: 0,
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        id: 1,
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        id: 2,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    {
        id: 3,
        name: "Shaheryar Rafique",
        username: "sherry123",
        location: "Lahore, Pakistan",
        avatar: "images/sherry.png",
        post: "images/sherry-1.png",
        comment: "Awesome Pic. Looking Great Bro💕!",
        likes: 10000
    }
]

const mainEl = document.getElementById("main-el");

render();

const postOne = document.getElementById("post-el-0")
const postTwo = document.getElementById("post-el-1")
const postThree = document.getElementById("post-el-2")
const postFour = document.getElementById("post-el-3")

postOne.addEventListener("click", function() {changeIcon(0)});
postTwo.addEventListener("click", function() {changeIcon(1)});
postThree.addEventListener("click", function() {changeIcon(2)});
postFour.addEventListener("click", function() {changeIcon(3)});

function changeIcon(id) {
   const loveEl = document.getElementById(`love-icon-${id}`);
   const likeEl = document.getElementById(`like-el-${id}`);
   posts[id].likes++;
   likeEl.textContent = `${posts[id].likes} likes`;
   loveEl.src = "images/love.png";
}

function render() {
    let postHtml = "";
    for(let i = 0; i < posts.length; i++) {
        postHtml += `
        <section class="container inverse">
                <div class="user-info">
                    <img class="avatar" src="${posts[i].avatar}" alt="avatar of ${posts[i].name}" />
                    <div class="info">
                        <h1>${posts[i].name}</h1>
                        <h2>${posts[i].location}</h2>
                    </div>
                </div>
                <img id="post-el-${i}" class="post" src="${posts[i].post}" alt="post of ${posts[i].name}">
                <div class="post-info">
                    <img id="love-icon-${i}" class="icon-size" src="images/icon-heart.png" alt="heart icon" />
                    <img class="icon-size" src="images/icon-comment.png" alt="comment icon" />
                    <img class="icon-size" src="images/icon-dm.png" alt="comment icon" />
                    <h3 id="like-el-${i}">${posts[i].likes} likes</h3>
                    <p><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
                </div>
            </section>
        `
    }
    
    mainEl.innerHTML = postHtml;
}
