import { useAlert } from './AlertContext'

export default function Alert() {
  const { isActive, hide, text } = useAlert()

  if (!isActive) return null

  return (
    <div
      onClick={() => hide()}
      style={{ position: 'absolute', top: '100px', left: '300px' }}
    >
      {text}
    </div>
  )
}
