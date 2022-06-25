# Contact List App

## Live Demo visit: [NearestContact](https://habibu.github.io/crud-tutorial/)

This was developed after learning this tutorial [building a CRUD dApp](https://docs.near.org/docs/tutorials/apps/todos-crud-app) and [NEAR Development 101 program, by deacde](https://dacade.org/communities/near/courses/near-101)

# Notes

The application consist of two distinct layers:

- Smart contract (in web2 we may refer to this as server-side or back-end)
- Web app (in web2 we may refer to this as client-side or front-end)

## Working

**Contracts: `/contact-list-contract/`**
1. to install dependencies `cd contact-list-contract && yarn`
2. after that run tests - `yarn test`
3. compile the contract - `yarn asb`
4. deploy the contract - `near deploy --accountId=your_account.testnet --wasmFile=build/release/contact-list-contract.wasm`
 
**Web App Tests: `/contact-list-near/`**
1. to install dependencies `cd contact-list-near && yarn`
2. to start the server - `yarn start`

## Notes

- If you deploy the contract, make sure to edit the `CONTRACT_NAME` found in `contact-list-near/src/utils/config.js` to match your deployed contract. 
- You must be logged in to interact with the app. If you don't have a NEAR wallet, click [here](https://wallet.testnet.near.org/) to make one.
