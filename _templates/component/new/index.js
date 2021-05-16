module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the component name?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory(Optional)',
      },
    ];
    return inquirer.prompt(questions).then(answers => {
      const { component_name, dir } = answers;
      const indexPath = `${dir ? `src/components/${dir}/components` : 'src/components'}`;
      const path = `${dir ? `${dir}/components/` : ''}${component_name}`;
      const absPath = `src/components/${path}`;
      return { ...answers, indexPath, absPath };
    });
  },
};
