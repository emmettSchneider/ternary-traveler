import data from "./data"
import poiEditForm from "./poiEditForm"
import poiList from "./poiList"

const interests = {

  poiBuilder(interest) {
    
  let interestArticle = document.createElement("article")
  interestArticle.setAttribute("id", `interest--${interest.id}`)


  let poiName = document.createElement("h2")
  poiName.textContent = interest.name

  let poiDescriptionHeader = document.createElement("h3")
  poiDescriptionHeader.textContent = "Description"

  let poiDescription = document.createElement("p")
  poiDescription.textContent = interest.description

  let poiCostHeader = document.createElement("h3")
  poiCostHeader.textContent = "Cost"

  let poiCost = document.createElement("p")
  poiCost.textContent = interest.cost

  let poiReviewHeader = document.createElement("h3")
  poiReviewHeader.textContent = "Review"

  let poiReview = document.createElement("p")
  poiReview.textContent = interest.review

  let poiPlaceHeader = document.createElement("h3")
  poiPlaceHeader.textContent = "Place"

  let poiPlace = document.createElement("p")
  poiPlace.textContent = interest.name

  // Edit functionality

  let editPoiButton = document.createElement("button")
  editPoiButton.textContent = "Edit"
  editPoiButton.addEventListener("click", () => {
    let articleId = event.target.parentNode.id
    let interestId = articleId.split("--")[1]
    data.getAllInterests(interestId)
    .then(response => {
      poiEditForm.createAndAppendForm(articleId, response)
    })
  })

  let deletePoiButton = document.createElement("button")
  deletePoiButton.textContent = "Delete"
  deletePoiButton.addEventListener("click", () => {
    let poiId = event.target.parentNode.id.split("--")[1]
    data.deleteInterest(poiId)
      .then(response => {
        poiList.outputPoi()
      })
  })

  interestArticle.appendChild(poiName)
  interestArticle.appendChild(poiDescriptionHeader)
  interestArticle.appendChild(poiDescription)
  interestArticle.appendChild(poiCostHeader)
  interestArticle.appendChild(poiCost)
  interestArticle.appendChild(poiReviewHeader)
  interestArticle.appendChild(poiReview)
  interestArticle.appendChild(editPoiButton)
  interestArticle.appendChild(deletePoiButton)

  return interestArticle

  }
}

export default interests