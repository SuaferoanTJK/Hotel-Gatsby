import React from "react"
import Layout from "../components/layout"
import HotelImage from "../components/hotelImage"
import IndexContent from "../components/indexContent"

const index = () => {
  return (
    <>
      <Layout>
        <HotelImage />
        <IndexContent />
      </Layout>
    </>
  )
}

export default index
