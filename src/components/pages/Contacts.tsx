import Container from '../Container'
import Title from '../Title'
import TextPage from '../TextPage'
import { dataTextPage } from '../../data/dataTextPage'




const Contacts = () => {
  return (
    <Container>
      <Title tag="h1">Contacts</Title>
      <TextPage data={dataTextPage} />
    </Container>
  )
}

export default Contacts
