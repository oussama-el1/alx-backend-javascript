/**
 * Displays a message on the STDOUT.
 * @param {String} str message to display in the STDOUT.
 * @author oussama ELHADRAOUI <https://github.com/oussama-el1>
 */

const displayMessage = (str) => {
  process.stdout.write(str);
};

module.exports = displayMessage;
