# Demo Video Checklist

## 1. Open the deployed dApp

- Show the actual Privora app URL.
- Avoid showing browser tabs or files that contain secrets.

## 2. Show the privacy explanation

- Show the privacy notice on the gate/admin screen.
- Mention that the raw credential stays local, while hashes and nullifiers are public.

## 3. Connect wallet

- Connect a Midnight-compatible wallet.
- Never expose seed phrases, recovery words, or private keys.

## 4. Confirm Preprod

- Show the wallet is on Midnight Preprod.
- Show the app network label is `preprod`.

## 5. Perform the private action

- Use a demo credential only.
- Enroll the credential hash from `/admin`, then open the member gate link.

## 6. Generate proof

- Click the proof button.
- Show the loading/progress state during prepare, prove, balance, submit, and confirmation.

## 7. Successful circuit call

- Show `verify_access` succeeds only after the transaction is submitted/confirmed.
- Show the success state in the UI.

## 8. Verification evidence

- Show the transaction reference.
- Show the contract address.
- Open the Preprod explorer link when available.
