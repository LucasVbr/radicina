import "./HeaderBanner.css";

export default function HeaderBanner() {
  return (
      <div className={"HeaderBanner"}>
        <nav>
          <div></div>
          <div>
            <img height={200} src={"./logo.png"}/>
          </div>
          <div>
            <img width={80} src={"./volume.png"}/>
            <img width={80} src={"./roue.png"}/>
          </div>
        </nav>
      </div>
  );
}