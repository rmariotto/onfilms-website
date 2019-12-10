import react from '...react'
import reactDOM from '...react-dom'

const title = React.createElement(
  'h1',
  {id: 'title', className: 'header'},
  'Hello World'
)

ReactDOM.render(
  title,
  document.getElementById('root')
)