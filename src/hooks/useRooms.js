import { graphql, useStaticQuery } from "gatsby"

const useRooms = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsRoom {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)
  return data.allDatoCmsRoom.nodes.map(room => room)
}

export default useRooms
