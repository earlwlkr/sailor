import axios from 'axios';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const BACKEND_URL = 'https://sailor-bloom.herokuapp.com';

const providers = [
  Providers.Credentials({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      identifier: { label: 'Username', type: 'text', placeholder: 'jsmith' },
      password: { label: 'Password', type: 'password' },
    },
    authorize: async (credentials) => {
      const { email, password } = credentials;
      const payload = { identifier: email, password };
      const { data } = await axios.post(BACKEND_URL + '/auth/local', payload);
      const { user } = data;

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return Promise.resolve(user);
      } else {
        // If you return null or false then the credentials will be rejected
        return Promise.resolve(null);
        // You can also Reject this callback with an Error or with a URL:
        // return Promise.reject(new Error('error message')) // Redirect to error page
        // return Promise.reject('/path/to/redirect')        // Redirect to a URL
      }
    },
  }),
];

const callbacks = {};

// callbacks.signIn = async function signIn(user, account, metadata) {
//   if (account.provider === 'github') {
//     const githubUser = {
//       id: metadata.id,
//       login: metadata.login,
//       name: metadata.name,
//       avatar: user.image,
//     };

//     user.accessToken = await getTokenFromYourAPIServer('github', githubUser);
//     return true;
//   }

//   return false;
// };

callbacks.jwt = async function jwt(token, user) {
  if (user) {
    token = { accessToken: user.accessToken };
  }

  return token;
};

// callbacks.session = async function session(session, token) {
//   session.accessToken = token.accessToken;
//   return session;
// };

const options = {
  providers,
  callbacks,
  pages: {
    signIn: '/auth/credentials-signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: null // If set, new users will be directed here on first sign in
  },
};

export default (req, res) => NextAuth(req, res, options);
