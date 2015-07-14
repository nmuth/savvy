/**
 * card-list/index.js
 *
 * Directive for displaying a card.
 */

import angular from 'angular';
import Card from '../../api/card';
const template = require('./template.html');

export default angular.module('components')
.directive('cardList', [cardList]);

function cardList() {
  return {
    scope: {
      cards: '='
    },

    template,

    link: (scope) => {
      scope.deleteCard = (card) => {
        Card.actions.delete(card);
      };
    }
  };
}