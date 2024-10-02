import { useEffect } from "react";

function Loader(props: any) {
  useEffect(() => {
    setTimeout(() => {
      props.setActiveLoader(false);
    }, 2000);
  }, [props]);

  return (
    <div className="loader__container">
      <div className="loader" />
    </div>
  );
}
export default Loader;
