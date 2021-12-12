import { useAlert } from '../contexts/alert/AlertContext'
import Layout from '../components/layout/Layout'
import Button from '../components/Button'

export default function Index() {
  const { show } = useAlert()
  
  return (
    <Layout title={'index'}>
      <Button text={'hello'}/><br/>
      <button onClick={() => show('это aleeeeeeeeert')}>показать alert</button>
    </Layout>
  )
}