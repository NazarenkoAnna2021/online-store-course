import { TStyles } from "../../../../../entities/TStyles";

export const styles: TStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: window.innerHeight - 54,
    },
    card: {
        width: 600,
        padding: 50
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        margin: 'auto'
    },
    buttonsBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px'
    },
};