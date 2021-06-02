import * as React from "react"
import {graphql} from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/infoblock'
import Dualinfoblock from '../components/Reuseable/DualInfoblock'
import Coursecart from '../components/Cart/Coursecart'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
    img = {data.img.childImageSharp.fluid}
    title = "I write Code"
    subtitle = "Somefun.com"
    heroclass = "hero-background" 
    />
    <Infoblock heading = "About Us"/>
    <Coursecart courses = {data.courses}/>
    <Dualinfoblock heading = "Our Team" source = "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
  </Layout>
)

export const query = graphql`
{
	img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    courses:allContentfulCourses{
      edges{
        node{
          id
          title
          price
          category
          description
          image {
            fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
}
`

export default IndexPage

