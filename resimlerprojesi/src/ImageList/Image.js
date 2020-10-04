import React,{Component} from 'react'


export default class Image extends Component {
    
    constructor(props) {
        super(props);
        
        this.myRef = React.createRef();
      }
      state={
          spanCount:1
      }
    componentDidMount()
    {
        this.myRef.current.addEventListener('load',()=>{
            console.log(this.myRef.current.clientHeight)
        });
        const spanCount= Math.round(this.myRef.current.clientHeight/5) + 1 ;
        this.setState({spanCount : {spanCount}});
    }
      render() {
        const {image} = this.props;
        return (
            
                <img style={{gridRowEnd: 'span ${this.state.spanCount}'}} ref={this.myRef} alt={image.description} src={image.urls.small} />
              
        )
    }
}
    
 
