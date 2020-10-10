import React, { Component } from 'react'
import { Table } from 'reactstrap';
export default class Products extends Component {
    
    
    render() {
        return (
            <Table>
            <thead>
              <tr>
                <th>Product id</th>
                <th>quantityPerUnit</th>
                <th>name</th>
                <th>unitPrice</th>
              </tr>
            </thead>
            <tbody>
                {this.props.products.map((item)=>
                <tr key={item.productID}>
                <th scope="row">{item.productID}</th>
                <td>{item.quantityPerUnit}</td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
              </tr>
                )}
               
            </tbody>
          </Table>
        )
    }
}
