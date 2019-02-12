let adventures = [
    {
        id: 0,
        city: 'Palmer',
        state: 'Alaska',
        activity: 'Fly Fishing'
    }
]
let id = 1;
module.exports = {
    getAdventures: (req, res) => {
        res.status(200).send(adventures)
    },
    createNewAdventure: (req, res) => {
        const {city, state, activity} = req.body;
        adventures.push({
            id,
            city: city,
            state: state,
            activity: activity
        })
        id++
        res.status(200).send(adventures)
        },
    deleteAdventure: (req, res) => {
        const{id}= req.params
        const index=adventures.findIndex(adventure => 
        adventure.id == id)
        adventures.splice(index, 1)
        res.status(200).send(adventures)        
    },
    updateAdventure: (req, res) => {
        console.log('updateAdventure')
        const { id } = req.params
        const { city, state, activity } = req.body

        console.log(id, city, state, activity)

        let index = adventures.findIndex(adventure => adventure.id == id)
        let foundAdventure = adventures[index]

        foundAdventure = {
            id: foundAdventure.id,
            city: city || foundAdventure.city,
            state: state || foundAdventure.state,
            activity: activity || foundAdventure.activity
        }

        adventures.splice(index, 1, foundAdventure)

        res.status(200).send(adventures)
    }
}
    