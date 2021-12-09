import { useState } from 'react'
import { useBackground } from "../../../contexts/background/BackgroundContext"
import Image from 'next/image'
import cn from 'classnames'
import styles from './ThemeSwitcher.module.sass'

export default function ThemeSwitcher() {
  const [isActive, setIsActive] = useState(false)
  const { handler } = useBackground()

  const gaussianTextures = Array(6).fill('').map((v, i) => {
    return (
      <li
        key={i}
        className={styles['switcher-body__theme']}
        onClick={() => handler({ type: 'gaussian', number: i })}
      >
        <Image
          src={`/images/backgrounds/gaussian/preview/${i}.png`}
          width={75}
          height={75}
          alt={''}
        />
      </li>
    )
  })

  const gradientBackground = Array(6).fill('').map((v, i) => {
    return (
      <li
        key={i}
        className={cn(styles['switcher-body__theme'], styles[`bg-gradient${i}`])}
        onClick={() => handler({ type: 'gradient', number: i })}
      />
    )
  })

  return (
    <div className={cn(
      styles['theme-switcher'],
      { [styles.active]: isActive }
    )}>
      <div
        className={styles['switcher-open']}
        onClick={() => setIsActive(!isActive)}
      >
        <Image
          src={'/images/icons/settings.svg'}
          width={25}
          height={25}
          alt={''}
        />
      </div>

      <div className={styles['switcher-body']}>
        <div className={styles['switcher-body__title']}>
          <h5 className='text-uppercase'>Тема оформления</h5>
          <button className='close' onClick={() => setIsActive(false)}/>
        </div>
        <hr/>

        <p>Текстуры</p>
        <hr/>
        <ul className={styles['switcher-body__list-themes']}>
          {gaussianTextures}
        </ul>
        <hr/>

        <p>Градиент</p>
        <hr/>
        <ul className={styles['switcher-body__list-themes']}>
          {gradientBackground}
        </ul>
      </div>
    </div>
  )
}