import React from 'react';
import ReactDOM from 'react-dom'
import Comments from './Components/commets'
import ApprovalCard from './Components/approvalCard'

const App = () => {
    return (
        
        <div className="ui small comments" style={{paddingLeft:"10px",paddingTop:"10px"}}>
            <ApprovalCard>
                <Comments name="burcu sağlam" date="5.34" content="deneme"/>
            </ApprovalCard>
            <ApprovalCard>
                <Comments name="ali sağlam" date="3.56" content="wewwr"/>
            </ApprovalCard>
            
        </div>
    )


}

ReactDOM.render(<App />, document.querySelector('#root'))