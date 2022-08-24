import userReducer from '../src/client/reducers/userReducer';

describe('Reducer - Initial', () => {
    let state;

    beforeEach(() => {
        state = {
            loggedIn: false
        }
    })

    describe('default state', () => {
        it('returns default state when given undefined input', () => {
            expect(userReducer(state, {type: 'undefined'})).toEqual(state);
        })

        it('retruns default state when given nonsensical input', () => {
            expect(userReducer(state, {type: 'pizza'})).toEqual(state);
        })
    })

    describe('Logging in', () => {
        it('updates state to loggedIn:true', () => {
            const action = { type: 'LOG_IN' };
            const stateLoggedIn = state;
            stateLoggedIn.loggedIn = true;

            expect(userReducer(state, action)).toEqual(stateLoggedIn);
        })
    })
})