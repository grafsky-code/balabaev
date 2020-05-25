let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');
let commentFIO = document.querySelector('.comment-fio');
let commentUser = document.querySelector('.user-comment');

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  let newComment = document.createElement('li');
  newComment.classList.add('user-comment');
  newComment.textContent = commentField.value;
  commentField.value = '';
  commentList.append(newComment);

  let newFIO = document.createElement('li');
  newFIO.classList.add('class-label');
  newFIO.textContent = commentFIO.value;
  commentFIO.value = '';
  commentUser.append(newFIO);
};
