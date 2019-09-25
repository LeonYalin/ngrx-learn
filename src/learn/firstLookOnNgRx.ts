import { delimeterMsg, logF, log } from 'src/learn/utils';

function installations() {
  log('NgRx contains set of packages, needed to be installed separatelly. First, install the schematics:"npm install @ngrx/schematics --save-dev"',
    'Next, install the other pieces: "npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools --save"',
    'Finally, Add the schematics commands as aliases to cli: "ng config cli.defaultCollection @ngrx/schematics"');
}

function generateStorePieces() {
  log('Now we can use the schem,atics to generate the NgRx pieces.',
    'First, generate a store: "npx ng g store State --root --module app.module"',
    'Next, generate a reducer: "npx ng g reducer persons/persons --reducers ../reducers/index.ts --spec false"',
    'generate an action: "npx ng g action persons/persons"',
    'generate an effect "npx ng g effect persons/persons -m persons/persons.module --api"',
    'generate selectors from the store:',
    `
      export const selectPersons = createFeatureSelector<AppState, State>(personsFeatureKey);
      export const selectPersonsItems = createSelector(
        selectPersons,
        (state: State) => state.items
      );
      export const selectPersonsError = createSelector(
        selectPersons,
        (state: State) => state.error
      );
    `);
}

export default function firstLookOnNgRx() {
  delimeterMsg('FIRST LOOK AT NGRX');
  logF(installations);
  logF(generateStorePieces);
}
