Blockly.Blocks['ads1115_begin'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("adc1", null, ["Plugin.ADC"], ["Plugin.ADC"]), "instance")
            .appendField("begin (SDA")
            .appendField(new Blockly.FieldTextInput("21"), "SDA")
            .appendField(", SCL")
            .appendField(new Blockly.FieldTextInput("22"), "SCL")
            .appendField(") Address")
            .appendField(new Blockly.FieldDropdown([["0x48", "0x48"], ["0x49", "0x49"], ["0x4A ", "0x4A "], ["0x4B", "0x4B"]]), "ADDR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ads1115_set_gain'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("adc1", null, ["Plugin.ADC"], ["Plugin.ADC"]), "instance")
            .appendField("set Gain")
            .appendField(new Blockly.FieldDropdown([
                ["GAIN_TWOTHIRDS", "GAIN_TWOTHIRDS"],
                ["GAIN_ONE", "GAIN_ONE"],
                ["GAIN_TWO ", "GAIN_TWO"],
                ["GAIN_FOUR", "GAIN_FOUR"],
                ["GAIN_EIGHT", "GAIN_EIGHT"],
                ["GAIN_SIXTEEN", "GAIN_SIXTEEN"]
            ]), "GAIN");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ads1115_read_adc_single'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("adc1", null, ["Plugin.ADC"], ["Plugin.ADC"]), "instance")
            .appendField("read SingleEnded ADC")
            .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2 ", "2 "], ["3", "3"]]), "CHANNEL");
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ads1115_read_adc_differential'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("adc1", null, ["Plugin.ADC"], ["Plugin.ADC"]), "instance")
            .appendField("read Differential")
            .appendField(new Blockly.FieldDropdown([["0 and 1", "readADC_Differential_0_1"], ["2 and 3", "readADC_Differential_2_3"]]), "CHANNEL");
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ads1115_read_adc_differential_mV'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("adc1", null, ["Plugin.ADC"], ["Plugin.ADC"]), "instance")
            .appendField("read Differential (mV)")
            .appendField(new Blockly.FieldDropdown([["0 and 1", "readADC_Differential_0_1"], ["2 and 3", "readADC_Differential_2_3"]]), "CHANNEL");
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['ads1115_read_adc_comparator'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("adc1", null, ["Plugin.ADC"], ["Plugin.ADC"]), "instance")
            .appendField("read Comparator ADC")
            .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2 ", "2 "], ["3", "3"]]), "CHANNEL")
            .appendField(" threshold")
            .appendField(new Blockly.FieldNumber(1000), "THRESSHOLD")
            .appendField("(0-65536)");
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ads1115_read_alert_status'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("adc1", null, ["Plugin.ADC"], ["Plugin.ADC"]), "instance")
            .appendField("alert status pin")
            .appendField(new Blockly.FieldNumber(23), "ALRT");
        this.setOutput(true, "Number");
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};