class UI {
   constructor() {
      this.posts = document.querySelector('#posts');
      this.titleIput = document.querySelector('#title');
      this.bodyIput = document.querySelector('#body');
      this.idIput = document.querySelector('#id');
      this.postSubmit = document.querySelector('.post-submit');
      this.forState = 'add';

   }
   showPosts(posts) {

      let ouput = "";

      posts.forEach(post => {
         ouput += `
         <div class="card mb-3">
         <div class="card-body">
         <h4 class="card-title">${post.title}</h4>
         <p class="card-text">${post.body}</p>
         <a href="#" class="edit card-link" data-id"${post.id}">
         <i class="fa fa-pencil"></i>
         </a>
         <a href="#" class="delete card-link" data-id"${post.id}">
         <i class="fa fa-remove"></i>
         </a>
         </div>
         </div>
         `; 
      });

      this.posts.innerHTML = ouput;
   }
}

export const ui = new UI();
