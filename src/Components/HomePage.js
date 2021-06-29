import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct, deleteProduct } from "../redux/features/product";

class HomePage extends Component {
    
    constructor(props) {
        super(props);
        this.title = "";
        this.price = "";
        this.describ = "";
    }

    handleAdd = () => {
        this.props.addProduct({title: this.title, price: this.price, describ: this.describ}); 
    }

    render() {
        console.log(this.props.product.products);
        return (
            <div>
                <form>
                    <input name="title" onChange={(e) => this.title = e.target.value} type="text" placeholder="Titre du produit" />
                    <label>Price : </label><input name="price" onChange={(e) => this.price = e.target.value} step="0.1" type="number"/>
                    <textarea name="describ" onChange={(e) => this.describ = e.target.value} placeholder="Description du produit.">
                    </textarea>
                </form>
                <button onClick={this.handleAdd}>Add</button>
                { this.props.product.products.map((value, key) => (
                    <div key={key}>
                        <h3>{value.title}</h3>
                        <p>{value.describ}</p>
                        <p>{value.price}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProp = {
    addProduct,
    deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProp)(HomePage);