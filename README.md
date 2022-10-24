# Send multicast 

This project is send email exercise using various mail providers.

For this project, we use 2 mail providers and once mail sending failed using one mail provider, it switchs to use another mail provider.

## How to RUN

Use `yarn start` or `npm run` to start both of api and frontend.

Please reference `.env.sample` to make `.env` file.

## Libraries Used and Why

### api

`nodemailer`: node module for email sending.

### frontend

`axios`: a promise-based HTTP Client for node.js.

`formik`, `yup`: form validation

## A screenshot image

![a screenshot image](https://github.com/kehyshow/email-multicast/blob/main/readme.png?raw=true)

## What you would do if you had more time

Because of deadline, I build only simple frontend that has variable inputs.

If I have more time, 

1. I'll make UI more easier to use, and use database to get user list (user name, user email) that emails to be sent.

2. Also for now, there are only 2 mail providers, but if we use `N` mail providers, I can switch it sequently.

3. I didn't test to send large amount of emails, there's no enough test.
