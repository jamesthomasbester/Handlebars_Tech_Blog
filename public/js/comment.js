
async function handlePost(){
    const title = $('#post-title').val();
    const body = $('#post-body').val();

    if(title && body ){
        const post = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'content-type': 'application/json' }
        });

        if(post.ok) {
            await window.location.reload()
        }else if(post.status == 400){
            $('#error').addClass('error');
            setTimeout(async () => {
                await $('#error').removeClass('error');
            }, 2000);
        }else{
            console.log('failed')
        }
    }
}

async function handleComment(e){
    console.log(e.target)
    e.preventDefault();
    const comment_body = $(`#comment-field${e.target.id}`).val();
    const postId = e.target.id 
    if(comment_body){
        const comment = await fetch(`/api/comments/${postId}`, {
            method: 'POST',
            body: JSON.stringify({ comment_body }),
            headers: { 'content-type': 'application/json' }
        });
        if(comment.ok) {
            await window.location.reload()
        }else if(comment.status == 400){
            $('.error-message').addClass('error');
            setTimeout(async () => {
                await $('.error-message').removeClass('error');
            }, 2000);
        }else{
            console.log('failed')
        }
    }
}


$('.submit-comment').click((e) => handleComment(e));
$('#submit-post').click(handlePost)