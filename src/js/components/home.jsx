export default (props) => {
  const title = 'React Blueprint'
  const description = 'It even comes with stock kitten photos!!!'

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src="/images/kitten.jpg"/>
    </div>
  )
}
