import "./Scroll.css";
export default function Scroll(props) {
  return (
    <div className="pop">
      <h1 className="nme">{props.nme}</h1>
      <div className="outer-wrapper">
        <div className="inner-wrapper">{props.arr}</div>
      </div>
    </div>
  );
}
