(function() {

/**
 * Interface VS Type alias
 * 1. Type Alias union cannot be used for `implements`
 * 2. Type Alias union cannot be used for `extends`
 * 3. Declaration merging doesn't work with type alias
 */


interface AttackFunction {
  (opponent: { alias: string; health: number }, attackWidth: number): number; // function
}

interface ComicBookCharacter {
  secretIdentity: string;
  readonly alias: string; // readonly
  health: number;
  name?: string;          // not required
  attackFunction?: AttackFunction;
}

interface Spawn extends ComicBookCharacter {
  jump: number;
}

const superHero: { secretIdentity: string; alias: string; health: number } = {
  secretIdentity: '1',
  alias: '1',
  health: 1
};
const superVillain: ComicBookCharacter = {
  secretIdentity: '1',
  alias: '1',
  health: 1,
  name: 'hi'
};

const spawn: Spawn = {
  name: 'Spawn',
  alias: 'Spown',
  health: 23,
  jump: 235,
  secretIdentity: 'hello'
}

})();