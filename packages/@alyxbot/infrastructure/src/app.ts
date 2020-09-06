/* eslint-disable no-new */
import { App } from "@aws-cdk/core";
import AlyxBotStack from "./stacks/alyx-bot-stack";

const app = new App();
new AlyxBotStack(app, "AlyxBotStack");
