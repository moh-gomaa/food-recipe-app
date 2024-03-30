import { ReactNode } from "react";
import styles from "./innercontainer.module.css";

type InnerContainerProps = {
  children: ReactNode;
};
export default function InnerContainer({ children }: InnerContainerProps) {
  return <div className={styles.childContainer}>{children}</div>;
}
