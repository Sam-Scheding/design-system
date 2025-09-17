import styles from './styles.module.css'

interface AvatarProps {
  src: string
  alt?: string
  size?: '600' | '700' | '800' | '900'
}

export const Avatar = ({ src, alt = '', size = '700' }: AvatarProps) => {
  return <img src={src} alt={alt} className={`${styles.root} ${styles[`size-${size}`]}`} />
}
