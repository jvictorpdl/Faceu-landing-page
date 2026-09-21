import * as React from "react";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned action row. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Max width in px. Default 560. */
  width?: number;
}
export declare function Modal(props: ModalProps): JSX.Element;
