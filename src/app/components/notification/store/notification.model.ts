export interface Notification {
  isVisible: boolean;
  isCloseButton: boolean;
  header: string;
  body: string;
  timeout: number;
  id: number;
}
