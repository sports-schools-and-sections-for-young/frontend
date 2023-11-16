import { forwardRef, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./SearchInput.module.scss";
import InputLabel from "../InputLabel/InputLabel.tsx";
import InputField, { InputFieldProps } from "../InputField/InputField.tsx";

export interface SearchingItem {
  id: number;
  title: string;
}

export interface SearchInputProps extends InputFieldProps {
  labelName?: string;
  searchingList: SearchingItem[];
  itemClickHandler: (e: SearchingItem) => void;
  hasFilter?: boolean;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const {
      labelName = "",
      hasError,
      errorMessage,
      searchingList,
      itemClickHandler,
      hasFilter = true,
      ...rest
    } = props;

    const labelId = `label-${uuidv4()}`;

    const [open, setOpen] = useState(false);

    const [value, setValue] = useState("");

    const filteredList = hasFilter
      ? searchingList
          .filter((item) =>
            item.title.toLowerCase().includes(String(value).toLowerCase()),
          )
          .sort((a, b) => (a.title > b.title ? 1 : -1))
      : searchingList;

    async function handleItemClick(
      cb: (e: SearchingItem) => void,
      value: SearchingItem,
    ) {
      await cb(value);
      setValue("");
      setOpen(false);
    }

    const root = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const onClick = (e: MouseEvent) => {
        if (
          root &&
          root.current &&
          !root.current.contains(e.target as HTMLBodyElement)
        ) {
          setOpen(false);
        }
      };
      document.addEventListener("click", onClick);
      return () => document.removeEventListener("click", onClick);
    }, []);

    return (
      <div className={styles.input}>
        {labelName && <InputLabel labelId={labelId}>{labelName}</InputLabel>}
        <div className={styles.inputWrapper} ref={root}>
          <InputField
            labelId={labelId}
            hasError={hasError}
            errorMessage={errorMessage}
            ref={ref}
            value={value}
            onFocus={() => setOpen(true)}
            onChange={(e) => setValue(e.target.value)}
            {...rest}
          />
          <span className={styles.icon} />
          {open && (
            <ul className={styles.autocompleteField}>
              {filteredList.map((item) => (
                <li
                  key={item.id}
                  className={styles.autocompleteItem}
                  onClick={() => handleItemClick(itemClickHandler, item)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
);

export default SearchInput;
