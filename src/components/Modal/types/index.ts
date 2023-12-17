export enum ModalType {
  DELETE,
  EXIT,
  INFO,
}

export interface IModalProps {
  type?: ModalType;
  title: string;
  description: string;
  closeModal: () => void;
  back?: () => void;
  action: () => void;
  actionDescription: string;
}
