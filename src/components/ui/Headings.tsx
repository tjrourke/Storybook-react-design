
import {createUseStyles} from "react-jss";
import { DefaultTheme } from "../../utils/themes";
const headingStyles = DefaultTheme.headings;

const useStyles = createUseStyles({
    portalHeading: headingStyles.portalHeading,
    heading1: headingStyles.h1,
    heading2: headingStyles.h2,
    heading3: headingStyles.h3,
    heading4: headingStyles.h4,
    heading5: headingStyles.h5,
    heading6: headingStyles.h6
});

export const PortalHeading = (props: any) => {
    const styles = useStyles();
    return <h1 className={styles.portalHeading}><img
    alt=""
    src="/BHHC_logo.png"
    width="40"
    height="40"
    className="d-inline-block align-middle"
  />{" "}{props.children}</h1>;
}

export const Heading1 = (props: any) => {
    const styles = useStyles();
    return <h1 className={styles.heading1}>{props.children}</h1>;
}

export const Heading2 = (props: any) => {
    const styles = useStyles();
    return <h2 className={styles.heading2}>{props.children}</h2>;
}

export const Heading3 = (props: any) => {
    const styles = useStyles();
    return <h3 className={styles.heading3}>{props.children}</h3>;
}

export const Heading4 = (props: any) => {
    const styles = useStyles();
    return <h4 className={styles.heading4}>{props.children}</h4>;
}

export const Heading5 = (props: any) => {
    const styles = useStyles();
    return <h5 className={styles.heading5}>{props.children}</h5>;
}

export const Heading6 = (props: any) => {
    const styles = useStyles();
    return <h6 className={styles.heading6}>{props.children}</h6>;
}
