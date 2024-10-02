import { notification } from "antd";

const selNotifContent = (
  <div>
    <span>Template has been successfully selected,</span>
    <br />
    <span className="f-bold">[long click to deselect].</span>
  </div>
);
const deselNotifContent: JSX.Element = (
  <div>
    <span>Template has been successfully deselected,</span>
    <br />
    <span className="f-bold">[double click to select].</span>
  </div>
);

export const selectedNotification = () =>
  notification.success({
    message: "Template Selection",
    description: selNotifContent,
    placement: "bottomRight",
  });

export const deselectedNotification = () =>
  notification.error({
    message: "Template Deselection",
    description: deselNotifContent,
    placement: "bottomRight",
  });
