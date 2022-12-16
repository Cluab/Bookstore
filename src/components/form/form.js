import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './form.css';
// import dispatch and redux action for hook
// uuidv4 for generating random id

const Form = () => {
  // add dispatch as a const
  const dispatch = useDispatch();

  // adding the input as a const for using there id
  let INname;
  let INauthor;

  // adding increment function for handling redux action

  const handleIncremt = (name, author) => {
    if (!name.value.trim() || !author.value.trim()) {
      return;
    }
    const newBook = {
      item_id: uuidv4(),
      title: name.value,
      author: author.value,
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
    INname.value = '';
    INauthor.value = '';
  };

  return (
  // return jsx syntax for displaying in html
    <>
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form
        className="add-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleIncremt(INname, INauthor);
        }}
      >
        <input className="input form-input" ref={(node) => { INname = node; }} type="text" placeholder="Book title" />
        <input className="input form-input" ref={(node) => { INauthor = node; }} type="text" placeholder="author" />
        <select name="input category-input" className="category-input">
          <option className="option" value="Action">Action</option>
          <option className="option" value="Science Fiction">Science Fiction</option>
          <option className="option" value="Economy">Economy</option>
        </select>
        <button className="primary-button-big" type="submit" onClick={() => { handleIncremt(); }}>ADD BOOK</button>
      </form>
    </>
  );
};

export default Form;
