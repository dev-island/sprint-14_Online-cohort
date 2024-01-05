const initialState = {
  name: '',
  email: '',
  password: ''
}

function reducer(state, action) {
  switch (action.name) {
    case 'HANDLE_CHANGE':
      return { ...state, [action.field]: action.payload }
    case 'HANDLE_RESET':
      return {
        name: '',
        email: '',
        password: ''
      }
    default:
      return state
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <form>
      <input type="text"
        onChange={
          (e) => dispatch({ name: 'HANDLE_CHANGE', payload: e.target.value, field: 'name'})}
          placeholder="Enter your name"
        />
      <input type="text" placeholder="Enter your email" />
      <input type="text" placeholder="Enter your password" />
      <button type="submit">Submit</button>
    </form>
  )
}