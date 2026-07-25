import type { ReactNode } from "react";
import { create } from "zustand";
import type { Breakpoint } from "@mui/material/styles";

export interface ModalSetting {
  title?: string;
  size: Breakpoint;
  content: ReactNode;
  buttons?: ReactNode;
}

export interface ModalStateType {
  isModalOpen: boolean;
  modalSetting: ModalSetting;
  openModal: () => void;
  closeModal: () => void;
  setModalSetting: (setting: ModalSetting) => void;
}

export const useModalStore = create<ModalStateType>((set) => ({
  isModalOpen: false,
  modalSetting: { title: "", size: "sm", content: "" },
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setModalSetting: (setting) =>
    set((state) => ({ modalSetting: { ...state.modalSetting, ...setting } })),
}));
