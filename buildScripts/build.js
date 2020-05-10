/* eslint-disable no-console */
import webpack from "webpack";
import webpackConfig from '../webpack.config.prod';
import chalk from "chalk";

console.log(chalk.blue('Generating minified bunle for production. This will take a moment'));

webpack(webpackConfig).run((err, stats) => {
   if (err) {
      console.log(chalk.red(err));
      return 1;
   }

   const jsonStats = stats.toJson();

   if (jsonStats.hasErrors) {
      console.log(chalk.yellow('Webpack genearted the following warnings: '));
      jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
   }

   console.log(`Webpack stats: ${stats}`);

   // if we got this far, the build succeeded
   console.log(chalk.green("Your app has been built for production and written to /dist!"));

   return 0;
});