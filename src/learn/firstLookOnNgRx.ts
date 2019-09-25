import { delimeterMsg, logF, log } from 'src/learn/utils';

function installations() {
  log('NgRx contains set of packages, needed to be installed separatelly. First, install the schematics:"npm install @ngrx/schematics --save-dev"',
    'Next, install the other pieces: "npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools --save"',
    'Finally, Add the schematics commands as aliases to cli: "ng config cli.defaultCollection @ngrx/schematics"');
}

function generateStorePieces() {
  log('Now we can use the schem,atics to generate the NgRx pieces. ');
}

export default function firstLookOnNgRx() {
  delimeterMsg('FIRST LOOK AT NGRX');
  logF(installations);
  logF(generateStorePieces);
}
