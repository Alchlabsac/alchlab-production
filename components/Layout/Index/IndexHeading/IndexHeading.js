import React from 'react'
import Container from '../../../UI/Container/Container'
import Button from '../../../UI/Button/Button'

const IndexHeading = () => {
  return (
    <div style={{ paddingTop: "18rem", paddingLeft: "1rem" }}>
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
              <Button link="https://api.whatsapp.com/send?phone=51947157351&text=%C2%A1Hola!%2C%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n" text="Contáctanos" type="&#9658;" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default IndexHeading
