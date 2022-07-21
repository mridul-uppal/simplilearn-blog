// Mock API call to get dummy blog data
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map((posts, index) => {
      // Condition to limit the number of blogs to 10
      if (index < 10) {
        console.log(posts);
        addBlogToScreen(posts.title, posts.body);
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  });

// Method to add new blog on the screen
function newBlogItem() {
  let blogTitle = document.forms["newBlog"]["newBlogTitle"].value;
  let blogBody = document.forms["newBlog"]["newBlogBody"].value;
  addBlogToScreen(blogTitle, blogBody);
  document.forms["newBlog"]["newBlogTitle"].value = "";
  document.forms["newBlog"]["newBlogBody"].value = "";
}

// Method to place the dic containing the blog on the screen
function addBlogToScreen(blogTitle, blogBody) {
  let title = document.createElement("h4"); // Post title
  let body = document.createElement("p"); // Post body

  title.appendChild(document.createTextNode(blogTitle));
  body.appendChild(document.createTextNode(blogBody));

  var outerDiv = document.createElement("div");
  outerDiv.className = "card text-dark bg-light mb-3 mt-3 border-secondary";
  document.getElementById("blog-posts").prepend(outerDiv);

  var innerDiv = document.createElement("div");
  innerDiv.className = "card-body";

  innerDiv.appendChild(title);
  innerDiv.appendChild(body);

  outerDiv.appendChild(innerDiv);
}
