document.addEventListener('DOMContentLoaded', () => {
    const blogsContainer = document.getElementById('blogs-container');
    const blogForm = document.getElementById('blog-form');

    // Función para cargar los blogs desde el almacenamiento local
    const loadBlogs = () => {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs.forEach(blog => {
            addBlog(blog.title, blog.content, blog.image);
        });
    };

    // Función para guardar los blogs en el almacenamiento local
    const saveBlogs = () => {
        const blogs = Array.from(document.querySelectorAll('.blog')).map(blog => {
            return {
                title: blog.querySelector('h2').textContent,
                content: blog.querySelector('p').textContent,
                image: blog.querySelector('img').src
            };
        });
        localStorage.setItem('blogs', JSON.stringify(blogs));
    };

    // Función para agregar un nuevo blog
    const addBlog = (title, content, image) => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog');
        blogElement.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <img src="${image}" alt="Imagen del blog">
            <button class="delete-btn">Eliminar</button>
        `;
        blogsContainer.appendChild(blogElement);
        saveBlogs();
    };

    // Evento para cargar los blogs al cargar la página
    loadBlogs();

    // Evento para manejar el envío del formulario
    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').files[0];
        
        if (title.trim() === '' || content.trim() === '' || !image) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        addBlog(title, content, URL.createObjectURL(image));
        blogForm.reset();
    });

    // Evento para eliminar un blog
    blogsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
            saveBlogs();
        }
    });

}
);
