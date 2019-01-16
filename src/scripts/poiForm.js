// This module is responsbile for creating and appending the POI form to the DOM.
import data from "./data"

const poiForm = {

  // Functions are nested within the getData object

  createAndAppendForm() {

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

    let saveButton = document.createElement("button")
    saveButton.textContent = "Save Place of Interest"
    saveButton.setAttribute("class", "poi__save")

    // 2. Attach event listener to button in form
    saveButton.addEventListener("click", this.handleAddNewPoi)

    let poiFormFragment = document.createDocumentFragment()
    poiFormFragment.appendChild(formHeader)
    poiFormFragment.appendChild(poiNameField)
    poiFormFragment.appendChild(poiDescriptionField)
    poiFormFragment.appendChild(poiCostField)
    poiFormFragment.appendChild(saveButton)

    let formArticle = document.querySelector(".form")
    formArticle.appendChild(poiFormFragment)

  },

  handleAddNewPoi() {
    console.log("save button clicked");
    let inputPoiName = document.querySelector("#poi__name").value
    let inputPoiDescription = document.querySelector("#poi__description").value
    let inputPoiCost = document.querySelector("#poi__cost").value

    let newInterest =
    {
      name: inputPoiName,
      description: inputPoiDescription,
      cost: inputPoiCost
    }
    console.log(newInterest)
  }
}

export default poiForm