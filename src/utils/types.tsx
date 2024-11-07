import React from "react";

interface INote {
  title: string;
  content: string;
  attachment?: string;
  backgroundColor?: string;
  textColor?: string;
  favourite?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface INoteList {
  notes: INote[];
}
export type NoteCardProps = INote & React.HTMLAttributes<HTMLDivElement>;
