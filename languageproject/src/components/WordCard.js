import React from 'react'
import './WordCard.css'

class WordCard extends React.Component {
    render(){
        return(
            <div className='word-card'>
                <div className='english-word'>{this.props.word}</div>
                <div className='translation'>{this.props.translation}</div>
            </div>
        )
    }
}

export default WordCard