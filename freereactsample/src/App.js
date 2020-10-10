import React, { Component } from 'react'
import { Container, Row,Col} from 'reactstrap';
import Navigator from './Component/Navigator'
import Products from './Component/Products'
import Categories from './Component/Categories'


class App extends Component {
  state = {
    selectCategory : "",
    products: []
}
  changeCategory = (category) =>{
    this.setState({selectCategory : category.categoryID});
    console.log(this.state.selectCategory);
    this.getProducts(this.state.selectCategory);
  }
  // componentDidMount()
  // {
  //   this.getProducts();
  // }
  getProducts = (selectCategory) => {
    
    console.log({selectCategory});
    const url="http://localhost:3000/products/?categoryID=";
    const urlend= url + selectCategory;
    console.log(urlend);
    fetch(urlend)
    .then(response=>response.json())
    .then(data =>{this.setState({products : data}) 
                 console.log("products"+data)})
  }
  render() {
    return (
      <div >
        <Container>
          <Row>
            <Navigator />
          </Row>
          <Row>
            <Col sm="3" style={{backgroundColor : "blue"}}><Categories selectCategory={this.state.selectCategory} changeCategory={this.changeCategory}/></Col>
            <Col sm="9" style={{backgroundColor : "darkgreen"}}><Products products={this.state.products}/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}


 
export default App;
