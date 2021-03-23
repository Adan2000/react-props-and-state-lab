import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onAdoptPet = (id) => {
    const pets = [...this.sate.pets]
    this.setState({pets: pets.map(pet => pet.id !== id ? pet : {...pet, isAdopted: true})})
  }
  //the function gets in the id from the button on the app Component
  //we need to CHANGE ONLY that id 
  //so we use the spread operator for we can deconstruct it and only change that id, 
  //once we deconstruct it we set that to a pet constant/
  //we say this.setState, we return a new object where we only replace the pets part of the object
  //we take pets constant and map over it 
  //look at each pet, we look and see if the id of the pet equal or not equal 
  //to the id of the pet that just got passed in.
  //we use a turnery here.
  //it basically says if the pet id does not match just put in the same pet, nothing is changed
  //then we use : as a (else)(if it does match) we deconstruct the pet using the spread operator to only change
  //the isAdopted, and then set that to true, using the setState.


  onChangeType = (type) => {
    this.setState({
      filter: { type } 
    })
  }
  //in our Filter Component we passed back to this component function 
  //in the value of the event
  //we take it in as 'type' (we can call it whatever)
  //we then use the setState method to pass in the event.value as
  //the filter: type. Now our filter state has the type of animal that was selected 
  //stored in as a state.
  //{ type } is the same as { type: type}
  //since the filter in state is by itself, we dont need a spread operator 
  //to not overwrite.


  onFindPetsClick = () => {
    let endpoint 
    if (this.state.filters.type === 'all') {
      endpoint = '/api/pets'
    } else {
      endpoint = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(endpoint)
    .then(res => res.json())
    .then(pets => this.setState({ pets }))
  }
  //we conditionally set the endpoint (let endpoint)
  //we then do a condition, if the state filter type, is equal to all 
  //then our end point will be the '/api/pets', this is where we will fetch too
  // otherwise if state filter type DOES NOT equal all
  //then our end point will have the (dog, cat, or whatever else is selected)
  //and then pass that into the fetch as an id, and will then fetch just that 
  //specific id type, which is (cats or dog option) instead of all of the pets
  //debating on which one comes true, it will then do a fetch to the endpoint that came true
  //and then we take that json data from our fetch, and we set that to the state.
  //when we click the all option then we now get either just dogs or cats, or all.
  //our fetch function sends a fetch to both the options


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters  
              onChangeType={this.onChangeType} 
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div onClick={this.props.onFindPetsClick} className="twelve wide column" >
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
//on the <Filter /> we passed in a callback function that we made that is 
//used to set the state, we passed it down to our Filter component.
//now all Filter component has to do is pass it in something. onChangeType={this.onChangeType}

//on the <Filter /> we also pass in another callback function, called onFindPetsClick
//this function

//PetBrowser is the one that is going to render the pet cards, we want to map over 
//the array in the PetBrowser
//so for PetBrowser we pass in the state of this component, 
//we then pass in onAdoptPet callback function

 