import Container from '../Container'
import Hero from '../Hero'
import { dataTextPage } from '../../data/dataTextPage'
import TextPage from '../TextPage'

const Home = () => {
  return (
    <main>
      <Hero />
      <Container>
        <TextPage data={dataTextPage} />
      </Container>
    </main>
  )
}

export default Home
