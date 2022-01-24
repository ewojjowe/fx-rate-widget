<p align="center">
 <img src="https://p79.f0.n0.cdn.getcloudapp.com/items/RBuyLQkw/c7c57bda-cb13-46ec-bd85-1b6c5e17279b.jpeg?source=viewer&v=fdee41d58067612cc5641d9424d77a7c" alt="FX Rate Widget"></a>
</p>

<h3 align="center">The Documentation Compendium</h3>

---

## Table of Contents

- [Deliverables](#deliverables)
- [Acceptance Criteria](#acceptance_criteria)
- [How To Run And Manual Test](#how_to_test)
- [Running Unit Test](#run_unit_test)
- [Running E2E Test](#run_e2e_test)


## Deliverables: <a name = "deliverables"></a>

- Github repo containing the code to the solution
- Document any assumptions/considerations that you have made
- Instructions on how to run the project
- All relevant tests
- You want people to help out. If you don’t have documentation, you will miss out on a whole class of contributors
- You want to be a better writer


## Acceptance Criteria: <a name = "acceptance_criteria"></a>

- Should show a widget component with currency rate calculator
- Should show component for **Buy** and **Sell** calculator
- Should show the rate of selected currency equivalent to base currency (default to EUR)
- Should be able to select currency
- Should be able to input amount
- Should show the total calculated value
- Should be able to update the total value if currency or amount is changed or updated

## How To Run And Manual Test: <a name = "how_to_test"></a>

Clone the repository, navigate to `fx-rate-widget` folder and run `npm install` to install all dependencies.
Run `npm run start` or `ng serve --open` for a dev server. Navigate to http://localhost:4200/ and test base on the acceptance criteria posted above.

## Running Unit Tests:  <a name = "run_unit_test"></a>

**Note before testing**

*Please update first the **expectedData** on the `fx-rates.service.specs.ts` as it will be outdated during testing.
The `exchangeratesapi` returned data contains date and timestamp on it which cause it to be outdated. You can get the latest
data by clicking this link [here](http://api.exchangeratesapi.io/v1/latest?access_key=f1fd1f5ce0b895913a96900d70805630&symbols=USD&format=1)*

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running E2E Tests: <a name = "run_e2e_test"></a>

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

