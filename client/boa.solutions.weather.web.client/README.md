# Web Client for Bank Of Americe Wearher Service.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## How to run

1. Make suere the Server Side(API) is up and running at `http://localhost:33033/api`.
2. Run `npm start` and  navigate to `http://localhost:4200/`.

> If you get API errors, check the API readme as the problem might be related to free trial AccuWeather account.

## Developer's notes

- Added HMR, shame it is not added by default.
- We could extract `working` to redux or some shared service to reduce the nesting and simplify the design.
- Error handling is simple by design.
- We could setup TS paths in `tsconfig.json` to get the rid of things like `import { CityDto } from '../../../../_api/city.dto';` -> `import { CityDto } from '@api/city.dto';`
