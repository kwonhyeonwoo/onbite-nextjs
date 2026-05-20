import styles from "./css/index.module.css";
import useSearchBar from "./hooks/useSearchBar";
export default function SearchBar(){
    const {
        search,
        onChange,
        onSubmit,
        onKeydown
    } = useSearchBar();
    return (
      <div className={styles.container}>
        <input
          type="text"
          placeholder="검색어를 입력하세요..."
          value={search}
          onChange={onChange}
          onKeyDown={onKeydown}
          className={styles.input}
        />
        <button className={styles.button} onClick={onSubmit}>
          검색
        </button>
      </div>
    );
}