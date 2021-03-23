import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map(pet => 
      (<Pet 
        pet={pet}
        key={pet.id}
        onAdoptPet={this.props.onAdoptPet}/>))}
    </div>
  }
}
//now that we have a props that is passed in by the App, that is several arrays of pets
//inside the div we use {this.props.pets.map} to map over them/ create a new array, 
//we then use a arrow function and pass in the pet to the <Pet /> component
//in that pet component we pass in the pet itself, a key equal to a pet.id, and we 
//we use the callback function that was passed to this component
//and we pass it down to the <Pet /> component, 
//this component just passes in the new maped array of pets to the Pet, 
//the Pet component is in charge of rendering how it will be displayed on a card.

export default PetBrowser
//this component gets the onAdopt pet function, as props
//we also pass that down to our Pet component.