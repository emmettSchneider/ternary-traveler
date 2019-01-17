import data from "./data"

const poiList = {
  outputPoi(){
    data.getExpandedInterests()
    .then(allInterests => {
      let poiDocFragment = document.createDocumentFragment()

      allInterests.forEach(interest => {
        let poiHtml = interests.poiBuilder(interest, interest.id)
        poiDocFragment.appendChild(poiHtml)
      })

      let outputArticle = document.querySelector(".output")

      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(poiDocFragment)

    });
  }
}

const interests = {

  poiBuilder(interest) {
    
  let interestArticle = document.createElement("article")
  interestArticle.setAttribute("id", `interest--${interest.id}`)

  let poiName = document.createElement("h5")
  poiName.textContent = interest.poiName

  let poiDescription = document.createElement("p")
  poiDescription.textContent = interest.description

  let poiCost = document.createElement("p")
  poiCost.textContent = interest.cost

  let poiPlace = document.createElement("p")
  poiPlace.textContent = interest.name

  // Edit functionality

  let editPoiButton = document.createElement("button")
  editPoiButton.textContent = "Edit Place of Interest"
  editPoiButton.addEventListener("click", () => {
    let articleId = event.target.parentNode.id
    let interestId = articleId.split("--")[1]
    data.getExpandedInterests(interestId)
    .then(response => {
      poiEditForm.createAndAppendForm(articleId, response)
    })
  })

    let deletePoiButton = document.createElement("button")
    deletePoiButton.textContent = "Delete"
    deletePoiButton.addEventListener("click", () => {
      let poiId = event.target.parentNode.id.split("--")[1]
      data.deletePoi(poiId)
      .then(response => {
        poiList.outputPoi()
      })
    })

  interestArticle.appendChild(poiName)
  interestArticle.appendChild(poiDescription)
  interestArticle.appendChild(poiCost)
  interestArticle.appendChild(poiCost)
  interestArticle.appendChild(deletePoiButton)
  interestArticle.appendChild(editPoiButton)

  return interestArticle

  }
}

const poiEditForm = {
  // This module will build an edit form and append it to the DOM. The form will contain input fields with existing values from the API and an Update button. The user can edit the the values in the input fields. An event listener on the Update button will handle taking the new values entered by the user and calling the API to update the data.
  createAndAppendForm (articleId, InterestObjToEdit) {

    let formHeader = document.createElement("h4")
    formHeader.textContent = "Add a Point of Interest"

    let poiNameField = document.createElement("fieldset")

    let poiNameLabel = document.createElement("label")
    poiNameLabel.textContent = "Name"
    poiNameLabel.setAttribute("for", "poi__name")
    
    let poiNameInput = document.createElement("input")
    poiNameInput.setAttribute("id", "poi__name")
    poiNameInput.setAttribute("name", "poi__name")

    poiNameField.appendChild(poiNameLabel)
    poiNameField.appendChild(poiNameInput)


    let poiDescriptionField = document.createElement("fieldset")

    let poiDescriptionLabel = document.createElement("label")
    poiDescriptionLabel.textContent = "Description"
    poiDescriptionLabel.setAttribute("for", "poi__description")

    let poiDescriptionInput = document.createElement("input")
    poiDescriptionInput.setAttribute("id", "poi__description")
    poiDescriptionInput.setAttribute("name", "poi__description")

    poiDescriptionField.appendChild(poiDescriptionLabel)
    poiDescriptionField.appendChild(poiDescriptionInput)


    let poiCostField = document.createElement("fieldset")

    let poiCostLabel = document.createElement("label")
    poiCostLabel.textContent = "Cost"
    poiCostLabel.setAttribute("for", "poi__cost")
    
    let poiCostInput = document.createElement("input")
    poiCostInput.setAttribute("id", "poi__cost")
    poiCostInput.setAttribute("name", "poi__cost")

    poiCostField.appendChild(poiCostLabel)
    poiCostField.appendChild(poiCostInput)

    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"

    // There is an event listener on the Update button which will take the new values in the input fields and build an object for the food item to be edited. Then we make a HTTP PUT request where we target the food item we want to edit by specifying the id in the URL. We also pass the object representing the food item with the new values as data in our HTTP request. Once again, because our data has been modified, we make an HTTP GET request to get all the food items and display them.
    updateButton.addEventListener("click", () => {
      let editedPoi = {
        name: poiNameInput,
        description: poiDescriptionInput,
        cost: poiCostInput, 
        placeId: 1
      }
      
      data.postNewInterest(InterestObjToEdit.id, editedPoi)
      .then(response => {
        poiList.outputPoi()
      })
    })

    // We passed in the id of the article so we know exactly where to append the edit form.
    let poiArticle = document.querySelector(`#${articleId}`)

    // Because we want to replace what is currently in the article element with the edit form, we clear out all children HTML elements in our targeted element before appending our edit form to it.
    while (poiArticle.firstChild) {
      poiArticle.removeChild(poiArticle.firstChild);
    }
    poiArticle.appendChild(poiNameField)
    poiArticle.appendChild(poiDescriptionField)
    poiArticle.appendChild(poiCostField)
    poiArticle.appendChild(updateButton)
  }
}

export default poiList