import { useState } from "react";
// import component alert
import Alert from "../Components/Alert/Alert";

function AddMovieForm(props) {
  /**
   * ini hanya snippet (potongan) code
   * kode yang lainnya tetap sama
   */

  // membuat state title
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
}

function Alert(props) {
  /**
   * children adalah props khusus
   * berisi konten/children yang ada di dalam component
   */
  const {children} = props;

  return (
    <div>
      <span>{children}</span>
    </div>
  )
}

// membuat state untuk input form
const [title, setTitle] = useState("");
const [date, setDate] = useState("");
const [poster, setPoster] = useState("");
const [type, setType] = useState("");

// membuat fungsi untuk handle setiap input
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handlePoster(e) {
    setPoster(e.target.value);
  }

  function handleType(e) {
    setType(e.target.value);
  }

  // membuat fungsi handlechange untuk handle input form (dinamis)
  function handlechange(e) {
    // destructing name dan value
    const {name, value } = e.target;

    /**
     * update state dengan object baru
     * - copy state sebelumnya menggunakan spread operator
     * - update property berdasarkan apapun nilai name (computed property)
     */
    setFormData({
      ...formData, 
      [name]: value,
    });
  }

  // destructing state formdata
  const { title, date, poster, type } = formData;

  // update handle function di setiap input form
  <input id="title" type="text" value={title} name="title" onChange={handlechange} />
  <input id="title" type="text" value={date} name="title" onChange={handlechange} />
  <input id="title" type="text" value={poster} name="title" onChange={handlechange} />
  <input id="title" type="text" value={type} name="title" onChange={handlechange} />
  
  // menambahkan atribut name di setiap input
  // tujuannya agar fungsi mengupdate state berdasarkan name
  <input id="title" type="text" value={title} name="title" />
  <input id="title" type="text" value={title} name="date" />
  <input id="title" type="text" value={title} name="poster"/>
  <input id="title" type="text" value={title} name="type"/>
  
  /**
   * handle multipe input dengan 1 state
   * membuat state formdata
   * nilai state menggunakan object
   */
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  return (
    <input
      id="date"
      type="text"
      // memberikan value input: date
      value={date}
      //memberikan event onChange
      onChange={handleDate}
    >
    /**
    * membuat inline if: operator &&
    * jika istitleeror true maka render eror
    */

      {isDateError && <Alert>Date Wajib Diisi</Alert> }
    </input>
  );

  // membuat fungsi validasi form
  function validate() {
    if (title === "") {
      setIsTitleError(true);
      return false;
    }
    else if (date=== "") {
      setIsDateError(true);
      setIsTitleError(false);
      return false;
    }
    else if (poster === "") {
      setIsPosterError(true);
      setIsDateError(false);
    }
    else {
      setIsTitleError(false);
      setIsDateError(false);
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    /**
     * fungsi handleSubmit menjalankan 2 fungsi:
     * - validate: fungsi validasi
     * - addmovie: tambah movie
     */
    function handleSubmit(e) {
      e.preventDefault();

      validate() && AddMovie();
    }
    // validasi
    if (title === "") {
      setIsTitleError(true);
    }
    else if (date === "") {
      setIsDateError(true);
      setIsDateError(false);
    }
    else {
    //add movie
    const movie = {
      id: nanoid(), 
      title: title,
      year: date, 
      type: "Movie",
      poster: "https://picsum.photod/300/400",
    };
    setMovies([...movies, ,movie]);

    setIsTitleError(false);
    setIsDateError(false);
    }
  }

  // membuat fungsi menambahkan movie
  function AddMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    setMovies([...movies, movie]);
  }

return (
  <input
    id="title"
    type="text"
    // memberikan value input: title
    value={title}
    //memberikan event onChange
    onChange={handleTitle}
  >
    /**
    * membuat inline if: operator &&
    * jika istitleeror true maka render eror
    */
    {isTitleError && <Alert>Title Wajib Diisi</Alert>}
    
  </input>
);

export default Alert;