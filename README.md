# cwb-auth

Aug 2, 2021

## Auth

Web Component provides

- **logging in** - with Firebase Auth
- **roles** - maintaining in local state: Copy of user's role object
- **logging out**
- future: anything to do with profile maintenance

## About the Roles Object

There can be confusion about what the roles object is and how it is created and consumed. This may clear up some of this:

- Firestore maintains a "roles" object under /users/{userid}/roles
- How this object is structured or maintained is not the concern of this component
- How this object is consumed by the app is not the concern of this component
- The function of this component as it relates to the roles object is ONLY to make sure that the client has a copy of the latest roles object in the client state at all times.

## Notes about documentation

See https://github.com/petecarapetyan/cwb-mpa-test-site/blob/main/README.md