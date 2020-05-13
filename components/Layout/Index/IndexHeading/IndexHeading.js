import React from 'react'
import Container from '../../../UI/Container/Container'
import Button from '../../../UI/Button/Button'

const IndexHeading = () => {
  return (
    <div style={{ paddingTop: "18rem", paddingLeft: "8rem" }}>
      <Container>
        <div>
          <div>
            <h1 style={{ fontSize: "50px", fontWeight: "600" }}>
              Creamos <br />
            soluciones web
          </h1>
            <h2 style={{ fontSize: "25px", fontWeight: "800" }}>
              diseño y desarrollo <br />
            de websites y apps
          </h2>
            <div style={{ marginTop: "2rem" }}>
              <Button link="/" text="Contáctanos" type="&#9658;" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default IndexHeading
