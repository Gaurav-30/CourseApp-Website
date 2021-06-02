import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'
export default function Infoblock({heading}) {
    return (
        <section className = "bg-theme my-5 py-4">
            <div className="container">
                <Heading title = {heading}/>
                <div className = 'row'>

                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-white mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam mollitia quisquam voluptatem non minus, a pariatur cumque! Repellat inventore ad saepe nam tempore quam magni? Quia in quo doloribus est labore eum repellat quisquam ex perferendis, magnam atque laborum totam asperiores cumque nemo, eaque recusandae cum. Fuga soluta illum mollitia vero. Sint rerum voluptatem minus totam beatae est voluptatibus saepe?
                    </p>
                    <Link to = "/about/">
                        <button className = "btn btn-warning btn-lg">
                            {heading}
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        </section>
    )
}
