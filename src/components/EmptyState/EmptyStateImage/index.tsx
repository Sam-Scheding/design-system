import styles from './styles.module.css'

interface EmptyStateImageProps {
  src: string
  alt: string
}

export const EmptyStateImage = ({ src, alt }: EmptyStateImageProps) => {
  return <img src={src} alt={alt} className={styles.root} />
}
