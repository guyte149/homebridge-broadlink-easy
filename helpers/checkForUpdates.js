const versionCheck = require('github-version-checker');
const pkg = require('../package.json'); 

const options = {
  repo: 'homebridge-broadlink-easy', 
  owner: 'aceslick911',
  currentVersion: pkg.version
};


const checkForUpdates = () => {
  versionCheck (options, (update, error) => { 
    // if (error) throw error;
    if (update) { 
      console.log(`\x1b[32m[UPDATE AVAILABLE] \x1b[0mVersion ${update.tag_name} of homebridge-broadlink-easy is available. The changelog can be found here: \x1b[4mhttps://github.com/aceslick911/homebridge-broadlink-easy/blob/master/CHANGELOG.md\x1b[0m`);
    }
  });
}

module.exports = checkForUpdates;
