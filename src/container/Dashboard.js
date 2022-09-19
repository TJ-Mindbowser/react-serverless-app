import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xl-3">
                        <div className="card bg-c-blue order-card">
                            <div className="card-block">
                                <h6 className="m-b-20">Total Users</h6>
                                <h2 className="text-right">
                                    <i className="fa fa-cart-plus f-left" />
                                    <span>5</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
