import { Command } from "commander";
const program = new Command();
import key from "../commands/key.js";

program
  .command("set")
  .description("Set API Key -- Get at https://coingecko.com")
  .action(key.set);

program.command("show").description("Show API Key").action(key.show);
program.command("remove").description("Remove API Key").action(key.remove);

program.parse(process.argv);
