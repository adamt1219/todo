const form = document.getElementById('form')
let input = document.getElementById('input')
const submitBtn = document.getElementById('submit-btn')
let taskContainer = document.getElementById('task-container')


function newListItem(){
    let newItem = document.createElement('p')
    if(input.value === ''){
        window.alert('you have to add a task first')
    } else {
        newItem.textContent = input.value
        taskContainer.append(newItem)
    }
    input.value = ''
    
    const removeBtn = document.createElement('button')
        removeBtn.textContent = 'Remove'
        removeBtn.setAttribute("id","remove")
            removeBtn.addEventListener('click',()=>{
                newItem.parentElement.removeChild(newItem)
        })
    newItem.appendChild(removeBtn)
}


submitBtn.addEventListener('click',()=>{
    newListItem()
})


form.addEventListener('submit',(e)=>{
    e.preventDefault()
})