import React from 'react'
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Article extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Items: [
                { id: 1, productName: 'article 1', price: 15, description: 'description de article 1' },
                { id: 2, productName: 'article 2', price: 35, description: 'description de article 2' },
                { id: 3, productName: 'article 3', price: 5, description: 'description de article 3' },
                { id: 4, productName: 'article 4', price: 98, description: 'description de article 4' },
                { id: 5, productName: 'article 5', price: 0.50, description: 'description de article 5' },
                { id: 6, productName: 'article 6', price: 6.50, description: 'description de article 6' },
            ],
            Article: []
        }
    }

    recevoirItem = item => {
        this.state.Article.push(item);
        this.setState({ Article: this.state.Article })
    }

    render() {
        return (

            <div class=" container mb">
                <header class="p-3 bg-dark text-white g-3">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><a href="#" class="nav-link px-2 text-secondary">Catalogue</a></li>
                                <li><a href="#" class="nav-link px-2 text-secondary">Panier</a></li>
                                <li><a href="#" class="nav-link px-2 text-secondary">Commande</a></li>
                            </ul>

                            <div class="text-end">
                                <button type="button" class="btn me-2 text-secondary">Panier : {parseFloat(this.state.Article.reduce((acc, prx) => acc + prx.price, 0))}€</button>{this.state.Article.length <= 0 ? `0` : this.state.Article.length}
                            </div>
                        </div>
                    </div>
                </header>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        this.state.Items.map((item, i) => (
                            <a>
                                <Item key={i.toString()} item={item} recevoirItem={this.recevoirItem} />
                            </a>
                        ))
                    }
                </div>

            </div>
        )
    }
}