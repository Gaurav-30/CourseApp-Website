import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Contactcall from '../components/Contact/Contactcall'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Contact" />
    <Contactcall/> 
  </Layout>
)



export default IndexPage

