import { run, help, options } from 'runjs';

export const test = function test1() {
  const watch = options(this).watch ? '' : '--single-run';
  run(`karma start ${watch}`);
};

export const build = () => run('webpack');

export const release = () => run('standard-version');

help(test, {
  description: 'Test JS files',
  options: {
    watch: 'Run tests in a watch mode',
  },
});

help(build, 'Build JS files');
