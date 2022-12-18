import React, { useEffect, useState } from "react";
import AddInput from "../AddInput/AddInput";
import uuid4 from "uuid4";
import styles from "./Checklist.module.css";

export default function Checklist({ filter }) {
  const [itemlist, setItemlist] = useState(() => readItemLists());

  const getText = (text) => {
    setItemlist((prev) => [...prev, { id: uuid4(), text, checked: false }]);
  };
  const handleChecked = (checkedid) => {
    setItemlist(
      itemlist.map((item) =>
        item.id === checkedid ? { ...item, checked: !item.checked } : item
      )
    );
  };
  const handleDelete = (deleteid) => {
    setItemlist(itemlist.filter((item) => item.id !== deleteid));
  };

  useEffect(() => {
    localStorage.setItem("itemlist", JSON.stringify(itemlist));
  }, [itemlist]);
  const filtered = getFilteredItems(itemlist, filter);

  function readItemLists() {
    const itemlists = localStorage.getItem("itemlist");
    return itemlists ? JSON.parse(itemlists) : [];
  }

  return (
    <section className={`${styles.container} `}>
      <ul className={styles.lists}>
        {filtered.map((t) => (
          <li key={t.id} className={styles.list}>
            <input
              type="checkbox"
              checked={t.checked}
              onChange={() => handleChecked(t.id)}
              className={styles.checkbox}
            />
            {t.text}
            <button className={styles.xbtn} onClick={() => handleDelete(t.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <AddInput getText={getText} />
    </section>
  );
}

function getFilteredItems(itemlist, filter) {
  if (filter === "all") {
    return itemlist;
  }
  if (filter === "active") {
    return itemlist.filter((item) => item.checked === false);
  }
  if (filter === "completed") {
    return itemlist.filter((item) => item.checked === true);
  }
}
