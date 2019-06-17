import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    })
    const [mostVoted, setMostVoted] = useState(0)

    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>

        <GenerateButton text='next anecdote' func={setSelected} selected={selected}/>
        <button onClick={() => incrementVote(votes, setVotes, selected, mostVoted, setMostVoted)}>
            vote
        </button>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[mostVoted]}</p>
        <p>has {votes[mostVoted]} votes</p>

      </div>
    )
}

function incrementVote(votes, setVotes, selected, mostVoted, setMostVoted) {
    const copyToReturn = {...votes}
    copyToReturn[selected] += 1
    setVotes(copyToReturn)

    if (copyToReturn[selected] > copyToReturn[mostVoted]){
        setMostVoted(selected)
    }

}



const GenerateButton = ({text,func,selected}) => {
    let number  = 0
    while (true) {
        number = Math.floor(Math.random() * (anecdotes.length))
        if (number !== selected){
            break;
        }
    }
    return (
        <button onClick={() => func(number)}>
            {text}
        </button>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)