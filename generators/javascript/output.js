'use strict';

goog.provide('Blockly.JavaScript.output');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['blink_per_ms'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'paomadeng('+value_time+');\n';
  return code;
};