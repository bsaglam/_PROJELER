import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
export default class Categories extends Component {
    state = {
        categoryList : []
    }
    componentDidMount()
    {   
        this.getCategories();
    }
    getCategories = () =>{
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then((data) => {
          this.setState({categoryList : data})
          console.log(typeof this.state.categoryList)
        })
    }
    
    render() {
        return (
            <div>
                <ListGroup>
                   { this.state.categoryList.map((cat) => (<ListGroupItem key={cat.categoryID} onClick={()=>this.props.changeCategory(cat)}>{cat.name}</ListGroupItem>))}
                </ListGroup>
                <h3>{this.props.selectCategory}</h3>
            </div >
        )
    }
}
