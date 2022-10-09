module.exports = {
    '*.ts?(x)': [
      'prettier --write',
      'eslint --fix',
      () => 'tsc -p tsconfig.json --noEmit',
    ],
  };
  