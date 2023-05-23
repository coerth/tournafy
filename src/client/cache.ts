import { InMemoryCache, Reference, makeVar } from '@apollo/client';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
          fields: {
            isLoggedIn: {
              read() {
                return isLoggedInVar();
              },
            },
            loggedInPlayer: {
              read() {
                return loggedInPlayerVar();
              },
            },
            hasAccess: {
              read() {
                return hasAccessVar()
              }
            }
}
}
}
}
);

export const isLoggedInVar = makeVar(!!localStorage.getItem("auth:token"))
export const loggedInPlayerVar = makeVar(localStorage.getItem("player"))
export const hasAccessVar = makeVar(false)