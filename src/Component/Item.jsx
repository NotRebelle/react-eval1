import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Item extends React.Component {
    render() {
        return (
            <a key={this.props.item.id}>
                <div class="col">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h3 class="mb-1">{this.props.item.productName}</h3>
                            <p class="card-text"></p>
                            <p class="mb-1">{this.props.item.description}</p>
                            <p>Prix : {this.props.item.price}€</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button class="btn btn-primary " onClick={() => this.props.recevoirItem(this.props.item)}>Panier </button>
                                </div>
                                <button class="btn btn-danger " onClick>Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}