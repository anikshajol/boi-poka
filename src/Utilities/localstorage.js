import toast from "react-hot-toast";

const getFromLocalStorage = (name) => {
  const storedItems = localStorage.getItem(name);
  if (storedItems) {
    return JSON.parse(storedItems);
  } else {
    return [];
  }
};

const savedToLocalStorage = (name, id) => {
  return localStorage.setItem(name, JSON.stringify(id));
};

const addToLocalStorage = (name, id) => {
  const storedItems = getFromLocalStorage(name);

  const found = storedItems.find((item) => item === id);
  console.log(found);

  if (!found) {
    savedToLocalStorage(name, [...storedItems, id]);
    toast.success("Successfully Added");
  } else {
    toast.error("Already added!");
  }
};

export { getFromLocalStorage, addToLocalStorage };
