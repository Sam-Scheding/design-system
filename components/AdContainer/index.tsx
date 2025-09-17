import styles from './styles.module.css'

export const AdContainer = () => {
  if (process.env.NODE_ENV === 'production') {
    return <></>
  }

  return <div className={styles.root}>Ad Goes Here</div>
}
