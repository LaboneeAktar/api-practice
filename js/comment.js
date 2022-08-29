const loadComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data => displayComments(data.slice(0, 20)))
}

const displayComments = comments => {
    const commentContainer = document.getElementById('comment-container');
    comments.forEach(comment => {
        console.log(comment);
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <h3>Name: ${comment.name}</h3>
            <h4>Email: ${comment.email}</h4>
            <p>Comment: ${comment.body}</p>
            <button onclick="loadPosts(${comment.id})" class="btn-details">Post</button>
        `;
        commentContainer.appendChild(commentDiv);
    })
}

const loadPosts = id => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => displayPosts(data))
}

const displayPosts = post => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    const postDiv = document.createElement('div');
    postDiv.classList.add('comment');
    postDiv.innerHTML = `
        <h3>Post Id: ${post.id}</h3>
        <h4>Post Title: ${post.title}</h4>
        <p>Post: ${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
}


// loadComments();