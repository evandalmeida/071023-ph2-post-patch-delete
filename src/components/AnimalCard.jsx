export default function AnimalCard({ animal , editAnimal , releaseAnimal }) {

    // EVENTS //
    function handleChangeEndangered(event) {
      // PATCH REQUEST
      const OPTIONS ={
        method : "PATCH",
        headers : {
            "Accept" : "application.json",
            "Content-Type" : "application.json" },
        body : JSON.stringify({ endangered: !animal.endangered })
        }

        fetch(`http://localhost:3000/animals/${animal.id}` , OPTIONS )
        .then(r => r.json())
        .then( editAnimal )

      }
    
    function handleRelease () {
        const OPTIONS ={method : "DELETE"}

        fetch(`http://localhost:3000/animals/${animal.id}` , OPTIONS )
        .then(r => r.json())
        .then(() => releaseAnimal( animal ) )

    }

    // RENDER //
    return (
        <div className="animal-card">

            <p>Name: { animal.name }</p>

            <p>Species: { animal.species }</p>

            <p>Endangered:
                <input type="checkbox"
                checked={animal.endangered}
                onChange={ handleChangeEndangered } />
            </p>

            <button>Release to the Wild</button>

        </div>
    )

};
