
async function handlePost(){
    const title = $('#post-title').val();
    const body = $('#post-body').val();

    if(title && body ){
        const post = await fetch('/api/posts/', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                
            }
        })
    }
}

$('#submit-comment').click(handlePost)