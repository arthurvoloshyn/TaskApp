import React from 'react';

export type ToDoInputProps = {
  onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value?: string;
};
