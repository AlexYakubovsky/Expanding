import { useAlert } from '../contexts/alert/AlertContext'
import Layout from '../components/layout/Layout'
import Button from './Button'

const Index = () => {
  const { show } = useAlert()

  return (
    <Layout title={'index'}>
      home
      <Button text={'hello'}/>
      <button onClick={() => show('это aleeeeeeeeert')}>показать alert</button>
    </Layout>
  )
}

export default Index