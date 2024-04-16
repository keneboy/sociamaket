import React from "react";
import { useCombobox } from "downshift";
interface Props {
  author: string;
  title: string;
}
function ComboBoxExample() {
  const books = [
    { author: "Harper Lee", title: "To Kill a Mockingbird" },
    { author: "Lev Tolstoy", title: "War and Peace" },
    { author: "Fyodor Dostoyevsy", title: "The Idiot" },
    { author: "Oscar Wilde", title: "A Picture of Dorian Gray" },
    { author: "George Orwell", title: "1984" },
    { author: "Jane Austen", title: "Pride and Prejudice" },
    { author: "Marcus Aurelius", title: "Meditations" },
    { author: "Fyodor Dostoevsky", title: "The Brothers Karamazov" },
    { author: "Lev Tolstoy", title: "Anna Karenina" },
    { author: "Fyodor Dostoevsky", title: "Crime and Punishment" },
  ];
  function getBooksFilter(inputValue: string | undefined) {
    const lowerCasedInputValue = inputValue?.toLowerCase();

    return function booksFilter(book: any) {
      return (
        !inputValue ||
        book.title.toLowerCase().includes(lowerCasedInputValue) ||
        book.author.toLowerCase().includes(lowerCasedInputValue)
      );
    };
  }

  function ComboBox() {
    const [items, setItems] = React.useState(books);
    const {
      isOpen,
      getToggleButtonProps,
      getLabelProps,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      selectedItem,
    } = useCombobox({
      onInputValueChange({ inputValue }) {
        setItems(books.filter(getBooksFilter(inputValue)));
      },
      items,
      itemToString(item) {
        return item ? item.title : "";
      },
    });

    return (
      <div>
        <div style={{ border: "1px solid red", maxWidth: "400px" }}>
          <label className="w-fit" {...getLabelProps()}>
            Choose your favorite book:
          </label>
          <div
            style={{
              width: "100%",
              display: "flex",
            }}
          >
            <input
              placeholder="Best book ever"
              className="w-full p-1.5"
              style={{ flex: 1, border: "1px solid yellow" }}
              {...getInputProps()}
            />
            <button
              aria-label="toggle menu"
              className="px-2"
              type="button"
              {...getToggleButtonProps()}
            >
              {isOpen ? <>&#8593;</> : <>&#8595;</>}
            </button>
          </div>
        </div>
        <ul
          className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 ${
            !(isOpen && items.length) && "hidden"
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                key={`${item.title}${index}`}
                {...getItemProps({ item, index })}
              >
                <span>{item.title}</span>
                <span className="text-sm text-gray-700">{item.author}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }
  return <ComboBox />;
}
export default ComboBoxExample;
