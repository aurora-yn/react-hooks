import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") return;
  if (onCancel && typeof onCancel !== "function") return;
  const confirmAction = () => {
    window.confirm(message) ? onConfirm() : onCancel();
  }
  return confirmAction;
};

export default function UseConfirm() {
  const deleteContent = () => console.log("delete the content");
  const abort = () => console.log("aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteContent, abort);
  return (
    <div>
      <h1>5. useConfirm</h1>
      <button onClick={confirmDelete}>Delete this</button>
    </div>
  );
}
