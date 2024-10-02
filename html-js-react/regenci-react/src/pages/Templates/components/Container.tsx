import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FC, useEffect, useState } from "react";
import { iRootState } from "../../../utils/interfaces/store";
import { deselectedNotification, selectedNotification } from "./utils";
import { updateUserCurrentTemplate } from "../../../store/actions/user/user";
import { delayDebouncedFunction } from "../../../utils/functions/functions";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../../utils/localstorage/localStorage";

type iSelectedTemplate = string | undefined | null;

const Container: FC = () => {
  // const templates = useSelector((state: iRootState) => state?.templates);
  const [show, setShow] = useState(false);
  const token = useSelector((state: iRootState) => state?.token);
  const currUser = useSelector((state: iRootState) => state?.currentUser);
  const isLogged = useSelector((state: iRootState) => state?.isLogged);
  const [selected, setSelected] = useState<iSelectedTemplate>(
    currUser?.currentTemplate
  );

  const onDoubleClick = (id: string) => {
    setShow(true);
    setSelected(id);
    isLogged &&
      delayDebouncedFunction(100, updateUserCurrentTemplate, id, token);
    id && selectedNotification();
    !isLogged && JSON.stringify(setLocalStorage("selected-template", id));
  };
  const onClickNHold = () => {
    setShow(false);
    selected !== null && deselectedNotification();
    setSelected(null);
    isLogged &&
      delayDebouncedFunction(100, updateUserCurrentTemplate, null, token);
    removeLocalStorage("selected-template");
  };

  useEffect(() => {
    if (!selected)
      return setSelected(
        JSON.parse(getLocalStorage("selected-template") as any)
      );
    if (isLogged) return setSelected(currUser?.currentTemplate);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    selected && setShow(true);
  }, [selected]);
  return (
    <>
      <Carousel onClickNHold={onClickNHold} onDoubleClick={onDoubleClick} />
      {show && (
        <motion.div className="global__defaultButton">
          <Link
            to={
              isLogged
                ? `/app/creator/${selected && selected}`
                : "/auth/sign-in"
            }
          >
            <span>Proceed</span>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Container;
