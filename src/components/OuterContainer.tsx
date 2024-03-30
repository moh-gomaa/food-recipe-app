import { PropsWithChildren, ReactNode } from "react";
import styles from "./outercontainer.module.css";

type OuterContainerProps = {
  children: PropsWithChildren<ReactNode>;
};

export default function OuterContainer({ children }: OuterContainerProps) {
  return <div className={styles.parentContainer}>{children}</div>;
}
