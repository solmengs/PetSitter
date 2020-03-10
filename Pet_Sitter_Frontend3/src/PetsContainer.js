import React from 'react'
import LoginForm from './LoginForm'
import PetCard from './PetCard.js'
import PetForm from './PetForm'
import LoginSignupContainer from './LoginSignupContainer.js'
const petsURL = "http://localhost:3000/pets"

class PetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserPets: []
    };
  }

  componentDidMount() {
    this.setState({
      currentUserPets: this.props.pets
    });
  }

  //Delete: .then(pet=> this.deleteState(pet))
  //

  addPet = pet => {
    console.log("console logging currentUserPets:", this.state);
    console.log(pet);
    this.setState(
      prevState => {
        return {
          currentUserPets: [...prevState.currentUserPets, this.props.pets]
        };
      },
      () => this.postPet(pet)
    );
  };

  //iterate over all pets for this specific owner and create a PetCard for them
  postPet = pet => {
    // let newPets = this.state.currentUserPets.push(pet)
    fetch(petsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        pet: { ...pet, owner_id: this.props.user.id }
      })
    })
      .then(res => res.json())
      .then(pet => this.props.freshPetsFunction(pet));
    //  this.setState({currentUserPets: this.state.currentUserPets[0]})
  };
  // getFreshPets = () => {
  //   fetch(petsURL)
  //   .then(res => res.json())
  //   .then(pets => this.filterFreshPets(pets))
  // }

  // filterFreshPets = (pets) => {
  //   let filteredPets = pets.filter(pet =>
  //   pet.owner.id == this.props.user.id)
  //   // console.log(filteredPets)
  // }

  // pets.filter(pet => pet.owner_id == this.props.user.id)
  // Create Pet Cards:

  everyPet = () => {
    // console.log(this.props.getFreshPets())
    console.log("PETS CONTAINER PROPS:", this.props.user.pets);
    // if (this.props.currentUserPets === 1) {
    // let fresheningUpPets = this.props.freshPetsFunction()
    if (!this.props.currentUserPets) {
      return <PetForm addPet={this.postPet} user={this.props.user} />;
    }
    return this.props.currentUserPets.map(pet => {
      return (
        <PetCard
          pet={pet}
          editPet={this.props.editPet}
          deletePet={this.props.deletePet}
        />
      );
    });
    //  }
  };

  render() {
    return (
      <div className="ui grid container">
        {/* {console.log(this.state)} */}
        {/* /* {console.log(this.props.user)} */}
        {/* {console.log(this.props.pets)} */}
        {/* <button class="ui button" >Add a Pet</button> */}
        <PetForm addPet={this.postPet} user={this.props.user} />
        {/* everyPet() */}

        {/* <PetCard/> */}
        {this.everyPet()}
      </div>
    );
  }
}
export default PetsContainer