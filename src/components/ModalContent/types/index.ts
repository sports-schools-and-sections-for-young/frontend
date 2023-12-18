export enum ModalType {
  DELETE,
  EXIT,
  INFO,
  SUCCSESS,
  FAILURE,
}

export interface IModalContentProps {
  type?: ModalType;
  title: string;
  description?: string;

  closeModal: () => void;
  back?: () => void;
  action: () => void;
  actionDescription: string;
}
