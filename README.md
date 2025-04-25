# Lambda Calculator Example with TS

A basic implementation of a calculator with support for multiplications of high precision numbers (Decimals),
based on a shared library written in TypeScript.


## How to run

1. Install dependencies

    ```sh
    yarn install
    ```

2. Run tests

    ```sh
    yarn test
    ```


## Deploy to AWS

```sh
cd src
```

1. Login to AWS / AWS SSO (replace `YOUR-PROFILE-NAME`)

    ```sh
    # List existing profile
    aws configure list-profiles
    # Create profile if not existing
    aws configure sso --profile YOUR-PROFILE-NAME
    # Login
    aws sso login --profile YOUR-PROFILE-NAME
    export AWS_PROFILE=YOUR-PROFILE-NAME
    ```

2. Build SAM application

    ```sh
    sam build
    ```

3. Deploy to AWS

    ```sh
    sam deploy
    ```


## Test execution

Execute the Lambda with the following event:

```json
{
  "body": "{ \"multiplicand\": 5,  \"multiplicator\": 7  }"
}
```
Output:
```
"35"
```

Test support for Decimals:

```json
{
  "body": "{ \"multiplicand\": 12345678910.987654321,  \"multiplicator\": 22334455667788.88776655443322 }"
}
```
Output:
```
"2.7573401832620995968e+23"
```


## Cleanup

Remove SAM application

```sh
sam delete
```