
const About = (props) => {
    console.log(props.name)
  return (
    <div className="mt-12 font-semibold text-4xl text-center">Welcome to the About Page {props.name}</div>
  )
}

export default About