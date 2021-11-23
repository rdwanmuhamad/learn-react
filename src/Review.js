import React, { Component } from 'react'
import './App.css';

export default class Review extends Component {
    render() {
        const users = [
            {
            "id": 1,
            "name": "Muhamad Ridwan",
            "review": "Pengiriman cepat, harga terjangkau dan kualitas barang ori. Keren!"
            },
            {
            "id": 2,
            "name": "Muhamad Ridwan",
            "review": "Pengiriman cepat, harga terjangkau dan kualitas barang ori. Keren!"
            },
            {
            "id": 3,
            "name": "Muhamad Ridwan",
            "review": "Pengiriman cepat, harga terjangkau dan kualitas barang ori. Keren!"
            },
        ];
        const listReview = users.map((itemReview) =>
            <div>
            <div className="Image-review">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </div>
            <div ky={itemReview.id} className="User-review">
                <h3>{itemReview.name}</h3>
                <p>{itemReview.review}</p>
            </div>
            </div>
        );
        return (
            <div className="App-review">
                <h2>Review</h2>
                {listReview}
            </div>
        );
    }
}
