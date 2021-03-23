import React from 'react'

class Pet extends React.Component {
  render() {
    const {id, age, gender, name, type, weight, isAdopted} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? <button className="ui disabled button">Already adopted</button> : 
          <button onClick={() => this.props.onAdoptPet(id)}className="ui primary button">Adopt pet</button>}
          
          
        </div>
      </div>
    )
  }
}

export default Pet
//so this Pet component is getting in a pet prop
//so we deconstruct it by doing this 
//const {age, gender, name, type, weight, isAdopted} = this.props.pet
//we set the props(pet that we got), and set it to a const 
//with all the pet values.

//for the gender we do a boolian using the : 
//we say if gender === female ? 
//the logo will be the '♀' 
//if not then the logo will be '♂'
//{ [the value we are comparing] === [what were comparing it to] ? [if true return this] : [else return this] }

//then since we deconstructed it we just pass in {name}, {type}, {age}. {weight} all in hashes
//now we need a turnery for isAdopted, isAdopted is already true or false
//we say if isAdopted is true then disable button
//else then enable button to adopt

//we then use a onClick function, and since the Browser component passed in a callback function
//we use the onClick to trigger that function 
//we then pass in an id to that function. 
//now that id will go back all the way to the parent. 

//the onAdoptPet function switches the "isAdopted" of the pet from false to true
//that is why onClick it triggers it and we also pass it in the id of the pet that 
//it was clicked on.
//WE ADD ID TO OUR CONST TO THEN PASS INTO THE onAdoptPet Function
//because our onAdoptPet, gets an id in parenthesis, it means its actually INVOKING it
//THIS ONLY HAPPENS WITH ID, IF IT WAS AN EVENT THEN IT WOULDNT MATTER
//if we dont want to invoke it we have to make it an anomynous function
//so we use the () => this.props.onAdoptPet(id)