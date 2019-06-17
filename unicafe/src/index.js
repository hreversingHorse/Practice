import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button text={'good'} func={setGood} state={good}/>
            <Button text={'neutral'} func={setNeutral} state={neutral}/>
            <Button text={'bad'} func={setBad} state={bad}/>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

const Statistics = ({good,neutral,bad}) => {
    if (good==0 && neutral == 0 && bad == 0){
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }else {
        return (
            <div>
                <h1>Statistic</h1>
                <table>
                    <Statistic text={'good'} value={good}/>
                    <Statistic text={'neutral'} value={neutral}/>
                    <Statistic text={'bad'} value={bad}/>
                    <Statistic text={'average'} value={(good + bad*(-1))/(good + neutral + bad)}/>
                    <Statistic text={'positive'} value={(good/(good + neutral + bad))*100} additionalText={'%'}/>                    
                </table>
            </div>
        )
    }
}

const Statistic = ({text,value, additionalText}) =>{
    return (
        <tbody>
            <tr>
                <th>{text}</th>
                <th>{value}</th>
                <th>{additionalText}</th>    
            </tr>
        </tbody>
    )
}

const Button = (props) => {
    return (
        <button onClick={() => props.func(props.state + 1)}>
            {props.text}
        </button>
    )
}



ReactDOM.render(<App/>, document.getElementById('root'))