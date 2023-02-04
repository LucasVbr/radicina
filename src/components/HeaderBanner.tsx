import "./HeaderBanner.css";

export default function HeaderBanner() {
  return (
      <div className={"HeaderBanner"}>
        <nav>
          <div></div>
          <div>
            <img src={"./logo.png"}/>
          </div>
          <div>
            <img src={"./volume.png"}/>
            <img src={"./roue.png"}/>
          </div>
        </nav>
      </div>
  );
}