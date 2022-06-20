import { TStyles } from "../../../../../entities/TStyles";

export const styles: TStyles = {
    container: {
        marginTop: '20px',
    },
    name: {
        textAlign: 'center',
    },
    card: {
        display: 'flex',
        width: '300px',
        height: '300px',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '5px solid lightgray',
    },
    rating: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 64,
    },
    ratingText: {
        position: 'absolute',

    },
    description: {
        margin: '20px',
    },
    descriptionItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
    }
};