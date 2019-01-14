'use strict';

goog.provide('Blockly.C.output');

goog.require('Blockly.C');


Blockly.C['blink_per_ms'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'paomadeng('+value_time+');\n';
  return code;
};