import * as React from "react"
import {graphql} from 'gatsby'
import Teamphotosection from '../components/About/Teamphotosection'

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/infoblock'
import Dualinfoblock from '../components/Reuseable/DualInfoblock'

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="About" />
    <HeroSection
    img = {data.img.childImageSharp.fluid}
    title = "About some fun..."
    subtitle = ""
    heroclass = "about-background" 
    />
    <Dualinfoblock heading = "Message from CEO" source = "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    <Infoblock heading = "About Vision"/>
    <Teamphotosection/>
  </Layout>
)

export const query = graphql`
{
	img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`

export default AboutPage

