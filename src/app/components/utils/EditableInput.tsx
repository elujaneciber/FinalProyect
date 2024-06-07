"use client";
import { useDebouncedCallback } from "use-debounce";
import { FirestoreDescriptionRepository } from "@firebase/dao";
import { useRef, useState } from "react";

export function EditableInput({
  field,
  defaultValue,
}: {
  field: string;
  defaultValue: string;
}) {
  const firestoreDescription = new FirestoreDescriptionRepository();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const turnOnEditMode = () => {
    setIsEditMode(!isEditMode);
    inputRef.current?.focus();
  };

  const handleChange = useDebouncedCallback((value: string) => {
    const content = value;
    firestoreDescription.saveById({ [field]: content });
  }, 500);

  return (
    <textarea
      ref={inputRef}
      readOnly={!isEditMode}
      onClick={turnOnEditMode}
      defaultValue={defaultValue}
      onChange={(e) => handleChange(e.currentTarget.value)}
      className="text-gray-500 text-xl w-full"
      rows={8}
      style={{ resize: "none" }}
    />
  );
}
