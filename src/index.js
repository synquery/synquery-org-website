import _ from 'lodash';
import template from './templates/docs.jsx';
function component() {
  
  const element = document.createElement('div');

  // Lodash, now imported by this script
  console.log(template);
  element.innerHTML = _.join(['Hello', 'webpack2z1'], ' ');
  return element;
  
}
document.body.appendChild(component());