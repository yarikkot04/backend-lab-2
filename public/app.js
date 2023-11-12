const deleteUserForm = document.querySelector('#deleteUser')

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