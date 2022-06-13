import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import HotelImage from "../components/hotelImage"
import IndexContent from "../components/indexContent"
import PreviewRoom from "../components/previewRoom"
import useRooms from "../hooks/useRooms"

const RoomList = styled.ul`
  max-width: 120rem;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`

const Index = () => {
  const rooms = useRooms()
  return (
    <Layout>
      <HotelImage />
      <IndexContent />
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras habitaciones
      </h2>
      <RoomList>
        {rooms.map(room => (
          <PreviewRoom key={room.id} data={room} />
        ))}
      </RoomList>
    </Layout>
  )
}

export default Index
