// Model for a current notification item.
export interface Notification {
  isCloseButton: boolean;
  header: string;
  body: string;
  timeout: number;
  id: number;
  position: string;
  category: string;
}
