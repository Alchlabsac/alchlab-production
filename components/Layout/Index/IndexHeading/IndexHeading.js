import React from 'react'
import Container from '../../../UI/Container/Container'
import Button from '../../../UI/Button/Button'
import styles from "./IndexHeading.module.css"

const IndexHeading = () => {
  return (
    <div className={styles.heading} style={{ paddingTop: "18rem", paddingLeft: "1rem" }}>
      <Container>
        <div>
          <div>
            <h1>
              Creamos <br />
            soluciones web
          </h1>
            <h2>
              diseño y desarrollo <br />
            de websites y apps
          </h2>
            <div style={{ marginTop: "2rem" }}>
              <Button link="#contact" text="Cuéntanos tu idea" type="&#9658;" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default IndexHeading
