const deleteUserForm = document.querySelector('#deleteUser')
const deleteCategoryForm = document.querySelector('#deleteCategory')

if (deleteUserForm) {
    deleteUserForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const userId = deleteUserForm.querySelector("input[name='id']").value
        fetch(`/user/${userId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (res.status == 0) {
                    window.location.href = '/users'
                } else {
                    window.location.href = '/delete/user/error'
                }
            })
    })
}

if (deleteCategoryForm) {
    deleteCategoryForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const categoryName = deleteCategoryForm.querySelector("input[id='name']").value
        fetch(`/category?categoryName=${categoryName}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => {
                if (Array.isArray(res)) {
                    window.location.href = '/category'
                } else {
                    window.location.href = '/delete/category/error'
                }
            })
    })
}