export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {
    console.error('this is an error');
    betCallback(0);
  }

  public showdown(gameState: any): void {

  }
};

export default Player;
