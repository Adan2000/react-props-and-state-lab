import React from 'react'

class Filters extends React.Component {

  handleChange = (event) => {
    this.props.onChangeType(event.target.value)
  }
//handleChange takes in an event from the onChange event listener.
//we get our props, and we use the onChangeType function that was passed in by the Parent
//we then pass in the value of event, which is the animal we selected.

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div onChange={this.handleChange} className="field">
          <select name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
//this component is rendering out a drop down list, that shows the animal types.
//we put an event listener on the select for onChange, and trigger a handleChange function
//we also set the value of each option, that will get passed on to our handleChange event.

//we have a onFindPetsClick function that was also passed in by the parent component
//we add it to the button so that it is triggered when we click that button.
//now that button in the drop down will do something.