module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'template/component.template.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{name}}.styles.ts',
        templateFile: 'template/styles.template.ts.hbs',
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{name}}.stories.tsx',
        templateFile: 'template/stories.template.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../src/components/{{pascalCase name}}/{{name}}.test.tsx',
        templateFile: 'template/test.template.tsx.hbs',
      },
    ],
  });
};
