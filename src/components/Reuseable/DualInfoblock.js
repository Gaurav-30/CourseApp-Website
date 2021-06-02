import React from "react"
import Heading from "./Heading"

export default function DualInfoblock({ heading ,source}) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              molestiae mollitia fuga, numquam animi expedita minima ut nostrum
              quidem at, beatae facilis ea temporibus tenetur itaque inventore
              harum molestias dolores laboriosam! Assumenda vel consequatur
              beatae repellat facere tempore cupiditate ipsum possimus,
              consectetur soluta vero sint, molestias molestiae hic? Illum,
              perspiciatis? Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Possimus sint enim, facere odio adipisci tempore ullam
              veritatis, repudiandae sapiente dolorum est mollitia ex aspernatur
              odit recusandae eaque eveniet expedita? Minus assumenda voluptates
              aliquid magnam quas itaque, a error illo. In nobis ab asperiores
              itaque accusantium? Pariatur tenetur possimus obcaecati explicabo
              id! Dolor, animi sunt porro quae voluptatibus repudiandae
              explicabo earum error eius veritatis optio magni, rem sint,
              corporis quia veniam quis doloremque facere non velit aperiam
              architecto harum nulla. Doloremque nulla dolore assumenda nostrum
              a omnis inventore odio? Odit, eaque earum totam natus adipisci
              inventore? Tenetur ipsum eos blanditiis nihil.
            </p>
          </div>

          <div className="col-4">
            <div className="card bg-dark text-white">
              <img src={source} alt=" goes here" />
              <div className="card-body">
                <h5 className="card-title">Office View</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat aliquam autem modi molestias pariatur aspernatur
                  totam sequi, repudiandae, maiores, qui rerum voluptate
                  voluptatem sit temporibus quae. Corrupti ullam reiciendis
                  asperiores?
                </p>
                <a href = "/" class="btn btn-warning btn-block">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
