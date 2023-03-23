const form = document.getElementById('contact-list')

const nameArray = []
const phoneArray = []

let newLine = ''

form.addEventListener('submit', (event) => {
    event.preventDefault()

    addContact()
    updateList()
})


function addContact() {

    const inputContactName = document.getElementById('contactName')
    const inputContactPhone = document.getElementById('contactNumber')

    // verificando se existe dois contatos com o mesmo nome
    if (phoneArray.includes(nameArray.value)) {

        alert(`O contato ${nameArray.value} já foi registrado`)
    } else  {

        // guardando as informçoes de nome e telefone recebidas dentro do array
        nameArray.push(inputContactName.value)
        phoneArray.push(inputContactPhone.value)
        
        // adicionando o contato na tabelo e criando uma linha nova junto a isso
        let line = '<tr>'
        line += `<td>${inputContactName.value}</td>`
        line += `<td>${inputContactPhone.value}</td>`
        line += '</tr>'
        
        // criando nova linha
        newLine += line 

        const tableBody = document.querySelector('tbody')
        tableBody.innerHtml = newLine
    }

    // limpando campos
    inputContactName.value = ''
    inputContactPhone.value = ''
}

function updateList() {

    const tableBody = document.querySelector('tbody')
    tableBody.innerHtml = newLine
}