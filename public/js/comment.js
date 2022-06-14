
async function handlePost(){
    const title = $('#post-title').val();
    const body = $('#post-body').val();

    if(title && body ){
c

        if(post.ok) {
            await window.location.reload()
        }else{
            console.log('failed')
        }
    }
}

async function handleComment(){
    const commentBody = $('#comment-field');
    const postId = $('#post-id'); //fix this
    if(commentBody){
        const post = await fetch('/api/posts/:id', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'content-type': 'application/json' }
        });
    }
}


$('#submit-comment').click(handleComment);
$('#submit-post').click(handlePost)