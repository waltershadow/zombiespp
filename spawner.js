import GameState from "./game-state";

export default class Spawner {
  constructor({ app, create }) {
    this.app = app;
    const spawnInterval = 100;
    this.maxSpawns = 5;
    this.create = create;
    this.spawns = [];
    setInterval(() => this.spawn(), spawnInterval);
  }
  spawn() {
    if (this.app.gameState !== GameState.RUNNING) return;
    if (this.spawns.length >= this.maxSpawns) return;
    let s = this.create();
    this.spawns.push(s);
  }
}
