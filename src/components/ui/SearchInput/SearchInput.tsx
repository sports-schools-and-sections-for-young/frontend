import { forwardRef, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./SearchInput.module.scss";
import InputLabel from "../InputLabel/InputLabel.tsx";
import InputField, { InputFieldProps } from "../InputField/InputField.tsx";

export interface SearchingItem {
  id: string;
  name: string;
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
      value = "",
      ...rest
    } = props;

    const labelId = `label-${uuidv4()}`;

    const [open, setOpen] = useState(false);

    const filteredList = hasFilter
      ? searchingList
          .filter((item) =>
            item.name.toLowerCase().includes(String(value).toLowerCase()),
          )
          .sort((a, b) => (a.name > b.name ? 1 : -1))
      : searchingList;

    async function handleItemClick(
      cb: (e: SearchingItem) => void,
      value: SearchingItem,
    ) {
      await cb(value);
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
        <InputField
          labelId={labelId}
          hasError={hasError}
          errorMessage={errorMessage}
          ref={ref}
          value={value}
          onFocus={() => setOpen(true)}
          {...rest}
        />
        {open && (
          <ul className={styles.autocompleteField}>
            {filteredList.map((item) => (
              <li
                key={item.id}
                className={styles.autocompleteItem}
                onClick={() => handleItemClick(itemClickHandler, item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

export default SearchInput;
