import styles from "./style.module.css"

export const MdxHeader = ({
  meta,
}: {
  meta: {
    createdAt: string
    updatedAt: string
  }
}) => {
  return (
    <>
      <p className={styles.text}>作成日: {meta.createdAt}</p>
      <p className={styles.text}>更新日: {meta.createdAt}</p>
    </>
  )
}
