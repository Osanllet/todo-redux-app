import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function filterReducer(state = estadoInicial,
                              accion: fromFiltro.Acciones): fromFiltro.filtrosValidos {
    switch (accion.type) {
        case fromFiltro.SET_FILTER:
            return accion.filtro;

        default:
            return state;
    }
}
