import { BiChevronUp } from "react-icons/bi";
import Button from "./Button/Button";
import { memo, useEffect, useState } from "react";

function ScrollTop() {
  const [show, setShow] = useState(false);
  const cls =  show ? "ScrollTop show" : "ScrollTop";

  const scrolTo = (posY = 0) => {
    window.scrollTo({
      top: posY,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    const onScrolling = () => {
      setShow(window.scrollY >= 1060);
    }

    window.addEventListener("scroll", onScrolling);

    return () => window.removeEventListener("scroll", onScrolling);
  }, []);


  return (
    <div className={cls} onClick={scrolTo}>
      <Button title="Remonter en haut de la page" href="#" variant="contained" style={{ padding: 0, width: 40, height: 40 }} rounded={"50%"}>
        <BiChevronUp size={30}/>
      </Button>
    </div>
  )
}

export default memo(ScrollTop);