// SHOW REPLIES

const showReplies = () => {
    const show_replies = document.querySelector('#show_replies');
    const replies = document.querySelector('#main_comment_replies');
    show_replies.addEventListener('click', () => {
        // replies.style.display = 'block'
        if(replies.classList[1] != 'show'){
            replies.classList.add('show');
        }
        else {
            replies.classList.remove('show');
        }
        
    })
}

showReplies();

// Create Comments

const commentSection = document.querySelector('#comment_section');
const commentButton = document.querySelector('#comment_post_btn');
const commentForm = document.querySelector('#comment_form');

const createMAinComment = (comment) => {
    //create containner
    const commentContainner = document.createElement('div');
    commentContainner.className = 'comment';  
    commentContainner.id = 'comment';
    
    //create main comment
    const mainComment = document.createElement('div');
    mainComment.className = 'main_comment'; 

    // create thumbanil
    const commenterThumbnail = document.createElement('img');
    commenterThumbnail.className = 'commenter_thumbnail';
    commenterThumbnail.setAttribute('src','/blog/img/thumbnail1.jpg'); 

    // create comment detaiils
    const commentDetails = document.createElement('div');
    commentDetails.className = 'comment_details';
    
    // create actual comment
    const actualComment = document.createElement('div');
    actualComment.className = 'actual_comment';
    actualCommentText = document.createTextNode(comment);
    const userName = document.createElement('span');
    userName.className = 'user_name';
    userNameText = document.createTextNode('Lorem, ipsum dolor');
    userName.appendChild(userNameText);

    actualComment.appendChild(userName);
    actualComment.appendChild(actualCommentText);

    // create comment interraction
    const commentInterraction = document.createElement('div');
    commentInterraction.className = 'comment_interaction';

    const btnLike = document.createElement('button');
    btnLike.className = 'like';
    btnLikeText = document.createTextNode('like')
    btnLike.appendChild(btnLikeText);


    const btnReply = document.createElement('button');
    btnReply.className = 'reply';
    btnReplyText = document.createTextNode('reply')
    btnReply.appendChild(btnReplyText);

    

    const pTime = document.createElement('p');
    pTime.className = 'time';
    pTimeText = document.createTextNode('3 min')
    pTime.appendChild(pTimeText);

    const pLikes = document.createElement('p');
    pLikes.className = 'likes';
    pLikesText = document.createTextNode('3 likes')
    pLikes.appendChild(pLikesText);
    
    
    // Create showReplies button
    const showReply = document.createElement('button');
    showReply.className = 'show_replies';
    showReply.id = 'show_replies';
    showReplyText = document.createTextNode('View Replies');
    showReply.appendChild(showReplyText);


    // APPEND ALL

    commentContainner.appendChild(mainComment);

    mainComment.appendChild(commenterThumbnail);
    mainComment.appendChild(commentDetails);

    commentDetails.appendChild(actualComment);
    commentDetails.appendChild(commentInterraction);
    commentDetails.appendChild(showReply);

    commentInterraction.appendChild(btnLike);
    commentInterraction.appendChild(btnReply);
    commentInterraction.appendChild(pTime);
    commentInterraction.appendChild(pLikes);

    commentSection.appendChild(commentContainner);
}

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    comment = e.target[0].value;
    createMAinComment(comment);
});
