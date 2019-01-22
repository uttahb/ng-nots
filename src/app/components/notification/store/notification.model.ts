export interface Notification {
  isCloseButton: boolean;
  header: string;
  body: string;
  timeout: number;
  id: number;
  position: string;
  category: string;
}
