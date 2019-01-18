import data from "./data"
import poiList from "./poiList"

const poiEditForm = {
  // This module will build an edit form and append it to the DOM. The form will contain input fields with existing values from the API and an Update button. The user can edit the the values in the input fields. An event listener on the Update button will handle taking the new values entered by the user and calling the API to update the data.
  createAndAppendForm (articleId, interestObjToEdit) {

    let formHeader = document.createElement("h4")
    formHeader.textContent = "Update or review this Point of Interest"

    let poiCostField = document.createElement("p")

    let poiCostLabel = document.createElement("label")
    poiCostLabel.textContent = "Cost"
    
    let poiCostInput = document.createElement("input")
    poiCostInput.value = interestObjToEdit.cost

    poiCostField.appendChild(poiCostLabel)
    poiCostField.appendChild(poiCostInput)

    let poiReviewField = document.createElement("p")

    let poiReviewLabel = document.createElement("label")
    poiReviewLabel.textContent = "Review"

    poiReviewLabel.textContent = "Review"
    poiReviewLabel.setAttribute("for", "poi__review")
    
    let poiReviewInput = document.createElement("input")
    poiReviewInput.value = interestObjToEdit.review

    poiReviewInput.setAttribute("id", "poi__review")
    poiReviewInput.setAttribute("name", "poi__review")

    poiReviewField.appendChild(poiReviewLabel)
    poiReviewField.appendChild(poiReviewInput)

    let updateButton = document.createElement("button")
    updateButton.textContent = "Update"

    // There is an event listener on the Update button which will take the new values in the input fields and build an object for the food item to be edited. Then we make a HTTP PUT request where we target the food item we want to edit by specifying the id in the URL. We also pass the object representing the food item with the new values as data in our HTTP request. Once again, because our data has been modified, we make an HTTP GET request to get all the food items and display them.
    updateButton.addEventListener("click", () => {
      let editedPoi = {
        cost: poiCostInput.value,
        review: poiReviewInput.value
      }

      console.log(editedPoi)
      
      data.patchExistingInterest(interestObjToEdit.id, editedPoi)
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
    poiArticle.appendChild(poiCostField)
    poiArticle.appendChild(poiReviewField)
    poiArticle.appendChild(updateButton)
  }
}

export default poiEditForm