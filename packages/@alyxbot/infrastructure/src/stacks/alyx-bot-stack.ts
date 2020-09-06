import { App, Stack } from "@aws-cdk/core";
import { Vpc } from "@aws-cdk/aws-ec2";

export default class AlyxBotStack extends Stack {
  readonly vpc: Vpc;

  constructor(scope: App, id: string) {
    super(scope, id);

    this.vpc = new Vpc(this, "Vpc", {
      natGateways: 0,
    });
  }
}
