import _ from 'underscore'

/**
 * crea un nuevo deck
 * @param {array<string>} tiposDeCarta 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

