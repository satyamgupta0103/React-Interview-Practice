import GrandChild from "./GrandChild";

function Child({ name }) {
  return (
    <div>
      <GrandChild name={name} />
    </div>
  );
}

export default Child;
