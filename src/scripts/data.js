// This module is responsbile for fetch calls from the API

// Functions are nested within the Data object

const data = {
  // This method returns a fetch, which means it is returning a promise. Which means to access the response from the asynchronous HTTP GET request that is being made by this fetch, we can chain a .then at the point where this method(getAllMessages) is called. The .then then is chained to the fetch inside the method is parsing the data from JSON to data structures Javascript will understand. In this case, because we have a collection of messages, it will be an array of objects.

  getAllInterests() {
    return fetch("http://localhost:8088/interests")
    .then(response => response.json())
  },
  
  getExpandedInterests() {
    return fetch("http://localhost:8088/interests?_expand=place")
    .then(response => response.json())
    .then(test => console.log(test))
  
  },

  postNewInterest(newInterestToSave) {
    // We want to return this fetch request so that at the point it is called, we can take advantage of the asynchronous nature of promises to wait for this to be done before getting the latest data and rerendering the DOM.
    return fetch("http://localhost:8088/interests", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newInterestToSave)
    })
  },
  deleteInterest(interestId) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
        }
    })
  },
  putExistingInterest(interestId, interestToEdit) {
    return fetch(`http://localhost:8088/interests/${interestId}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(interestToEdit)
    })
  }

}

export default data;