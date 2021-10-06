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