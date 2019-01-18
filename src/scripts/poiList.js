import data from "./data"
import interests from "./poi"

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




export default poiList