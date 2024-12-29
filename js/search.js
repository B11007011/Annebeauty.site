function searchPosts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const blogPosts = document.querySelectorAll('.blog-post'); // Assuming each blog post has class 'blog-post'
    const searchResults = document.getElementById('searchResults');
    
    searchResults.innerHTML = ''; // Clear previous results
    let foundResults = false;
    
    blogPosts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const content = post.querySelector('.post-content').textContent.toLowerCase();
        
        if (title.includes(searchInput) || content.includes(searchInput)) {
            // Clone the post and add it to search results
            const postClone = post.cloneNode(true);
            searchResults.appendChild(postClone);
            foundResults = true;
        }
    });
    
    if (!foundResults) {
        searchResults.innerHTML = '<p>No results found</p>';
    }
}

// Add event listener for Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchPosts();
    }
}); 