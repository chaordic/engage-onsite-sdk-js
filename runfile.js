import { run, help, options } from 'runjs';

export const lint = () => run('eslint .');

export const test = function test() {
  const watch = options(this).watch ? '' : '--single-run';
  run(`karma start ${watch}`);
};

export const build = function build() {
  const config = options(this).production ? 'prod' : 'dev';
  run(`webpack --config webpack.${config}.js`);
};

export const release = async () => {
  await run('run lint', { async: true });
  await run('run test', { async: true });
  run('standard-version');
};

export const deploy = async () => {
  await run('run build --production', { async: true });
  run('npm publish');
};

help(lint, 'Run eslint');

help(test, {
  description: 'Test JS files',
  options: {
    watch: 'Run tests in a watch mode',
  },
});

help(build, 'Build JS files');

help(release, 'Create a new release');

help(deploy, {
  description: 'Run "npm publish", is necessary to be logged in by "npm login"',
});
