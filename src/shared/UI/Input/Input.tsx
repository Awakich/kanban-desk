import { FC, ChangeEvent } from 'react'
import styles from './input.module.scss';

type input = {
  dirty: string,
  inputTitle?: string,
  inputAuthor?: string,
  dirtyInput: boolean,
  choose: string,
  inputTitleHandler?: (e: ChangeEvent<HTMLInputElement>) => void,
  inputAuthorHandler?: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<input> = ({ dirtyInput, inputTitle, dirty, inputAuthor, inputTitleHandler, inputAuthorHandler, choose }) => {
  return (
    <div className={styles.inner}>
      <label>Title</label>

      {dirtyInput ? <p className={styles.dirty}>Enter {dirty}</p> : ""}
      <input value={choose === "title" ? inputTitle : inputAuthor}
        onChange={choose === "title" ? inputTitleHandler : inputAuthorHandler} type='text' className={styles.input} />
    </div>

  )
}

export default Input