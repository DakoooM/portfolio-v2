import { BiChevronUp } from "react-icons/bi";
import Button from "./Button/Button";
import { useEffect, useState } from "react";

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
      <Button href="#" variant="contained" rounded={10}>
        <BiChevronUp size={30}/>
      </Button>
    </div>
  )
}

export default ScrollTop;