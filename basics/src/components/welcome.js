




function Welcome(props) {
  console.log("hi");
  return (
    <div>
      Welcome {props.name} From Funcional Component
      <p>{props.children}</p>
    </div>
  );
}

export default Welcome;
