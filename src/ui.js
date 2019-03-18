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
               <a href="#" class="edit card-link" data-id="${post.id}">
               <i class="fa fa-pencil"></i>
             </a>

             <a href="#" class="delete card-link" data-id="${post.id}">
               <i class="fa fa-remove"></i>
             </a>
          </div>
         </div>
         `;
      });

      this.posts.innerHTML = ouput;
   }
   showAlert(message, className) {
      this.clearAlert();

      const div = document.createElement('div');

      div.className = className;

      div.appendChild(document.createTextNode(message));

      const container = document.querySelector('.postsContainer');

      const posts = document.querySelector('#posts');

      container.insertBefore(div, posts);

      setTimeout(() => {
         this.clearAlert();
      }, 3000);
   }
   clearAlert() {
      const currentAlert = document.querySelector('.alert');

      if (currentAlert) {
         currentAlert.remove();
      }
   }
   clearFields() {
      this.titleIput.value = '';
      this.bodyIput.value = '';
   }

   fillForm(data) {
      this.titleIput.value = data.title;
      this.bodyIput.value = data.body;
      this.idIput.value = data.id;

      this.changeFormState('edit');
   }

   clearIdInput() {
      this.idIput.value = '';
   }

   changeFormState(type) {
      if (type === 'edit') {
         this.postSubmit.textContent = 'Update Post';
         //className have include all class
         this.postSubmit.className = 'post-submit btn btn-warning btn-block';

         const button = document.createElement('button');
         button.className = 'post-cancel btn btn-light btn-block';
         button.appendChild(document.createTextNode('Cancel Edit'));

         const cardForm = document.querySelector('.card-form');
         const formEnd = document.querySelector('.form-end');
         cardForm.insertBefore(button, formEnd);

      } else {
         this.postSubmit.textContent = 'Update It';
         //className have include all class
         this.postSubmit.className = 'post-submit btn btn-primary btn-block';

         if (document.querySelector('.post-cancel')) {
            document.querySelector('.post-cancel').remove();

         }
         this.clearIdInput();
         this.clearFields();
      }
   }

}

export const ui = new UI();
