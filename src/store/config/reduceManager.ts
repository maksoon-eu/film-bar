import { Action, combineReducers, Reducer } from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(
    initialReducers: Partial<Record<StateSchemaKey, Reducer>>
): ReducerManager {
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers as Record<StateSchemaKey, Reducer>);
    let keysToRemove: StateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StateSchema | undefined, action: Action) => {
            if (keysToRemove.length > 0) {
                state = { ...state } as StateSchema;
                for (const key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers as Record<StateSchemaKey, Reducer>);
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers as Record<StateSchemaKey, Reducer>);
        },
    };
}
