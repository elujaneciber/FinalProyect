"use client";
import { useDebouncedCallback } from "use-debounce";
import { FirestoreUpdateDataRepository } from "@firebase/dao";
import { useRef, useState } from "react";

export function EditableInput({
  className,
  collectionId,
  defaultValue,
  docId,
  field,
  rows,
}: {
  className: string;
  collectionId: string;
  defaultValue: string;
  docId: string;
  field: string;
  rows: number;
}) {
  const firestoreUpdateData = new FirestoreUpdateDataRepository();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const turnOnEditMode = () => {
    setIsEditMode(!isEditMode);
    inputRef.current?.focus();
  };

  const handleChange = useDebouncedCallback((value: string) => {
    firestoreUpdateData.saveById(collectionId, docId, {
      [field]: value,
    });
  }, 500);

  return (
    <textarea
      name={field}
      ref={inputRef}
      readOnly={!isEditMode}
      onClick={turnOnEditMode}
      defaultValue={defaultValue}
      onChange={(e) => handleChange(e.currentTarget.value)}
      className={className}
      rows={rows}
      style={{ resize: "none" }}
    />
  );
}
