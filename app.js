const baseURL = "http://localhost:3000"
const modelsURL = "/models"

const $modelSection = document.querySelector('#model-display')

fetch(`${baseURL}${modelsURL}`)
    .then(response => response.json())
    .then(models => {
        models.forEach(model => {
            console.log(model)
            modelName(model)
            displayModel(model)
            displayAuthor(model)

        })
    })

function modelName(model){
    const $modelCard = document.createElement('div')
    
    $modelCard.classList.add(`model${model.id}`)
    $modelCard.textContent = model.name
    
    $modelSection.append($modelCard)
    
}

function displayModel(model) {
    const modelCard = document.querySelector(`.model${model.id}`)
    const $modelViewer = document.createElement('model-viewer')
    
    $modelViewer.src = model.gltf
    $modelViewer.alt= model.name
    $modelViewer.setAttribute('camera-controls', 'true')
    $modelViewer.setAttribute('auto-rotate', 'true')
    $modelViewer.setAttribute('ar', 'true')
    $modelViewer.setAttribute('ios-src', model.usdz)
    
    modelCard.append($modelViewer)
}

function displayAuthor(model){
    const modelCard = document.querySelector(`.model${model.id}`)
    const $modelAuthor = document.createElement('p')
    
    $modelAuthor.textContent = model.author 
    
    modelCard.append($modelAuthor)
}