class Phone {
  constructor(
    serialNum,
    model = 'generic',
    processor = 'generic',
    ram = '2 gb',
    width = 67.3,
    height = 138.4,
    depth = 7.3,
    resolution = '750 x 1334',
  ) {
    this.serialNum = serialNum;
    this.configuration = {
      model,
      processor,
      ram,
      width,
      height,
      depth,
      resolution,
    };
  }

  dial(num) {
    console.log(`Dialing the number: ${num}`);
  }

  displayConfig() {
    console.log(this.configuration);
  }
}

module.exports = Phone;
