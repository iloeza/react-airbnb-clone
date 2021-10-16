export const sizes = {
    movil: '480px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1024px'
};

export const devices = {
    movil: ( styles ) => {
        return `@media ( min-width: ${ sizes.movil } ) {
            ${ styles }
        }`
    },
    tablet: ( styles ) => {
        return `@media ( min-width: ${ sizes.tablet } ) {
            ${ styles }
        }`
    },
    laptop: ( styles ) => {
        return `@media ( min-width: ${ sizes.laptop } ) {
            ${ styles }
        }`
    },
    desktop: ( styles ) => {
        return `@media ( min-width: ${ sizes.desktop } ) {
            ${ styles }
        }`
    }
};