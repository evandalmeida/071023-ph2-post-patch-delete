import { useState, useEffect } from 'react'
import AnimalCard from './AnimalCard'
import AnimalForm from './AnimalForm'

function AnimalCollection() {

    // STATE //
    const [ animals , setAnimals ] = useState([])

    

    // EFFECTS //
    useEffect(() => {
        fetch('http://localhost:3000/animals')
        .then( r => r.json() )
        .then( fetchedData => setAnimals(fetchedData) )
    }, [])

    // CALLBACK FUNCTIONS //

   function addAnimal ( newAnimal ) {
        setAnimals([ ...setAnimals , newAnimal ])
   }

   function editAnimal ( editedAnimal ) {
        const mappedArray = animals.map( anima => {
            if (animals.id === editedAnimal.id ) { 
                return editedAnimal
            } else {
                return animals
        }
    })
    setAnimals( mappedArray )

   }

    function releaseAnimal (deleteAnimal) {
        const filteredArray = animals.filter( animal => animal.id !== deleteAnimal.id )

        setAnimals(filteredArray)
   }


    // RENDER //
    return (
        <>
            <AnimalForm addAnimal={addAnimal}/>

            <h2>Our Zoo Animals</h2>

            <div className="animal-container">

                { animals.map(animal => <AnimalCard key={animal.id} animal={animal} />) }

            </div>
        </>
    )
}

export default AnimalCollection
