document.getElementById('publish-btn').addEventListener('click', () => {
    const blogTitle = document.getElementById('blog-title').value;
    const blogContent = document.getElementById('blog-content').value;
  
    if (blogTitle && blogContent) {
      // Here, you can implement logic to save the blog to a database
      console.log('Blog published:', blogTitle);
      console.log('Content:', blogContent);
  
      // Clear input fields after publishing
      document.getElementById('blog-title').value = '';
      document.getElementById('blog-content').value = '';
    } else {
      alert('Please fill in both fields.');
    }
  });
  document.querySelector('.box h2').addEventListener('click', () => {
    const content = document.querySelector('.box p');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
  
  

  