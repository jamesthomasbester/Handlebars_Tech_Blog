
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
            console.log('success')
        }else{
            console.log('failed')
        }
    }
}

$('#submit-comment').click(handlePost)