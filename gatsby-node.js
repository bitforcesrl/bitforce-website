// const Promise = require('bluebird')
const path = require('path');
const fs = require('fs');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  languages = ['it-IT', 'en-US'];

  visit('./src/templates/', (dir, fileDirent) => {
    if (fileDirent.name.endsWith('.tsx')) {
      const component = path.resolve(dir + fileDirent.name);
      let name = fileDirent.name.slice(0, -4);
      if (name === 'index') {
        name = '';
      }
      languages.forEach(language => {
        const languageKey = language.split('-')[0];
        return createPage({
          path: `/${languageKey}/${name}`,
          component,
          context: {
            language,
            languageKey,
          },
        });
      });
    }
  });
};

function visit(dir, cb) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  dirents.forEach(dirent => {
    if (dirent.isFile()) {
      cb(dir, dirent);
    } else if (dirent.isDirectory()) {
      visit(dir + dirent.name + '/');
    }
  });
}
