import { createContext, useState } from 'react';

export const DialogContext = createContext();

export function DialogProvider({ children }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const value = {
    dialogOpen,
    openDialog: () => setDialogOpen(true),
    closeDialog: () => setDialogOpen(false),
  };

  return (
    <DialogContext.Provider value={value}>
      {children}
    </DialogContext.Provider>
  );
}
