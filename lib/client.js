window.__ModuleLoader__.load({
	id: "dsh-plugin-nintendo",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/utils.js
		function copyArrayElements(src, srcPos, dest, destPos, length) {
			for (let i = 0; i < length; ++i) dest[destPos + i] = src[srcPos + i];
		}
		function fromJSON(obj, state) {
			const props = obj.constructor.JSON_PROPERTIES;
			for (let i = 0; i < props.length; i++) {
				const prop = props[i];
				const current = obj[prop];
				const value = state[prop];
				if (ArrayBuffer.isView(current) && Array.isArray(value)) current.set(value);
				else obj[prop] = value;
			}
		}
		function toJSON(obj) {
			const state = {};
			const props = obj.constructor.JSON_PROPERTIES;
			for (let i = 0; i < props.length; i++) {
				const prop = props[i];
				const value = obj[prop];
				state[prop] = ArrayBuffer.isView(value) ? Array.from(value) : value;
			}
			return state;
		}
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/cpu.js
		const ADDR_ZP = 0;
		const ADDR_REL = 1;
		const ADDR_IMP = 2;
		const ADDR_ABS = 3;
		const ADDR_ACC = 4;
		const ADDR_IMM = 5;
		const ADDR_ZPX = 6;
		const ADDR_ZPY = 7;
		const ADDR_ABSX = 8;
		const ADDR_ABSY = 9;
		const ADDR_PREIDXIND = 10;
		const ADDR_POSTIDXIND = 11;
		const ADDR_INDABS = 12;
		const INS_ADC = 0;
		const INS_AND = 1;
		const INS_ASL = 2;
		const INS_BCC = 3;
		const INS_BCS = 4;
		const INS_BEQ = 5;
		const INS_BIT = 6;
		const INS_BMI = 7;
		const INS_BNE = 8;
		const INS_BPL = 9;
		const INS_BRK = 10;
		const INS_BVC = 11;
		const INS_BVS = 12;
		const INS_CLC = 13;
		const INS_CLD = 14;
		const INS_CLI = 15;
		const INS_CLV = 16;
		const INS_CMP = 17;
		const INS_CPX = 18;
		const INS_CPY = 19;
		const INS_DEC = 20;
		const INS_DEX = 21;
		const INS_DEY = 22;
		const INS_EOR = 23;
		const INS_INC = 24;
		const INS_INX = 25;
		const INS_INY = 26;
		const INS_JMP = 27;
		const INS_JSR = 28;
		const INS_LDA = 29;
		const INS_LDX = 30;
		const INS_LDY = 31;
		const INS_LSR = 32;
		const INS_NOP = 33;
		const INS_ORA = 34;
		const INS_PHA = 35;
		const INS_PHP = 36;
		const INS_PLA = 37;
		const INS_PLP = 38;
		const INS_ROL = 39;
		const INS_ROR = 40;
		const INS_RTI = 41;
		const INS_RTS = 42;
		const INS_SBC = 43;
		const INS_SEC = 44;
		const INS_SED = 45;
		const INS_SEI = 46;
		const INS_STA = 47;
		const INS_STX = 48;
		const INS_STY = 49;
		const INS_TAX = 50;
		const INS_TAY = 51;
		const INS_TSX = 52;
		const INS_TXA = 53;
		const INS_TXS = 54;
		const INS_TYA = 55;
		const INS_ALR = 56;
		const INS_ANC = 57;
		const INS_ARR = 58;
		const INS_AXS = 59;
		const INS_LAX = 60;
		const INS_SAX = 61;
		const INS_DCP = 62;
		const INS_ISC = 63;
		const INS_RLA = 64;
		const INS_RRA = 65;
		const INS_SLO = 66;
		const INS_SRE = 67;
		const INS_SKB = 68;
		const INS_IGN = 69;
		const INS_SHA = 71;
		const INS_SHS = 72;
		const INS_SHY = 73;
		const INS_SHX = 74;
		const INS_LAE = 75;
		const INS_ANE = 76;
		const INS_LXA = 77;
		const INVALID_OPCODE = {
			ins: -1,
			mode: 0,
			size: 1,
			cycles: 2
		};
		const OPCODE_TABLE = {
			105: {
				ins: INS_ADC,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			101: {
				ins: INS_ADC,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			117: {
				ins: INS_ADC,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			109: {
				ins: INS_ADC,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			125: {
				ins: INS_ADC,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			121: {
				ins: INS_ADC,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			97: {
				ins: INS_ADC,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			113: {
				ins: INS_ADC,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 5
			},
			41: {
				ins: INS_AND,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			37: {
				ins: INS_AND,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			53: {
				ins: INS_AND,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			45: {
				ins: INS_AND,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			61: {
				ins: INS_AND,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			57: {
				ins: INS_AND,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			33: {
				ins: INS_AND,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			49: {
				ins: INS_AND,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 5
			},
			10: {
				ins: INS_ASL,
				mode: ADDR_ACC,
				size: 1,
				cycles: 2
			},
			6: {
				ins: INS_ASL,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			22: {
				ins: INS_ASL,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			14: {
				ins: INS_ASL,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			30: {
				ins: INS_ASL,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			144: {
				ins: INS_BCC,
				mode: ADDR_REL,
				size: 2,
				cycles: 2
			},
			176: {
				ins: INS_BCS,
				mode: ADDR_REL,
				size: 2,
				cycles: 2
			},
			240: {
				ins: INS_BEQ,
				mode: ADDR_REL,
				size: 2,
				cycles: 2
			},
			48: {
				ins: INS_BMI,
				mode: ADDR_REL,
				size: 2,
				cycles: 2
			},
			208: {
				ins: INS_BNE,
				mode: ADDR_REL,
				size: 2,
				cycles: 2
			},
			16: {
				ins: INS_BPL,
				mode: ADDR_REL,
				size: 2,
				cycles: 2
			},
			80: {
				ins: INS_BVC,
				mode: ADDR_REL,
				size: 2,
				cycles: 2
			},
			112: {
				ins: INS_BVS,
				mode: ADDR_REL,
				size: 2,
				cycles: 2
			},
			36: {
				ins: INS_BIT,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			44: {
				ins: INS_BIT,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			0: {
				ins: INS_BRK,
				mode: ADDR_IMP,
				size: 1,
				cycles: 7
			},
			24: {
				ins: INS_CLC,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			216: {
				ins: INS_CLD,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			88: {
				ins: INS_CLI,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			184: {
				ins: INS_CLV,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			201: {
				ins: INS_CMP,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			197: {
				ins: INS_CMP,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			213: {
				ins: INS_CMP,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			205: {
				ins: INS_CMP,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			221: {
				ins: INS_CMP,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			217: {
				ins: INS_CMP,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			193: {
				ins: INS_CMP,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			209: {
				ins: INS_CMP,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 5
			},
			224: {
				ins: INS_CPX,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			228: {
				ins: INS_CPX,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			236: {
				ins: INS_CPX,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			192: {
				ins: INS_CPY,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			196: {
				ins: INS_CPY,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			204: {
				ins: INS_CPY,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			198: {
				ins: INS_DEC,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			214: {
				ins: INS_DEC,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			206: {
				ins: INS_DEC,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			222: {
				ins: INS_DEC,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			202: {
				ins: INS_DEX,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			136: {
				ins: INS_DEY,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			73: {
				ins: INS_EOR,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			69: {
				ins: INS_EOR,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			85: {
				ins: INS_EOR,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			77: {
				ins: INS_EOR,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			93: {
				ins: INS_EOR,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			89: {
				ins: INS_EOR,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			65: {
				ins: INS_EOR,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			81: {
				ins: INS_EOR,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 5
			},
			230: {
				ins: INS_INC,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			246: {
				ins: INS_INC,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			238: {
				ins: INS_INC,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			254: {
				ins: INS_INC,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			232: {
				ins: INS_INX,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			200: {
				ins: INS_INY,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			76: {
				ins: INS_JMP,
				mode: ADDR_ABS,
				size: 3,
				cycles: 3
			},
			108: {
				ins: INS_JMP,
				mode: ADDR_INDABS,
				size: 3,
				cycles: 5
			},
			32: {
				ins: INS_JSR,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			169: {
				ins: INS_LDA,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			165: {
				ins: INS_LDA,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			181: {
				ins: INS_LDA,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			173: {
				ins: INS_LDA,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			189: {
				ins: INS_LDA,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			185: {
				ins: INS_LDA,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			161: {
				ins: INS_LDA,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			177: {
				ins: INS_LDA,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 5
			},
			162: {
				ins: INS_LDX,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			166: {
				ins: INS_LDX,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			182: {
				ins: INS_LDX,
				mode: ADDR_ZPY,
				size: 2,
				cycles: 4
			},
			174: {
				ins: INS_LDX,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			190: {
				ins: INS_LDX,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			160: {
				ins: INS_LDY,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			164: {
				ins: INS_LDY,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			180: {
				ins: INS_LDY,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			172: {
				ins: INS_LDY,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			188: {
				ins: INS_LDY,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			74: {
				ins: INS_LSR,
				mode: ADDR_ACC,
				size: 1,
				cycles: 2
			},
			70: {
				ins: INS_LSR,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			86: {
				ins: INS_LSR,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			78: {
				ins: INS_LSR,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			94: {
				ins: INS_LSR,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			26: {
				ins: INS_NOP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			58: {
				ins: INS_NOP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			90: {
				ins: INS_NOP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			122: {
				ins: INS_NOP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			218: {
				ins: INS_NOP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			234: {
				ins: INS_NOP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			250: {
				ins: INS_NOP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			9: {
				ins: INS_ORA,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			5: {
				ins: INS_ORA,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			21: {
				ins: INS_ORA,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			13: {
				ins: INS_ORA,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			29: {
				ins: INS_ORA,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			25: {
				ins: INS_ORA,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			1: {
				ins: INS_ORA,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			17: {
				ins: INS_ORA,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 5
			},
			72: {
				ins: INS_PHA,
				mode: ADDR_IMP,
				size: 1,
				cycles: 3
			},
			8: {
				ins: INS_PHP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 3
			},
			104: {
				ins: INS_PLA,
				mode: ADDR_IMP,
				size: 1,
				cycles: 4
			},
			40: {
				ins: INS_PLP,
				mode: ADDR_IMP,
				size: 1,
				cycles: 4
			},
			42: {
				ins: INS_ROL,
				mode: ADDR_ACC,
				size: 1,
				cycles: 2
			},
			38: {
				ins: INS_ROL,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			54: {
				ins: INS_ROL,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			46: {
				ins: INS_ROL,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			62: {
				ins: INS_ROL,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			106: {
				ins: INS_ROR,
				mode: ADDR_ACC,
				size: 1,
				cycles: 2
			},
			102: {
				ins: INS_ROR,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			118: {
				ins: INS_ROR,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			110: {
				ins: INS_ROR,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			126: {
				ins: INS_ROR,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			64: {
				ins: INS_RTI,
				mode: ADDR_IMP,
				size: 1,
				cycles: 6
			},
			96: {
				ins: INS_RTS,
				mode: ADDR_IMP,
				size: 1,
				cycles: 6
			},
			233: {
				ins: INS_SBC,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			235: {
				ins: INS_SBC,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			229: {
				ins: INS_SBC,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			245: {
				ins: INS_SBC,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			237: {
				ins: INS_SBC,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			253: {
				ins: INS_SBC,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			249: {
				ins: INS_SBC,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			225: {
				ins: INS_SBC,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			241: {
				ins: INS_SBC,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 5
			},
			56: {
				ins: INS_SEC,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			248: {
				ins: INS_SED,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			120: {
				ins: INS_SEI,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			133: {
				ins: INS_STA,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			149: {
				ins: INS_STA,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			141: {
				ins: INS_STA,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			157: {
				ins: INS_STA,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 5
			},
			153: {
				ins: INS_STA,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 5
			},
			129: {
				ins: INS_STA,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			145: {
				ins: INS_STA,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 6
			},
			134: {
				ins: INS_STX,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			150: {
				ins: INS_STX,
				mode: ADDR_ZPY,
				size: 2,
				cycles: 4
			},
			142: {
				ins: INS_STX,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			132: {
				ins: INS_STY,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			148: {
				ins: INS_STY,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			140: {
				ins: INS_STY,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			170: {
				ins: INS_TAX,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			168: {
				ins: INS_TAY,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			186: {
				ins: INS_TSX,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			138: {
				ins: INS_TXA,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			154: {
				ins: INS_TXS,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			152: {
				ins: INS_TYA,
				mode: ADDR_IMP,
				size: 1,
				cycles: 2
			},
			75: {
				ins: INS_ALR,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			11: {
				ins: INS_ANC,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			43: {
				ins: INS_ANC,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			107: {
				ins: INS_ARR,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			203: {
				ins: INS_AXS,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			163: {
				ins: INS_LAX,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			167: {
				ins: INS_LAX,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			175: {
				ins: INS_LAX,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			179: {
				ins: INS_LAX,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 5
			},
			183: {
				ins: INS_LAX,
				mode: ADDR_ZPY,
				size: 2,
				cycles: 4
			},
			191: {
				ins: INS_LAX,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			131: {
				ins: INS_SAX,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 6
			},
			135: {
				ins: INS_SAX,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			143: {
				ins: INS_SAX,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			151: {
				ins: INS_SAX,
				mode: ADDR_ZPY,
				size: 2,
				cycles: 4
			},
			195: {
				ins: INS_DCP,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 8
			},
			199: {
				ins: INS_DCP,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			207: {
				ins: INS_DCP,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			211: {
				ins: INS_DCP,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 8
			},
			215: {
				ins: INS_DCP,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			219: {
				ins: INS_DCP,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 7
			},
			223: {
				ins: INS_DCP,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			227: {
				ins: INS_ISC,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 8
			},
			231: {
				ins: INS_ISC,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			239: {
				ins: INS_ISC,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			243: {
				ins: INS_ISC,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 8
			},
			247: {
				ins: INS_ISC,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			251: {
				ins: INS_ISC,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 7
			},
			255: {
				ins: INS_ISC,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			35: {
				ins: INS_RLA,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 8
			},
			39: {
				ins: INS_RLA,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			47: {
				ins: INS_RLA,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			51: {
				ins: INS_RLA,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 8
			},
			55: {
				ins: INS_RLA,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			59: {
				ins: INS_RLA,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 7
			},
			63: {
				ins: INS_RLA,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			99: {
				ins: INS_RRA,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 8
			},
			103: {
				ins: INS_RRA,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			111: {
				ins: INS_RRA,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			115: {
				ins: INS_RRA,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 8
			},
			119: {
				ins: INS_RRA,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			123: {
				ins: INS_RRA,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 7
			},
			127: {
				ins: INS_RRA,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			3: {
				ins: INS_SLO,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 8
			},
			7: {
				ins: INS_SLO,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			15: {
				ins: INS_SLO,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			19: {
				ins: INS_SLO,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 8
			},
			23: {
				ins: INS_SLO,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			27: {
				ins: INS_SLO,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 7
			},
			31: {
				ins: INS_SLO,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			67: {
				ins: INS_SRE,
				mode: ADDR_PREIDXIND,
				size: 2,
				cycles: 8
			},
			71: {
				ins: INS_SRE,
				mode: ADDR_ZP,
				size: 2,
				cycles: 5
			},
			79: {
				ins: INS_SRE,
				mode: ADDR_ABS,
				size: 3,
				cycles: 6
			},
			83: {
				ins: INS_SRE,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 8
			},
			87: {
				ins: INS_SRE,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 6
			},
			91: {
				ins: INS_SRE,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 7
			},
			95: {
				ins: INS_SRE,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 7
			},
			128: {
				ins: INS_SKB,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			130: {
				ins: INS_SKB,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			137: {
				ins: INS_SKB,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			194: {
				ins: INS_SKB,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			226: {
				ins: INS_SKB,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			12: {
				ins: INS_IGN,
				mode: ADDR_ABS,
				size: 3,
				cycles: 4
			},
			28: {
				ins: INS_IGN,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			60: {
				ins: INS_IGN,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			92: {
				ins: INS_IGN,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			124: {
				ins: INS_IGN,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			220: {
				ins: INS_IGN,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			252: {
				ins: INS_IGN,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 4
			},
			4: {
				ins: INS_IGN,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			68: {
				ins: INS_IGN,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			100: {
				ins: INS_IGN,
				mode: ADDR_ZP,
				size: 2,
				cycles: 3
			},
			20: {
				ins: INS_IGN,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			52: {
				ins: INS_IGN,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			84: {
				ins: INS_IGN,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			116: {
				ins: INS_IGN,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			212: {
				ins: INS_IGN,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			244: {
				ins: INS_IGN,
				mode: ADDR_ZPX,
				size: 2,
				cycles: 4
			},
			147: {
				ins: INS_SHA,
				mode: ADDR_POSTIDXIND,
				size: 2,
				cycles: 6
			},
			159: {
				ins: INS_SHA,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 5
			},
			155: {
				ins: INS_SHS,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 5
			},
			156: {
				ins: INS_SHY,
				mode: ADDR_ABSX,
				size: 3,
				cycles: 5
			},
			158: {
				ins: INS_SHX,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 5
			},
			187: {
				ins: INS_LAE,
				mode: ADDR_ABSY,
				size: 3,
				cycles: 4
			},
			139: {
				ins: INS_ANE,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			},
			171: {
				ins: INS_LXA,
				mode: ADDR_IMM,
				size: 2,
				cycles: 2
			}
		};
		var CPU = class {
			IRQ_NORMAL = 0;
			IRQ_NMI = 1;
			IRQ_RESET = 2;
			constructor(nes) {
				this.nes = nes;
				this.mem = /* @__PURE__ */ new Uint8Array(65536);
				this.mem.fill(255, 0, 8192);
				for (let p = 0; p < 4; p++) {
					let j = p * 2048;
					this.mem[j + 8] = 247;
					this.mem[j + 9] = 239;
					this.mem[j + 10] = 223;
					this.mem[j + 15] = 191;
				}
				this.REG_ACC = 0;
				this.REG_X = 0;
				this.REG_Y = 0;
				this.REG_SP = 511;
				this.REG_PC = 32767;
				this.REG_PC_NEW = 32767;
				this.REG_STATUS = 40;
				this.setStatus(40);
				this.F_CARRY = 0;
				this.F_DECIMAL = 0;
				this.F_INTERRUPT = 1;
				this.F_INTERRUPT_NEW = 1;
				this.F_OVERFLOW = 0;
				this.F_SIGN = 0;
				this.F_ZERO = 1;
				this.F_NOTUSED = 1;
				this.F_NOTUSED_NEW = 1;
				this.F_BRK = 1;
				this.F_BRK_NEW = 1;
				this.cyclesToHalt = 0;
				this.crash = false;
				this.irqRequested = false;
				this.irqType = null;
				this.nmiRaised = false;
				this.nmiPending = false;
				this.nmiImmediate = false;
				this.dataBus = 0;
				this.instrBusCycles = 0;
				this.apuCatchupCycles = 0;
				this._cpuCycleBase = 0;
				this.nmiRaisedAtCycle = 0;
				this.nmiDotsRemainingInStep = 0;
			}
			emulate() {
				if (this.nmiImmediate) {
					this.nmiImmediate = false;
					this.nmiPending = false;
					this.nmiRaised = false;
					this.instrBusCycles = 0;
					this.REG_PC_NEW = this.REG_PC;
					this.F_INTERRUPT_NEW = this.F_INTERRUPT;
					this.doNonMaskableInterrupt(this.getStatus() & 239);
					this.REG_PC = this.REG_PC_NEW;
					this.F_INTERRUPT = this.F_INTERRUPT_NEW;
					this.F_BRK = this.F_BRK_NEW;
					this._cpuCycleBase += 7;
					return 7;
				}
				let temp;
				let add;
				let baseHigh = 0;
				let interruptCycles = 0;
				if (this.nmiRaised) {
					this.nmiPending = true;
					this.nmiRaised = false;
				}
				if (this.irqRequested) {
					temp = this.getStatus();
					this.REG_PC_NEW = this.REG_PC;
					this.F_INTERRUPT_NEW = this.F_INTERRUPT;
					switch (this.irqType) {
						case 0:
							if (this.F_INTERRUPT !== 0) break;
							this.doIrq(temp & 239);
							interruptCycles = 7;
							break;
						case 2:
							this.doResetInterrupt();
							interruptCycles = 7;
					}
					this.REG_PC = this.REG_PC_NEW;
					this.F_INTERRUPT = this.F_INTERRUPT_NEW;
					this.F_BRK = this.F_BRK_NEW;
					this.irqRequested = false;
				}
				if (this.nes.mmap === null) return 32;
				this.instrBusCycles = 0;
				this.apuCatchupCycles = 0;
				this.nmiDotsRemainingInStep = 0;
				this._dmcFetchCycles = this._cyclesToNextDmcFetch();
				let opcode = this.loadFromCartridge(this.REG_PC + 1);
				this.dataBus = opcode;
				this.instrBusCycles = 1;
				this.nes.ppu.advanceDots(3);
				let opinfo = OPCODE_TABLE[opcode] ?? INVALID_OPCODE;
				let cycleCount = opinfo.cycles;
				let cycleAdd = 0;
				let addrMode = opinfo.mode;
				let opaddr = this.REG_PC;
				this.REG_PC += opinfo.size;
				let addr = 0;
				switch (addrMode) {
					case 0:
						addr = this.loadDirect(opaddr + 2);
						break;
					case 1:
						addr = this.loadDirect(opaddr + 2);
						if (addr < 128) addr += this.REG_PC;
						else addr += this.REG_PC - 256;
						break;
					case 2:
						this.loadDirect(opaddr + 2);
						break;
					case 3:
						addr = this.load16bit(opaddr + 2);
						break;
					case 4:
						this.loadDirect(opaddr + 2);
						addr = this.REG_ACC;
						break;
					case 5:
						addr = this.REG_PC;
						break;
					case 6: {
						let zpBase6 = this.loadDirect(opaddr + 2);
						this.loadDirect(zpBase6);
						addr = zpBase6 + this.REG_X & 255;
						break;
					}
					case 7: {
						let zpBase7 = this.loadDirect(opaddr + 2);
						this.loadDirect(zpBase7);
						addr = zpBase7 + this.REG_Y & 255;
						break;
					}
					case 8:
						addr = this.load16bit(opaddr + 2);
						baseHigh = addr >> 8 & 255;
						if ((addr & 65280) !== (addr + this.REG_X & 65280)) {
							this.load(addr & 65280 | addr + this.REG_X & 255);
							cycleAdd = 1;
						}
						addr += this.REG_X;
						break;
					case 9:
						addr = this.load16bit(opaddr + 2);
						baseHigh = addr >> 8 & 255;
						if ((addr & 65280) !== (addr + this.REG_Y & 65280)) {
							this.load(addr & 65280 | addr + this.REG_Y & 255);
							cycleAdd = 1;
						}
						addr += this.REG_Y;
						break;
					case 10: {
						let zpPtr10 = this.loadDirect(opaddr + 2);
						this.loadDirect(zpPtr10);
						let zpAddr10 = zpPtr10 + this.REG_X & 255;
						addr = this.loadDirect(zpAddr10) | this.loadDirect(zpAddr10 + 1 & 255) << 8;
						break;
					}
					case 11: {
						let zpAddr = this.loadDirect(opaddr + 2);
						addr = this.loadDirect(zpAddr) | this.loadDirect(zpAddr + 1 & 255) << 8;
						baseHigh = addr >> 8 & 255;
						if ((addr & 65280) !== (addr + this.REG_Y & 65280)) {
							this.load(addr & 65280 | addr + this.REG_Y & 255);
							cycleAdd = 1;
						}
						addr += this.REG_Y;
						break;
					}
					case 12:
						addr = this.load16bit(opaddr + 2);
						var hiAddr = addr & 65280 | (addr & 255) + 1 & 255;
						addr = this.load(addr) | this.load(hiAddr) << 8;
				}
				addr &= 65535;
				switch (opinfo.ins) {
					case 0:
						add = this.load(addr);
						temp = this.REG_ACC + add + this.F_CARRY;
						if (((this.REG_ACC ^ add) & 128) === 0 && ((this.REG_ACC ^ temp) & 128) !== 0) this.F_OVERFLOW = 1;
						else this.F_OVERFLOW = 0;
						this.F_CARRY = temp > 255 ? 1 : 0;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						this.REG_ACC = temp & 255;
						cycleCount += cycleAdd;
						break;
					case 1:
						this.REG_ACC = this.REG_ACC & this.load(addr);
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						cycleCount += cycleAdd;
						break;
					case 2:
						if (addrMode === ADDR_ACC) {
							this.F_CARRY = this.REG_ACC >> 7 & 1;
							this.REG_ACC = this.REG_ACC << 1 & 255;
							this.F_SIGN = this.REG_ACC >> 7 & 1;
							this.F_ZERO = this.REG_ACC;
						} else {
							if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
							temp = this.load(addr);
							this.write(addr, temp);
							this.F_CARRY = temp >> 7 & 1;
							temp = temp << 1 & 255;
							this.F_SIGN = temp >> 7 & 1;
							this.F_ZERO = temp;
							this.write(addr, temp);
						}
						break;
					case 3:
						if (this.F_CARRY === 0) cycleCount += this._takeBranch(opaddr, addr);
						break;
					case 4:
						if (this.F_CARRY === 1) cycleCount += this._takeBranch(opaddr, addr);
						break;
					case 5:
						if (this.F_ZERO === 0) cycleCount += this._takeBranch(opaddr, addr);
						break;
					case 6:
						temp = this.load(addr);
						this.F_SIGN = temp >> 7 & 1;
						this.F_OVERFLOW = temp >> 6 & 1;
						temp &= this.REG_ACC;
						this.F_ZERO = temp;
						break;
					case 7:
						if (this.F_SIGN === 1) cycleCount += this._takeBranch(opaddr, addr);
						break;
					case 8:
						if (this.F_ZERO !== 0) cycleCount += this._takeBranch(opaddr, addr);
						break;
					case 9:
						if (this.F_SIGN === 0) cycleCount += this._takeBranch(opaddr, addr);
						break;
					case 10:
						this.REG_PC += 2;
						this.push(this.REG_PC >> 8 & 255);
						this.push(this.REG_PC & 255);
						this.F_BRK = 1;
						this.push(this.getStatus());
						this.F_INTERRUPT = 1;
						this.REG_PC = this.load16bit(65534);
						this.REG_PC--;
						break;
					case 11:
						if (this.F_OVERFLOW === 0) cycleCount += this._takeBranch(opaddr, addr);
						break;
					case 12:
						if (this.F_OVERFLOW === 1) cycleCount += this._takeBranch(opaddr, addr);
						break;
					case 13:
						this.F_CARRY = 0;
						break;
					case 14:
						this.F_DECIMAL = 0;
						break;
					case 15:
						this.F_INTERRUPT = 0;
						break;
					case 16:
						this.F_OVERFLOW = 0;
						break;
					case 17:
						temp = this.REG_ACC - this.load(addr);
						this.F_CARRY = temp >= 0 ? 1 : 0;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						cycleCount += cycleAdd;
						break;
					case 18:
						temp = this.REG_X - this.load(addr);
						this.F_CARRY = temp >= 0 ? 1 : 0;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						break;
					case 19:
						temp = this.REG_Y - this.load(addr);
						this.F_CARRY = temp >= 0 ? 1 : 0;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						break;
					case 20:
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						temp = this.load(addr);
						this.write(addr, temp);
						temp = temp - 1 & 255;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp;
						this.write(addr, temp);
						break;
					case 21:
						this.REG_X = this.REG_X - 1 & 255;
						this.F_SIGN = this.REG_X >> 7 & 1;
						this.F_ZERO = this.REG_X;
						break;
					case 22:
						this.REG_Y = this.REG_Y - 1 & 255;
						this.F_SIGN = this.REG_Y >> 7 & 1;
						this.F_ZERO = this.REG_Y;
						break;
					case 23:
						this.REG_ACC = (this.load(addr) ^ this.REG_ACC) & 255;
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						cycleCount += cycleAdd;
						break;
					case 24:
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						temp = this.load(addr);
						this.write(addr, temp);
						temp = temp + 1 & 255;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp;
						this.write(addr, temp);
						break;
					case 25:
						this.REG_X = this.REG_X + 1 & 255;
						this.F_SIGN = this.REG_X >> 7 & 1;
						this.F_ZERO = this.REG_X;
						break;
					case 26:
						this.REG_Y++;
						this.REG_Y &= 255;
						this.F_SIGN = this.REG_Y >> 7 & 1;
						this.F_ZERO = this.REG_Y;
						break;
					case 27:
						this.REG_PC = addr - 1;
						break;
					case 28:
						this.push(this.REG_PC >> 8 & 255);
						this.push(this.REG_PC & 255);
						this.loadDirect(opaddr + 3);
						this.REG_PC = addr - 1;
						break;
					case 29:
						this.REG_ACC = this.load(addr);
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						cycleCount += cycleAdd;
						break;
					case 30:
						this.REG_X = this.load(addr);
						this.F_SIGN = this.REG_X >> 7 & 1;
						this.F_ZERO = this.REG_X;
						cycleCount += cycleAdd;
						break;
					case 31:
						this.REG_Y = this.load(addr);
						this.F_SIGN = this.REG_Y >> 7 & 1;
						this.F_ZERO = this.REG_Y;
						cycleCount += cycleAdd;
						break;
					case 32:
						if (addrMode === ADDR_ACC) {
							temp = this.REG_ACC & 255;
							this.F_CARRY = temp & 1;
							temp >>= 1;
							this.REG_ACC = temp;
						} else {
							if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
							temp = this.load(addr) & 255;
							this.write(addr, temp);
							this.F_CARRY = temp & 1;
							temp >>= 1;
							this.write(addr, temp);
						}
						this.F_SIGN = 0;
						this.F_ZERO = temp;
						break;
					case 33: break;
					case 34:
						temp = (this.load(addr) | this.REG_ACC) & 255;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp;
						this.REG_ACC = temp;
						cycleCount += cycleAdd;
						break;
					case 35:
						this.push(this.REG_ACC);
						break;
					case 36:
						this.F_BRK = 1;
						this.push(this.getStatus());
						break;
					case 37:
						this.REG_ACC = this.pull();
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						break;
					case 38:
						this.setStatusFromStack(this.pull());
						break;
					case 39:
						if (addrMode === ADDR_ACC) {
							temp = this.REG_ACC;
							add = this.F_CARRY;
							this.F_CARRY = temp >> 7 & 1;
							temp = (temp << 1 & 255) + add;
							this.REG_ACC = temp;
						} else {
							if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
							temp = this.load(addr);
							this.write(addr, temp);
							add = this.F_CARRY;
							this.F_CARRY = temp >> 7 & 1;
							temp = (temp << 1 & 255) + add;
							this.write(addr, temp);
						}
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp;
						break;
					case 40:
						if (addrMode === ADDR_ACC) {
							add = this.F_CARRY << 7;
							this.F_CARRY = this.REG_ACC & 1;
							temp = (this.REG_ACC >> 1) + add;
							this.REG_ACC = temp;
						} else {
							if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
							temp = this.load(addr);
							this.write(addr, temp);
							add = this.F_CARRY << 7;
							this.F_CARRY = temp & 1;
							temp = (temp >> 1) + add;
							this.write(addr, temp);
						}
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp;
						break;
					case 41:
						this.setStatusFromStack(this.pull());
						this.REG_PC = this.pull();
						this.REG_PC += this.pull() << 8;
						if (this.REG_PC === 65535) return;
						this.REG_PC--;
						break;
					case 42:
						this.REG_PC = this.pull();
						this.REG_PC += this.pull() << 8;
						if (this.REG_PC === 65535) return;
						break;
					case 43:
						add = this.load(addr);
						temp = this.REG_ACC - add - (1 - this.F_CARRY);
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						if (((this.REG_ACC ^ temp) & 128) !== 0 && ((this.REG_ACC ^ add) & 128) !== 0) this.F_OVERFLOW = 1;
						else this.F_OVERFLOW = 0;
						this.F_CARRY = temp < 0 ? 0 : 1;
						this.REG_ACC = temp & 255;
						cycleCount += cycleAdd;
						break;
					case 44:
						this.F_CARRY = 1;
						break;
					case 45:
						this.F_DECIMAL = 1;
						break;
					case 46:
						this.F_INTERRUPT = 1;
						break;
					case 47:
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						this.write(addr, this.REG_ACC);
						break;
					case 48:
						this.write(addr, this.REG_X);
						break;
					case 49:
						this.write(addr, this.REG_Y);
						break;
					case 50:
						this.REG_X = this.REG_ACC;
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						break;
					case 51:
						this.REG_Y = this.REG_ACC;
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						break;
					case 52:
						this.REG_X = this.REG_SP & 255;
						this.F_SIGN = this.REG_SP >> 7 & 1;
						this.F_ZERO = this.REG_X;
						break;
					case 53:
						this.REG_ACC = this.REG_X;
						this.F_SIGN = this.REG_X >> 7 & 1;
						this.F_ZERO = this.REG_X;
						break;
					case 54:
						this.REG_SP = this.REG_X & 255;
						break;
					case 55:
						this.REG_ACC = this.REG_Y;
						this.F_SIGN = this.REG_Y >> 7 & 1;
						this.F_ZERO = this.REG_Y;
						break;
					case 56:
						temp = this.REG_ACC & this.load(addr);
						this.F_CARRY = temp & 1;
						this.REG_ACC = this.F_ZERO = temp >> 1;
						this.F_SIGN = 0;
						break;
					case 57:
						this.REG_ACC = this.F_ZERO = this.REG_ACC & this.load(addr);
						this.F_CARRY = this.F_SIGN = this.REG_ACC >> 7 & 1;
						break;
					case 58:
						temp = this.REG_ACC & this.load(addr);
						this.REG_ACC = this.F_ZERO = (temp >> 1) + (this.F_CARRY << 7);
						this.F_SIGN = this.F_CARRY;
						this.F_CARRY = temp >> 7 & 1;
						this.F_OVERFLOW = (temp >> 7 ^ temp >> 6) & 1;
						break;
					case 59:
						temp = (this.REG_X & this.REG_ACC) - this.load(addr);
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						this.F_CARRY = temp < 0 ? 0 : 1;
						this.REG_X = temp & 255;
						break;
					case 60:
						this.REG_ACC = this.REG_X = this.F_ZERO = this.load(addr);
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						cycleCount += cycleAdd;
						break;
					case 61:
						this.write(addr, this.REG_ACC & this.REG_X);
						break;
					case 62:
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						temp = this.load(addr);
						this.write(addr, temp);
						temp = temp - 1 & 255;
						this.write(addr, temp);
						temp = this.REG_ACC - temp;
						this.F_CARRY = temp >= 0 ? 1 : 0;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						break;
					case 63: {
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						temp = this.load(addr);
						this.write(addr, temp);
						temp = temp + 1 & 255;
						this.write(addr, temp);
						let isb_val = temp;
						temp = this.REG_ACC - isb_val - (1 - this.F_CARRY);
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						if (((this.REG_ACC ^ temp) & 128) !== 0 && ((this.REG_ACC ^ isb_val) & 128) !== 0) this.F_OVERFLOW = 1;
						else this.F_OVERFLOW = 0;
						this.F_CARRY = temp < 0 ? 0 : 1;
						this.REG_ACC = temp & 255;
						break;
					}
					case 64:
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						temp = this.load(addr);
						this.write(addr, temp);
						add = this.F_CARRY;
						this.F_CARRY = temp >> 7 & 1;
						temp = (temp << 1 & 255) + add;
						this.write(addr, temp);
						this.REG_ACC = this.REG_ACC & temp;
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						break;
					case 65: {
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						temp = this.load(addr);
						this.write(addr, temp);
						add = this.F_CARRY << 7;
						this.F_CARRY = temp & 1;
						temp = (temp >> 1) + add;
						this.write(addr, temp);
						let rra_val = temp;
						temp = this.REG_ACC + rra_val + this.F_CARRY;
						if (((this.REG_ACC ^ rra_val) & 128) === 0 && ((this.REG_ACC ^ temp) & 128) !== 0) this.F_OVERFLOW = 1;
						else this.F_OVERFLOW = 0;
						this.F_CARRY = temp > 255 ? 1 : 0;
						this.F_SIGN = temp >> 7 & 1;
						this.F_ZERO = temp & 255;
						this.REG_ACC = temp & 255;
						break;
					}
					case 66:
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						temp = this.load(addr);
						this.write(addr, temp);
						this.F_CARRY = temp >> 7 & 1;
						temp = temp << 1 & 255;
						this.write(addr, temp);
						this.REG_ACC = this.REG_ACC | temp;
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						break;
					case 67:
						if (cycleAdd === 0 && (addrMode === ADDR_ABSX || addrMode === ADDR_ABSY || addrMode === ADDR_POSTIDXIND)) this.load(addr);
						temp = this.load(addr) & 255;
						this.write(addr, temp);
						this.F_CARRY = temp & 1;
						temp >>= 1;
						this.write(addr, temp);
						this.REG_ACC = this.REG_ACC ^ temp;
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						this.F_ZERO = this.REG_ACC;
						break;
					case 68: break;
					case 69:
						this.load(addr);
						cycleCount += cycleAdd;
						break;
					case 71: {
						if (cycleAdd === 0) this.load(addr);
						let shaVal = this._dmcFetchCycles > 0 && this._dmcFetchCycles <= this.instrBusCycles ? this.REG_ACC & this.REG_X : this.REG_ACC & this.REG_X & (baseHigh + 1 & 255 | 0);
						if (cycleAdd === 1) addr = shaVal << 8 | addr & 255;
						this.write(addr, shaVal);
						break;
					}
					case 72: {
						if (cycleAdd === 0) this.load(addr);
						let dmaDuringInstr2 = this._dmcFetchCycles > 0 && this._dmcFetchCycles <= this.instrBusCycles;
						this.REG_SP = 256 | this.REG_ACC & this.REG_X;
						let shsVal = dmaDuringInstr2 ? this.REG_SP & 255 : this.REG_SP & 255 & (baseHigh + 1 & 255);
						if (cycleAdd === 1) addr = shsVal << 8 | addr & 255;
						this.write(addr, shsVal);
						break;
					}
					case 73: {
						if (cycleAdd === 0) this.load(addr);
						let shyVal = this._dmcFetchCycles > 0 && this._dmcFetchCycles <= this.instrBusCycles ? this.REG_Y : this.REG_Y & (baseHigh + 1 & 255);
						if (cycleAdd === 1) addr = shyVal << 8 | addr & 255;
						this.write(addr, shyVal);
						break;
					}
					case 74: {
						if (cycleAdd === 0) this.load(addr);
						let shxVal = this._dmcFetchCycles > 0 && this._dmcFetchCycles <= this.instrBusCycles ? this.REG_X : this.REG_X & (baseHigh + 1 & 255);
						if (cycleAdd === 1) addr = shxVal << 8 | addr & 255;
						this.write(addr, shxVal);
						break;
					}
					case 75:
						temp = this.load(addr) & (this.REG_SP & 255);
						this.REG_ACC = this.REG_X = this.F_ZERO = temp;
						this.REG_SP = 256 | temp;
						this.F_SIGN = temp >> 7 & 1;
						cycleCount += cycleAdd;
						break;
					case 76:
						this.REG_ACC = this.F_ZERO = (this.REG_ACC | 255) & this.REG_X & this.load(addr);
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						break;
					case 77:
						this.REG_ACC = this.REG_X = this.F_ZERO = (this.REG_ACC | 255) & this.load(addr);
						this.F_SIGN = this.REG_ACC >> 7 & 1;
						break;
					default: throw new Error(`Game crashed, invalid opcode at address $${opaddr.toString(16)}`);
				}
				if (this.instrBusCycles < cycleCount) {
					let missingDots = (cycleCount - this.instrBusCycles) * 3;
					this.instrBusCycles = cycleCount;
					this.nes.ppu.advanceDots(missingDots);
				}
				if (this.nmiRaised) {
					if ((this.instrBusCycles - this.nmiRaisedAtCycle) * 3 + this.nmiDotsRemainingInStep >= 5) {
						this.nmiImmediate = true;
						this.nmiRaised = false;
					}
				}
				if (this.nmiPending) {
					this.REG_PC_NEW = this.REG_PC;
					this.F_INTERRUPT_NEW = this.F_INTERRUPT;
					this.doNonMaskableInterrupt(this.getStatus() & 239);
					this.REG_PC = this.REG_PC_NEW;
					this.F_INTERRUPT = this.F_INTERRUPT_NEW;
					this.F_BRK = this.F_BRK_NEW;
					this.nmiPending = false;
					interruptCycles = 7;
				}
				this._cpuCycleBase += cycleCount + interruptCycles;
				return cycleCount + interruptCycles;
			}
			loadFromCartridge(addr) {
				return this.nes.mmap.load(addr);
			}
			_loadFromCartridgePlain(addr) {
				return this.nes.mmap.load(addr);
			}
			_loadFromCartridgeWithGameGenie(addr) {
				let value = this.nes.mmap.load(addr);
				return this.nes.gameGenie.applyCodes(addr, value);
			}
			_updateCartridgeLoader() {
				if (this.nes.gameGenie.enabled && this.nes.gameGenie.patches.length > 0) this.loadFromCartridge = this._loadFromCartridgeWithGameGenie;
				else delete this.loadFromCartridge;
			}
			load(addr) {
				if (addr < 8192) {
					this.dataBus = this.mem[addr & 2047];
					this.instrBusCycles++;
					this.nes.ppu.advanceDots(3);
				} else if (addr >= 16384) {
					if (addr === 16405) {
						this.nes.papu.advanceFrameCounter(this.instrBusCycles - this.apuCatchupCycles);
						this.apuCatchupCycles = this.instrBusCycles;
						let apuStatus = this.loadFromCartridge(addr);
						this.instrBusCycles++;
						this.nes.ppu.advanceDots(3);
						return apuStatus;
					}
					this.dataBus = this.loadFromCartridge(addr);
					this.instrBusCycles++;
					this.nes.ppu.advanceDots(3);
				} else {
					this.instrBusCycles++;
					this.dataBus = this.loadFromCartridge(addr);
					this.nes.ppu.advanceDots(3);
				}
				return this.dataBus;
			}
			loadDirect(addr) {
				if (addr < 8192) this.dataBus = this.mem[addr & 2047];
				else this.dataBus = this.loadFromCartridge(addr);
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				return this.dataBus;
			}
			load16bit(addr) {
				let lo;
				if (addr < 8191) {
					this.dataBus = this.mem[addr & 2047];
					lo = this.dataBus;
					this.instrBusCycles++;
					this.nes.ppu.advanceDots(3);
					this.dataBus = this.mem[addr + 1 & 2047];
					this.instrBusCycles++;
					this.nes.ppu.advanceDots(3);
					return lo | this.dataBus << 8;
				} else {
					this.dataBus = this.loadFromCartridge(addr);
					lo = this.dataBus;
					this.instrBusCycles++;
					this.nes.ppu.advanceDots(3);
					this.dataBus = this.loadFromCartridge(addr + 1);
					this.instrBusCycles++;
					this.nes.ppu.advanceDots(3);
					return lo | this.dataBus << 8;
				}
			}
			write(addr, val) {
				if (addr >= 8192 && addr < 16384) {
					this.instrBusCycles++;
					this.dataBus = val;
					this.nes.mmap.write(addr, val);
					this.nes.ppu.advanceDots(3);
				} else {
					this.dataBus = val;
					if (addr < 8192) this.mem[addr & 2047] = val;
					else this.nes.mmap.write(addr, val);
					this.instrBusCycles++;
					this.nes.ppu.advanceDots(3);
				}
			}
			requestIrq(type) {
				if (this.irqRequested) {
					if (type === this.IRQ_NORMAL) return;
				}
				this.irqRequested = true;
				this.irqType = type;
			}
			push(value) {
				this.dataBus = value;
				this.mem[this.REG_SP | 256] = value;
				this.REG_SP--;
				this.REG_SP = this.REG_SP & 255;
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
			}
			pull() {
				this.REG_SP++;
				this.REG_SP = this.REG_SP & 255;
				this.dataBus = this.mem[256 | this.REG_SP];
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				return this.dataBus;
			}
			_cyclesToNextDmcFetch() {
				if (!this.nes.papu) return 2147483647;
				let dmc = this.nes.papu.dmc;
				if (!dmc || !dmc.isEnabled || dmc.dmaFrequency <= 0) return 2147483647;
				if (!dmc.hasSample) return 2147483647;
				let cyclesPerClock = dmc.dmaFrequency >> 3;
				let cyclesToFirstClock = dmc.shiftCounter + 7 >> 3;
				if (cyclesToFirstClock <= 0) cyclesToFirstClock = cyclesPerClock;
				return cyclesToFirstClock + (dmc.dmaCounter - 1) * cyclesPerClock;
			}
			_takeBranch(opaddr, addr) {
				let nextPC = opaddr + 3 & 65535;
				let target = addr + 1 & 65535;
				this.load(nextPC);
				if ((nextPC & 65280) !== (target & 65280)) {
					let wrongAddr = nextPC & 65280 | target & 255;
					this.load(wrongAddr);
					this.REG_PC = addr;
					return 2;
				}
				this.REG_PC = addr;
				return 1;
			}
			pageCrossed(addr1, addr2) {
				return (addr1 & 65280) !== (addr2 & 65280);
			}
			haltCycles(cycles) {
				this.cyclesToHalt += cycles;
			}
			doNonMaskableInterrupt(status) {
				if (this.nes.mmap === null) return;
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				this.REG_PC_NEW++;
				this.push(this.REG_PC_NEW >> 8 & 255);
				this.push(this.REG_PC_NEW & 255);
				this.F_INTERRUPT_NEW = 1;
				this.push(status);
				this.dataBus = this.loadFromCartridge(65530);
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				let lo = this.dataBus;
				this.dataBus = this.loadFromCartridge(65531);
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				this.REG_PC_NEW = lo | this.dataBus << 8;
				this.REG_PC_NEW--;
			}
			doResetInterrupt() {
				this.dataBus = this.loadFromCartridge(65532);
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				let lo = this.dataBus;
				this.dataBus = this.loadFromCartridge(65533);
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				this.REG_PC_NEW = lo | this.dataBus << 8;
				this.REG_PC_NEW--;
			}
			doIrq(status) {
				this.REG_PC_NEW++;
				this.push(this.REG_PC_NEW >> 8 & 255);
				this.push(this.REG_PC_NEW & 255);
				this.push(status);
				this.F_INTERRUPT_NEW = 1;
				this.F_BRK_NEW = 0;
				this.dataBus = this.loadFromCartridge(65534);
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				let lo = this.dataBus;
				this.dataBus = this.loadFromCartridge(65535);
				this.instrBusCycles++;
				this.nes.ppu.advanceDots(3);
				this.REG_PC_NEW = lo | this.dataBus << 8;
				this.REG_PC_NEW--;
			}
			getStatus() {
				return this.F_CARRY | (this.F_ZERO === 0 ? 1 : 0) << 1 | this.F_INTERRUPT << 2 | this.F_DECIMAL << 3 | this.F_BRK << 4 | this.F_NOTUSED << 5 | this.F_OVERFLOW << 6 | this.F_SIGN << 7;
			}
			setStatus(st) {
				this.F_CARRY = st & 1;
				this.F_ZERO = (st >> 1 & 1) === 1 ? 0 : 1;
				this.F_INTERRUPT = st >> 2 & 1;
				this.F_DECIMAL = st >> 3 & 1;
				this.F_BRK = st >> 4 & 1;
				this.F_NOTUSED = st >> 5 & 1;
				this.F_OVERFLOW = st >> 6 & 1;
				this.F_SIGN = st >> 7 & 1;
			}
			setStatusFromStack(st) {
				this.F_CARRY = st & 1;
				this.F_ZERO = (st >> 1 & 1) === 1 ? 0 : 1;
				this.F_INTERRUPT = st >> 2 & 1;
				this.F_DECIMAL = st >> 3 & 1;
				this.F_OVERFLOW = st >> 6 & 1;
				this.F_SIGN = st >> 7 & 1;
			}
			static JSON_PROPERTIES = [
				"mem",
				"cyclesToHalt",
				"dataBus",
				"irqRequested",
				"irqType",
				"nmiRaised",
				"nmiPending",
				"nmiImmediate",
				"REG_ACC",
				"REG_X",
				"REG_Y",
				"REG_SP",
				"REG_PC",
				"REG_PC_NEW",
				"REG_STATUS",
				"F_CARRY",
				"F_DECIMAL",
				"F_INTERRUPT",
				"F_INTERRUPT_NEW",
				"F_OVERFLOW",
				"F_SIGN",
				"F_ZERO",
				"F_NOTUSED",
				"F_NOTUSED_NEW",
				"F_BRK",
				"F_BRK_NEW",
				"_cpuCycleBase"
			];
			toJSON() {
				return toJSON(this);
			}
			fromJSON(s) {
				fromJSON(this, s);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/controller.js
		var Controller = class Controller {
			static BUTTON_A = 0;
			static BUTTON_B = 1;
			static BUTTON_SELECT = 2;
			static BUTTON_START = 3;
			static BUTTON_UP = 4;
			static BUTTON_DOWN = 5;
			static BUTTON_LEFT = 6;
			static BUTTON_RIGHT = 7;
			static BUTTON_TURBO_A = 8;
			static BUTTON_TURBO_B = 9;
			static JSON_PROPERTIES = [
				"state",
				"baseA",
				"baseB",
				"turboA",
				"turboB",
				"turboToggle"
			];
			constructor() {
				this.state = new Array(8);
				for (let i = 0; i < this.state.length; i++) this.state[i] = 64;
				this.baseA = 64;
				this.baseB = 64;
				this.turboA = false;
				this.turboB = false;
				this.turboToggle = false;
			}
			buttonDown(key) {
				if (key === Controller.BUTTON_TURBO_A) this.turboA = true;
				else if (key === Controller.BUTTON_TURBO_B) this.turboB = true;
				else {
					this.state[key] = 65;
					if (key === Controller.BUTTON_A) this.baseA = 65;
					if (key === Controller.BUTTON_B) this.baseB = 65;
				}
			}
			buttonUp(key) {
				if (key === Controller.BUTTON_TURBO_A) {
					this.turboA = false;
					this.state[Controller.BUTTON_A] = this.baseA;
				} else if (key === Controller.BUTTON_TURBO_B) {
					this.turboB = false;
					this.state[Controller.BUTTON_B] = this.baseB;
				} else {
					this.state[key] = 64;
					if (key === Controller.BUTTON_A) this.baseA = 64;
					if (key === Controller.BUTTON_B) this.baseB = 64;
				}
			}
			clock() {
				if (!this.turboA && !this.turboB) return;
				this.turboToggle = !this.turboToggle;
				if (this.turboA) this.state[Controller.BUTTON_A] = this.turboToggle ? 65 : 64;
				if (this.turboB) this.state[Controller.BUTTON_B] = this.turboToggle ? 65 : 64;
			}
			toJSON() {
				return toJSON(this);
			}
			fromJSON(s) {
				fromJSON(this, s);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/tile.js
		var Tile = class {
			constructor() {
				this.pix = /* @__PURE__ */ new Uint8Array(64);
				this.initialized = false;
				this.opaque = /* @__PURE__ */ new Uint8Array(8);
			}
			setBuffer(scanline) {
				for (let y = 0; y < 8; y++) this.setScanline(y, scanline[y], scanline[y + 8]);
			}
			setScanline(sline, b1, b2) {
				this.initialized = true;
				let tIndex = sline << 3;
				for (let x = 0; x < 8; x++) {
					this.pix[tIndex + x] = (b1 >> 7 - x & 1) + ((b2 >> 7 - x & 1) << 1);
					if (this.pix[tIndex + x] === 0) this.opaque[sline] = false;
				}
			}
			render(buffer, srcx1, srcy1, srcx2, srcy2, dx, dy, palAdd, palette, flipHorizontal, flipVertical, pri, priTable) {
				if (dx < -7 || dx >= 256 || dy < -7 || dy >= 240) return;
				if (dx < 0) srcx1 -= dx;
				if (dx + srcx2 >= 256) srcx2 = 256 - dx;
				if (dy < 0) srcy1 -= dy;
				if (dy + srcy2 >= 240) srcy2 = 240 - dy;
				let fbIndex, tIndex, palIndex, tpri;
				if (!flipHorizontal && !flipVertical) {
					fbIndex = (dy << 8) + dx;
					tIndex = 0;
					for (let y = 0; y < 8; y++) {
						for (let x = 0; x < 8; x++) {
							if (x >= srcx1 && x < srcx2 && y >= srcy1 && y < srcy2) {
								palIndex = this.pix[tIndex];
								tpri = priTable[fbIndex];
								if (palIndex !== 0 && pri <= (tpri & 255)) {
									buffer[fbIndex] = palette[palIndex + palAdd];
									tpri = tpri & 3840 | pri;
									priTable[fbIndex] = tpri;
								}
							}
							fbIndex++;
							tIndex++;
						}
						fbIndex -= 8;
						fbIndex += 256;
					}
				} else if (flipHorizontal && !flipVertical) {
					fbIndex = (dy << 8) + dx;
					tIndex = 7;
					for (let y = 0; y < 8; y++) {
						for (let x = 0; x < 8; x++) {
							if (x >= srcx1 && x < srcx2 && y >= srcy1 && y < srcy2) {
								palIndex = this.pix[tIndex];
								tpri = priTable[fbIndex];
								if (palIndex !== 0 && pri <= (tpri & 255)) {
									buffer[fbIndex] = palette[palIndex + palAdd];
									tpri = tpri & 3840 | pri;
									priTable[fbIndex] = tpri;
								}
							}
							fbIndex++;
							tIndex--;
						}
						fbIndex -= 8;
						fbIndex += 256;
						tIndex += 16;
					}
				} else if (flipVertical && !flipHorizontal) {
					fbIndex = (dy << 8) + dx;
					tIndex = 56;
					for (let y = 0; y < 8; y++) {
						for (let x = 0; x < 8; x++) {
							if (x >= srcx1 && x < srcx2 && y >= srcy1 && y < srcy2) {
								palIndex = this.pix[tIndex];
								tpri = priTable[fbIndex];
								if (palIndex !== 0 && pri <= (tpri & 255)) {
									buffer[fbIndex] = palette[palIndex + palAdd];
									tpri = tpri & 3840 | pri;
									priTable[fbIndex] = tpri;
								}
							}
							fbIndex++;
							tIndex++;
						}
						fbIndex -= 8;
						fbIndex += 256;
						tIndex -= 16;
					}
				} else {
					fbIndex = (dy << 8) + dx;
					tIndex = 63;
					for (let y = 0; y < 8; y++) {
						for (let x = 0; x < 8; x++) {
							if (x >= srcx1 && x < srcx2 && y >= srcy1 && y < srcy2) {
								palIndex = this.pix[tIndex];
								tpri = priTable[fbIndex];
								if (palIndex !== 0 && pri <= (tpri & 255)) {
									buffer[fbIndex] = palette[palIndex + palAdd];
									tpri = tpri & 3840 | pri;
									priTable[fbIndex] = tpri;
								}
							}
							fbIndex++;
							tIndex--;
						}
						fbIndex -= 8;
						fbIndex += 256;
					}
				}
			}
			isTransparent(x, y) {
				return this.pix[(y << 3) + x] === 0;
			}
			toJSON() {
				return {
					opaque: Array.from(this.opaque),
					pix: Array.from(this.pix)
				};
			}
			fromJSON(s) {
				this.opaque.set(s.opaque);
				this.pix.set(s.pix);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/ppu/nametable.js
		var NameTable = class {
			constructor(width, height, name) {
				this.width = width;
				this.height = height;
				this.name = name;
				this.tile = new Uint8Array(width * height);
				this.attrib = new Uint8Array(width * height);
			}
			getTileIndex(x, y) {
				return this.tile[y * this.width + x];
			}
			getAttrib(x, y) {
				return this.attrib[y * this.width + x];
			}
			writeAttrib(index, value) {
				let basex = index % 8 * 4;
				let basey = Math.floor(index / 8) * 4;
				let add;
				let tx, ty;
				let attindex;
				for (let sqy = 0; sqy < 2; sqy++) for (let sqx = 0; sqx < 2; sqx++) {
					add = value >> 2 * (sqy * 2 + sqx) & 3;
					for (let y = 0; y < 2; y++) for (let x = 0; x < 2; x++) {
						tx = basex + sqx * 2 + x;
						ty = basey + sqy * 2 + y;
						attindex = ty * this.width + tx;
						this.attrib[attindex] = add << 2 & 12;
					}
				}
			}
			toJSON() {
				return {
					tile: Array.from(this.tile),
					attrib: Array.from(this.attrib)
				};
			}
			fromJSON(s) {
				this.tile.set(s.tile);
				this.attrib.set(s.attrib);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/ppu/palette-table.js
		var PaletteTable = class {
			constructor() {
				this.curTable = /* @__PURE__ */ new Uint32Array(64);
				this.emphTable = new Array(8);
				this.currentEmph = -1;
			}
			loadNTSCPalette() {
				this.curTable = new Uint32Array([
					5395026,
					11796480,
					10485760,
					11599933,
					7602281,
					91,
					95,
					6208,
					12048,
					543240,
					26368,
					1196544,
					7153664,
					0,
					0,
					0,
					12899815,
					16728064,
					14421538,
					16729963,
					14090399,
					6818519,
					6588,
					21681,
					27227,
					35843,
					43776,
					2918400,
					10777088,
					0,
					0,
					0,
					16316664,
					16755516,
					16742785,
					16735173,
					16730354,
					14633471,
					4681215,
					46327,
					57599,
					58229,
					259115,
					7911470,
					15065624,
					7895160,
					0,
					0,
					16777215,
					16773822,
					16300216,
					16300248,
					16758527,
					16761855,
					13095423,
					10148607,
					8973816,
					8650717,
					12122296,
					16119980,
					16777136,
					16308472,
					0,
					0
				]);
				this.makeTables();
				this.setEmphasis(0);
			}
			loadPALPalette() {
				this.curTable = new Uint32Array([
					5395026,
					11796480,
					10485760,
					11599933,
					7602281,
					91,
					95,
					6208,
					12048,
					543240,
					26368,
					1196544,
					7153664,
					0,
					0,
					0,
					12899815,
					16728064,
					14421538,
					16729963,
					14090399,
					6818519,
					6588,
					21681,
					27227,
					35843,
					43776,
					2918400,
					10777088,
					0,
					0,
					0,
					16316664,
					16755516,
					16742785,
					16735173,
					16730354,
					14633471,
					4681215,
					46327,
					57599,
					58229,
					259115,
					7911470,
					15065624,
					7895160,
					0,
					0,
					16777215,
					16773822,
					16300216,
					16300248,
					16758527,
					16761855,
					13095423,
					10148607,
					8973816,
					8650717,
					12122296,
					16119980,
					16777136,
					16308472,
					0,
					0
				]);
				this.makeTables();
				this.setEmphasis(0);
			}
			makeTables() {
				let r, g, b, col, i, rFactor, gFactor, bFactor;
				for (let emph = 0; emph < 8; emph++) {
					rFactor = 1;
					gFactor = 1;
					bFactor = 1;
					if ((emph & 1) !== 0) {
						gFactor = .75;
						bFactor = .75;
					}
					if ((emph & 2) !== 0) {
						rFactor = .75;
						bFactor = .75;
					}
					if ((emph & 4) !== 0) {
						rFactor = .75;
						gFactor = .75;
					}
					this.emphTable[emph] = /* @__PURE__ */ new Uint32Array(64);
					for (i = 0; i < 64; i++) {
						col = this.curTable[i];
						r = Math.floor(this.getRed(col) * rFactor);
						g = Math.floor(this.getGreen(col) * gFactor);
						b = Math.floor(this.getBlue(col) * bFactor);
						this.emphTable[emph][i] = this.getRgb(r, g, b);
					}
				}
			}
			setEmphasis(emph) {
				if (emph !== this.currentEmph) {
					this.currentEmph = emph;
					for (let i = 0; i < 64; i++) this.curTable[i] = this.emphTable[emph][i];
				}
			}
			getEntry(yiq) {
				return this.curTable[yiq];
			}
			getRed(rgb) {
				return rgb >> 16 & 255;
			}
			getGreen(rgb) {
				return rgb >> 8 & 255;
			}
			getBlue(rgb) {
				return rgb & 255;
			}
			getRgb(r, g, b) {
				return r << 16 | g << 8 | b;
			}
			loadDefaultPalette() {
				this.curTable[0] = this.getRgb(117, 117, 117);
				this.curTable[1] = this.getRgb(39, 27, 143);
				this.curTable[2] = this.getRgb(0, 0, 171);
				this.curTable[3] = this.getRgb(71, 0, 159);
				this.curTable[4] = this.getRgb(143, 0, 119);
				this.curTable[5] = this.getRgb(171, 0, 19);
				this.curTable[6] = this.getRgb(167, 0, 0);
				this.curTable[7] = this.getRgb(127, 11, 0);
				this.curTable[8] = this.getRgb(67, 47, 0);
				this.curTable[9] = this.getRgb(0, 71, 0);
				this.curTable[10] = this.getRgb(0, 81, 0);
				this.curTable[11] = this.getRgb(0, 63, 23);
				this.curTable[12] = this.getRgb(27, 63, 95);
				this.curTable[13] = this.getRgb(0, 0, 0);
				this.curTable[14] = this.getRgb(0, 0, 0);
				this.curTable[15] = this.getRgb(0, 0, 0);
				this.curTable[16] = this.getRgb(188, 188, 188);
				this.curTable[17] = this.getRgb(0, 115, 239);
				this.curTable[18] = this.getRgb(35, 59, 239);
				this.curTable[19] = this.getRgb(131, 0, 243);
				this.curTable[20] = this.getRgb(191, 0, 191);
				this.curTable[21] = this.getRgb(231, 0, 91);
				this.curTable[22] = this.getRgb(219, 43, 0);
				this.curTable[23] = this.getRgb(203, 79, 15);
				this.curTable[24] = this.getRgb(139, 115, 0);
				this.curTable[25] = this.getRgb(0, 151, 0);
				this.curTable[26] = this.getRgb(0, 171, 0);
				this.curTable[27] = this.getRgb(0, 147, 59);
				this.curTable[28] = this.getRgb(0, 131, 139);
				this.curTable[29] = this.getRgb(0, 0, 0);
				this.curTable[30] = this.getRgb(0, 0, 0);
				this.curTable[31] = this.getRgb(0, 0, 0);
				this.curTable[32] = this.getRgb(255, 255, 255);
				this.curTable[33] = this.getRgb(63, 191, 255);
				this.curTable[34] = this.getRgb(95, 151, 255);
				this.curTable[35] = this.getRgb(167, 139, 253);
				this.curTable[36] = this.getRgb(247, 123, 255);
				this.curTable[37] = this.getRgb(255, 119, 183);
				this.curTable[38] = this.getRgb(255, 119, 99);
				this.curTable[39] = this.getRgb(255, 155, 59);
				this.curTable[40] = this.getRgb(243, 191, 63);
				this.curTable[41] = this.getRgb(131, 211, 19);
				this.curTable[42] = this.getRgb(79, 223, 75);
				this.curTable[43] = this.getRgb(88, 248, 152);
				this.curTable[44] = this.getRgb(0, 235, 219);
				this.curTable[45] = this.getRgb(0, 0, 0);
				this.curTable[46] = this.getRgb(0, 0, 0);
				this.curTable[47] = this.getRgb(0, 0, 0);
				this.curTable[48] = this.getRgb(255, 255, 255);
				this.curTable[49] = this.getRgb(171, 231, 255);
				this.curTable[50] = this.getRgb(199, 215, 255);
				this.curTable[51] = this.getRgb(215, 203, 255);
				this.curTable[52] = this.getRgb(255, 199, 255);
				this.curTable[53] = this.getRgb(255, 199, 219);
				this.curTable[54] = this.getRgb(255, 191, 179);
				this.curTable[55] = this.getRgb(255, 219, 171);
				this.curTable[56] = this.getRgb(255, 231, 163);
				this.curTable[57] = this.getRgb(227, 255, 163);
				this.curTable[58] = this.getRgb(171, 243, 191);
				this.curTable[59] = this.getRgb(179, 255, 207);
				this.curTable[60] = this.getRgb(159, 255, 243);
				this.curTable[61] = this.getRgb(0, 0, 0);
				this.curTable[62] = this.getRgb(0, 0, 0);
				this.curTable[63] = this.getRgb(0, 0, 0);
				this.makeTables();
				this.setEmphasis(0);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/ppu/index.js
		var PPU = class {
			STATUS_VRAMWRITE = 4;
			STATUS_SLSPRITECOUNT = 5;
			STATUS_SPRITE0HIT = 6;
			STATUS_VBLANK = 7;
			constructor(nes) {
				this.nes = nes;
				this.showSpr0Hit = false;
				this.clipToTvSize = true;
				let i;
				this.vramMem = /* @__PURE__ */ new Uint8Array(32768);
				this.spriteMem = /* @__PURE__ */ new Uint8Array(256);
				this.vramAddress = null;
				this.vramTmpAddress = null;
				this.vramBufferedReadValue = 0;
				this.firstWrite = true;
				this.openBusLatch = 0;
				this.openBusDecayFrames = 0;
				this.sramAddress = 0;
				this.currentMirroring = -1;
				this.nmiOutput = false;
				this.nmiSuppressed = false;
				this.vblankPending = false;
				this.frameEnded = false;
				this.dummyCycleToggle = false;
				this.validTileData = false;
				this.scanlineAlreadyRendered = null;
				this.f_nmiOnVblank = 0;
				this.f_spriteSize = 0;
				this.f_bgPatternTable = 0;
				this.f_spPatternTable = 0;
				this.f_addrInc = 0;
				this.f_nTblAddress = 0;
				this.f_color = 0;
				this.f_spVisibility = 0;
				this.f_bgVisibility = 0;
				this.f_spClipping = 0;
				this.f_bgClipping = 0;
				this.f_dispType = 0;
				this.cntFV = 0;
				this.cntV = 0;
				this.cntH = 0;
				this.cntVT = 0;
				this.cntHT = 0;
				this.regFV = 0;
				this.regV = 0;
				this.regH = 0;
				this.regVT = 0;
				this.regHT = 0;
				this.regFH = 0;
				this.regS = 0;
				this.curNt = null;
				this.attrib = /* @__PURE__ */ new Uint8Array(32);
				this.buffer = /* @__PURE__ */ new Uint32Array(61440);
				this.bgbuffer = /* @__PURE__ */ new Uint32Array(61440);
				this.pixrendered = /* @__PURE__ */ new Uint32Array(61440);
				this.validTileData = null;
				this.scantile = new Array(32);
				this.scanline = 0;
				this.lastRenderedScanline = -1;
				this.curX = 0;
				this.sprX = /* @__PURE__ */ new Uint8Array(64);
				this.sprY = /* @__PURE__ */ new Uint8Array(64);
				this.sprTile = /* @__PURE__ */ new Uint8Array(64);
				this.sprCol = /* @__PURE__ */ new Uint8Array(64);
				this.vertFlip = /* @__PURE__ */ new Uint8Array(64);
				this.horiFlip = /* @__PURE__ */ new Uint8Array(64);
				this.bgPriority = /* @__PURE__ */ new Uint8Array(64);
				this.spr0HitX = 0;
				this.spr0HitY = 0;
				this.hitSpr0 = false;
				this.secondaryOAM = /* @__PURE__ */ new Uint8Array(32);
				this.secondaryOAM.fill(255);
				this.spritesFound = 0;
				this.sprite0InSecondary = false;
				this.scanlineSpriteCount = /* @__PURE__ */ new Uint8Array(241);
				this.scanlineSecondaryOAM = /* @__PURE__ */ new Uint8Array(7712);
				this.scanlineSprite0 = /* @__PURE__ */ new Uint8Array(241);
				this.sprPalette = /* @__PURE__ */ new Uint32Array(16);
				this.imgPalette = /* @__PURE__ */ new Uint32Array(16);
				this.ptTile = new Array(512);
				for (i = 0; i < 512; i++) this.ptTile[i] = new Tile();
				this.ntable1 = new Array(4);
				this.currentMirroring = -1;
				this.nameTable = new Array(4);
				for (i = 0; i < 4; i++) this.nameTable[i] = new NameTable(32, 32, `Nt${i}`);
				this.vramMirrorTable = /* @__PURE__ */ new Uint16Array(32768);
				for (i = 0; i < 32768; i++) this.vramMirrorTable[i] = i;
				this.palTable = new PaletteTable();
				this.palTable.loadNTSCPalette();
				this.updateControlReg1(0);
				this.updateControlReg2(0);
			}
			setMirroring(mirroring) {
				if (mirroring === this.currentMirroring) return;
				this.currentMirroring = mirroring;
				this.triggerRendering();
				if (this.vramMirrorTable === null) this.vramMirrorTable = /* @__PURE__ */ new Uint16Array(32768);
				for (let i = 0; i < 32768; i++) this.vramMirrorTable[i] = i;
				this.defineMirrorRegion(16160, 16128, 32);
				this.defineMirrorRegion(16192, 16128, 32);
				this.defineMirrorRegion(16256, 16128, 32);
				this.defineMirrorRegion(16320, 16128, 32);
				this.defineMirrorRegion(12288, 8192, 3840);
				this.defineMirrorRegion(16384, 0, 16384);
				if (mirroring === this.nes.rom.HORIZONTAL_MIRRORING) {
					this.ntable1[0] = 0;
					this.ntable1[1] = 0;
					this.ntable1[2] = 1;
					this.ntable1[3] = 1;
					this.defineMirrorRegion(9216, 8192, 1024);
					this.defineMirrorRegion(11264, 10240, 1024);
				} else if (mirroring === this.nes.rom.VERTICAL_MIRRORING) {
					this.ntable1[0] = 0;
					this.ntable1[1] = 1;
					this.ntable1[2] = 0;
					this.ntable1[3] = 1;
					this.defineMirrorRegion(10240, 8192, 1024);
					this.defineMirrorRegion(11264, 9216, 1024);
				} else if (mirroring === this.nes.rom.SINGLESCREEN_MIRRORING) {
					this.ntable1[0] = 0;
					this.ntable1[1] = 0;
					this.ntable1[2] = 0;
					this.ntable1[3] = 0;
					this.defineMirrorRegion(9216, 8192, 1024);
					this.defineMirrorRegion(10240, 8192, 1024);
					this.defineMirrorRegion(11264, 8192, 1024);
				} else if (mirroring === this.nes.rom.SINGLESCREEN_MIRRORING2) {
					this.ntable1[0] = 1;
					this.ntable1[1] = 1;
					this.ntable1[2] = 1;
					this.ntable1[3] = 1;
					this.defineMirrorRegion(9216, 9216, 1024);
					this.defineMirrorRegion(10240, 9216, 1024);
					this.defineMirrorRegion(11264, 9216, 1024);
				} else {
					this.ntable1[0] = 0;
					this.ntable1[1] = 1;
					this.ntable1[2] = 2;
					this.ntable1[3] = 3;
				}
			}
			defineMirrorRegion(fromStart, toStart, size) {
				for (let i = 0; i < size; i++) this.vramMirrorTable[fromStart + i] = toStart + i;
			}
			startVBlank() {
				if (this.openBusDecayFrames > 0) {
					this.openBusDecayFrames--;
					if (this.openBusDecayFrames === 0) this.openBusLatch = 0;
				}
				if (this.lastRenderedScanline < 239) this.renderFramePartially(this.lastRenderedScanline + 1, 240 - this.lastRenderedScanline);
				this.endFrame();
				this.lastRenderedScanline = -1;
			}
			_fireVblankSet(cpu, dotsRemaining) {
				this.vblankPending = false;
				if (!this.nmiSuppressed) {
					this.setStatusFlag(this.STATUS_VBLANK, true);
					this._updateNmiOutput();
					if (cpu.nmiRaised) cpu.nmiDotsRemainingInStep = dotsRemaining;
				}
				this.nmiSuppressed = false;
				this.startVBlank();
				this.frameEnded = true;
			}
			_fireVblankClear(cpu, isLastDot) {
				if (cpu.nmiRaised && isLastDot) {
					cpu.nmiPending = true;
					cpu.nmiRaised = false;
				}
				this.setStatusFlag(this.STATUS_VBLANK, false);
				this.setStatusFlag(this.STATUS_SPRITE0HIT, false);
				this.setStatusFlag(this.STATUS_SLSPRITECOUNT, false);
				this.hitSpr0 = false;
				this.spr0HitX = -1;
				this.spr0HitY = -1;
				this._updateNmiOutput();
			}
			advanceDots(dots) {
				let finalCurX = this.curX + dots;
				if (finalCurX < 341 && !(this.scanline === 0 && this.vblankPending && this.curX <= 1 && finalCurX >= 1) && !(this.scanline === 20 && this.curX <= 1 && finalCurX >= 1) && (this.spr0HitX < this.curX || this.spr0HitX >= finalCurX)) {
					this.curX = finalCurX;
					return;
				}
				let cpu = this.nes.cpu;
				for (let i = 0; i < dots; i++) {
					if (this.scanline === 0 && this.curX === 1 && this.vblankPending) {
						this._fireVblankSet(cpu, dots - i);
						this.curX++;
						continue;
					}
					if (this.scanline === 20 && this.curX === 1) this._fireVblankClear(cpu, i === dots - 1);
					if (this.curX === this.spr0HitX && this.f_bgVisibility === 1 && this.f_spVisibility === 1 && this.scanline - 21 === this.spr0HitY) this.setStatusFlag(this.STATUS_SPRITE0HIT, true);
					this.curX++;
					if (this.curX === 341) {
						this.curX = 0;
						this.endScanline();
					}
				}
				if (this.scanline === 0 && this.curX === 1 && this.vblankPending) this._fireVblankSet(cpu, 0);
				if (this.scanline === 20 && this.curX === 1) this._fireVblankClear(cpu, true);
			}
			endScanline() {
				switch (this.scanline) {
					case 19:
						if (this.dummyCycleToggle) {
							this.curX = 1;
							this.dummyCycleToggle = !this.dummyCycleToggle;
						}
						break;
					case 20:
						this.performOAMCorruption();
						if (this.f_bgVisibility === 1 || this.f_spVisibility === 1) {
							this.cntFV = this.regFV;
							this.cntV = this.regV;
							this.cntH = this.regH;
							this.cntVT = this.regVT;
							this.cntHT = this.regHT;
							if (this.f_bgVisibility === 1 || this.f_spVisibility === 1) this.renderBgScanline(false, 0);
							this.scanlineSpriteCount[0] = 0;
							this.scanlineSprite0[0] = 0;
							for (let i = 0; i < 32; i++) this.scanlineSecondaryOAM[i] = 255;
							let scanline0Base = 32;
							for (let i = 0; i < 32; i++) this.scanlineSecondaryOAM[scanline0Base + i] = this.secondaryOAM[i];
							this.scanlineSpriteCount[1] = this.spritesFound;
							this.scanlineSprite0[1] = this.sprite0InSecondary ? 1 : 0;
							this.sramAddress = 0;
						}
						if (this.f_bgVisibility === 1 && this.f_spVisibility === 1) this.checkSprite0(0);
						if (!this.hitSpr0 && this.f_bgVisibility === 1 && this.f_spVisibility === 1) {
							if (this._precomputeSprite0Hit(1)) this.hitSpr0 = true;
						}
						if (this.f_bgVisibility === 1 || this.f_spVisibility === 1) this.nes.mmap.clockIrqCounter();
						break;
					case 261:
						this.vblankPending = true;
						this.scanline = -1;
						break;
					default: if (this.scanline >= 21 && this.scanline <= 260) {
						let bufferScan = this.scanline + 1 - 21;
						this.performOAMCorruption();
						if (this.f_bgVisibility === 1 || this.f_spVisibility === 1) {
							if (!this.scanlineAlreadyRendered) {
								this.cntHT = this.regHT;
								this.cntH = this.regH;
								this.renderBgScanline(true, bufferScan);
							}
							this.scanlineAlreadyRendered = false;
							if (!this.hitSpr0 && this.f_bgVisibility === 1 && this.f_spVisibility === 1 && this.scanlineSprite0[bufferScan]) {
								if (this.checkSprite0(bufferScan)) this.hitSpr0 = true;
							}
						}
						if (bufferScan < 240) this.evaluateSprites(bufferScan + 1);
						if (!this.hitSpr0 && this.f_bgVisibility === 1 && this.f_spVisibility === 1) {
							this._precomputeSprite0Hit(bufferScan + 1);
							if (this.spr0HitX !== -1) this.hitSpr0 = true;
						}
						if (this.f_bgVisibility === 1 || this.f_spVisibility === 1) this.nes.mmap.clockIrqCounter();
					}
				}
				this.scanline++;
				this.regsToAddress();
				this.cntsToAddress();
			}
			startFrame() {
				this.scanlineSpriteCount.fill(0);
				this.scanlineSprite0.fill(0);
				let bgColor;
				if (this.f_dispType === 0) bgColor = this.imgPalette[0];
				else switch (this.f_color) {
					case 0:
						bgColor = 0;
						break;
					case 1:
						bgColor = 65280;
						break;
					case 2:
						bgColor = 255;
						break;
					case 3:
						bgColor = 0;
						break;
					case 4:
						bgColor = 16711680;
						break;
					default: bgColor = 0;
				}
				this.buffer.fill(bgColor);
				this.pixrendered.fill(65);
			}
			endFrame() {
				let i, y;
				let buffer = this.buffer;
				if (this.showSpr0Hit) {
					if (this.sprX[0] >= 0 && this.sprX[0] < 256 && this.sprY[0] >= 0 && this.sprY[0] < 240) {
						for (i = 0; i < 256; i++) buffer[(this.sprY[0] << 8) + i] = 16733525;
						for (i = 0; i < 240; i++) buffer[(i << 8) + this.sprX[0]] = 16733525;
					}
					if (this.spr0HitX >= 0 && this.spr0HitX < 256 && this.spr0HitY >= 0 && this.spr0HitY < 240) {
						for (i = 0; i < 256; i++) buffer[(this.spr0HitY << 8) + i] = 5635925;
						for (i = 0; i < 240; i++) buffer[(i << 8) + this.spr0HitX] = 5635925;
					}
				}
				if (this.clipToTvSize || this.f_bgClipping === 0 || this.f_spClipping === 0) for (y = 0; y < 240; y++) buffer.fill(0, y << 8, (y << 8) + 8);
				if (this.clipToTvSize) {
					for (y = 0; y < 240; y++) buffer.fill(0, (y << 8) + 248, (y << 8) + 256);
					buffer.fill(0, 0, 2048);
					buffer.fill(0, 59392, 61440);
				}
				this.nes.ui.writeFrame(buffer);
			}
			updateControlReg1(value) {
				this.triggerRendering();
				this.f_nmiOnVblank = value >> 7 & 1;
				this.f_spriteSize = value >> 5 & 1;
				this.f_bgPatternTable = value >> 4 & 1;
				this.f_spPatternTable = value >> 3 & 1;
				this.f_addrInc = value >> 2 & 1;
				this.f_nTblAddress = value & 3;
				this.regV = value >> 1 & 1;
				this.regH = value & 1;
				this.regS = value >> 4 & 1;
				this._updateNmiOutput();
			}
			_updateNmiOutput() {
				let vblank = (this.nes.cpu.mem[8194] & 128) !== 0;
				let newOutput = this.f_nmiOnVblank !== 0 && vblank;
				if (newOutput && !this.nmiOutput) {
					this.nes.cpu.nmiRaised = true;
					this.nes.cpu.nmiRaisedAtCycle = this.nes.cpu.instrBusCycles;
				} else if (!newOutput && this.nmiOutput) {
					if (this.nes.cpu.nmiRaised) {
						let busCycleDiff = this.nes.cpu.instrBusCycles - this.nes.cpu.nmiRaisedAtCycle;
						if (busCycleDiff === 0 || busCycleDiff === 1 && this.nes.cpu.nmiDotsRemainingInStep === 0) this.nes.cpu.nmiRaised = false;
					}
				}
				this.nmiOutput = newOutput;
			}
			updateControlReg2(value) {
				this.triggerRendering();
				this.f_color = value >> 5 & 7;
				this.f_spVisibility = value >> 4 & 1;
				this.f_bgVisibility = value >> 3 & 1;
				this.f_spClipping = value >> 2 & 1;
				this.f_bgClipping = value >> 1 & 1;
				this.f_dispType = value & 1;
				if (!this.hitSpr0 && this.f_bgVisibility === 1 && this.f_spVisibility === 1 && this.scanline >= 21 && this.scanline <= 260) {
					let bufferScan = this.scanline + 1 - 21;
					if (this.scanlineSprite0[bufferScan]) {
						if (this.checkSprite0(bufferScan)) this.hitSpr0 = true;
					}
				}
				if (this.f_dispType === 0) this.palTable.setEmphasis(this.f_color);
				this.updatePalettes();
			}
			setStatusFlag(flag, value) {
				let n = 1 << flag;
				this.nes.cpu.mem[8194] = this.nes.cpu.mem[8194] & 255 - n | (value ? n : 0);
			}
			readStatusRegister() {
				let tmp = this.nes.cpu.mem[8194];
				this.firstWrite = true;
				if (this.scanline === 0 && this.curX === 0) this.nmiSuppressed = true;
				this.setStatusFlag(this.STATUS_VBLANK, false);
				this._updateNmiOutput();
				tmp = tmp & 224 | this.openBusLatch & 31;
				this.openBusLatch = tmp;
				this.openBusDecayFrames = 36;
				return tmp;
			}
			writeSRAMAddress(address) {
				this.sramAddress = address;
			}
			sramLoad() {
				if ((this.f_spVisibility === 1 || this.f_bgVisibility === 1) && this.scanline >= 20 && this.scanline <= 260) {
					let dot = this.curX;
					if (dot <= 64) return 255;
					else if (dot <= 256) {
						let val = this.spriteMem[this.sramAddress];
						if ((this.sramAddress & 3) === 2) val &= 227;
						return val;
					} else return 255;
				}
				let value = this.spriteMem[this.sramAddress];
				if ((this.sramAddress & 3) === 2) value &= 227;
				return value;
			}
			sramWrite(value) {
				if ((this.f_spVisibility === 1 || this.f_bgVisibility === 1) && this.scanline >= 20 && this.scanline <= 260) this.sramAddress = this.sramAddress + 4 & 252;
				else {
					this.spriteMem[this.sramAddress] = value;
					this.spriteRamWriteUpdate(this.sramAddress, value);
					this.sramAddress++;
					this.sramAddress %= 256;
				}
			}
			scrollWrite(value) {
				this.triggerRendering();
				if (this.firstWrite) {
					this.regHT = value >> 3 & 31;
					this.regFH = value & 7;
				} else {
					this.regFV = value & 7;
					this.regVT = value >> 3 & 31;
				}
				this.firstWrite = !this.firstWrite;
			}
			writeVRAMAddress(address) {
				if (this.firstWrite) {
					this.regFV = address >> 4 & 3;
					this.regV = address >> 3 & 1;
					this.regH = address >> 2 & 1;
					this.regVT = this.regVT & 7 | (address & 3) << 3;
				} else {
					this.triggerRendering();
					this.regVT = this.regVT & 24 | address >> 5 & 7;
					this.regHT = address & 31;
					this.cntFV = this.regFV;
					this.cntV = this.regV;
					this.cntH = this.regH;
					this.cntVT = this.regVT;
					this.cntHT = this.regHT;
					this.checkSprite0(this.scanline + 1 - 21);
				}
				this.firstWrite = !this.firstWrite;
				this.cntsToAddress();
				if (this.vramAddress < 8192) this.nes.mmap.latchAccess(this.vramAddress);
			}
			vramLoad() {
				let tmp;
				this.cntsToAddress();
				this.regsToAddress();
				if (this.vramAddress <= 16127) {
					tmp = this.vramBufferedReadValue;
					if (this.vramAddress < 8192) this.vramBufferedReadValue = this.vramMem[this.vramAddress];
					else this.vramBufferedReadValue = this.mirroredLoad(this.vramAddress);
					if (this.vramAddress < 8192) this.nes.mmap.latchAccess(this.vramAddress);
					this._incrementVramAddress();
					this.cntsFromAddress();
					this.regsFromAddress();
					return tmp;
				}
				let palIdx = this.vramAddress & 31;
				if ((palIdx & 19) === 16) palIdx &= 15;
				tmp = this.vramMem[16128 + palIdx] & 63 | this.openBusLatch & 192;
				this.vramBufferedReadValue = this.mirroredLoad(this.vramAddress & 12287);
				this._incrementVramAddress();
				this.cntsFromAddress();
				this.regsFromAddress();
				return tmp;
			}
			vramWrite(value) {
				this.triggerRendering();
				this.cntsToAddress();
				this.regsToAddress();
				if (this.vramAddress >= 8192) this.mirroredWrite(this.vramAddress, value);
				else {
					if (this.nes.mmap.canWriteChr(this.vramAddress)) this.writeMem(this.vramAddress, value);
					this.nes.mmap.latchAccess(this.vramAddress);
				}
				this._incrementVramAddress();
				this.regsFromAddress();
				this.cntsFromAddress();
			}
			sramDMA(value) {
				let baseAddress = value * 256;
				let data;
				for (let i = 0; i < 256; i++) {
					data = this.nes.cpu.mem[baseAddress + i];
					let oamAddr = this.sramAddress + i & 255;
					this.spriteMem[oamAddr] = data;
					this.spriteRamWriteUpdate(oamAddr, data);
				}
				let cpu = this.nes.cpu;
				let cycles = (cpu._cpuCycleBase + cpu.instrBusCycles) % 2 === 0 ? 514 : 513;
				cpu.haltCycles(cycles);
			}
			regsFromAddress() {
				let address = this.vramTmpAddress >> 8 & 255;
				this.regFV = address >> 4 & 7;
				this.regV = address >> 3 & 1;
				this.regH = address >> 2 & 1;
				this.regVT = this.regVT & 7 | (address & 3) << 3;
				address = this.vramTmpAddress & 255;
				this.regVT = this.regVT & 24 | address >> 5 & 7;
				this.regHT = address & 31;
			}
			_incrementVramAddress() {
				let renderingEnabled = this.f_spVisibility === 1 || this.f_bgVisibility === 1;
				let onRenderingScanline = this.scanline >= 20 && this.scanline <= 260;
				if (renderingEnabled && onRenderingScanline) {
					if ((this.vramAddress & 31) === 31) {
						this.vramAddress &= -32;
						this.vramAddress ^= 1024;
					} else this.vramAddress += 1;
					if ((this.vramAddress & 28672) !== 28672) this.vramAddress += 4096;
					else {
						this.vramAddress &= -28673;
						let coarseY = this.vramAddress >> 5 & 31;
						if (coarseY === 29) {
							coarseY = 0;
							this.vramAddress ^= 2048;
						} else if (coarseY === 31) coarseY = 0;
						else coarseY += 1;
						this.vramAddress = this.vramAddress & -993 | coarseY << 5;
					}
				} else this.vramAddress += this.f_addrInc === 1 ? 32 : 1;
			}
			cntsFromAddress() {
				let address = this.vramAddress >> 8 & 255;
				this.cntFV = address >> 4 & 3;
				this.cntV = address >> 3 & 1;
				this.cntH = address >> 2 & 1;
				this.cntVT = this.cntVT & 7 | (address & 3) << 3;
				address = this.vramAddress & 255;
				this.cntVT = this.cntVT & 24 | address >> 5 & 7;
				this.cntHT = address & 31;
			}
			regsToAddress() {
				let b1 = (this.regFV & 7) << 4;
				b1 |= (this.regV & 1) << 3;
				b1 |= (this.regH & 1) << 2;
				b1 |= this.regVT >> 3 & 3;
				let b2 = (this.regVT & 7) << 5;
				b2 |= this.regHT & 31;
				this.vramTmpAddress = (b1 << 8 | b2) & 32767;
			}
			cntsToAddress() {
				let b1 = (this.cntFV & 7) << 4;
				b1 |= (this.cntV & 1) << 3;
				b1 |= (this.cntH & 1) << 2;
				b1 |= this.cntVT >> 3 & 3;
				let b2 = (this.cntVT & 7) << 5;
				b2 |= this.cntHT & 31;
				this.vramAddress = (b1 << 8 | b2) & 32767;
			}
			incTileCounter(count) {
				for (let i = count; i !== 0; i--) {
					this.cntHT++;
					if (this.cntHT === 32) {
						this.cntHT = 0;
						this.cntVT++;
						if (this.cntVT >= 30) {
							this.cntH++;
							if (this.cntH === 2) {
								this.cntH = 0;
								this.cntV++;
								if (this.cntV === 2) {
									this.cntV = 0;
									this.cntFV++;
									this.cntFV &= 7;
								}
							}
						}
					}
				}
			}
			mirroredLoad(address) {
				return this.vramMem[this.vramMirrorTable[address]];
			}
			mirroredWrite(address, value) {
				if (address >= 16128 && address < 16160) {
					if (address === 16128 || address === 16144) {
						this.writeMem(16128, value);
						this.writeMem(16144, value);
					} else if (address === 16132 || address === 16148) {
						this.writeMem(16132, value);
						this.writeMem(16148, value);
					} else if (address === 16136 || address === 16152) {
						this.writeMem(16136, value);
						this.writeMem(16152, value);
					} else if (address === 16140 || address === 16156) {
						this.writeMem(16140, value);
						this.writeMem(16156, value);
					} else this.writeMem(address, value);
				} else if (address < this.vramMirrorTable.length) this.writeMem(this.vramMirrorTable[address], value);
				else throw new Error(`Invalid VRAM address: ${address.toString(16)}`);
			}
			triggerRendering() {
				if (this._inRendering) return;
				if (this.scanline >= 21 && this.scanline <= 260) {
					this.renderFramePartially(this.lastRenderedScanline + 1, this.scanline - 21 - this.lastRenderedScanline);
					this.lastRenderedScanline = this.scanline - 21;
				}
			}
			renderFramePartially(startScan, scanCount) {
				this._inRendering = true;
				this.nes.mmap.onSpriteRender();
				if (this.f_spVisibility === 1) this.renderSpritesPartially(startScan, scanCount, 1);
				if (this.f_bgVisibility === 1) {
					let si = startScan << 8;
					let ei = startScan + scanCount << 8;
					if (ei > 61440) ei = 61440;
					let buffer = this.buffer;
					let bgbuffer = this.bgbuffer;
					let pixrendered = this.pixrendered;
					for (let destIndex = si; destIndex < ei; destIndex++) if (pixrendered[destIndex] > 255) buffer[destIndex] = bgbuffer[destIndex];
				}
				if (this.f_spVisibility === 1) this.renderSpritesPartially(startScan, scanCount, 0);
				this.nes.mmap.onBgRender();
				this._inRendering = false;
				this.validTileData = false;
			}
			renderBgScanline(bgbuffer, scan) {
				let baseTile = this.regS === 0 ? 0 : 256;
				let baseAddr = this.regS === 0 ? 0 : 4096;
				let destIndex = (scan << 8) - this.regFH;
				this.curNt = this.ntable1[this.cntV + this.cntV + this.cntH];
				this.cntHT = this.regHT;
				this.cntH = this.regH;
				this.curNt = this.ntable1[this.cntV + this.cntV + this.cntH];
				if (scan < 240 && scan - this.cntFV >= 0) {
					let tscanoffset = this.cntFV << 3;
					let scantile = this.scantile;
					let attrib = this.attrib;
					let ptTile = this.ptTile;
					let nameTable = this.nameTable;
					let imgPalette = this.imgPalette;
					let pixrendered = this.pixrendered;
					let targetBuffer = bgbuffer ? this.bgbuffer : this.buffer;
					let mmap = this.nes.mmap;
					let t, tpix, att, col;
					this._inRendering = true;
					this.nes.mmap.onBgRender();
					if (this.f_spriteSize === 1) mmap.latchAccess(8168);
					for (let tile = 0; tile < 32; tile++) {
						if (scan >= 0) {
							let tileIndex = nameTable[this.curNt].getTileIndex(this.cntHT, this.cntVT);
							if (this.validTileData) {
								t = scantile[tile];
								if (typeof t === "undefined") continue;
								tpix = t.pix;
								att = attrib[tile];
							} else {
								t = ptTile[baseTile + tileIndex];
								if (typeof t === "undefined") continue;
								tpix = t.pix;
								att = nameTable[this.curNt].getAttrib(this.cntHT, this.cntVT);
								if (mmap.bgTileOverride) {
									let override = mmap.getBgTileData(baseTile, tileIndex, this.cntHT, this.cntVT);
									if (override) {
										t = override.tile;
										tpix = t.pix;
										att = override.attrib;
									}
								}
								scantile[tile] = t;
								attrib[tile] = att;
							}
							let sx = 0;
							let x = (tile << 3) - this.regFH;
							if (x > -8) {
								if (x < 0) {
									destIndex -= x;
									sx = -x;
								}
								if (t.opaque[this.cntFV]) for (; sx < 8; sx++) {
									targetBuffer[destIndex] = imgPalette[tpix[tscanoffset + sx] + att];
									pixrendered[destIndex] |= 256;
									destIndex++;
								}
								else for (; sx < 8; sx++) {
									col = tpix[tscanoffset + sx];
									if (col !== 0) {
										targetBuffer[destIndex] = imgPalette[col + att];
										pixrendered[destIndex] |= 256;
									}
									destIndex++;
								}
							}
							mmap.latchAccess(baseAddr + tileIndex * 16 + this.cntFV + 8);
						}
						if (++this.cntHT === 32) {
							this.cntHT = 0;
							this.cntH++;
							this.cntH %= 2;
							this.curNt = this.ntable1[(this.cntV << 1) + this.cntH];
						}
					}
					this._inRendering = false;
					this.validTileData = true;
				}
				this.cntFV++;
				if (this.cntFV === 8) {
					this.cntFV = 0;
					this.cntVT++;
					if (this.cntVT === 30) {
						this.cntVT = 0;
						this.cntV++;
						this.cntV %= 2;
						this.curNt = this.ntable1[(this.cntV << 1) + this.cntH];
					} else if (this.cntVT === 32) this.cntVT = 0;
					this.validTileData = false;
				}
			}
			performOAMCorruption() {
				if (!(this.f_spVisibility === 1 || this.f_bgVisibility === 1)) return;
				if (this.sramAddress === 0) return;
				let srcBase = this.sramAddress & 248;
				for (let i = 0; i < 8; i++) this.spriteMem[i] = this.spriteMem[srcBase + i & 255];
				for (let i = 0; i < 8; i++) this.spriteRamWriteUpdate(i, this.spriteMem[i]);
			}
			evaluateSprites(targetScanline) {
				if (!(this.f_spVisibility === 1 || this.f_bgVisibility === 1)) return;
				let oamBase = targetScanline * 32;
				for (let i = 0; i < 32; i++) this.scanlineSecondaryOAM[oamBase + i] = 255;
				this.scanlineSpriteCount[targetScanline] = 0;
				this.scanlineSprite0[targetScanline] = 0;
				let spriteHeight = this.f_spriteSize === 0 ? 8 : 16;
				let spritesFound = 0;
				let secondaryIndex = 0;
				let startN = this.sramAddress >> 2 & 63;
				let startM = this.sramAddress & 3;
				let overflowM = 0;
				let n = startN;
				let firstSprite = true;
				let evaluated = 0;
				do {
					let m;
					if (spritesFound >= 8) m = overflowM;
					else if (firstSprite) m = startM;
					else m = 0;
					firstSprite = false;
					let yByte = this.spriteMem[n * 4 + m & 255];
					if (targetScanline > yByte && targetScanline <= yByte + spriteHeight) {
						if (spritesFound < 8) {
							for (let b = 0; b < 4; b++) this.scanlineSecondaryOAM[oamBase + secondaryIndex + b] = this.spriteMem[n * 4 + m + b & 255];
							if (evaluated === 0) this.scanlineSprite0[targetScanline] = 1;
							spritesFound++;
							secondaryIndex += 4;
						} else {
							this.setStatusFlag(this.STATUS_SLSPRITECOUNT, true);
							break;
						}
					} else if (spritesFound >= 8) overflowM = overflowM + 1 & 3;
					n = n + 1 & 63;
					evaluated++;
				} while (n !== 0);
				this.scanlineSpriteCount[targetScanline] = spritesFound;
				for (let i = 0; i < 32; i++) this.secondaryOAM[i] = this.scanlineSecondaryOAM[oamBase + i];
				this.spritesFound = spritesFound;
				this.sprite0InSecondary = this.scanlineSprite0[targetScanline] === 1;
				this.sramAddress = 0;
			}
			renderSpritesPartially(startscan, scancount, bgPri) {
				if (this.f_spVisibility !== 1) return;
				let mmap = this.nes.mmap;
				let ptTile = this.ptTile;
				let buffer = this.buffer;
				let sprPalette = this.sprPalette;
				let pixrendered = this.pixrendered;
				for (let scan = startscan; scan < startscan + scancount; scan++) {
					if (scan < 0 || scan >= 240) continue;
					let count = this.scanlineSpriteCount[scan];
					let oamBase = scan * 32;
					for (let i = 0; i < count; i++) {
						let sprY = this.scanlineSecondaryOAM[oamBase + i * 4 + 0];
						let sprTile = this.scanlineSecondaryOAM[oamBase + i * 4 + 1];
						let sprAttr = this.scanlineSecondaryOAM[oamBase + i * 4 + 2];
						let sprX = this.scanlineSecondaryOAM[oamBase + i * 4 + 3];
						let vertFlip = sprAttr >> 7 & 1;
						let horiFlip = sprAttr >> 6 & 1;
						let priority = sprAttr >> 5 & 1;
						let palAdd = (sprAttr & 3) << 2;
						if (priority !== bgPri) continue;
						if (this.f_spriteSize === 0) {
							let tileIndex = this.f_spPatternTable === 0 ? sprTile : sprTile + 256;
							let sprBaseAddr = this.f_spPatternTable === 0 ? 0 : 4096;
							let dy = sprY + 1;
							let fineY = scan - dy;
							if (fineY < 0 || fineY >= 8) continue;
							ptTile[tileIndex].render(buffer, 0, fineY, 8, fineY + 1, sprX, dy, palAdd, sprPalette, horiFlip, vertFlip, i, pixrendered);
							mmap.latchAccess(sprBaseAddr + sprTile * 16 + 8);
						} else {
							let sprBaseAddr = (sprTile & 1) !== 0 ? 4096 : 0;
							let topTileNum = sprTile & 254;
							let top = (sprTile & 1) !== 0 ? topTileNum - 1 + 256 : topTileNum;
							let dy = sprY + 1;
							let fineY = scan - dy;
							if (fineY < 0 || fineY >= 16) continue;
							let tileOffset, tileFineY;
							if (fineY < 8) {
								tileOffset = vertFlip ? 1 : 0;
								tileFineY = fineY;
							} else {
								tileOffset = vertFlip ? 0 : 1;
								tileFineY = fineY - 8;
							}
							ptTile[top + tileOffset].render(buffer, 0, tileFineY, 8, tileFineY + 1, sprX, dy + (fineY < 8 ? 0 : 8), palAdd, sprPalette, horiFlip, vertFlip, i, pixrendered);
							mmap.latchAccess(sprBaseAddr + topTileNum * 16 + 8);
							mmap.latchAccess(sprBaseAddr + (topTileNum + 1) * 16 + 8);
						}
					}
				}
			}
			checkSprite0(scan) {
				this.spr0HitX = -1;
				this.spr0HitY = -1;
				if (scan < 0 || scan >= 240) return false;
				if (!this.scanlineSprite0[scan]) return false;
				if (this.scanlineSpriteCount[scan] === 0) return false;
				let oamBase = scan * 32;
				let sprY = this.scanlineSecondaryOAM[oamBase + 0];
				let sprTile = this.scanlineSecondaryOAM[oamBase + 1];
				let sprAttr = this.scanlineSecondaryOAM[oamBase + 2];
				let x = this.scanlineSecondaryOAM[oamBase + 3];
				let y = sprY + 1;
				let vertFlip = sprAttr >> 7 & 1;
				let horiFlip = sprAttr >> 6 & 1;
				let leftClip = this.f_spClipping === 0 || this.f_bgClipping === 0;
				let toffset;
				let t;
				let mmap = this.nes.mmap;
				if (this.f_spriteSize === 0) {
					let tIndexAdd = this.f_spPatternTable === 0 ? 0 : 256;
					if (y <= scan && y + 8 > scan && x < 256) {
						t = mmap.getSpritePatternTile(sprTile + tIndexAdd);
						toffset = vertFlip ? 7 - (scan - y) : scan - y;
						toffset *= 8;
						return this._checkSpr0Pixels(t, toffset, x, horiFlip, scan, leftClip);
					}
				} else if (y <= scan && y + 16 > scan && x < 256) {
					toffset = vertFlip ? 15 - (scan - y) : scan - y;
					if (toffset < 8) t = mmap.getSpritePatternTile(sprTile + (vertFlip ? 1 : 0) + ((sprTile & 1) !== 0 ? 255 : 0));
					else {
						t = mmap.getSpritePatternTile(sprTile + (vertFlip ? 0 : 1) + ((sprTile & 1) !== 0 ? 255 : 0));
						toffset = vertFlip ? 15 - toffset : toffset - 8;
					}
					toffset *= 8;
					return this._checkSpr0Pixels(t, toffset, x, horiFlip, scan, leftClip);
				}
				return false;
			}
			_checkSpr0Pixels(tile, toffset, startX, horiFlip, scan, leftClip) {
				let bufferIndex = scan * 256 + startX;
				for (let px = 0; px < 8; px++) {
					let tileIdx = horiFlip ? 7 - px : px;
					let pixelX = startX + px;
					if (pixelX >= 0 && pixelX < 255) {
						if (leftClip && pixelX < 8) {
							bufferIndex++;
							continue;
						}
						if (bufferIndex >= 0 && bufferIndex < 61440 && this.pixrendered[bufferIndex] > 255 && tile.pix[toffset + tileIdx] !== 0) {
							this.spr0HitX = pixelX;
							this.spr0HitY = scan;
							return true;
						}
					}
					bufferIndex++;
				}
				return false;
			}
			_precomputeSprite0Hit(nextBufferScan) {
				if (nextBufferScan < 1 || nextBufferScan > 239) return false;
				if (!this.scanlineSprite0[nextBufferScan]) return false;
				if (this.scanlineSpriteCount[nextBufferScan] === 0) return false;
				let oamBase = nextBufferScan * 32;
				let sprY = this.scanlineSecondaryOAM[oamBase + 0];
				let sprTile = this.scanlineSecondaryOAM[oamBase + 1];
				let sprAttr = this.scanlineSecondaryOAM[oamBase + 2];
				let sprX = this.scanlineSecondaryOAM[oamBase + 3];
				let y = sprY + 1;
				let vertFlip = sprAttr >> 7 & 1;
				let horiFlip = sprAttr >> 6 & 1;
				let leftClip = this.f_spClipping === 0 || this.f_bgClipping === 0;
				let spriteHeight = this.f_spriteSize === 0 ? 8 : 16;
				if (!(y <= nextBufferScan && y + spriteHeight > nextBufferScan)) return false;
				if (sprX >= 256) return false;
				let sprRow = vertFlip ? spriteHeight - 1 - (nextBufferScan - y) : nextBufferScan - y;
				let sprTileObj, toffset;
				if (this.f_spriteSize === 0) {
					let tIndexAdd = this.f_spPatternTable === 0 ? 0 : 256;
					sprTileObj = this.ptTile[sprTile + tIndexAdd];
					toffset = sprRow * 8;
				} else {
					let patternBase = (sprTile & 1) !== 0 ? 256 : 0;
					let baseTileIdx = sprTile & -2;
					if (sprRow < 8) {
						sprTileObj = this.ptTile[baseTileIdx + patternBase + (vertFlip ? 1 : 0)];
						toffset = sprRow * 8;
					} else {
						sprTileObj = this.ptTile[baseTileIdx + patternBase + (vertFlip ? 0 : 1)];
						toffset = (sprRow - 8) * 8;
					}
				}
				if (!sprTileObj) return false;
				let bgFineY = this.cntFV;
				let bgCoarseY = this.cntVT;
				let bgNtV = this.cntV;
				let baseBgTile = this.regS === 0 ? 0 : 256;
				for (let px = 0; px < 8; px++) {
					let screenX = sprX + px;
					if (screenX >= 255) continue;
					if (leftClip && screenX < 8) continue;
					let tileIdx = horiFlip ? 7 - px : px;
					if (sprTileObj.pix[toffset + tileIdx] === 0) continue;
					let tileOffset = screenX + this.regFH >> 3;
					let absCol = this.regHT + tileOffset;
					let bgNtH = this.regH;
					if (absCol >= 32) {
						absCol -= 32;
						bgNtH ^= 1;
					}
					let ntIdx = this.ntable1[(bgNtV << 1) + bgNtH];
					let bgTileIndex = this.nameTable[ntIdx].getTileIndex(absCol, bgCoarseY);
					let bgTile = this.ptTile[baseBgTile + bgTileIndex];
					if (!bgTile) continue;
					let bgPixelX = screenX + this.regFH & 7;
					if (bgTile.pix[bgFineY * 8 + bgPixelX] !== 0) {
						this.spr0HitX = screenX;
						this.spr0HitY = nextBufferScan - 1;
						return true;
					}
				}
				return false;
			}
			writeMem(address, value) {
				this.vramMem[address] = value;
				if (address < 8192) {
					this.vramMem[address] = value;
					this.patternWrite(address, value);
				} else if (address >= 8192 && address < 9152) this.nameTableWrite(this.ntable1[0], address - 8192, value);
				else if (address >= 9152 && address < 9216) this.attribTableWrite(this.ntable1[0], address - 9152, value);
				else if (address >= 9216 && address < 10176) this.nameTableWrite(this.ntable1[1], address - 9216, value);
				else if (address >= 10176 && address < 10240) this.attribTableWrite(this.ntable1[1], address - 10176, value);
				else if (address >= 10240 && address < 11200) this.nameTableWrite(this.ntable1[2], address - 10240, value);
				else if (address >= 11200 && address < 11264) this.attribTableWrite(this.ntable1[2], address - 11200, value);
				else if (address >= 11264 && address < 12224) this.nameTableWrite(this.ntable1[3], address - 11264, value);
				else if (address >= 12224 && address < 12288) this.attribTableWrite(this.ntable1[3], address - 12224, value);
				else if (address >= 16128 && address < 16160) this.updatePalettes();
			}
			updatePalettes() {
				let i;
				for (i = 0; i < 16; i++) if (this.f_dispType === 0) this.imgPalette[i] = this.palTable.getEntry(this.vramMem[16128 + i] & 63);
				else this.imgPalette[i] = this.palTable.getEntry(this.vramMem[16128 + i] & 48);
				for (i = 0; i < 16; i++) if (this.f_dispType === 0) this.sprPalette[i] = this.palTable.getEntry(this.vramMem[16144 + i] & 63);
				else this.sprPalette[i] = this.palTable.getEntry(this.vramMem[16144 + i] & 48);
			}
			patternWrite(address, value) {
				let tileIndex = address >> 4;
				let leftOver = address & 15;
				if (leftOver < 8) this.ptTile[tileIndex].setScanline(leftOver, value, this.vramMem[address + 8]);
				else this.ptTile[tileIndex].setScanline(leftOver - 8, this.vramMem[address - 8], value);
			}
			nameTableWrite(index, address, value) {
				this.nameTable[index].tile[address] = value;
				let bufferScan = this.scanline + 1 - 21;
				this.checkSprite0(bufferScan);
			}
			attribTableWrite(index, address, value) {
				this.nameTable[index].writeAttrib(address, value);
				this.nameTable[index].tile[960 + address] = value;
			}
			spriteRamWriteUpdate(address, value) {
				let tIndex = address >> 2;
				if (tIndex === 0) {
					let bufferScan = this.scanline + 1 - 21;
					this.checkSprite0(bufferScan);
				}
				switch (address & 3) {
					case 0:
						this.sprY[tIndex] = value;
						break;
					case 1:
						this.sprTile[tIndex] = value;
						break;
					case 2:
						this.vertFlip[tIndex] = value >> 7 & 1;
						this.horiFlip[tIndex] = value >> 6 & 1;
						this.bgPriority[tIndex] = value >> 5 & 1;
						this.sprCol[tIndex] = (value & 3) << 2;
						break;
					case 3: this.sprX[tIndex] = value;
				}
			}
			isPixelWhite(x, y) {
				this.triggerRendering();
				return this.nes.ppu.buffer[(y << 8) + x] === 16777215;
			}
			toJSON() {
				let i;
				let state = toJSON(this);
				state.nameTable = [];
				for (i = 0; i < this.nameTable.length; i++) state.nameTable[i] = this.nameTable[i].toJSON();
				state.ptTile = [];
				for (i = 0; i < this.ptTile.length; i++) state.ptTile[i] = this.ptTile[i].toJSON();
				return state;
			}
			fromJSON(state) {
				let i;
				fromJSON(this, state);
				for (i = 0; i < this.nameTable.length; i++) this.nameTable[i].fromJSON(state.nameTable[i]);
				for (i = 0; i < this.ptTile.length; i++) this.ptTile[i].fromJSON(state.ptTile[i]);
				for (i = 0; i < this.spriteMem.length; i++) this.spriteRamWriteUpdate(i, this.spriteMem[i]);
			}
			static JSON_PROPERTIES = [
				"vramMem",
				"spriteMem",
				"cntFV",
				"cntV",
				"cntH",
				"cntVT",
				"cntHT",
				"regFV",
				"regV",
				"regH",
				"regVT",
				"regHT",
				"regFH",
				"regS",
				"vramAddress",
				"vramTmpAddress",
				"f_nmiOnVblank",
				"f_spriteSize",
				"f_bgPatternTable",
				"f_spPatternTable",
				"f_addrInc",
				"f_nTblAddress",
				"f_color",
				"f_spVisibility",
				"f_bgVisibility",
				"f_spClipping",
				"f_bgClipping",
				"f_dispType",
				"vramBufferedReadValue",
				"firstWrite",
				"openBusLatch",
				"openBusDecayFrames",
				"currentMirroring",
				"vramMirrorTable",
				"ntable1",
				"sramAddress",
				"hitSpr0",
				"secondaryOAM",
				"spritesFound",
				"sprite0InSecondary",
				"sprPalette",
				"imgPalette",
				"curX",
				"scanline",
				"lastRenderedScanline",
				"curNt",
				"scantile",
				"attrib",
				"buffer",
				"bgbuffer",
				"pixrendered",
				"nmiOutput",
				"nmiSuppressed",
				"vblankPending",
				"dummyCycleToggle",
				"validTileData",
				"scanlineAlreadyRendered"
			];
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/papu/channel-dm.js
		var ChannelDM = class ChannelDM {
			static MODE_NORMAL = 0;
			static MODE_LOOP = 1;
			static MODE_IRQ = 2;
			static JSON_PROPERTIES = [
				"isEnabled",
				"hasSample",
				"irqGenerated",
				"playMode",
				"dmaFrequency",
				"dmaCounter",
				"deltaCounter",
				"playStartAddress",
				"playAddress",
				"playLength",
				"playLengthCounter",
				"shiftCounter",
				"reg4012",
				"reg4013",
				"sample",
				"dacLsb",
				"data",
				"lastFetchedByte"
			];
			constructor(papu) {
				this.papu = papu;
				this.isEnabled = false;
				this.hasSample = false;
				this.irqGenerated = false;
				this.playMode = ChannelDM.MODE_NORMAL;
				this.dmaFrequency = 0;
				this.dmaCounter = 0;
				this.deltaCounter = 0;
				this.playStartAddress = 0;
				this.playAddress = 0;
				this.playLength = 0;
				this.playLengthCounter = 0;
				this.sample = 0;
				this.dacLsb = 0;
				this.shiftCounter = 0;
				this.reg4012 = 0;
				this.reg4013 = 0;
				this.data = 0;
				this.lastFetchedByte = 0;
			}
			clockDmc() {
				if (this.hasSample) {
					if ((this.data & 1) === 0) {
						if (this.deltaCounter > 0) this.deltaCounter--;
					} else if (this.deltaCounter < 63) this.deltaCounter++;
					this.sample = this.isEnabled ? (this.deltaCounter << 1) + this.dacLsb : 0;
					this.data >>= 1;
				}
				this.dmaCounter--;
				if (this.dmaCounter <= 0) {
					this.hasSample = false;
					this.endOfSample();
					this.dmaCounter = 8;
				}
				if (this.irqGenerated) this.papu.nes.cpu.requestIrq(this.papu.nes.cpu.IRQ_NORMAL);
			}
			endOfSample() {
				if (this.playLengthCounter === 0 && this.playMode === ChannelDM.MODE_LOOP) {
					this.playAddress = this.playStartAddress;
					this.playLengthCounter = this.playLength;
				}
				if (this.playLengthCounter > 0) {
					this.nextSample();
					if (this.playLengthCounter === 0) {
						if (this.playMode === ChannelDM.MODE_IRQ) this.irqGenerated = true;
					}
				}
			}
			nextSample() {
				this.data = this.papu.nes.mmap.load(this.playAddress);
				this.lastFetchedByte = this.data;
				this.papu.nes.cpu.haltCycles(4);
				this.playLengthCounter--;
				this.playAddress++;
				if (this.playAddress > 65535) this.playAddress = 32768;
				this.hasSample = true;
			}
			writeReg(address, value) {
				if (address === 16400) {
					if (value >> 6 === 0) this.playMode = ChannelDM.MODE_NORMAL;
					else if ((value >> 6 & 1) === 1) this.playMode = ChannelDM.MODE_LOOP;
					else if (value >> 6 === 2) this.playMode = ChannelDM.MODE_IRQ;
					if ((value & 128) === 0) this.irqGenerated = false;
					this.dmaFrequency = this.papu.getDmcFrequency(value & 15);
				} else if (address === 16401) {
					this.deltaCounter = value >> 1 & 63;
					this.dacLsb = value & 1;
					this.sample = (this.deltaCounter << 1) + this.dacLsb;
				} else if (address === 16402) {
					this.playStartAddress = value << 6 | 49152;
					this.reg4012 = value;
				} else if (address === 16403) {
					this.playLength = (value << 4) + 1;
					this.reg4013 = value;
				} else if (address === 16405) {
					this.irqGenerated = false;
					if ((value >> 4 & 1) === 0) this.playLengthCounter = 0;
					else if (this.playLengthCounter === 0) {
						this.playAddress = this.playStartAddress;
						this.playLengthCounter = this.playLength;
						if (!this.hasSample && this.playLengthCounter > 0) {
							this.nextSample();
							this.dmaCounter = 8;
							this.shiftCounter = this.dmaFrequency;
							if (this.playLengthCounter === 0 && this.playMode === ChannelDM.MODE_IRQ) this.irqGenerated = true;
						}
					}
				}
			}
			setEnabled(value) {
				this.isEnabled = value;
			}
			getLengthStatus() {
				return this.playLengthCounter === 0 || !this.isEnabled ? 0 : 1;
			}
			getIrqStatus() {
				return this.irqGenerated ? 1 : 0;
			}
			toJSON() {
				return toJSON(this);
			}
			fromJSON(s) {
				fromJSON(this, s);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/papu/channel-noise.js
		var ChannelNoise = class {
			constructor(papu) {
				this.papu = papu;
				this.progTimerCount = 0;
				this.progTimerMax = 0;
				this.isEnabled = false;
				this.lengthCounter = 0;
				this.lengthCounterEnable = false;
				this.envDecayDisable = false;
				this.envDecayLoopEnable = false;
				this.envReset = false;
				this.shiftNow = false;
				this.envDecayRate = 0;
				this.envDecayCounter = 0;
				this.envVolume = 0;
				this.masterVolume = 0;
				this.shiftReg = 1;
				this.randomBit = 0;
				this.randomMode = 0;
				this.sampleValue = 0;
				this.tmp = 0;
				this.accValue = 0;
				this.accCount = 1;
			}
			clockLengthCounter() {
				if (this.lengthCounterEnable && this.lengthCounter > 0) {
					this.lengthCounter--;
					if (this.lengthCounter === 0) this.updateSampleValue();
				}
			}
			clockEnvDecay() {
				if (this.envReset) {
					this.envReset = false;
					this.envDecayCounter = this.envDecayRate + 1;
					this.envVolume = 15;
				} else if (--this.envDecayCounter <= 0) {
					this.envDecayCounter = this.envDecayRate + 1;
					if (this.envVolume > 0) this.envVolume--;
					else this.envVolume = this.envDecayLoopEnable ? 15 : 0;
				}
				if (this.envDecayDisable) this.masterVolume = this.envDecayRate;
				else this.masterVolume = this.envVolume;
				this.updateSampleValue();
			}
			updateSampleValue() {
				if (this.isEnabled && this.lengthCounter > 0) this.sampleValue = this.randomBit * this.masterVolume;
			}
			writeReg(address, value) {
				if (address === 16396) {
					this.envDecayDisable = (value & 16) !== 0;
					this.envDecayRate = value & 15;
					this.envDecayLoopEnable = (value & 32) !== 0;
					this.lengthCounterEnable = (value & 32) === 0;
					if (this.envDecayDisable) this.masterVolume = this.envDecayRate;
					else this.masterVolume = this.envVolume;
				} else if (address === 16398) {
					this.progTimerMax = this.papu.getNoiseWaveLength(value & 15);
					this.randomMode = value >> 7;
				} else if (address === 16399) {
					if (this.isEnabled) this.lengthCounter = this.papu.getLengthMax(value & 248);
					this.envReset = true;
				}
			}
			setEnabled(value) {
				this.isEnabled = value;
				if (!value) this.lengthCounter = 0;
				this.updateSampleValue();
			}
			getLengthStatus() {
				return this.lengthCounter === 0 || !this.isEnabled ? 0 : 1;
			}
			toJSON() {
				return toJSON(this);
			}
			fromJSON(s) {
				fromJSON(this, s);
			}
			static JSON_PROPERTIES = [
				"isEnabled",
				"envDecayDisable",
				"envDecayLoopEnable",
				"lengthCounterEnable",
				"envReset",
				"shiftNow",
				"lengthCounter",
				"progTimerCount",
				"progTimerMax",
				"envDecayRate",
				"envDecayCounter",
				"envVolume",
				"masterVolume",
				"shiftReg",
				"randomBit",
				"randomMode",
				"sampleValue",
				"accValue",
				"accCount",
				"tmp"
			];
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/papu/channel-square.js
		var ChannelSquare = class {
			constructor(papu, square1) {
				this.papu = papu;
				this.dutyLookup = [
					0,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					1,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					1,
					1,
					1,
					0,
					0,
					0,
					1,
					0,
					0,
					1,
					1,
					1,
					1,
					1
				];
				this.impLookup = [
					1,
					-1,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					-1,
					0,
					0,
					0,
					0,
					0,
					1,
					0,
					0,
					0,
					-1,
					0,
					0,
					0,
					-1,
					0,
					1,
					0,
					0,
					0,
					0,
					0
				];
				this.sqr1 = square1;
				this.progTimerCount = 0;
				this.progTimerMax = 0;
				this.lengthCounter = 0;
				this.squareCounter = 0;
				this.sweepCounter = 0;
				this.sweepCounterMax = 0;
				this.sweepMode = 0;
				this.sweepShiftAmount = 0;
				this.envDecayRate = 0;
				this.envDecayCounter = 0;
				this.envVolume = 0;
				this.masterVolume = 0;
				this.dutyMode = 0;
				this.vol = 0;
				this.isEnabled = false;
				this.lengthCounterEnable = false;
				this.sweepActive = false;
				this.sweepCarry = false;
				this.envDecayDisable = false;
				this.envDecayLoopEnable = false;
				this.envReset = false;
				this.updateSweepPeriod = false;
				this.sweepResult = 0;
				this.sampleValue = 0;
			}
			clockLengthCounter() {
				if (this.lengthCounterEnable && this.lengthCounter > 0) {
					this.lengthCounter--;
					if (this.lengthCounter === 0) this.updateSampleValue();
				}
			}
			clockEnvDecay() {
				if (this.envReset) {
					this.envReset = false;
					this.envDecayCounter = this.envDecayRate + 1;
					this.envVolume = 15;
				} else if (--this.envDecayCounter <= 0) {
					this.envDecayCounter = this.envDecayRate + 1;
					if (this.envVolume > 0) this.envVolume--;
					else this.envVolume = this.envDecayLoopEnable ? 15 : 0;
				}
				if (this.envDecayDisable) this.masterVolume = this.envDecayRate;
				else this.masterVolume = this.envVolume;
				this.updateSampleValue();
			}
			clockSweep() {
				if (--this.sweepCounter <= 0) {
					this.sweepCounter = this.sweepCounterMax + 1;
					if (this.sweepActive && this.sweepShiftAmount > 0 && this.progTimerMax > 7) {
						this.sweepCarry = false;
						if (this.sweepMode === 0) {
							this.progTimerMax += this.progTimerMax >> this.sweepShiftAmount;
							if (this.progTimerMax > 2047) {
								this.progTimerMax = 4095;
								this.sweepCarry = true;
							}
						} else this.progTimerMax = this.progTimerMax - ((this.progTimerMax >> this.sweepShiftAmount) + (this.sqr1 ? 1 : 0));
					}
				}
				if (this.updateSweepPeriod) {
					this.updateSweepPeriod = false;
					this.sweepCounter = this.sweepCounterMax + 1;
				}
			}
			updateSampleValue() {
				if (this.isEnabled && this.lengthCounter > 0 && this.progTimerMax > 7) {
					if (this.sweepMode === 0 && this.progTimerMax + (this.progTimerMax >> this.sweepShiftAmount) > 2047) this.sampleValue = 0;
					else this.sampleValue = this.masterVolume * this.dutyLookup[(this.dutyMode << 3) + this.squareCounter];
				} else this.sampleValue = 0;
			}
			writeReg(address, value) {
				let addrAdd = this.sqr1 ? 0 : 4;
				if (address === 16384 + addrAdd) {
					this.envDecayDisable = (value & 16) !== 0;
					this.envDecayRate = value & 15;
					this.envDecayLoopEnable = (value & 32) !== 0;
					this.dutyMode = value >> 6 & 3;
					this.lengthCounterEnable = (value & 32) === 0;
					if (this.envDecayDisable) this.masterVolume = this.envDecayRate;
					else this.masterVolume = this.envVolume;
					this.updateSampleValue();
				} else if (address === 16385 + addrAdd) {
					this.sweepActive = (value & 128) !== 0;
					this.sweepCounterMax = value >> 4 & 7;
					this.sweepMode = value >> 3 & 1;
					this.sweepShiftAmount = value & 7;
					this.updateSweepPeriod = true;
				} else if (address === 16386 + addrAdd) {
					this.progTimerMax &= 1792;
					this.progTimerMax |= value;
				} else if (address === 16387 + addrAdd) {
					this.progTimerMax &= 255;
					this.progTimerMax |= (value & 7) << 8;
					if (this.isEnabled) this.lengthCounter = this.papu.getLengthMax(value & 248);
					this.envReset = true;
				}
			}
			setEnabled(value) {
				this.isEnabled = value;
				if (!value) this.lengthCounter = 0;
				this.updateSampleValue();
			}
			getLengthStatus() {
				return this.lengthCounter === 0 || !this.isEnabled ? 0 : 1;
			}
			toJSON() {
				return toJSON(this);
			}
			fromJSON(s) {
				fromJSON(this, s);
			}
			static JSON_PROPERTIES = [
				"isEnabled",
				"lengthCounterEnable",
				"sweepActive",
				"envDecayDisable",
				"envDecayLoopEnable",
				"envReset",
				"sweepCarry",
				"updateSweepPeriod",
				"progTimerCount",
				"progTimerMax",
				"lengthCounter",
				"squareCounter",
				"sweepCounter",
				"sweepCounterMax",
				"sweepMode",
				"sweepShiftAmount",
				"envDecayRate",
				"envDecayCounter",
				"envVolume",
				"masterVolume",
				"dutyMode",
				"sweepResult",
				"sampleValue",
				"vol"
			];
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/papu/channel-triangle.js
		var ChannelTriangle = class {
			constructor(papu) {
				this.papu = papu;
				this.progTimerCount = 0;
				this.progTimerMax = 0;
				this.triangleCounter = 0;
				this.isEnabled = false;
				this.sampleCondition = false;
				this.lengthCounter = 0;
				this.lengthCounterEnable = false;
				this.linearCounter = 0;
				this.lcLoadValue = 0;
				this.lcHalt = true;
				this.lcControl = false;
				this.tmp = 0;
				this.sampleValue = 15;
			}
			clockLengthCounter() {
				if (this.lengthCounterEnable && this.lengthCounter > 0) {
					this.lengthCounter--;
					if (this.lengthCounter === 0) this.updateSampleCondition();
				}
			}
			clockLinearCounter() {
				if (this.lcHalt) {
					this.linearCounter = this.lcLoadValue;
					this.updateSampleCondition();
				} else if (this.linearCounter > 0) {
					this.linearCounter--;
					this.updateSampleCondition();
				}
				if (!this.lcControl) this.lcHalt = false;
			}
			getLengthStatus() {
				return this.lengthCounter === 0 || !this.isEnabled ? 0 : 1;
			}
			readReg(address) {
				return 0;
			}
			writeReg(address, value) {
				if (address === 16392) {
					this.lcControl = (value & 128) !== 0;
					this.lcLoadValue = value & 127;
					this.lengthCounterEnable = !this.lcControl;
				} else if (address === 16394) {
					this.progTimerMax &= 1792;
					this.progTimerMax |= value;
				} else if (address === 16395) {
					this.progTimerMax &= 255;
					this.progTimerMax |= (value & 7) << 8;
					if (this.isEnabled) this.lengthCounter = this.papu.getLengthMax(value & 248);
					this.lcHalt = true;
				}
				this.updateSampleCondition();
			}
			clockProgrammableTimer(nCycles) {
				if (this.progTimerMax > 0) {
					this.progTimerCount += nCycles;
					while (this.progTimerMax > 0 && this.progTimerCount >= this.progTimerMax) {
						this.progTimerCount -= this.progTimerMax;
						if (this.isEnabled && this.lengthCounter > 0 && this.linearCounter > 0) this.clockTriangleGenerator();
					}
				}
			}
			clockTriangleGenerator() {
				this.triangleCounter++;
				this.triangleCounter &= 31;
			}
			setEnabled(value) {
				this.isEnabled = value;
				if (!value) this.lengthCounter = 0;
				this.updateSampleCondition();
			}
			updateSampleCondition() {
				this.sampleCondition = this.isEnabled && this.progTimerMax > 7 && this.linearCounter > 0 && this.lengthCounter > 0;
			}
			toJSON() {
				return toJSON(this);
			}
			fromJSON(s) {
				fromJSON(this, s);
			}
			static JSON_PROPERTIES = [
				"isEnabled",
				"sampleCondition",
				"lengthCounterEnable",
				"lcHalt",
				"lcControl",
				"progTimerCount",
				"progTimerMax",
				"triangleCounter",
				"lengthCounter",
				"linearCounter",
				"lcLoadValue",
				"sampleValue",
				"tmp"
			];
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/papu/index.js
		const CPU_FREQ_NTSC = 1789772.5;
		const FRAME_STEPS_4 = [
			7457,
			14913,
			22371,
			29828,
			29829
		];
		const FRAME_STEPS_5 = [
			7457,
			14913,
			22371,
			29829,
			37281
		];
		const FRAME_PERIOD_4 = 29830;
		const FRAME_PERIOD_5 = 37282;
		var PAPU = class {
			constructor(nes) {
				this.nes = nes;
				this.square1 = new ChannelSquare(this, true);
				this.square2 = new ChannelSquare(this, false);
				this.triangle = new ChannelTriangle(this);
				this.noise = new ChannelNoise(this);
				this.dmc = new ChannelDM(this);
				this.startedPlaying = false;
				this.recordOutput = false;
				this.triValue = 0;
				this.prevSampleL = 0;
				this.prevSampleR = 0;
				this.smpAccumL = 0;
				this.smpAccumR = 0;
				this.dacRange = 0;
				this.dcValue = 0;
				this.masterVolume = 256;
				this.panning = [
					80,
					170,
					100,
					150,
					128
				];
				this.setPanning(this.panning);
				this.initLengthLookup();
				this.initDmcFrequencyLookup();
				this.initNoiseWavelengthLookup();
				this.initDACtables();
				for (let i = 0; i < 20; i++) if (i === 16) this.writeReg(16400, 16);
				else this.writeReg(16384 + i, 0);
				this.sampleRate = this.nes.opts.sampleRate;
				this.sampleTimerMax = Math.floor(1024 * CPU_FREQ_NTSC / this.sampleRate);
				this.sampleTimer = 0;
				this.updateChannelEnable(0);
				this.frameCycleCounter = 0;
				this.frameStep = 0;
				this.countSequence = 0;
				this.sampleCount = 0;
				this.frameIrqEnabled = false;
				this.frameIrqActive = false;
				this.frameIrqClearPending = false;
				this.apuCycleParity = 0;
				this.accCount = 0;
				this.smpSquare1 = 0;
				this.smpSquare2 = 0;
				this.smpTriangle = 0;
				this.smpDmc = 0;
				this.channelEnableValue = 255;
				this.extraCycles = 0;
				this.maxSample = -5e5;
				this.minSample = 5e5;
			}
			readReg(address) {
				let tmp = 0;
				tmp |= this.square1.getLengthStatus();
				tmp |= this.square2.getLengthStatus() << 1;
				tmp |= this.triangle.getLengthStatus() << 2;
				tmp |= this.noise.getLengthStatus() << 3;
				tmp |= this.dmc.getLengthStatus() << 4;
				tmp |= this.nes.cpu.dataBus & 32;
				tmp |= (this.frameIrqActive ? 1 : 0) << 6;
				tmp |= this.dmc.getIrqStatus() << 7;
				if (this.frameIrqActive) this.frameIrqClearPending = true;
				return tmp & 255;
			}
			writeReg(address, value) {
				if (address >= 16384 && address < 16388) this.square1.writeReg(address, value);
				else if (address >= 16388 && address < 16392) this.square2.writeReg(address, value);
				else if (address >= 16392 && address < 16396) this.triangle.writeReg(address, value);
				else if (address >= 16396 && address <= 16399) this.noise.writeReg(address, value);
				else if (address === 16400) this.dmc.writeReg(address, value);
				else if (address === 16401) this.dmc.writeReg(address, value);
				else if (address === 16402) this.dmc.writeReg(address, value);
				else if (address === 16403) this.dmc.writeReg(address, value);
				else if (address === 16405) {
					this.updateChannelEnable(value);
					this.dmc.writeReg(address, value);
				} else if (address === 16407) {
					this.countSequence = value >> 7 & 1;
					let cpu = this.nes.cpu;
					let pendingCycles = cpu.instrBusCycles + 1 - cpu.apuCatchupCycles;
					let writeParity = this.apuCycleParity + pendingCycles & 1;
					this.frameCycleCounter = -7 + writeParity;
					this.frameStep = 0;
					if (value & 64) {
						this.frameIrqEnabled = false;
						this.frameIrqActive = false;
						this.frameIrqClearPending = false;
					} else this.frameIrqEnabled = true;
					if (this.countSequence === 1) {
						this.clockQuarterFrame();
						this.clockHalfFrame();
					}
				}
			}
			updateChannelEnable(value) {
				this.channelEnableValue = value & 65535;
				this.square1.setEnabled((value & 1) !== 0);
				this.square2.setEnabled((value & 2) !== 0);
				this.triangle.setEnabled((value & 4) !== 0);
				this.noise.setEnabled((value & 8) !== 0);
				this.dmc.setEnabled((value & 16) !== 0);
			}
			clockFrameCounter(nCycles, frameCounterAlreadyAdvanced) {
				let frameCounterCycles = nCycles - (frameCounterAlreadyAdvanced || 0);
				this.processFrameIrqClear(frameCounterCycles);
				this.apuCycleParity = this.apuCycleParity + frameCounterCycles & 1;
				nCycles += this.extraCycles;
				let maxCycles = this.sampleTimerMax - this.sampleTimer;
				if (nCycles << 10 > maxCycles) {
					this.extraCycles = (nCycles << 10) - maxCycles >> 10;
					nCycles -= this.extraCycles;
				} else this.extraCycles = 0;
				let dmc = this.dmc;
				let triangle = this.triangle;
				let square1 = this.square1;
				let square2 = this.square2;
				let noise = this.noise;
				if (dmc.isEnabled) {
					dmc.shiftCounter -= nCycles << 3;
					while (dmc.shiftCounter <= 0 && dmc.dmaFrequency > 0) {
						dmc.shiftCounter += dmc.dmaFrequency;
						dmc.clockDmc();
					}
				}
				if (triangle.progTimerMax > 0) {
					triangle.progTimerCount -= nCycles;
					while (triangle.progTimerCount <= 0) {
						triangle.progTimerCount += triangle.progTimerMax + 1;
						if (triangle.linearCounter > 0 && triangle.lengthCounter > 0) {
							triangle.triangleCounter++;
							triangle.triangleCounter &= 31;
							if (triangle.isEnabled) {
								if (triangle.triangleCounter >= 16) triangle.sampleValue = triangle.triangleCounter & 15;
								else triangle.sampleValue = 15 - (triangle.triangleCounter & 15);
								triangle.sampleValue <<= 4;
							}
						}
					}
				}
				square1.progTimerCount -= nCycles;
				if (square1.progTimerCount <= 0) {
					square1.progTimerCount += square1.progTimerMax + 1 << 1;
					square1.squareCounter++;
					square1.squareCounter &= 7;
					square1.updateSampleValue();
				}
				square2.progTimerCount -= nCycles;
				if (square2.progTimerCount <= 0) {
					square2.progTimerCount += square2.progTimerMax + 1 << 1;
					square2.squareCounter++;
					square2.squareCounter &= 7;
					square2.updateSampleValue();
				}
				let acc_c = nCycles;
				if (noise.progTimerCount - acc_c > 0) {
					noise.progTimerCount -= acc_c;
					noise.accCount += acc_c;
					noise.accValue += acc_c * noise.sampleValue;
				} else while (acc_c-- > 0) {
					if (--noise.progTimerCount <= 0 && noise.progTimerMax > 0) {
						noise.shiftReg <<= 1;
						noise.tmp = (noise.shiftReg << (noise.randomMode === 0 ? 1 : 6) ^ noise.shiftReg) & 32768;
						if (noise.tmp !== 0) {
							noise.shiftReg |= 1;
							noise.randomBit = 0;
							noise.sampleValue = 0;
						} else {
							noise.randomBit = 1;
							if (noise.isEnabled && noise.lengthCounter > 0) noise.sampleValue = noise.masterVolume;
							else noise.sampleValue = 0;
						}
						noise.progTimerCount += noise.progTimerMax;
					}
					noise.accValue += noise.sampleValue;
					noise.accCount++;
				}
				if (this.frameIrqEnabled && this.frameIrqActive) this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL);
				this._advanceFrameSteps(frameCounterCycles);
				this.accSample(nCycles);
				this.sampleTimer += nCycles << 10;
				if (this.sampleTimer >= this.sampleTimerMax) {
					this.sample();
					this.sampleTimer -= this.sampleTimerMax;
				}
			}
			processFrameIrqClear(nCycles) {
				if (!this.frameIrqClearPending || nCycles <= 0) return;
				if (nCycles >= ((this.apuCycleParity & 1) === 0 ? 1 : 2)) {
					this.frameIrqActive = false;
					this.frameIrqClearPending = false;
				}
			}
			advanceFrameCounter(nCycles) {
				this.processFrameIrqClear(nCycles);
				this.apuCycleParity = this.apuCycleParity + nCycles & 1;
				this._advanceFrameSteps(nCycles);
			}
			_advanceFrameSteps(frameCounterCycles) {
				this.frameCycleCounter += frameCounterCycles;
				let steps = this.countSequence === 0 ? FRAME_STEPS_4 : FRAME_STEPS_5;
				let period = this.countSequence === 0 ? FRAME_PERIOD_4 : FRAME_PERIOD_5;
				for (;;) if (this.frameStep < steps.length && this.frameCycleCounter >= steps[this.frameStep]) {
					this.fireFrameStep(this.frameStep);
					this.frameStep++;
				} else if (this.frameStep >= steps.length && this.frameCycleCounter >= period) {
					this.frameStep = 0;
					this.frameCycleCounter -= period;
					if (this.countSequence === 0) {
						this.frameIrqActive = this.frameIrqEnabled;
						this.frameIrqClearPending = false;
					}
				} else break;
			}
			accSample(cycles) {
				if (this.triangle.sampleCondition) {
					this.triValue = Math.floor((this.triangle.progTimerCount << 4) / (this.triangle.progTimerMax + 1));
					if (this.triValue > 16) this.triValue = 16;
					if (this.triangle.triangleCounter >= 16) this.triValue = 16 - this.triValue;
					this.triValue += this.triangle.sampleValue;
				}
				if (cycles === 2) {
					this.smpTriangle += this.triValue << 1;
					this.smpDmc += this.dmc.sample << 1;
					this.smpSquare1 += this.square1.sampleValue << 1;
					this.smpSquare2 += this.square2.sampleValue << 1;
					this.accCount += 2;
				} else if (cycles === 4) {
					this.smpTriangle += this.triValue << 2;
					this.smpDmc += this.dmc.sample << 2;
					this.smpSquare1 += this.square1.sampleValue << 2;
					this.smpSquare2 += this.square2.sampleValue << 2;
					this.accCount += 4;
				} else {
					this.smpTriangle += cycles * this.triValue;
					this.smpDmc += cycles * this.dmc.sample;
					this.smpSquare1 += cycles * this.square1.sampleValue;
					this.smpSquare2 += cycles * this.square2.sampleValue;
					this.accCount += cycles;
				}
			}
			fireFrameStep(step) {
				if (this.countSequence === 0) switch (step) {
					case 0:
						this.clockQuarterFrame();
						break;
					case 1:
						this.clockQuarterFrame();
						this.clockHalfFrame();
						break;
					case 2:
						this.clockQuarterFrame();
						break;
					case 3:
						this.frameIrqActive = true;
						this.frameIrqClearPending = false;
						break;
					case 4:
						this.clockQuarterFrame();
						this.clockHalfFrame();
						this.frameIrqActive = true;
						this.frameIrqClearPending = false;
				}
				else switch (step) {
					case 0:
						this.clockQuarterFrame();
						break;
					case 1:
						this.clockQuarterFrame();
						this.clockHalfFrame();
						break;
					case 2:
						this.clockQuarterFrame();
						break;
					case 3: break;
					case 4:
						this.clockQuarterFrame();
						this.clockHalfFrame();
				}
			}
			clockQuarterFrame() {
				this.square1.clockEnvDecay();
				this.square2.clockEnvDecay();
				this.noise.clockEnvDecay();
				this.triangle.clockLinearCounter();
			}
			clockHalfFrame() {
				this.triangle.clockLengthCounter();
				this.square1.clockLengthCounter();
				this.square2.clockLengthCounter();
				this.noise.clockLengthCounter();
				this.square1.clockSweep();
				this.square2.clockSweep();
			}
			sample() {
				let sq_index, tnd_index;
				if (this.accCount > 0) {
					this.smpSquare1 <<= 4;
					this.smpSquare1 = Math.floor(this.smpSquare1 / this.accCount);
					this.smpSquare2 <<= 4;
					this.smpSquare2 = Math.floor(this.smpSquare2 / this.accCount);
					this.smpTriangle = Math.floor(this.smpTriangle / this.accCount);
					this.smpDmc <<= 4;
					this.smpDmc = Math.floor(this.smpDmc / this.accCount);
					this.accCount = 0;
				} else {
					this.smpSquare1 = this.square1.sampleValue << 4;
					this.smpSquare2 = this.square2.sampleValue << 4;
					this.smpTriangle = this.triangle.sampleValue;
					this.smpDmc = this.dmc.sample << 4;
				}
				let smpNoise = Math.floor((this.noise.accValue << 4) / this.noise.accCount);
				this.noise.accValue = smpNoise >> 4;
				this.noise.accCount = 1;
				sq_index = this.smpSquare1 * this.stereoPosLSquare1 + this.smpSquare2 * this.stereoPosLSquare2 >> 8;
				tnd_index = 3 * this.smpTriangle * this.stereoPosLTriangle + (smpNoise << 1) * this.stereoPosLNoise + this.smpDmc * this.stereoPosLDMC >> 8;
				if (sq_index >= this.square_table.length) sq_index = this.square_table.length - 1;
				if (tnd_index >= this.tnd_table.length) tnd_index = this.tnd_table.length - 1;
				let sampleValueL = this.square_table[sq_index] + this.tnd_table[tnd_index] - this.dcValue;
				sq_index = this.smpSquare1 * this.stereoPosRSquare1 + this.smpSquare2 * this.stereoPosRSquare2 >> 8;
				tnd_index = 3 * this.smpTriangle * this.stereoPosRTriangle + (smpNoise << 1) * this.stereoPosRNoise + this.smpDmc * this.stereoPosRDMC >> 8;
				if (sq_index >= this.square_table.length) sq_index = this.square_table.length - 1;
				if (tnd_index >= this.tnd_table.length) tnd_index = this.tnd_table.length - 1;
				let sampleValueR = this.square_table[sq_index] + this.tnd_table[tnd_index] - this.dcValue;
				let smpDiffL = sampleValueL - this.prevSampleL;
				this.prevSampleL += smpDiffL;
				this.smpAccumL += smpDiffL - (this.smpAccumL >> 10);
				sampleValueL = this.smpAccumL;
				let smpDiffR = sampleValueR - this.prevSampleR;
				this.prevSampleR += smpDiffR;
				this.smpAccumR += smpDiffR - (this.smpAccumR >> 10);
				sampleValueR = this.smpAccumR;
				if (sampleValueL > this.maxSample) this.maxSample = sampleValueL;
				if (sampleValueL < this.minSample) this.minSample = sampleValueL;
				if (this.nes.opts.onAudioSample) this.nes.opts.onAudioSample(sampleValueL / 32768, sampleValueR / 32768);
				this.smpSquare1 = 0;
				this.smpSquare2 = 0;
				this.smpTriangle = 0;
				this.smpDmc = 0;
			}
			getLengthMax(value) {
				return this.lengthLookup[value >> 3];
			}
			getDmcFrequency(value) {
				if (value >= 0 && value < 16) return this.dmcFreqLookup[value];
				return 0;
			}
			getNoiseWaveLength(value) {
				if (value >= 0 && value < 16) return this.noiseWavelengthLookup[value];
				return 0;
			}
			setFrameRate(rate) {
				this.sampleTimerMax = Math.floor(1024 * CPU_FREQ_NTSC * rate / (this.sampleRate * 60));
			}
			setPanning(pos) {
				for (let i = 0; i < 5; i++) this.panning[i] = pos[i];
				this.updateStereoPos();
			}
			setMasterVolume(value) {
				if (value < 0) value = 0;
				if (value > 256) value = 256;
				this.masterVolume = value;
				this.updateStereoPos();
			}
			updateStereoPos() {
				this.stereoPosLSquare1 = this.panning[0] * this.masterVolume >> 8;
				this.stereoPosLSquare2 = this.panning[1] * this.masterVolume >> 8;
				this.stereoPosLTriangle = this.panning[2] * this.masterVolume >> 8;
				this.stereoPosLNoise = this.panning[3] * this.masterVolume >> 8;
				this.stereoPosLDMC = this.panning[4] * this.masterVolume >> 8;
				this.stereoPosRSquare1 = this.masterVolume - this.stereoPosLSquare1;
				this.stereoPosRSquare2 = this.masterVolume - this.stereoPosLSquare2;
				this.stereoPosRTriangle = this.masterVolume - this.stereoPosLTriangle;
				this.stereoPosRNoise = this.masterVolume - this.stereoPosLNoise;
				this.stereoPosRDMC = this.masterVolume - this.stereoPosLDMC;
			}
			initLengthLookup() {
				this.lengthLookup = [
					10,
					254,
					20,
					2,
					40,
					4,
					80,
					6,
					160,
					8,
					60,
					10,
					14,
					12,
					26,
					14,
					12,
					16,
					24,
					18,
					48,
					20,
					96,
					22,
					192,
					24,
					72,
					26,
					16,
					28,
					32,
					30
				];
			}
			initDmcFrequencyLookup() {
				this.dmcFreqLookup = new Array(16);
				this.dmcFreqLookup[0] = 3424;
				this.dmcFreqLookup[1] = 3040;
				this.dmcFreqLookup[2] = 2720;
				this.dmcFreqLookup[3] = 2560;
				this.dmcFreqLookup[4] = 2288;
				this.dmcFreqLookup[5] = 2032;
				this.dmcFreqLookup[6] = 1808;
				this.dmcFreqLookup[7] = 1712;
				this.dmcFreqLookup[8] = 1520;
				this.dmcFreqLookup[9] = 1280;
				this.dmcFreqLookup[10] = 1136;
				this.dmcFreqLookup[11] = 1024;
				this.dmcFreqLookup[12] = 848;
				this.dmcFreqLookup[13] = 672;
				this.dmcFreqLookup[14] = 576;
				this.dmcFreqLookup[15] = 432;
			}
			initNoiseWavelengthLookup() {
				this.noiseWavelengthLookup = new Array(16);
				this.noiseWavelengthLookup[0] = 4;
				this.noiseWavelengthLookup[1] = 8;
				this.noiseWavelengthLookup[2] = 16;
				this.noiseWavelengthLookup[3] = 32;
				this.noiseWavelengthLookup[4] = 64;
				this.noiseWavelengthLookup[5] = 96;
				this.noiseWavelengthLookup[6] = 128;
				this.noiseWavelengthLookup[7] = 160;
				this.noiseWavelengthLookup[8] = 202;
				this.noiseWavelengthLookup[9] = 254;
				this.noiseWavelengthLookup[10] = 380;
				this.noiseWavelengthLookup[11] = 508;
				this.noiseWavelengthLookup[12] = 762;
				this.noiseWavelengthLookup[13] = 1016;
				this.noiseWavelengthLookup[14] = 2034;
				this.noiseWavelengthLookup[15] = 4068;
			}
			initDACtables() {
				let value, ival, i;
				let max_sqr = 0;
				let max_tnd = 0;
				this.square_table = new Array(512);
				this.tnd_table = new Array(3264);
				for (i = 0; i < 512; i++) {
					value = 95.52 / (8128 / (i / 16) + 100);
					value *= .98411;
					value *= 5e4;
					ival = Math.floor(value);
					this.square_table[i] = ival;
					if (ival > max_sqr) max_sqr = ival;
				}
				for (i = 0; i < 3264; i++) {
					value = 163.67 / (24329 / (i / 16) + 100);
					value *= .98411;
					value *= 5e4;
					ival = Math.floor(value);
					this.tnd_table[i] = ival;
					if (ival > max_tnd) max_tnd = ival;
				}
				this.dacRange = max_sqr + max_tnd;
				this.dcValue = this.dacRange / 2;
			}
			toJSON() {
				let obj = toJSON(this);
				obj.dmc = this.dmc.toJSON();
				obj.noise = this.noise.toJSON();
				obj.square1 = this.square1.toJSON();
				obj.square2 = this.square2.toJSON();
				obj.triangle = this.triangle.toJSON();
				return obj;
			}
			fromJSON(s) {
				fromJSON(this, s);
				this.dmc.fromJSON(s.dmc);
				this.noise.fromJSON(s.noise);
				this.square1.fromJSON(s.square1);
				this.square2.fromJSON(s.square2);
				this.triangle.fromJSON(s.triangle);
			}
			static JSON_PROPERTIES = [
				"channelEnableValue",
				"sampleRate",
				"frameIrqEnabled",
				"frameIrqActive",
				"frameIrqClearPending",
				"apuCycleParity",
				"startedPlaying",
				"recordOutput",
				"frameCycleCounter",
				"frameStep",
				"countSequence",
				"sampleTimer",
				"sampleTimerMax",
				"sampleCount",
				"triValue",
				"smpSquare1",
				"smpSquare2",
				"smpTriangle",
				"smpDmc",
				"accCount",
				"prevSampleL",
				"prevSampleR",
				"smpAccumL",
				"smpAccumR",
				"masterVolume",
				"stereoPosLSquare1",
				"stereoPosLSquare2",
				"stereoPosLTriangle",
				"stereoPosLNoise",
				"stereoPosLDMC",
				"stereoPosRSquare1",
				"stereoPosRSquare2",
				"stereoPosRTriangle",
				"stereoPosRNoise",
				"stereoPosRDMC",
				"extraCycles",
				"maxSample",
				"minSample",
				"panning"
			];
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/gamegenie.js
		const LETTER_VALUES = "APZLGITYEOXUKSVN";
		function toDigit(letter) {
			return LETTER_VALUES.indexOf(letter);
		}
		function toLetter(digit) {
			return LETTER_VALUES[digit];
		}
		function toHex(n, width) {
			const s = n.toString(16);
			return "0000".substring(0, width - s.length) + s;
		}
		var GameGenie = class {
			constructor() {
				this.patches = [];
				this.enabled = true;
				this.onChange = null;
			}
			setEnabled(enabled) {
				this.enabled = enabled;
				if (this.onChange) this.onChange();
			}
			addCode(code) {
				const patch = this.decode(code);
				if (!patch) throw new Error(`Invalid Game Genie code: ${code}`);
				this.patches.push(patch);
				if (this.onChange) this.onChange();
			}
			addPatch(addr, value, key) {
				this.patches.push({
					addr,
					value,
					key
				});
				if (this.onChange) this.onChange();
			}
			removeAllCodes() {
				this.patches = [];
				if (this.onChange) this.onChange();
			}
			applyCodes(addr, value) {
				if (!this.enabled) return value;
				for (let i = 0; i < this.patches.length; ++i) if (this.patches[i].addr === (addr & 32767)) {
					if (this.patches[i].key === void 0 || this.patches[i].key === value) return this.patches[i].value;
				}
				return value;
			}
			decode(code) {
				if (code.includes(":")) return this.decodeHex(code);
				const digits = code.toUpperCase().split("").map(toDigit);
				let value = ((digits[0] & 8) << 4) + ((digits[1] & 7) << 4) + (digits[0] & 7);
				const addr = ((digits[3] & 7) << 12) + ((digits[4] & 8) << 8) + ((digits[5] & 7) << 8) + ((digits[1] & 8) << 4) + ((digits[2] & 7) << 4) + (digits[3] & 8) + (digits[4] & 7);
				let key;
				if (digits.length === 8) {
					value += digits[7] & 8;
					key = ((digits[6] & 8) << 4) + ((digits[7] & 7) << 4) + (digits[5] & 8) + (digits[6] & 7);
				} else value += digits[5] & 8;
				const wantskey = !!(digits[2] >> 3);
				return {
					value,
					addr,
					wantskey,
					key
				};
			}
			encodeHex(addr, value, key, wantskey) {
				let s = toHex(addr, 4) + ":" + toHex(value, 2);
				if (key !== void 0 || wantskey) s += "?";
				if (key !== void 0) s += toHex(key, 2);
				return s;
			}
			decodeHex(s) {
				const match = s.match(/([0-9a-fA-F]+):([0-9a-fA-F]+)(\?[0-9a-fA-F]*)?/);
				if (!match) return null;
				const addr = parseInt(match[1], 16);
				return {
					value: parseInt(match[2], 16),
					addr,
					wantskey: match[3] !== void 0,
					key: match[3] !== void 0 && match[3].length > 1 ? parseInt(match[3].substring(1), 16) : void 0
				};
			}
			encode(addr, value, key, wantskey) {
				const digits = Array(6);
				digits[0] = (value & 7) + (value >> 4 & 8);
				digits[1] = (value >> 4 & 7) + (addr >> 4 & 8);
				digits[2] = addr >> 4 & 7;
				digits[3] = (addr >> 12) + (addr & 8);
				digits[4] = (addr & 7) + (addr >> 8 & 8);
				digits[5] = addr >> 8 & 7;
				if (key === void 0) {
					digits[5] += value & 8;
					if (wantskey) digits[2] += 8;
				} else {
					digits[2] += 8;
					digits[5] += key & 8;
					digits[6] = (key & 7) + (key >> 4 & 8);
					digits[7] = (key >> 4 & 7) + (value & 8);
				}
				return digits.map(toLetter).join("");
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper0.js
		var Mapper0 = class {
			static mapperName = "NROM";
			constructor(nes) {
				this.nes = nes;
				this.joy1StrobeState = 0;
				this.joy2StrobeState = 0;
				this.joypadLastWrite = 0;
				this.joypadOutputBit0 = 0;
				this.joypadLastWriteCycle = -2;
				this.zapperFired = false;
				this.zapperX = null;
				this.zapperY = null;
				this.bgTileOverride = false;
			}
			write(address, value) {
				if (address < 8192) this.nes.cpu.mem[address & 2047] = value;
				else if (address >= 32768) {} else if (address >= 24576) {
					this.nes.cpu.mem[address] = value;
					this.nes.opts.onBatteryRamWrite(address, value);
				} else if (address > 16407) this.nes.cpu.mem[address] = value;
				else if (address > 8199 && address < 16384) this.regWrite(8192 + (address & 7), value);
				else this.regWrite(address, value);
			}
			writelow(address, value) {
				if (address < 8192) this.nes.cpu.mem[address & 2047] = value;
				else if (address >= 32768) {} else if (address > 16407) this.nes.cpu.mem[address] = value;
				else if (address > 8199 && address < 16384) this.regWrite(8192 + (address & 7), value);
				else this.regWrite(address, value);
			}
			load(address) {
				address &= 65535;
				if (address > 16407) {
					if (address < 24576) return this.nes.cpu.dataBus;
					return this.nes.cpu.mem[address];
				} else if (address >= 8192) return this.regLoad(address);
				else return this.nes.cpu.mem[address & 2047];
			}
			regLoad(address) {
				switch (address >> 12) {
					case 0: break;
					case 1: break;
					case 2:
					case 3:
						switch (address & 7) {
							case 0: return this.nes.ppu.openBusLatch;
							case 1: return this.nes.ppu.openBusLatch;
							case 2: return this.nes.ppu.readStatusRegister();
							case 3: return this.nes.ppu.openBusLatch;
							case 4: return this.nes.ppu.sramLoad();
							case 5: return this.nes.ppu.openBusLatch;
							case 6: return this.nes.ppu.openBusLatch;
							case 7: return this.nes.ppu.vramLoad();
						}
						break;
					case 4: switch (address - 16405) {
						case 0: return this.nes.papu.readReg(address);
						case 1: return this.joy1Read() & 31 | this.nes.cpu.dataBus & 224;
						case 2: {
							let w = 0;
							if (this.zapperX !== null && this.zapperY !== null) {
								if (!this.nes.ppu.isPixelWhite(this.zapperX, this.zapperY)) w = 8;
							}
							if (this.zapperFired) w |= 16;
							return (this.joy2Read() | w) & 31 | this.nes.cpu.dataBus & 224;
						}
					}
				}
				let cpu = this.nes.cpu;
				if (cpu._dmcFetchCycles > 0 && cpu._dmcFetchCycles === cpu.instrBusCycles + 1) {
					let dmc = this.nes.papu.dmc;
					if (dmc && dmc.isEnabled) return dmc.lastFetchedByte;
				}
				return cpu.dataBus;
			}
			regWrite(address, value) {
				if (address >= 8192 && address <= 16383) {
					this.nes.ppu.openBusLatch = value;
					this.nes.ppu.openBusDecayFrames = 36;
				}
				switch (address) {
					case 8192:
						this.nes.cpu.mem[address] = value;
						this.nes.ppu.updateControlReg1(value);
						break;
					case 8193:
						this.nes.cpu.mem[address] = value;
						this.nes.ppu.updateControlReg2(value);
						break;
					case 8195:
						this.nes.ppu.writeSRAMAddress(value);
						break;
					case 8196:
						this.nes.ppu.sramWrite(value);
						break;
					case 8197:
						this.nes.ppu.scrollWrite(value);
						break;
					case 8198:
						this.nes.ppu.writeVRAMAddress(value);
						break;
					case 8199:
						this.nes.ppu.vramWrite(value);
						break;
					case 16404:
						this.nes.ppu.sramDMA(value);
						break;
					case 16405:
						this.nes.papu.writeReg(address, value);
						break;
					case 16406: {
						let cpu = this.nes.cpu;
						let currentCycle = cpu._cpuCycleBase + cpu.instrBusCycles;
						if (currentCycle - this.joypadLastWriteCycle > 1) {
							let prevBit = this.joypadLastWrite & 1;
							if (prevBit !== this.joypadOutputBit0) {
								if (this.joypadOutputBit0 === 1 && prevBit === 0) {
									this.joy1StrobeState = 0;
									this.joy2StrobeState = 0;
								}
								this.joypadOutputBit0 = prevBit;
							}
						}
						this.joypadLastWrite = value;
						this.joypadLastWriteCycle = currentCycle;
						if (currentCycle % 2 === 1) {
							let newBit = value & 1;
							if (this.joypadOutputBit0 === 1 && newBit === 0) {
								this.joy1StrobeState = 0;
								this.joy2StrobeState = 0;
							}
							this.joypadOutputBit0 = newBit;
						}
						break;
					}
					case 16407:
						this.nes.papu.writeReg(address, value);
						break;
					default: if (address >= 16384 && address <= 16407) this.nes.papu.writeReg(address, value);
				}
			}
			_syncJoypadOutput() {
				let newBit = this.joypadLastWrite & 1;
				if (newBit !== this.joypadOutputBit0) {
					if (this.joypadOutputBit0 === 1 && newBit === 0) {
						this.joy1StrobeState = 0;
						this.joy2StrobeState = 0;
					}
					this.joypadOutputBit0 = newBit;
				}
			}
			joy1Read() {
				this._syncJoypadOutput();
				if (this.joypadOutputBit0) return this.nes.controllers[1].state[0];
				let ret;
				if (this.joy1StrobeState < 8) ret = this.nes.controllers[1].state[this.joy1StrobeState];
				else ret = 1;
				this.joy1StrobeState++;
				if (this.joy1StrobeState === 24) this.joy1StrobeState = 0;
				return ret;
			}
			joy2Read() {
				this._syncJoypadOutput();
				if (this.joypadOutputBit0) return this.nes.controllers[2].state[0];
				let ret;
				if (this.joy2StrobeState < 8) ret = this.nes.controllers[2].state[this.joy2StrobeState];
				else ret = 1;
				this.joy2StrobeState++;
				if (this.joy2StrobeState === 24) this.joy2StrobeState = 0;
				return ret;
			}
			loadROM() {
				if (!this.nes.rom.valid || this.nes.rom.romCount < 1) throw new Error("NoMapper: Invalid ROM! Unable to load.");
				this.loadPRGROM();
				this.loadCHRROM();
				this.loadBatteryRam();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
			loadPRGROM() {
				if (this.nes.rom.romCount > 1) {
					this.loadRomBank(0, 32768);
					this.loadRomBank(1, 49152);
				} else {
					this.loadRomBank(0, 32768);
					this.loadRomBank(0, 49152);
				}
			}
			loadCHRROM() {
				if (this.nes.rom.vromCount > 0) {
					if (this.nes.rom.vromCount === 1) {
						this.loadVromBank(0, 0);
						this.loadVromBank(0, 4096);
					} else {
						this.loadVromBank(0, 0);
						this.loadVromBank(1, 4096);
					}
				}
			}
			loadBatteryRam() {
				if (this.nes.rom.batteryRam) {
					let ram = this.nes.rom.batteryRam;
					if (ram !== null && ram.length === 8192) copyArrayElements(ram, 0, this.nes.cpu.mem, 24576, 8192);
				}
			}
			loadRomBank(bank, address) {
				bank %= this.nes.rom.romCount;
				copyArrayElements(this.nes.rom.rom[bank], 0, this.nes.cpu.mem, address, 16384);
			}
			loadVromBank(bank, address) {
				if (this.nes.rom.vromCount === 0) return;
				this.nes.ppu.triggerRendering();
				copyArrayElements(this.nes.rom.vrom[bank % this.nes.rom.vromCount], 0, this.nes.ppu.vramMem, address, 4096);
				let vromTile = this.nes.rom.vromTile[bank % this.nes.rom.vromCount];
				copyArrayElements(vromTile, 0, this.nes.ppu.ptTile, address >> 4, 256);
			}
			load32kRomBank(bank, address) {
				this.loadRomBank(bank * 2 % this.nes.rom.romCount, address);
				this.loadRomBank((bank * 2 + 1) % this.nes.rom.romCount, address + 16384);
			}
			load8kVromBank(bank4kStart, address) {
				if (this.nes.rom.vromCount === 0) return;
				this.nes.ppu.triggerRendering();
				this.loadVromBank(bank4kStart % this.nes.rom.vromCount, address);
				this.loadVromBank((bank4kStart + 1) % this.nes.rom.vromCount, address + 4096);
			}
			load1kVromBank(bank1k, address) {
				if (this.nes.rom.vromCount === 0) return;
				this.nes.ppu.triggerRendering();
				let bank4k = Math.floor(bank1k / 4) % this.nes.rom.vromCount;
				let bankoffset = bank1k % 4 * 1024;
				copyArrayElements(this.nes.rom.vrom[bank4k], bankoffset, this.nes.ppu.vramMem, address, 1024);
				let vromTile = this.nes.rom.vromTile[bank4k];
				let baseIndex = address >> 4;
				for (let i = 0; i < 64; i++) this.nes.ppu.ptTile[baseIndex + i] = vromTile[(bank1k % 4 << 6) + i];
			}
			load2kVromBank(bank2k, address) {
				if (this.nes.rom.vromCount === 0) return;
				this.nes.ppu.triggerRendering();
				let bank4k = Math.floor(bank2k / 2) % this.nes.rom.vromCount;
				let bankoffset = bank2k % 2 * 2048;
				copyArrayElements(this.nes.rom.vrom[bank4k], bankoffset, this.nes.ppu.vramMem, address, 2048);
				let vromTile = this.nes.rom.vromTile[bank4k];
				let baseIndex = address >> 4;
				for (let i = 0; i < 128; i++) this.nes.ppu.ptTile[baseIndex + i] = vromTile[(bank2k % 2 << 7) + i];
			}
			load8kRomBank(bank8k, address) {
				let bank16k = Math.floor(bank8k / 2) % this.nes.rom.romCount;
				let offset = bank8k % 2 * 8192;
				copyArrayElements(this.nes.rom.rom[bank16k], offset, this.nes.cpu.mem, address, 8192);
			}
			canWriteChr(address) {
				return this.nes.rom.vromCount === 0;
			}
			clockIrqCounter() {}
			latchAccess(address) {}
			onBgRender() {}
			onSpriteRender() {}
			getBgTileData() {
				return null;
			}
			getSpritePatternTile(index) {
				return this.nes.ppu.ptTile[index];
			}
			toJSON() {
				return {
					joy1StrobeState: this.joy1StrobeState,
					joy2StrobeState: this.joy2StrobeState,
					joypadLastWrite: this.joypadLastWrite,
					joypadOutputBit0: this.joypadOutputBit0,
					joypadLastWriteCycle: this.joypadLastWriteCycle
				};
			}
			fromJSON(s) {
				this.joy1StrobeState = s.joy1StrobeState;
				this.joy2StrobeState = s.joy2StrobeState;
				this.joypadLastWrite = s.joypadLastWrite;
				this.joypadOutputBit0 = s.joypadOutputBit0 || 0;
				this.joypadLastWriteCycle = s.joypadLastWriteCycle ?? -2;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper1.js
		var Mapper1 = class extends Mapper0 {
			static mapperName = "MMC1";
			constructor(nes) {
				super(nes);
				this.regBuffer = 0;
				this.regBufferCounter = 0;
				this.mirroring = 0;
				this.oneScreenMirroring = 0;
				this.prgSwitchingArea = 1;
				this.prgSwitchingSize = 1;
				this.vromSwitchingSize = 0;
				this.romSelectionReg0 = 0;
				this.romSelectionReg1 = 0;
				this.romBankSelect = 0;
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				}
				if ((value & 128) !== 0) {
					this.regBufferCounter = 0;
					this.regBuffer = 0;
					if (this.getRegNumber(address) === 0) {
						this.prgSwitchingArea = 1;
						this.prgSwitchingSize = 1;
					}
				} else {
					this.regBuffer = this.regBuffer & 255 - (1 << this.regBufferCounter) | (value & 1) << this.regBufferCounter;
					this.regBufferCounter++;
					if (this.regBufferCounter === 5) {
						this.setReg(this.getRegNumber(address), this.regBuffer);
						this.regBuffer = 0;
						this.regBufferCounter = 0;
					}
				}
			}
			setReg(reg, value) {
				let tmp;
				switch (reg) {
					case 0:
						tmp = value & 3;
						if (tmp !== this.mirroring) {
							this.mirroring = tmp;
							if ((this.mirroring & 2) === 0) this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING);
							else if ((this.mirroring & 1) !== 0) this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING);
							else this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING);
						}
						this.prgSwitchingArea = value >> 2 & 1;
						this.prgSwitchingSize = value >> 3 & 1;
						this.vromSwitchingSize = value >> 4 & 1;
						break;
					case 1:
						this.romSelectionReg0 = value >> 4 & 1;
						if (this.nes.rom.vromCount > 0) {
							if (this.vromSwitchingSize === 0) {
								if (this.romSelectionReg0 === 0) this.load8kVromBank(value & 15, 0);
								else this.load8kVromBank(Math.floor(this.nes.rom.vromCount / 2) + (value & 15), 0);
							} else if (this.romSelectionReg0 === 0) this.loadVromBank(value & 15, 0);
							else this.loadVromBank(Math.floor(this.nes.rom.vromCount / 2) + (value & 15), 0);
						}
						break;
					case 2:
						this.romSelectionReg1 = value >> 4 & 1;
						if (this.nes.rom.vromCount > 0) {
							if (this.vromSwitchingSize === 1) {
								if (this.romSelectionReg1 === 0) this.loadVromBank(value & 15, 4096);
								else this.loadVromBank(Math.floor(this.nes.rom.vromCount / 2) + (value & 15), 4096);
							}
						}
						break;
					default: {
						let bank;
						let baseBank = 0;
						if (this.nes.rom.romCount >= 32) {
							if (this.vromSwitchingSize === 0) {
								if (this.romSelectionReg0 === 1) baseBank = 16;
							} else baseBank = (this.romSelectionReg0 | this.romSelectionReg1 << 1) << 3;
						} else if (this.nes.rom.romCount >= 16) {
							if (this.romSelectionReg0 === 1) baseBank = 8;
						}
						if (this.prgSwitchingSize === 0) {
							bank = baseBank + (value & 15);
							this.load32kRomBank(bank, 32768);
						} else {
							bank = baseBank * 2 + (value & 15);
							if (this.prgSwitchingArea === 0) this.loadRomBank(bank, 49152);
							else this.loadRomBank(bank, 32768);
						}
					}
				}
			}
			getRegNumber(address) {
				if (address >= 32768 && address <= 40959) return 0;
				else if (address >= 40960 && address <= 49151) return 1;
				else if (address >= 49152 && address <= 57343) return 2;
				else return 3;
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("MMC1: Invalid ROM! Unable to load.");
				this.loadRomBank(0, 32768);
				this.loadRomBank(this.nes.rom.romCount - 1, 49152);
				this.loadCHRROM();
				this.loadBatteryRam();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
			switchLowHighPrgRom(oldSetting) {}
			switch16to32() {}
			switch32to16() {}
			toJSON() {
				let s = super.toJSON();
				s.mirroring = this.mirroring;
				s.oneScreenMirroring = this.oneScreenMirroring;
				s.prgSwitchingArea = this.prgSwitchingArea;
				s.prgSwitchingSize = this.prgSwitchingSize;
				s.vromSwitchingSize = this.vromSwitchingSize;
				s.romSelectionReg0 = this.romSelectionReg0;
				s.romSelectionReg1 = this.romSelectionReg1;
				s.romBankSelect = this.romBankSelect;
				s.regBuffer = this.regBuffer;
				s.regBufferCounter = this.regBufferCounter;
				return s;
			}
			fromJSON(s) {
				super.fromJSON(s);
				this.mirroring = s.mirroring;
				this.oneScreenMirroring = s.oneScreenMirroring;
				this.prgSwitchingArea = s.prgSwitchingArea;
				this.prgSwitchingSize = s.prgSwitchingSize;
				this.vromSwitchingSize = s.vromSwitchingSize;
				this.romSelectionReg0 = s.romSelectionReg0;
				this.romSelectionReg1 = s.romSelectionReg1;
				this.romBankSelect = s.romBankSelect;
				this.regBuffer = s.regBuffer;
				this.regBufferCounter = s.regBufferCounter;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper2.js
		var Mapper2 = class extends Mapper0 {
			static mapperName = "UxROM";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				} else this.loadRomBank(value, 32768);
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("UNROM: Invalid ROM! Unable to load.");
				this.loadRomBank(0, 32768);
				this.loadRomBank(this.nes.rom.romCount - 1, 49152);
				this.loadCHRROM();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper3.js
		var Mapper3 = class extends Mapper0 {
			static mapperName = "CNROM";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				} else this.load8kVromBank(value * 2, 0);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper4.js
		var Mapper4 = class Mapper4 extends Mapper0 {
			static mapperName = "MMC3";
			static CMD_SEL_2_1K_VROM_0000 = 0;
			static CMD_SEL_2_1K_VROM_0800 = 1;
			static CMD_SEL_1K_VROM_1000 = 2;
			static CMD_SEL_1K_VROM_1400 = 3;
			static CMD_SEL_1K_VROM_1800 = 4;
			static CMD_SEL_1K_VROM_1C00 = 5;
			static CMD_SEL_ROM_PAGE1 = 6;
			static CMD_SEL_ROM_PAGE2 = 7;
			constructor(nes) {
				super(nes);
				this.command = 0;
				this.prgAddressSelect = 0;
				this.chrAddressSelect = 0;
				this.pageNumber = 0;
				this.irqCounter = 0;
				this.irqLatchValue = 0;
				this.irqEnable = 0;
				this.prgAddressChanged = false;
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				}
				switch (address & 57345) {
					case 32768: {
						this.command = value & 7;
						const tmp = value >> 6 & 1;
						if (tmp !== this.prgAddressSelect) this.prgAddressChanged = true;
						this.prgAddressSelect = tmp;
						this.chrAddressSelect = value >> 7 & 1;
						break;
					}
					case 32769:
						this.executeCommand(this.command, value);
						break;
					case 40960:
						if ((value & 1) !== 0) this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING);
						else this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING);
						break;
					case 40961: break;
					case 49152:
						this.irqCounter = value;
						break;
					case 49153:
						this.irqLatchValue = value;
						break;
					case 57344:
						this.irqEnable = 0;
						break;
					case 57345: this.irqEnable = 1;
				}
			}
			executeCommand(cmd, arg) {
				switch (cmd) {
					case Mapper4.CMD_SEL_2_1K_VROM_0000:
						if (this.chrAddressSelect === 0) {
							this.load1kVromBank(arg, 0);
							this.load1kVromBank(arg + 1, 1024);
						} else {
							this.load1kVromBank(arg, 4096);
							this.load1kVromBank(arg + 1, 5120);
						}
						break;
					case Mapper4.CMD_SEL_2_1K_VROM_0800:
						if (this.chrAddressSelect === 0) {
							this.load1kVromBank(arg, 2048);
							this.load1kVromBank(arg + 1, 3072);
						} else {
							this.load1kVromBank(arg, 6144);
							this.load1kVromBank(arg + 1, 7168);
						}
						break;
					case Mapper4.CMD_SEL_1K_VROM_1000:
						if (this.chrAddressSelect === 0) this.load1kVromBank(arg, 4096);
						else this.load1kVromBank(arg, 0);
						break;
					case Mapper4.CMD_SEL_1K_VROM_1400:
						if (this.chrAddressSelect === 0) this.load1kVromBank(arg, 5120);
						else this.load1kVromBank(arg, 1024);
						break;
					case Mapper4.CMD_SEL_1K_VROM_1800:
						if (this.chrAddressSelect === 0) this.load1kVromBank(arg, 6144);
						else this.load1kVromBank(arg, 2048);
						break;
					case Mapper4.CMD_SEL_1K_VROM_1C00:
						if (this.chrAddressSelect === 0) this.load1kVromBank(arg, 7168);
						else this.load1kVromBank(arg, 3072);
						break;
					case Mapper4.CMD_SEL_ROM_PAGE1:
						if (this.prgAddressChanged) {
							if (this.prgAddressSelect === 0) this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 49152);
							else this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 32768);
							this.prgAddressChanged = false;
						}
						if (this.prgAddressSelect === 0) this.load8kRomBank(arg, 32768);
						else this.load8kRomBank(arg, 49152);
						break;
					case Mapper4.CMD_SEL_ROM_PAGE2:
						this.load8kRomBank(arg, 40960);
						if (this.prgAddressChanged) {
							if (this.prgAddressSelect === 0) this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 49152);
							else this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 32768);
							this.prgAddressChanged = false;
						}
				}
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("MMC3: Invalid ROM! Unable to load.");
				this.load8kRomBank((this.nes.rom.romCount - 1) * 2, 49152);
				this.load8kRomBank((this.nes.rom.romCount - 1) * 2 + 1, 57344);
				this.load8kRomBank(0, 32768);
				this.load8kRomBank(1, 40960);
				this.loadCHRROM();
				this.loadBatteryRam();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
			clockIrqCounter() {
				if (this.irqEnable === 1) {
					this.irqCounter--;
					if (this.irqCounter < 0) {
						this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL);
						this.irqCounter = this.irqLatchValue;
					}
				}
			}
			toJSON() {
				let s = super.toJSON();
				s.command = this.command;
				s.prgAddressSelect = this.prgAddressSelect;
				s.chrAddressSelect = this.chrAddressSelect;
				s.pageNumber = this.pageNumber;
				s.irqCounter = this.irqCounter;
				s.irqLatchValue = this.irqLatchValue;
				s.irqEnable = this.irqEnable;
				s.prgAddressChanged = this.prgAddressChanged;
				return s;
			}
			fromJSON(s) {
				super.fromJSON(s);
				this.command = s.command;
				this.prgAddressSelect = s.prgAddressSelect;
				this.chrAddressSelect = s.chrAddressSelect;
				this.pageNumber = s.pageNumber;
				this.irqCounter = s.irqCounter;
				this.irqLatchValue = s.irqLatchValue;
				this.irqEnable = s.irqEnable;
				this.prgAddressChanged = s.prgAddressChanged;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper5.js
		var Mapper5 = class extends Mapper0 {
			static mapperName = "MMC5";
			constructor(nes) {
				super(nes);
				this.prgMode = 3;
				this.prgBankReg = /* @__PURE__ */ new Uint8Array(5);
				this.prgBankReg[4] = 255;
				this.prgRam = /* @__PURE__ */ new Uint8Array(65536);
				this.prgRamProtectA = 3;
				this.prgRamProtectB = 3;
				this.chrMode = 3;
				this.chrBankA = /* @__PURE__ */ new Uint16Array(8);
				this.chrBankB = /* @__PURE__ */ new Uint16Array(4);
				this.chrUpperBits = 0;
				this.lastChrWrite = 0;
				this.ntMapping = /* @__PURE__ */ new Uint8Array(4);
				this.exramMode = 0;
				this.exram = /* @__PURE__ */ new Uint8Array(1024);
				this.fillTile = 0;
				this.fillAttr = 0;
				this.irqTarget = 0;
				this.irqEnabled = false;
				this.irqPending = false;
				this.inFrame = false;
				this.irqCounter = 0;
				this.multA = 0;
				this.multB = 0;
				this.splitEnabled = false;
				this.splitRight = false;
				this.splitTile = 0;
				this.splitScroll = 0;
				this.splitPage = 0;
				this.pulse1 = this._initPulse();
				this.pulse2 = this._initPulse();
				this.pcmValue = 0;
				this.pcmReadMode = false;
				this.pcmIrqEnabled = false;
				this.audioEnabled = 0;
				this._chrBankTarget = -1;
			}
			_initPulse() {
				return {
					enabled: false,
					dutyCycle: 0,
					lengthHalt: false,
					constantVolume: false,
					volume: 0,
					timer: 0,
					timerCounter: 0,
					lengthCounter: 0,
					envelopeCounter: 0,
					envelopeDecay: 15,
					envelopeStart: false,
					sequencePos: 0
				};
			}
			load(address) {
				address &= 65535;
				if (address < 20480) return super.load(address);
				if (address === 20501) {
					let val = 0;
					if (this.pulse1.lengthCounter > 0) val |= 1;
					if (this.pulse2.lengthCounter > 0) val |= 2;
					return val;
				}
				if (address === 20496) return 0;
				if (address >= 20736 && address <= 20740) return this.nes.cpu.dataBus;
				if (address === 20741) return this.nes.cpu.dataBus;
				if (address === 20996) {
					let ppu = this.nes.ppu;
					if (!(ppu.scanline >= 20 && ppu.scanline <= 260 && (ppu.f_bgVisibility === 1 || ppu.f_spVisibility === 1))) this.inFrame = false;
					let val = 0;
					if (this.irqPending) val |= 128;
					if (this.inFrame) val |= 64;
					this.irqPending = false;
					return val;
				}
				if (address === 20997) return this.multA * this.multB & 255;
				if (address === 20998) return this.multA * this.multB >> 8 & 255;
				if (address >= 23552 && address <= 24575) {
					if (this.exramMode >= 2) return this.exram[address - 23552];
					return this.nes.cpu.dataBus;
				}
				if (address < 24576) return this.nes.cpu.dataBus;
				if (address < 32768) {
					let offset = (this.prgBankReg[0] & 7) * 8192 + (address - 24576);
					return this.prgRam[offset & 65535];
				}
				return this._readPrg(address);
			}
			_readPrg(address) {
				let slot, reg, isRam, bank, base;
				switch (this.prgMode) {
					case 0:
						reg = this.prgBankReg[4];
						bank = (reg & 124) >> 2;
						return this._readPrgRom32k(bank, address - 32768);
					case 1: if (address < 49152) {
						reg = this.prgBankReg[2];
						isRam = (reg & 128) === 0;
						if (isRam) {
							bank = (reg & 6) >> 1;
							return this.prgRam[bank * 16384 + (address - 32768)];
						}
						bank = (reg & 126) >> 1;
						return this._readPrgRom16k(bank, address - 32768);
					} else {
						reg = this.prgBankReg[4];
						bank = (reg & 126) >> 1;
						return this._readPrgRom16k(bank, address - 49152);
					}
					case 2: if (address < 49152) {
						reg = this.prgBankReg[2];
						isRam = (reg & 128) === 0;
						if (isRam) {
							bank = (reg & 6) >> 1;
							return this.prgRam[bank * 16384 + (address - 32768)];
						}
						bank = (reg & 126) >> 1;
						return this._readPrgRom16k(bank, address - 32768);
					} else if (address < 57344) {
						reg = this.prgBankReg[3];
						isRam = (reg & 128) === 0;
						if (isRam) {
							bank = reg & 7;
							return this.prgRam[bank * 8192 + (address - 49152)];
						}
						bank = reg & 127;
						return this._readPrgRom8k(bank, address - 49152);
					} else {
						reg = this.prgBankReg[4];
						bank = reg & 127;
						return this._readPrgRom8k(bank, address - 57344);
					}
					default:
						if (address < 40960) slot = 1;
						else if (address < 49152) slot = 2;
						else if (address < 57344) slot = 3;
						else slot = 4;
						reg = this.prgBankReg[slot];
						base = slot === 1 ? 32768 : slot === 2 ? 40960 : slot === 3 ? 49152 : 57344;
						if (slot < 4 && (reg & 128) === 0) {
							bank = reg & 7;
							return this.prgRam[bank * 8192 + (address - base)];
						}
						bank = reg & 127;
						return this._readPrgRom8k(bank, address - base);
				}
			}
			_readPrgRom32k(bank32k, offset) {
				let bank16k = (bank32k * 2 + Math.floor(offset / 16384)) % this.nes.rom.romCount;
				let innerOffset = offset % 16384;
				return this.nes.rom.rom[bank16k][innerOffset];
			}
			_readPrgRom16k(bank16k, offset) {
				bank16k %= this.nes.rom.romCount;
				return this.nes.rom.rom[bank16k][offset];
			}
			_readPrgRom8k(bank8k, offset) {
				let bank16k = Math.floor(bank8k / 2) % this.nes.rom.romCount;
				let innerOffset = bank8k % 2 * 8192 + offset;
				if (bank16k < this.nes.rom.romCount) return this.nes.rom.rom[bank16k][innerOffset];
				return 0;
			}
			write(address, value) {
				if (address < 20480) {
					super.write(address, value);
					return;
				}
				if (address >= 20480 && address <= 20483) {
					this._writePulse(this.pulse1, address - 20480, value);
					return;
				}
				if (address >= 20484 && address <= 20487) {
					this._writePulse(this.pulse2, address - 20484, value);
					return;
				}
				if (address === 20496) {
					this.pcmReadMode = (value & 1) !== 0;
					this.pcmIrqEnabled = (value & 128) !== 0;
					return;
				}
				if (address === 20497) {
					if (!this.pcmReadMode && value !== 0) this.pcmValue = value;
					return;
				}
				if (address === 20501) {
					this.audioEnabled = value & 3;
					this.pulse1.enabled = (value & 1) !== 0;
					this.pulse2.enabled = (value & 2) !== 0;
					if (!this.pulse1.enabled) this.pulse1.lengthCounter = 0;
					if (!this.pulse2.enabled) this.pulse2.lengthCounter = 0;
					return;
				}
				if (address === 20736) {
					this.prgMode = value & 3;
					this._syncPrg();
					return;
				}
				if (address === 20737) {
					this.chrMode = value & 3;
					this._syncChr();
					return;
				}
				if (address === 20738) {
					this.prgRamProtectA = value & 3;
					return;
				}
				if (address === 20739) {
					this.prgRamProtectB = value & 3;
					return;
				}
				if (address === 20740) {
					this.exramMode = value & 3;
					this.bgTileOverride = this.exramMode === 1;
					this._syncNametables();
					return;
				}
				if (address === 20741) {
					let v = value;
					this.ntMapping[0] = v & 3;
					v >>= 2;
					this.ntMapping[1] = v & 3;
					v >>= 2;
					this.ntMapping[2] = v & 3;
					v >>= 2;
					this.ntMapping[3] = v & 3;
					this._syncNametables();
					return;
				}
				if (address === 20742) {
					this.fillTile = value;
					this._syncNametables();
					return;
				}
				if (address === 20743) {
					this.fillAttr = value & 3;
					this._syncNametables();
					return;
				}
				if (address === 20755) {
					this.prgBankReg[0] = value & 7;
					return;
				}
				if (address >= 20756 && address <= 20759) {
					let idx = address - 20755;
					this.prgBankReg[idx] = value;
					this._syncPrg();
					return;
				}
				if (address >= 20768 && address <= 20775) {
					let reg = address - 20768;
					this.chrBankA[reg] = this.chrUpperBits << 8 | value;
					this.lastChrWrite = 0;
					this._syncChr();
					return;
				}
				if (address >= 20776 && address <= 20779) {
					let reg = address - 20776;
					this.chrBankB[reg] = this.chrUpperBits << 8 | value;
					this.lastChrWrite = 1;
					this._syncChr();
					return;
				}
				if (address === 20784) {
					this.chrUpperBits = value & 3;
					return;
				}
				if (address === 20992) {
					this.splitEnabled = (value & 128) !== 0;
					this.splitRight = (value & 64) !== 0;
					this.splitTile = value & 31;
					return;
				}
				if (address === 20993) {
					this.splitScroll = value;
					return;
				}
				if (address === 20994) {
					this.splitPage = value & 63;
					return;
				}
				if (address === 20995) {
					this.irqTarget = value;
					return;
				}
				if (address === 20996) {
					this.irqEnabled = (value & 128) !== 0;
					if (this.irqEnabled && this.irqPending) this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL);
					return;
				}
				if (address === 20997) {
					this.multA = value;
					return;
				}
				if (address === 20998) {
					this.multB = value;
					return;
				}
				if (address >= 23552 && address <= 24575) {
					let exAddr = address - 23552;
					if (this.exramMode === 0 || this.exramMode === 1) {
						this.exram[exAddr] = this.inFrame ? value : 0;
						this._syncExramToVram(exAddr);
					} else if (this.exramMode === 2) this.exram[exAddr] = value;
					return;
				}
				if (address >= 24576 && address <= 32767) {
					if (this.prgRamProtectA === 2 && this.prgRamProtectB === 1) {
						let offset = (this.prgBankReg[0] & 7) * 8192 + (address - 24576);
						this.prgRam[offset & 65535] = value;
						this.nes.cpu.mem[address] = value;
						this.nes.opts.onBatteryRamWrite(address, value);
					}
					return;
				}
				if (address >= 32768) {
					this._writePrg(address, value);
					return;
				}
			}
			_writePrg(address, value) {
				let slot, reg, isRam, bank, base;
				switch (this.prgMode) {
					case 0: return;
					case 1:
						if (address < 49152) {
							reg = this.prgBankReg[2];
							isRam = (reg & 128) === 0;
							if (isRam && this._isPrgRamWritable()) {
								bank = (reg & 6) >> 1;
								this.prgRam[bank * 16384 + (address - 32768)] = value;
							}
						}
						return;
					case 2:
						if (address < 49152) {
							reg = this.prgBankReg[2];
							isRam = (reg & 128) === 0;
							if (isRam && this._isPrgRamWritable()) {
								bank = (reg & 6) >> 1;
								this.prgRam[bank * 16384 + (address - 32768)] = value;
							}
						} else if (address < 57344) {
							reg = this.prgBankReg[3];
							isRam = (reg & 128) === 0;
							if (isRam && this._isPrgRamWritable()) {
								bank = reg & 7;
								this.prgRam[bank * 8192 + (address - 49152)] = value;
							}
						}
						return;
					default:
						if (address < 40960) {
							slot = 1;
							base = 32768;
						} else if (address < 49152) {
							slot = 2;
							base = 40960;
						} else if (address < 57344) {
							slot = 3;
							base = 49152;
						} else return;
						reg = this.prgBankReg[slot];
						isRam = (reg & 128) === 0;
						if (isRam && this._isPrgRamWritable()) {
							bank = reg & 7;
							this.prgRam[bank * 8192 + (address - base)] = value;
						}
						return;
				}
			}
			_isPrgRamWritable() {
				return this.prgRamProtectA === 2 && this.prgRamProtectB === 1;
			}
			_syncPrg() {
				switch (this.prgMode) {
					case 0: {
						let bank = (this.prgBankReg[4] & 124) >> 2;
						this.load32kRomBank(bank, 32768);
						break;
					}
					case 1: {
						let regLo = this.prgBankReg[2];
						if (regLo & 128) {
							let bank16k = (regLo & 126) >> 1;
							this.loadRomBank(bank16k % this.nes.rom.romCount, 32768);
						}
						let bank16kHi = (this.prgBankReg[4] & 126) >> 1;
						this.loadRomBank(bank16kHi % this.nes.rom.romCount, 49152);
						break;
					}
					case 2: {
						let regA = this.prgBankReg[2];
						if (regA & 128) {
							let bank16k = (regA & 126) >> 1;
							this.loadRomBank(bank16k % this.nes.rom.romCount, 32768);
						}
						let regB = this.prgBankReg[3];
						if (regB & 128) this.load8kRomBank(regB & 127, 49152);
						let regC = this.prgBankReg[4];
						this.load8kRomBank(regC & 127, 57344);
						break;
					}
					default: for (let i = 1; i <= 4; i++) {
						let reg = this.prgBankReg[i];
						let addr = 24576 + i * 8192;
						if (i === 4 || reg & 128) this.load8kRomBank(reg & 127, addr);
					}
				}
			}
			_syncChr() {
				this.nes.ppu.triggerRendering();
				this._chrBankTarget = -1;
				if (this.nes.ppu.f_spriteSize === 0) {
					this._applyChrSetA();
					this._chrBankTarget = 0;
				}
			}
			_applyChrSetA() {
				if (this.nes.rom.vromCount === 0) return;
				switch (this.chrMode) {
					case 0:
						this.load8kVromBank((this.chrBankA[7] & 255) * 2, 0);
						break;
					case 1:
						this.loadVromBank(this.chrBankA[3] & 255, 0);
						this.loadVromBank(this.chrBankA[7] & 255, 4096);
						break;
					case 2:
						this.load2kVromBank(this.chrBankA[1] & 511, 0);
						this.load2kVromBank(this.chrBankA[3] & 511, 2048);
						this.load2kVromBank(this.chrBankA[5] & 511, 4096);
						this.load2kVromBank(this.chrBankA[7] & 511, 6144);
						break;
					default: for (let i = 0; i < 8; i++) this.load1kVromBank(this.chrBankA[i] & 1023, i * 1024);
				}
			}
			_applyChrSetB() {
				if (this.nes.rom.vromCount === 0) return;
				switch (this.chrMode) {
					case 0:
						this.load8kVromBank((this.chrBankB[3] & 255) * 2, 0);
						break;
					case 1:
						this.loadVromBank(this.chrBankB[3] & 255, 0);
						this.loadVromBank(this.chrBankB[3] & 255, 4096);
						break;
					case 2:
						this.load2kVromBank(this.chrBankB[1] & 511, 0);
						this.load2kVromBank(this.chrBankB[3] & 511, 2048);
						this.load2kVromBank(this.chrBankB[1] & 511, 4096);
						this.load2kVromBank(this.chrBankB[3] & 511, 6144);
						break;
					default: for (let i = 0; i < 4; i++) {
						this.load1kVromBank(this.chrBankB[i] & 1023, i * 1024);
						this.load1kVromBank(this.chrBankB[i] & 1023, (i + 4) * 1024);
					}
				}
			}
			_syncNametables() {
				let ppu = this.nes.ppu;
				let fillAttrByte = this.fillAttr | this.fillAttr << 2 | this.fillAttr << 4 | this.fillAttr << 6;
				for (let i = 0; i < 960; i++) ppu.vramMem[11264 + i] = this.fillTile;
				for (let i = 960; i < 1024; i++) ppu.vramMem[11264 + i] = fillAttrByte;
				if (this.exramMode >= 2) for (let i = 0; i < 1024; i++) ppu.vramMem[10240 + i] = 0;
				else copyArrayElements(this.exram, 0, ppu.vramMem, 10240, 1024);
				const sourceBase = [
					8192,
					9216,
					10240,
					11264
				];
				for (let nt = 0; nt < 4; nt++) {
					let logicalBase = 8192 + nt * 1024;
					let physBase = sourceBase[this.ntMapping[nt]];
					ppu.defineMirrorRegion(logicalBase, physBase, 1024);
				}
				ppu.defineMirrorRegion(12288, 8192, 3840);
				for (let nt = 0; nt < 4; nt++) ppu.ntable1[nt] = this.ntMapping[nt];
				this._populateNameTable(2, 10240);
				this._populateNameTable(3, 11264);
			}
			_populateNameTable(ntIndex, vramBase) {
				let ppu = this.nes.ppu;
				let nt = ppu.nameTable[ntIndex];
				for (let i = 0; i < 960; i++) nt.tile[i] = ppu.vramMem[vramBase + i];
				for (let i = 0; i < 64; i++) nt.writeAttrib(i, ppu.vramMem[vramBase + 960 + i]);
			}
			_syncExramToVram(exAddr) {
				if (this.exramMode < 2) {
					let ppu = this.nes.ppu;
					ppu.vramMem[10240 + exAddr] = this.exram[exAddr];
					if (exAddr < 960) ppu.nameTable[2].tile[exAddr] = this.exram[exAddr];
					else if (exAddr < 1024) ppu.nameTable[2].writeAttrib(exAddr - 960, this.exram[exAddr]);
				}
			}
			_writePulse(pulse, reg, value) {
				switch (reg) {
					case 0:
						pulse.dutyCycle = value >> 6 & 3;
						pulse.lengthHalt = (value & 32) !== 0;
						pulse.constantVolume = (value & 16) !== 0;
						pulse.volume = value & 15;
						break;
					case 1: break;
					case 2:
						pulse.timer = pulse.timer & 1792 | value;
						break;
					case 3:
						pulse.timer = pulse.timer & 255 | (value & 7) << 8;
						if (pulse.enabled) pulse.lengthCounter = this.nes.papu.getLengthMax(value);
						pulse.envelopeStart = true;
						pulse.sequencePos = 0;
				}
			}
			clockIrqCounter() {
				if (this.nes.ppu.scanline === 20) {
					this.inFrame = true;
					this.irqCounter = 0;
					return;
				}
				this.irqCounter++;
				if (this.irqTarget !== 0 && this.irqCounter === this.irqTarget) {
					this.irqPending = true;
					if (this.irqEnabled) this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NORMAL);
				}
				if ((this.irqCounter & 3) === 0) {
					this._clockPulseLengthCounter(this.pulse1);
					this._clockPulseLengthCounter(this.pulse2);
				}
			}
			_clockPulseLengthCounter(pulse) {
				if (pulse.enabled && !pulse.lengthHalt && pulse.lengthCounter > 0) pulse.lengthCounter--;
			}
			onBgRender() {
				if (this.nes.ppu.f_spriteSize === 1 && this._chrBankTarget !== 1) {
					this._applyChrSetB();
					this._chrBankTarget = 1;
					this.nes.ppu.validTileData = false;
				}
			}
			onSpriteRender() {
				if (this.nes.ppu.f_spriteSize === 1 && this._chrBankTarget !== 0) {
					this._applyChrSetA();
					this._chrBankTarget = 0;
				}
			}
			getSpritePatternTile(index) {
				if (this.nes.ppu.f_spriteSize !== 1 || this.nes.rom.vromCount === 0) return this.nes.ppu.ptTile[index];
				let vromCount = this.nes.rom.vromCount;
				let vromTile = this.nes.rom.vromTile;
				switch (this.chrMode) {
					case 0: {
						let bank4kStart = (this.chrBankA[7] & 255) * 2;
						let half = index >= 256 ? 1 : 0;
						return vromTile[(bank4kStart + half) % vromCount][index - half * 256];
					}
					case 1: {
						let bank4k;
						if (index < 256) bank4k = (this.chrBankA[3] & 255) % vromCount;
						else bank4k = (this.chrBankA[7] & 255) % vromCount;
						return vromTile[bank4k][index % 256];
					}
					case 2: {
						let regIndex = [
							1,
							3,
							5,
							7
						];
						let slot = index >> 7;
						let tileInSlot = index & 127;
						let bank2k = this.chrBankA[regIndex[slot]] & 511;
						return vromTile[Math.floor(bank2k / 2) % vromCount][(bank2k % 2 << 7) + tileInSlot];
					}
					default: {
						let slot = index >> 6;
						let tileInSlot = index & 63;
						let bank1k = this.chrBankA[slot] & 1023;
						return vromTile[Math.floor(bank1k / 4) % vromCount][(bank1k % 4 << 6) + tileInSlot];
					}
				}
			}
			getBgTileData(baseTile, tileIndex, ht, vt) {
				if (this.exramMode !== 1 || this.nes.rom.vromCount === 0) return null;
				let exAddr = vt * 32 + ht;
				let exByte = this.exram[exAddr];
				let bank4k = (exByte & 63 | this.chrUpperBits << 6) % this.nes.rom.vromCount;
				let tile = this.nes.rom.vromTile[bank4k][tileIndex];
				if (!tile) return null;
				return {
					tile,
					attrib: (exByte >> 6 & 3) << 2
				};
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("MMC5: Invalid ROM! Unable to load.");
				this.prgBankReg[4] = 255;
				this._syncPrg();
				this.loadCHRROM();
				this.loadBatteryRam();
				this._syncNametables();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
			toJSON() {
				let s = super.toJSON();
				s.prgMode = this.prgMode;
				s.prgBankReg = Array.from(this.prgBankReg);
				s.prgRam = Array.from(this.prgRam);
				s.prgRamProtectA = this.prgRamProtectA;
				s.prgRamProtectB = this.prgRamProtectB;
				s.chrMode = this.chrMode;
				s.chrBankA = Array.from(this.chrBankA);
				s.chrBankB = Array.from(this.chrBankB);
				s.chrUpperBits = this.chrUpperBits;
				s.lastChrWrite = this.lastChrWrite;
				s.ntMapping = Array.from(this.ntMapping);
				s.exramMode = this.exramMode;
				s.exram = Array.from(this.exram);
				s.fillTile = this.fillTile;
				s.fillAttr = this.fillAttr;
				s.irqTarget = this.irqTarget;
				s.irqEnabled = this.irqEnabled;
				s.irqPending = this.irqPending;
				s.inFrame = this.inFrame;
				s.irqCounter = this.irqCounter;
				s.multA = this.multA;
				s.multB = this.multB;
				s.splitEnabled = this.splitEnabled;
				s.splitRight = this.splitRight;
				s.splitTile = this.splitTile;
				s.splitScroll = this.splitScroll;
				s.splitPage = this.splitPage;
				s.pcmValue = this.pcmValue;
				s.pcmReadMode = this.pcmReadMode;
				s.pcmIrqEnabled = this.pcmIrqEnabled;
				s.audioEnabled = this.audioEnabled;
				s.pulse1 = Object.assign({}, this.pulse1);
				s.pulse2 = Object.assign({}, this.pulse2);
				return s;
			}
			fromJSON(s) {
				super.fromJSON(s);
				this.prgMode = s.prgMode;
				this.prgBankReg = new Uint8Array(s.prgBankReg);
				this.prgRam = new Uint8Array(s.prgRam);
				this.prgRamProtectA = s.prgRamProtectA;
				this.prgRamProtectB = s.prgRamProtectB;
				this.chrMode = s.chrMode;
				this.chrBankA = new Uint16Array(s.chrBankA);
				this.chrBankB = new Uint16Array(s.chrBankB);
				this.chrUpperBits = s.chrUpperBits;
				this.lastChrWrite = s.lastChrWrite;
				this.ntMapping = new Uint8Array(s.ntMapping);
				this.exramMode = s.exramMode;
				this.exram = new Uint8Array(s.exram);
				this.fillTile = s.fillTile;
				this.fillAttr = s.fillAttr;
				this.irqTarget = s.irqTarget;
				this.irqEnabled = s.irqEnabled;
				this.irqPending = s.irqPending;
				this.inFrame = s.inFrame;
				this.irqCounter = s.irqCounter;
				this.multA = s.multA;
				this.multB = s.multB;
				this.splitEnabled = s.splitEnabled;
				this.splitRight = s.splitRight;
				this.splitTile = s.splitTile;
				this.splitScroll = s.splitScroll;
				this.splitPage = s.splitPage;
				this.pcmValue = s.pcmValue;
				this.pcmReadMode = s.pcmReadMode;
				this.pcmIrqEnabled = s.pcmIrqEnabled;
				this.audioEnabled = s.audioEnabled;
				if (s.pulse1) this.pulse1 = Object.assign(this._initPulse(), s.pulse1);
				if (s.pulse2) this.pulse2 = Object.assign(this._initPulse(), s.pulse2);
				this._syncPrg();
				this._syncChr();
				this._syncNametables();
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper7.js
		var Mapper7 = class extends Mapper0 {
			static mapperName = "AxROM";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) super.write(address, value);
				else {
					this.load32kRomBank(value & 7, 32768);
					if (value & 16) this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING2);
					else this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING);
				}
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("AOROM: Invalid ROM! Unable to load.");
				this.loadPRGROM();
				this.loadCHRROM();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper9.js
		var Mapper9 = class extends Mapper0 {
			static mapperName = "MMC2";
			constructor(nes) {
				super(nes);
				this.prgBank = 0;
				this.chrBankFD0 = 0;
				this.chrBankFE0 = 0;
				this.chrBankFD1 = 0;
				this.chrBankFE1 = 0;
				this.latch0 = 254;
				this.latch1 = 254;
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				}
				switch (address & 61440) {
					case 40960:
						this.prgBank = value & 15;
						this.load8kRomBank(this.prgBank, 32768);
						break;
					case 45056:
						this.chrBankFD0 = value & 31;
						this._updateChr0();
						break;
					case 49152:
						this.chrBankFE0 = value & 31;
						this._updateChr0();
						break;
					case 53248:
						this.chrBankFD1 = value & 31;
						this._updateChr1();
						break;
					case 57344:
						this.chrBankFE1 = value & 31;
						this._updateChr1();
						break;
					case 61440: if (value & 1) this.nes.ppu.setMirroring(this.nes.rom.HORIZONTAL_MIRRORING);
					else this.nes.ppu.setMirroring(this.nes.rom.VERTICAL_MIRRORING);
				}
			}
			_updateChr0() {
				let bank = this.latch0 === 253 ? this.chrBankFD0 : this.chrBankFE0;
				this.loadVromBank(bank, 0);
			}
			_updateChr1() {
				let bank = this.latch1 === 253 ? this.chrBankFD1 : this.chrBankFE1;
				this.loadVromBank(bank, 4096);
			}
			latchAccess(address) {
				if (address === 4056) {
					if (this.latch0 !== 253) {
						this.latch0 = 253;
						this._updateChr0();
					}
				} else if (address === 4072) {
					if (this.latch0 !== 254) {
						this.latch0 = 254;
						this._updateChr0();
					}
				} else if (address >= 8152 && address <= 8159) {
					if (this.latch1 !== 253) {
						this.latch1 = 253;
						this._updateChr1();
					}
				} else if (address >= 8168 && address <= 8175) {
					if (this.latch1 !== 254) {
						this.latch1 = 254;
						this._updateChr1();
					}
				}
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("MMC2: Invalid ROM! Unable to load.");
				this.load8kRomBank(0, 32768);
				let lastBank8k = (this.nes.rom.romCount - 1) * 2 + 1;
				this.load8kRomBank(lastBank8k - 2, 40960);
				this.load8kRomBank(lastBank8k - 1, 49152);
				this.load8kRomBank(lastBank8k, 57344);
				this.loadCHRROM();
				this.loadBatteryRam();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
			toJSON() {
				let s = super.toJSON();
				s.prgBank = this.prgBank;
				s.chrBankFD0 = this.chrBankFD0;
				s.chrBankFE0 = this.chrBankFE0;
				s.chrBankFD1 = this.chrBankFD1;
				s.chrBankFE1 = this.chrBankFE1;
				s.latch0 = this.latch0;
				s.latch1 = this.latch1;
				return s;
			}
			fromJSON(s) {
				super.fromJSON(s);
				this.prgBank = s.prgBank;
				this.chrBankFD0 = s.chrBankFD0;
				this.chrBankFE0 = s.chrBankFE0;
				this.chrBankFD1 = s.chrBankFD1;
				this.chrBankFE1 = s.chrBankFE1;
				this.latch0 = s.latch0;
				this.latch1 = s.latch1;
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper11.js
		var Mapper11 = class extends Mapper0 {
			static mapperName = "Color Dreams";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				} else {
					let prgbank1 = (value & 15) * 2 % this.nes.rom.romCount;
					let prgbank2 = ((value & 15) * 2 + 1) % this.nes.rom.romCount;
					this.loadRomBank(prgbank1, 32768);
					this.loadRomBank(prgbank2, 49152);
					if (this.nes.rom.vromCount > 0) {
						let bank = (value >> 4) * 2 % this.nes.rom.vromCount;
						this.loadVromBank(bank, 0);
						this.loadVromBank(bank + 1, 4096);
					}
				}
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper34.js
		var Mapper34 = class extends Mapper0 {
			static mapperName = "BNROM";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				} else this.load32kRomBank(value, 32768);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper38.js
		var Mapper38 = class extends Mapper0 {
			static mapperName = "PCI556";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 28672 || address > 32767) {
					super.write(address, value);
					return;
				} else {
					this.load32kRomBank(value & 3, 32768);
					this.load8kVromBank((value >> 2 & 3) * 2, 0);
				}
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper66.js
		var Mapper66 = class extends Mapper0 {
			static mapperName = "GxROM";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				} else {
					this.load32kRomBank(value >> 4 & 3, 32768);
					this.load8kVromBank((value & 3) * 2, 0);
				}
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper71.js
		var Mapper71 = class extends Mapper0 {
			static mapperName = "Camerica";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				}
				if (address >= 36864 && address < 40960) {
					if (value & 16) this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING2);
					else this.nes.ppu.setMirroring(this.nes.rom.SINGLESCREEN_MIRRORING);
				} else if (address >= 49152) this.loadRomBank(value & 15, 32768);
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("Mapper 71: Invalid ROM! Unable to load.");
				this.loadRomBank(0, 32768);
				this.loadRomBank(this.nes.rom.romCount - 1, 49152);
				this.loadCHRROM();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper79.js
		var Mapper79 = class extends Mapper0 {
			static mapperName = "NINA-03/NINA-06";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if ((address & 57600) === 16640) {
					this.load32kRomBank(value >> 3 & 1, 32768);
					this.load8kVromBank((value & 7) * 2, 0);
				}
				super.write(address, value);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper94.js
		var Mapper94 = class extends Mapper0 {
			static mapperName = "UN1ROM";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				} else this.loadRomBank(value >> 2, 32768);
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("UN1ROM: Invalid ROM! Unable to load.");
				this.loadRomBank(0, 32768);
				this.loadRomBank(this.nes.rom.romCount - 1, 49152);
				this.loadCHRROM();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper118.js
		var Mapper118 = class extends Mapper4 {
			static mapperName = "TxSROM";
			constructor(nes) {
				super(nes);
				this.chrRegs = [
					0,
					0,
					0,
					0,
					0,
					0
				];
			}
			write(address, value) {
				if (address === 40960) return;
				super.write(address, value);
				if (address === 32768) this.updateNametableMirroring();
			}
			executeCommand(cmd, arg) {
				if (cmd <= 5) {
					this.chrRegs[cmd] = arg;
					super.executeCommand(cmd, arg & 127);
					this.updateNametableMirroring();
				} else super.executeCommand(cmd, arg);
			}
			updateNametableMirroring() {
				let ppu = this.nes.ppu;
				if (this.chrAddressSelect === 0) {
					let nt01 = this.chrRegs[0] >> 7 & 1;
					let nt23 = this.chrRegs[1] >> 7 & 1;
					ppu.ntable1[0] = nt01;
					ppu.ntable1[1] = nt01;
					ppu.ntable1[2] = nt23;
					ppu.ntable1[3] = nt23;
				} else {
					ppu.ntable1[0] = this.chrRegs[2] >> 7 & 1;
					ppu.ntable1[1] = this.chrRegs[3] >> 7 & 1;
					ppu.ntable1[2] = this.chrRegs[4] >> 7 & 1;
					ppu.ntable1[3] = this.chrRegs[5] >> 7 & 1;
				}
				for (let i = 0; i < 4; i++) {
					let source = 8192 + i * 1024;
					let target = 8192 + ppu.ntable1[i] * 1024;
					ppu.defineMirrorRegion(source, target, 1024);
				}
				ppu.currentMirroring = -1;
			}
			loadROM() {
				super.loadROM();
				this.updateNametableMirroring();
			}
			toJSON() {
				let s = super.toJSON();
				s.chrRegs = this.chrRegs.slice();
				return s;
			}
			fromJSON(s) {
				super.fromJSON(s);
				this.chrRegs = s.chrRegs;
				this.updateNametableMirroring();
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper119.js
		var Mapper119 = class extends Mapper4 {
			static mapperName = "TQROM";
			constructor(nes) {
				super(nes);
				this.chrRam = /* @__PURE__ */ new Uint8Array(8192);
				this.chrRamTiles = new Array(8);
				for (let i = 0; i < 8; i++) {
					this.chrRamTiles[i] = new Array(64);
					for (let j = 0; j < 64; j++) this.chrRamTiles[i][j] = new Tile();
				}
				this.chrRamSlots = [
					-1,
					-1,
					-1,
					-1,
					-1,
					-1,
					-1,
					-1
				];
			}
			executeCommand(cmd, arg) {
				switch (cmd) {
					case Mapper4.CMD_SEL_2_1K_VROM_0000: {
						let base = this.chrAddressSelect === 0 ? 0 : 4096;
						if (arg & 64) {
							let bank = arg & 6;
							this.load1kChrRamBank(bank, base);
							this.load1kChrRamBank(bank + 1, base + 1024);
						} else {
							let bank = arg & 63;
							this.saveChrRamSlot(base);
							this.saveChrRamSlot(base + 1024);
							this.chrRamSlots[base >> 10] = -1;
							this.chrRamSlots[(base >> 10) + 1] = -1;
							this.load1kVromBank(bank, base);
							this.load1kVromBank(bank + 1, base + 1024);
						}
						break;
					}
					case Mapper4.CMD_SEL_2_1K_VROM_0800: {
						let base = this.chrAddressSelect === 0 ? 2048 : 6144;
						if (arg & 64) {
							let bank = arg & 6;
							this.load1kChrRamBank(bank, base);
							this.load1kChrRamBank(bank + 1, base + 1024);
						} else {
							let bank = arg & 63;
							this.saveChrRamSlot(base);
							this.saveChrRamSlot(base + 1024);
							this.chrRamSlots[base >> 10] = -1;
							this.chrRamSlots[(base >> 10) + 1] = -1;
							this.load1kVromBank(bank, base);
							this.load1kVromBank(bank + 1, base + 1024);
						}
						break;
					}
					case Mapper4.CMD_SEL_1K_VROM_1000: {
						let base = this.chrAddressSelect === 0 ? 4096 : 0;
						if (arg & 64) this.load1kChrRamBank(arg & 7, base);
						else {
							this.saveChrRamSlot(base);
							this.chrRamSlots[base >> 10] = -1;
							this.load1kVromBank(arg & 63, base);
						}
						break;
					}
					case Mapper4.CMD_SEL_1K_VROM_1400: {
						let base = this.chrAddressSelect === 0 ? 5120 : 1024;
						if (arg & 64) this.load1kChrRamBank(arg & 7, base);
						else {
							this.saveChrRamSlot(base);
							this.chrRamSlots[base >> 10] = -1;
							this.load1kVromBank(arg & 63, base);
						}
						break;
					}
					case Mapper4.CMD_SEL_1K_VROM_1800: {
						let base = this.chrAddressSelect === 0 ? 6144 : 2048;
						if (arg & 64) this.load1kChrRamBank(arg & 7, base);
						else {
							this.saveChrRamSlot(base);
							this.chrRamSlots[base >> 10] = -1;
							this.load1kVromBank(arg & 63, base);
						}
						break;
					}
					case Mapper4.CMD_SEL_1K_VROM_1C00: {
						let base = this.chrAddressSelect === 0 ? 7168 : 3072;
						if (arg & 64) this.load1kChrRamBank(arg & 7, base);
						else {
							this.saveChrRamSlot(base);
							this.chrRamSlots[base >> 10] = -1;
							this.load1kVromBank(arg & 63, base);
						}
						break;
					}
					default: super.executeCommand(cmd, arg);
				}
			}
			saveChrRamSlot(address) {
				let slot = address >> 10;
				let bank = this.chrRamSlots[slot];
				if (bank === -1) return;
				copyArrayElements(this.nes.ppu.vramMem, slot << 10, this.chrRam, bank * 1024, 1024);
			}
			load1kChrRamBank(bank, address) {
				this.nes.ppu.triggerRendering();
				bank &= 7;
				this.saveChrRamSlot(address);
				let slot = address >> 10;
				this.chrRamSlots[slot] = bank;
				let srcOffset = bank * 1024;
				copyArrayElements(this.chrRam, srcOffset, this.nes.ppu.vramMem, address, 1024);
				this.rebuildChrRamTiles(bank);
				let baseIndex = address >> 4;
				for (let i = 0; i < 64; i++) this.nes.ppu.ptTile[baseIndex + i] = this.chrRamTiles[bank][i];
			}
			rebuildChrRamTiles(bank) {
				let base = bank * 1024;
				for (let i = 0; i < 1024; i++) {
					let tileIndex = i >> 4;
					let leftOver = i % 16;
					if (leftOver < 8) this.chrRamTiles[bank][tileIndex].setScanline(leftOver, this.chrRam[base + i], this.chrRam[base + i + 8]);
					else this.chrRamTiles[bank][tileIndex].setScanline(leftOver - 8, this.chrRam[base + i - 8], this.chrRam[base + i]);
				}
			}
			canWriteChr(address) {
				if (address >= 8192) return false;
				return this.chrRamSlots[address >> 10] !== -1;
			}
			toJSON() {
				for (let slot = 0; slot < 8; slot++) this.saveChrRamSlot(slot << 10);
				let s = super.toJSON();
				s.chrRam = Array.from(this.chrRam);
				s.chrRamSlots = this.chrRamSlots.slice();
				return s;
			}
			fromJSON(s) {
				super.fromJSON(s);
				this.chrRam = new Uint8Array(s.chrRam);
				this.chrRamSlots = s.chrRamSlots;
				for (let bank = 0; bank < 8; bank++) this.rebuildChrRamTiles(bank);
				for (let slot = 0; slot < 8; slot++) {
					let bank = this.chrRamSlots[slot];
					if (bank !== -1) {
						let baseIndex = slot << 10 >> 4;
						for (let i = 0; i < 64; i++) this.nes.ppu.ptTile[baseIndex + i] = this.chrRamTiles[bank][i];
					}
				}
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper140.js
		var Mapper140 = class extends Mapper0 {
			static mapperName = "Jaleco JF-11/JF-14";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 24576 || address > 32767) {
					super.write(address, value);
					return;
				} else {
					this.load32kRomBank(value >> 4 & 3, 32768);
					this.load8kVromBank((value & 15) * 2, 0);
				}
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper180.js
		var Mapper180 = class extends Mapper0 {
			static mapperName = "UNROM (Crazy Climber)";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				} else this.loadRomBank(value, 49152);
			}
			loadROM() {
				if (!this.nes.rom.valid) throw new Error("Mapper 180: Invalid ROM! Unable to load.");
				this.loadRomBank(0, 32768);
				this.loadRomBank(0, 49152);
				this.loadCHRROM();
				this.nes.cpu.requestIrq(this.nes.cpu.IRQ_RESET);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper240.js
		var Mapper240 = class extends Mapper0 {
			static mapperName = "Mapper 240";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 16416 || address > 24575) {
					super.write(address, value);
					return;
				} else {
					this.load32kRomBank(value >> 4 & 3, 32768);
					this.load8kVromBank((value & 15) * 2, 0);
				}
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/mapper241.js
		var Mapper241 = class extends Mapper0 {
			static mapperName = "BxROM (Mapper 241)";
			constructor(nes) {
				super(nes);
			}
			write(address, value) {
				if (address < 32768) {
					super.write(address, value);
					return;
				} else this.load32kRomBank(value, 32768);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/mappers/index.js
		var mappers_default = {
			0: Mapper0,
			1: Mapper1,
			2: Mapper2,
			3: Mapper3,
			4: Mapper4,
			5: Mapper5,
			7: Mapper7,
			9: Mapper9,
			11: Mapper11,
			34: Mapper34,
			38: Mapper38,
			66: Mapper66,
			71: Mapper71,
			79: Mapper79,
			94: Mapper94,
			118: Mapper118,
			119: Mapper119,
			140: Mapper140,
			180: Mapper180,
			240: Mapper240,
			241: Mapper241
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/rom.js
		var ROM = class ROM {
			VERTICAL_MIRRORING = 0;
			HORIZONTAL_MIRRORING = 1;
			FOURSCREEN_MIRRORING = 2;
			SINGLESCREEN_MIRRORING = 3;
			SINGLESCREEN_MIRRORING2 = 4;
			SINGLESCREEN_MIRRORING3 = 5;
			SINGLESCREEN_MIRRORING4 = 6;
			CHRROM_MIRRORING = 7;
			constructor(nes) {
				this.nes = nes;
				this.valid = false;
			}
			load(data) {
				let i, j, v;
				if (data instanceof ArrayBuffer) data = new Uint8Array(data);
				const isTypedArray = ArrayBuffer.isView(data);
				if (isTypedArray) {
					if (data.length < 4 || data[0] !== 78 || data[1] !== 69 || data[2] !== 83 || data[3] !== 26) throw new Error("Not a valid NES ROM.");
				} else if (!data.startsWith("NES")) throw new Error("Not a valid NES ROM.");
				this.header = /* @__PURE__ */ new Uint8Array(16);
				for (i = 0; i < 16; i++) this.header[i] = isTypedArray ? data[i] : data.charCodeAt(i) & 255;
				this.mirroring = (this.header[6] & 1) !== 0 ? 1 : 0;
				this.batteryRam = (this.header[6] & 2) !== 0;
				this.trainer = (this.header[6] & 4) !== 0;
				this.fourScreen = (this.header[6] & 8) !== 0;
				this.isNES2 = (this.header[7] & 12) === 8;
				if (this.isNES2) this._loadNES2Header();
				else this._loadINES1Header();
				this.rom = new Array(this.romCount);
				let offset = 16 + (this.trainer ? 512 : 0);
				for (i = 0; i < this.romCount; i++) {
					this.rom[i] = /* @__PURE__ */ new Uint8Array(16384);
					for (j = 0; j < 16384; j++) {
						if (offset + j >= data.length) break;
						this.rom[i][j] = isTypedArray ? data[offset + j] : data.charCodeAt(offset + j) & 255;
					}
					offset += 16384;
				}
				this.vrom = new Array(this.vromCount);
				for (i = 0; i < this.vromCount; i++) {
					this.vrom[i] = /* @__PURE__ */ new Uint8Array(4096);
					for (j = 0; j < 4096; j++) {
						if (offset + j >= data.length) break;
						this.vrom[i][j] = isTypedArray ? data[offset + j] : data.charCodeAt(offset + j) & 255;
					}
					offset += 4096;
				}
				this.vromTile = new Array(this.vromCount);
				for (i = 0; i < this.vromCount; i++) {
					this.vromTile[i] = new Array(256);
					for (j = 0; j < 256; j++) this.vromTile[i][j] = new Tile();
				}
				let tileIndex;
				let leftOver;
				for (v = 0; v < this.vromCount; v++) for (i = 0; i < 4096; i++) {
					tileIndex = i >> 4;
					leftOver = i % 16;
					if (leftOver < 8) this.vromTile[v][tileIndex].setScanline(leftOver, this.vrom[v][i], this.vrom[v][i + 8]);
					else this.vromTile[v][tileIndex].setScanline(leftOver - 8, this.vrom[v][i - 8], this.vrom[v][i]);
				}
				this.valid = true;
			}
			_loadINES1Header() {
				this.romCount = this.header[4];
				this.vromCount = this.header[5] * 2;
				this.mapperType = this.header[6] >> 4 | this.header[7] & 240;
				let foundError = false;
				for (let i = 8; i < 16; i++) if (this.header[i] !== 0) {
					foundError = true;
					break;
				}
				if (foundError) this.mapperType &= 15;
				this.subMapper = 0;
				this.prgRamSize = 0;
				this.prgNvRamSize = 0;
				this.chrRamSize = 0;
				this.chrNvRamSize = 0;
				this.timingMode = 0;
				this.consoleType = 0;
			}
			_loadNES2Header() {
				this.mapperType = this.header[6] >> 4 | this.header[7] & 240 | (this.header[8] & 15) << 8;
				this.subMapper = this.header[8] >> 4 & 15;
				const prgMsb = this.header[9] & 15;
				if (prgMsb === 15) {
					const e = this.header[4] >> 2 & 63;
					const m = this.header[4] & 3;
					this.romCount = Math.ceil(Math.pow(2, e) * (m * 2 + 1) / 16384);
				} else this.romCount = prgMsb << 8 | this.header[4];
				const chrMsb = this.header[9] >> 4 & 15;
				if (chrMsb === 15) {
					const e = this.header[5] >> 2 & 63;
					const m = this.header[5] & 3;
					this.vromCount = Math.ceil(Math.pow(2, e) * (m * 2 + 1) / 4096);
				} else this.vromCount = (chrMsb << 8 | this.header[5]) * 2;
				this.prgRamSize = ROM._decodeRamSize(this.header[10] & 15);
				this.prgNvRamSize = ROM._decodeRamSize(this.header[10] >> 4 & 15);
				this.chrRamSize = ROM._decodeRamSize(this.header[11] & 15);
				this.chrNvRamSize = ROM._decodeRamSize(this.header[11] >> 4 & 15);
				this.timingMode = this.header[12] & 3;
				this.consoleType = this.header[7] & 3;
			}
			static _decodeRamSize(value) {
				if (value === 0) return 0;
				return 64 << value;
			}
			getMirroringType() {
				if (this.fourScreen) return this.FOURSCREEN_MIRRORING;
				if (this.mirroring === 0) return this.HORIZONTAL_MIRRORING;
				return this.VERTICAL_MIRRORING;
			}
			mapperSupported() {
				return typeof mappers_default[this.mapperType] !== "undefined";
			}
			createMapper() {
				if (this.mapperSupported()) return new mappers_default[this.mapperType](this.nes);
				else throw new Error(`Unsupported mapper: ${this.mapperType}`);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/nes.js
		var NES = class {
			constructor(opts) {
				this.opts = {
					onFrame: function() {},
					onAudioSample: null,
					onStatusUpdate: function() {},
					onBatteryRamWrite: function() {},
					emulateSound: true,
					sampleRate: 48e3,
					...opts
				};
				this.ui = {
					writeFrame: this.opts.onFrame,
					updateStatus: this.opts.onStatusUpdate
				};
				this.cpu = new CPU(this);
				this.ppu = new PPU(this);
				this.papu = new PAPU(this);
				this.gameGenie = new GameGenie();
				this.gameGenie.onChange = () => this.cpu._updateCartridgeLoader();
				this.mmap = null;
				this.controllers = {
					1: new Controller(),
					2: new Controller()
				};
				this.fpsFrameCount = 0;
				this.romData = null;
				this.ui.updateStatus("Ready to load a ROM.");
			}
			reset() {
				this.cpu = new CPU(this);
				this.ppu = new PPU(this);
				this.papu = new PAPU(this);
				if (this.mmap !== null) this.mmap = this.rom.createMapper();
				this.lastFpsTime = null;
				this.fpsFrameCount = 0;
				this.crashed = false;
			}
			frame = () => {
				if (this.crashed) throw new Error("Game has crashed. Call reset() or loadROM() to restart.");
				this.controllers[1].clock();
				this.controllers[2].clock();
				this.ppu.startFrame();
				let cycles;
				const cpu = this.cpu;
				const ppu = this.ppu;
				const papu = this.papu;
				try {
					for (;;) if (cpu.cyclesToHalt === 0) {
						cycles = cpu.emulate();
						papu.clockFrameCounter(cycles, cpu.apuCatchupCycles);
						cpu.apuCatchupCycles = 0;
						if (ppu.frameEnded) {
							ppu.frameEnded = false;
							break;
						}
					} else {
						let chunk = Math.min(cpu.cyclesToHalt, 8);
						for (let i = 0; i < chunk; i++) ppu.advanceDots(3);
						papu.clockFrameCounter(chunk);
						cpu.cyclesToHalt -= chunk;
						cpu._cpuCycleBase += chunk;
						if (ppu.frameEnded) {
							ppu.frameEnded = false;
							break;
						}
					}
				} catch (e) {
					this.crashed = true;
					throw e;
				}
				this.fpsFrameCount++;
			};
			buttonDown = (controller, button) => {
				this.controllers[controller].buttonDown(button);
			};
			buttonUp = (controller, button) => {
				this.controllers[controller].buttonUp(button);
			};
			zapperMove = (x, y) => {
				if (!this.mmap) return;
				this.mmap.zapperX = x;
				this.mmap.zapperY = y;
			};
			zapperFireDown = () => {
				if (!this.mmap) return;
				this.mmap.zapperFired = true;
			};
			zapperFireUp = () => {
				if (!this.mmap) return;
				this.mmap.zapperFired = false;
			};
			getFPS() {
				const now = Date.now();
				let fps = null;
				if (this.lastFpsTime) fps = this.fpsFrameCount / ((now - this.lastFpsTime) / 1e3);
				this.fpsFrameCount = 0;
				this.lastFpsTime = now;
				return fps;
			}
			reloadROM() {
				if (this.romData !== null) this.loadROM(this.romData);
			}
			loadROM(data) {
				this.rom = new ROM(this);
				this.rom.load(data);
				this.reset();
				this.mmap = this.rom.createMapper();
				this.mmap.loadROM();
				this.ppu.setMirroring(this.rom.getMirroringType());
				this.romData = data;
			}
			setFramerate(rate) {
				this.papu.setFrameRate(rate);
			}
			toJSON() {
				return {
					cpu: this.cpu.toJSON(),
					mmap: this.mmap.toJSON(),
					ppu: this.ppu.toJSON(),
					papu: this.papu.toJSON(),
					controllers: {
						1: this.controllers[1].toJSON(),
						2: this.controllers[2].toJSON()
					}
				};
			}
			fromJSON(s) {
				this.reset();
				this.cpu.fromJSON(s.cpu);
				this.mmap.fromJSON(s.mmap);
				this.ppu.fromJSON(s.ppu);
				this.papu.fromJSON(s.papu);
				if (s.controllers) {
					if (s.controllers[1]) this.controllers[1].fromJSON(s.controllers[1]);
					if (s.controllers[2]) this.controllers[2].fromJSON(s.controllers[2]);
				}
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/browser/screen.js
		const SCREEN_WIDTH = 256;
		const SCREEN_HEIGHT = 240;
		var Screen = class {
			constructor(container, options = {}) {
				this.onMouseDown = options.onMouseDown;
				this.onMouseUp = options.onMouseUp;
				this.canvas = document.createElement("canvas");
				this.canvas.width = SCREEN_WIDTH;
				this.canvas.height = SCREEN_HEIGHT;
				this.canvas.style.imageRendering = "pixelated";
				this.canvas.style.imageRendering = "crisp-edges";
				container.appendChild(this.canvas);
				this._handleMouseDown = (e) => {
					if (!this.onMouseDown) return;
					let scale = SCREEN_WIDTH / parseFloat(this.canvas.style.width);
					let rect = this.canvas.getBoundingClientRect();
					let x = Math.round((e.clientX - rect.left) * scale);
					let y = Math.round((e.clientY - rect.top) * scale);
					this.onMouseDown(x, y);
				};
				this._handleMouseUp = () => {
					if (this.onMouseUp) this.onMouseUp();
				};
				this.canvas.addEventListener("mousedown", this._handleMouseDown);
				this.canvas.addEventListener("mouseup", this._handleMouseUp);
				this._initCanvas();
			}
			_initCanvas() {
				this.context = this.canvas.getContext("2d");
				this.imageData = this.context.getImageData(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
				this.context.fillStyle = "black";
				this.context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
				this.buf = new ArrayBuffer(this.imageData.data.length);
				this.buf8 = new Uint8ClampedArray(this.buf);
				this.buf32 = new Uint32Array(this.buf);
				for (var i = 0; i < this.buf32.length; ++i) this.buf32[i] = 4278190080;
			}
			setBuffer = (buffer) => {
				for (var y = 0; y < SCREEN_HEIGHT; ++y) for (var x = 0; x < SCREEN_WIDTH; ++x) {
					var i = y * 256 + x;
					this.buf32[i] = 4278190080 | buffer[i];
				}
			};
			writeBuffer = () => {
				this.imageData.data.set(this.buf8);
				this.context.putImageData(this.imageData, 0, 0);
			};
			fitInParent = () => {
				let parent = this.canvas.parentNode;
				let parentWidth = parent.clientWidth;
				let parentHeight = parent.clientHeight;
				let parentRatio = parentWidth / parentHeight;
				let desiredRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
				if (desiredRatio < parentRatio) {
					this.canvas.style.width = `${Math.round(parentHeight * desiredRatio)}px`;
					this.canvas.style.height = `${parentHeight}px`;
				} else {
					this.canvas.style.width = `${parentWidth}px`;
					this.canvas.style.height = `${Math.round(parentWidth / desiredRatio)}px`;
				}
			};
			screenshot() {
				var img = new Image();
				img.src = this.canvas.toDataURL("image/png");
				return img;
			}
			destroy() {
				this.canvas.removeEventListener("mousedown", this._handleMouseDown);
				this.canvas.removeEventListener("mouseup", this._handleMouseUp);
				this.canvas.parentNode.removeChild(this.canvas);
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/browser/speakers.js
		const workletCode = `
class NESAudioProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    // Circular buffer sized to hold ~170ms of audio at 48kHz (8192 samples).
    this.capacity = 8192;
    this.bufferL = new Float32Array(this.capacity);
    this.bufferR = new Float32Array(this.capacity);
    this.readPos = 0;
    this.writePos = 0;
    this.count = 0;

    this.port.onmessage = (e) => {
      if (e.data.type === "samples") {
        const left = e.data.left;
        const right = e.data.right;
        const len = left.length;

        // If adding these samples would overflow, drop oldest to make room
        if (this.count + len > this.capacity) {
          const drop = this.count + len - this.capacity;
          this.readPos = (this.readPos + drop) % this.capacity;
          this.count -= drop;
        }

        for (let i = 0; i < len; i++) {
          this.bufferL[this.writePos] = left[i];
          this.bufferR[this.writePos] = right[i];
          this.writePos = (this.writePos + 1) % this.capacity;
        }
        this.count += len;
      }
    };
  }

  process(inputs, outputs) {
    const output = outputs[0];
    if (!output || output.length < 2) return true;

    const outL = output[0];
    const outR = output[1];
    const size = outL.length;

    if (this.count < size) {
      for (let i = 0; i < this.count; i++) {
        outL[i] = this.bufferL[this.readPos];
        outR[i] = this.bufferR[this.readPos];
        this.readPos = (this.readPos + 1) % this.capacity;
      }
      for (let i = this.count; i < size; i++) {
        outL[i] = 0;
        outR[i] = 0;
      }
      this.count = 0;
      this.port.postMessage({ type: "underrun" });
    } else {
      for (let i = 0; i < size; i++) {
        outL[i] = this.bufferL[this.readPos];
        outR[i] = this.bufferR[this.readPos];
        this.readPos = (this.readPos + 1) % this.capacity;
      }
      this.count -= size;
    }

    return true;
  }
}

registerProcessor("nes-audio-processor", NESAudioProcessor);
`;
		const BATCH_SIZE = 128;
		var Speakers = class {
			constructor({ onBufferUnderrun }) {
				this.onBufferUnderrun = onBufferUnderrun;
				this.audioCtx = null;
				this.node = null;
				this.batchL = new Float32Array(BATCH_SIZE);
				this.batchR = new Float32Array(BATCH_SIZE);
				this.batchPos = 0;
			}
			getSampleRate() {
				if (this.audioCtx) return this.audioCtx.sampleRate;
				return 44100;
			}
			async start() {
				if (!window.AudioContext) return;
				this.audioCtx = new window.AudioContext();
				const blob = new Blob([workletCode], { type: "application/javascript" });
				const workletUrl = URL.createObjectURL(blob);
				await this.audioCtx.audioWorklet.addModule(workletUrl);
				URL.revokeObjectURL(workletUrl);
				this.node = new AudioWorkletNode(this.audioCtx, "nes-audio-processor", { outputChannelCount: [2] });
				this.node.port.onmessage = (e) => {
					if (e.data.type === "underrun" && this.onBufferUnderrun) this.onBufferUnderrun();
				};
				this.node.connect(this.audioCtx.destination);
				if (this.audioCtx.state === "suspended") {
					this._resumeOnInteraction = () => {
						if (this.audioCtx) this.audioCtx.resume();
						this._removeResumeListeners();
					};
					document.addEventListener("keydown", this._resumeOnInteraction);
					document.addEventListener("mousedown", this._resumeOnInteraction);
					document.addEventListener("touchstart", this._resumeOnInteraction);
				}
			}
			_removeResumeListeners() {
				if (this._resumeOnInteraction) {
					document.removeEventListener("keydown", this._resumeOnInteraction);
					document.removeEventListener("mousedown", this._resumeOnInteraction);
					document.removeEventListener("touchstart", this._resumeOnInteraction);
					this._resumeOnInteraction = null;
				}
			}
			stop() {
				this._removeResumeListeners();
				if (this.node) {
					this.node.disconnect(this.audioCtx.destination);
					this.node = null;
				}
				if (this.audioCtx) {
					this.audioCtx.close().catch((e) => console.error(e));
					this.audioCtx = null;
				}
				this.batchPos = 0;
			}
			writeSample = (left, right) => {
				if (!this.node) return;
				this.batchL[this.batchPos] = left;
				this.batchR[this.batchPos] = right;
				this.batchPos++;
				if (this.batchPos >= BATCH_SIZE) {
					this.node.port.postMessage({
						type: "samples",
						left: this.batchL.slice(),
						right: this.batchR.slice()
					});
					this.batchPos = 0;
				}
			};
			flush() {
				if (this.batchPos > 0 && this.node) {
					this.node.port.postMessage({
						type: "samples",
						left: this.batchL.slice(0, this.batchPos),
						right: this.batchR.slice(0, this.batchPos)
					});
					this.batchPos = 0;
				}
			}
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/browser/frame-timer.js
		let debugEnabled$1 = false;
		try {
			debugEnabled$1 = !!localStorage.getItem("jsnes_debug");
		} catch {}
		const FPS = 60.098;
		var FrameTimer = class {
			constructor(props) {
				this.onGenerateFrame = props.onGenerateFrame;
				this.onWriteFrame = props.onWriteFrame;
				this.onAnimationFrame = this.onAnimationFrame.bind(this);
				this.running = true;
				this.interval = 1e3 / FPS;
				this.lastFrameTime = false;
			}
			start() {
				this.running = true;
				this.requestAnimationFrame();
			}
			stop() {
				this.running = false;
				if (this._requestID) window.cancelAnimationFrame(this._requestID);
				this.lastFrameTime = false;
			}
			requestAnimationFrame() {
				this._requestID = window.requestAnimationFrame(this.onAnimationFrame);
			}
			generateFrame() {
				this.onGenerateFrame();
				this.lastFrameTime += this.interval;
			}
			onAnimationFrame = (time) => {
				this.requestAnimationFrame();
				let excess = time % this.interval;
				let newFrameTime = time - excess;
				if (!this.lastFrameTime) {
					this.lastFrameTime = newFrameTime;
					return;
				}
				let numFrames = Math.round((newFrameTime - this.lastFrameTime) / this.interval);
				if (numFrames === 0) return;
				this.generateFrame();
				this.onWriteFrame();
				let timeToNextFrame = this.interval - excess;
				for (let i = 1; i < numFrames; i++) setTimeout(() => {
					this.generateFrame();
				}, i * timeToNextFrame / numFrames);
				if (numFrames > 1 && debugEnabled$1) console.log("SKIP", numFrames - 1, this.lastFrameTime);
			};
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/browser/keyboard.js
		const KEYS = {
			88: [
				1,
				Controller.BUTTON_A,
				"X"
			],
			89: [
				1,
				Controller.BUTTON_B,
				"Y"
			],
			90: [
				1,
				Controller.BUTTON_B,
				"Z"
			],
			17: [
				1,
				Controller.BUTTON_SELECT,
				"Right Ctrl"
			],
			13: [
				1,
				Controller.BUTTON_START,
				"Enter"
			],
			38: [
				1,
				Controller.BUTTON_UP,
				"Up"
			],
			40: [
				1,
				Controller.BUTTON_DOWN,
				"Down"
			],
			37: [
				1,
				Controller.BUTTON_LEFT,
				"Left"
			],
			39: [
				1,
				Controller.BUTTON_RIGHT,
				"Right"
			],
			83: [
				1,
				Controller.BUTTON_TURBO_A,
				"S"
			],
			65: [
				1,
				Controller.BUTTON_TURBO_B,
				"A"
			],
			103: [
				2,
				Controller.BUTTON_A,
				"Num-7"
			],
			105: [
				2,
				Controller.BUTTON_B,
				"Num-9"
			],
			99: [
				2,
				Controller.BUTTON_SELECT,
				"Num-3"
			],
			97: [
				2,
				Controller.BUTTON_START,
				"Num-1"
			],
			104: [
				2,
				Controller.BUTTON_UP,
				"Num-8"
			],
			98: [
				2,
				Controller.BUTTON_DOWN,
				"Num-2"
			],
			100: [
				2,
				Controller.BUTTON_LEFT,
				"Num-4"
			],
			102: [
				2,
				Controller.BUTTON_RIGHT,
				"Num-6"
			]
		};
		var KeyboardController = class {
			constructor(options) {
				this.onButtonDown = options.onButtonDown;
				this.onButtonUp = options.onButtonUp;
			}
			loadKeys = () => {
				var keys;
				try {
					keys = localStorage.getItem("keys");
					if (keys) keys = JSON.parse(keys);
				} catch (e) {
					console.warn("Failed to get keys from localStorage.", e);
				}
				this.keys = keys || KEYS;
			};
			setKeys = (newKeys) => {
				try {
					localStorage.setItem("keys", JSON.stringify(newKeys));
					this.keys = newKeys;
				} catch (e) {
					console.warn("Failed to set keys in localStorage.", e);
				}
			};
			handleKeyDown = (e) => {
				var key = this.keys[e.keyCode];
				if (key) {
					this.onButtonDown(key[0], key[1]);
					e.preventDefault();
				}
			};
			handleKeyUp = (e) => {
				var key = this.keys[e.keyCode];
				if (key) {
					this.onButtonUp(key[0], key[1]);
					e.preventDefault();
				}
			};
			handleKeyPress = (e) => {
				if (this.keys[e.keyCode]) e.preventDefault();
			};
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/browser/gamepad.js
		var GamepadController = class {
			constructor(options) {
				this.onButtonDown = options.onButtonDown;
				this.onButtonUp = options.onButtonUp;
				this.gamepadState = [];
				this.buttonCallback = null;
			}
			disableIfGamepadEnabled = (callback) => {
				var self = this;
				return (playerId, buttonId) => {
					if (!self.gamepadConfig) return callback(playerId, buttonId);
					var playerGamepadId = self.gamepadConfig.playerGamepadId;
					if (!playerGamepadId || !playerGamepadId[playerId - 1]) return callback(playerId, buttonId);
				};
			};
			_getPlayerNumberFromGamepad = (gamepad) => {
				if (this.gamepadConfig.playerGamepadId[0] === gamepad.id) return 1;
				if (this.gamepadConfig.playerGamepadId[1] === gamepad.id) return 2;
				return 1;
			};
			poll = () => {
				const gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads();
				const usedPlayers = [];
				for (let gamepadIndex = 0; gamepadIndex < gamepads.length; gamepadIndex++) {
					const gamepad = gamepads[gamepadIndex];
					const previousGamepad = this.gamepadState[gamepadIndex];
					if (!gamepad) continue;
					if (!previousGamepad) {
						this.gamepadState[gamepadIndex] = gamepad;
						continue;
					}
					const buttons = gamepad.buttons;
					const previousButtons = previousGamepad.buttons;
					if (this.buttonCallback) {
						for (let code = 0; code < gamepad.axes.length; code++) {
							const axis = gamepad.axes[code];
							const previousAxis = previousGamepad.axes[code];
							if (axis === -1 && previousAxis !== -1) this.buttonCallback({
								gamepadId: gamepad.id,
								type: "axis",
								code,
								value: axis
							});
							if (axis === 1 && previousAxis !== 1) this.buttonCallback({
								gamepadId: gamepad.id,
								type: "axis",
								code,
								value: axis
							});
						}
						for (let code = 0; code < buttons.length; code++) {
							const button = buttons[code];
							const previousButton = previousButtons[code];
							if (button.pressed && !previousButton.pressed) this.buttonCallback({
								gamepadId: gamepad.id,
								type: "button",
								code
							});
						}
					} else if (this.gamepadConfig) {
						let playerNumber = this._getPlayerNumberFromGamepad(gamepad);
						if (usedPlayers.length < 2) {
							if (usedPlayers.indexOf(playerNumber) !== -1) {
								playerNumber++;
								if (playerNumber > 2) playerNumber = 1;
							}
							usedPlayers.push(playerNumber);
							if (this.gamepadConfig.configs[gamepad.id]) {
								const configButtons = this.gamepadConfig.configs[gamepad.id].buttons;
								for (let i = 0; i < configButtons.length; i++) {
									const configButton = configButtons[i];
									if (configButton.type === "button") {
										const code = configButton.code;
										const button = buttons[code];
										const previousButton = previousButtons[code];
										if (button.pressed && !previousButton.pressed) this.onButtonDown(playerNumber, configButton.buttonId);
										else if (!button.pressed && previousButton.pressed) this.onButtonUp(playerNumber, configButton.buttonId);
									} else if (configButton.type === "axis") {
										const code = configButton.code;
										const axis = gamepad.axes[code];
										const previousAxis = previousGamepad.axes[code];
										if (axis === configButton.value && previousAxis !== configButton.value) this.onButtonDown(playerNumber, configButton.buttonId);
										if (axis !== configButton.value && previousAxis === configButton.value) this.onButtonUp(playerNumber, configButton.buttonId);
									}
								}
							}
						}
					}
					this.gamepadState[gamepadIndex] = {
						buttons: buttons.map((b) => {
							return { pressed: b.pressed };
						}),
						axes: gamepad.axes.slice(0)
					};
				}
			};
			promptButton = (f) => {
				if (!f) this.buttonCallback = f;
				else this.buttonCallback = (buttonInfo) => {
					this.buttonCallback = null;
					f(buttonInfo);
				};
			};
			loadGamepadConfig = () => {
				var gamepadConfig;
				try {
					gamepadConfig = localStorage.getItem("gamepadConfig");
					if (gamepadConfig) gamepadConfig = JSON.parse(gamepadConfig);
				} catch (e) {
					console.warn("Failed to get gamepadConfig from localStorage.", e);
				}
				this.gamepadConfig = gamepadConfig;
			};
			setGamepadConfig = (gamepadConfig) => {
				try {
					localStorage.setItem("gamepadConfig", JSON.stringify(gamepadConfig));
					this.gamepadConfig = gamepadConfig;
				} catch (e) {
					console.warn("Failed to set gamepadConfig in localStorage.", e);
				}
			};
			startPolling = () => {
				if (!(navigator.getGamepads || navigator.webkitGetGamepads)) return { stop: () => {} };
				let stopped = false;
				const loop = () => {
					if (stopped) return;
					this.poll();
					requestAnimationFrame(loop);
				};
				requestAnimationFrame(loop);
				return { stop: () => {
					stopped = true;
				} };
			};
		};
		//#endregion
		//#region node_modules/.pnpm/jsnes@2.1.0/node_modules/jsnes/src/browser/index.js
		let debugEnabled = false;
		try {
			debugEnabled = !!localStorage.getItem("jsnes_debug");
		} catch {}
		function debug(...args) {
			if (debugEnabled) console.log(...args);
		}
		/**
		* Browser-based NES emulator that handles canvas rendering, audio output,
		* keyboard/gamepad input, and frame timing.
		*
		* Usage:
		*   const browser = new jsnes.Browser({
		*     container: document.getElementById("nes"),
		*     romData: romData,
		*     onError: (e) => console.error(e),
		*   });
		*
		* If romData is omitted, call browser.loadROM(data) then browser.start().
		*/
		var Browser = class {
			constructor(options = {}) {
				this._options = options;
				this._screen = new Screen(options.container, {
					onMouseDown: (x, y) => {
						this.nes.zapperMove(x, y);
						this.nes.zapperFireDown();
					},
					onMouseUp: () => {
						this.nes.zapperFireUp();
					}
				});
				this._screen.fitInParent();
				this._speakers = new Speakers({ onBufferUnderrun: () => {
					debug("Buffer underrun, running extra frames to catch up");
					this._frameTimer.generateFrame();
					this._frameTimer.generateFrame();
				} });
				this.nes = new NES({
					onFrame: this._screen.setBuffer,
					onStatusUpdate: debug,
					onAudioSample: this._speakers.writeSample,
					onBatteryRamWrite: options.onBatteryRamWrite || (() => {}),
					sampleRate: this._speakers.getSampleRate()
				});
				this._frameTimer = new FrameTimer({
					onGenerateFrame: () => {
						try {
							this.nes.frame();
							this._speakers.flush();
						} catch (e) {
							this.stop();
							if (this._options.onError) this._options.onError(e);
						}
					},
					onWriteFrame: this._screen.writeBuffer
				});
				this.gamepad = new GamepadController({
					onButtonDown: this.nes.buttonDown,
					onButtonUp: this.nes.buttonUp
				});
				this.gamepad.loadGamepadConfig();
				this._gamepadPolling = this.gamepad.startPolling();
				this.keyboard = new KeyboardController({
					onButtonDown: this.gamepad.disableIfGamepadEnabled(this.nes.buttonDown),
					onButtonUp: this.gamepad.disableIfGamepadEnabled(this.nes.buttonUp)
				});
				this.keyboard.loadKeys();
				document.addEventListener("keydown", this.keyboard.handleKeyDown);
				document.addEventListener("keyup", this.keyboard.handleKeyUp);
				document.addEventListener("keypress", this.keyboard.handleKeyPress);
				if (options.romData) {
					this.nes.loadROM(options.romData);
					this.start();
				}
			}
			start() {
				this._frameTimer.start();
				this._speakers.start();
				this._fpsInterval = setInterval(() => {
					debug(`FPS: ${this.nes.getFPS()}`);
				}, 1e3);
			}
			stop() {
				this._frameTimer.stop();
				this._speakers.stop();
				clearInterval(this._fpsInterval);
			}
			loadROM(data) {
				this.stop();
				this.nes.loadROM(data);
				this.start();
			}
			/**
			* Fill parent element with screen. Call if parent element changes size.
			*/
			fitInParent() {
				this._screen.fitInParent();
			}
			screenshot() {
				return this._screen.screenshot();
			}
			/**
			* Clean up all resources: stop emulation, remove event listeners, remove canvas.
			*/
			destroy() {
				this.stop();
				document.removeEventListener("keydown", this.keyboard.handleKeyDown);
				document.removeEventListener("keyup", this.keyboard.handleKeyUp);
				document.removeEventListener("keypress", this.keyboard.handleKeyPress);
				this._gamepadPolling.stop();
				this._screen.destroy();
			}
			/**
			* Load ROM data from a URL via XHR.
			*/
			static loadROMFromURL(url, callback) {
				var req = new XMLHttpRequest();
				req.open("GET", url);
				req.overrideMimeType("text/plain; charset=x-user-defined");
				req.onerror = () => callback(/* @__PURE__ */ new Error(`Error loading ${url}: ${req.statusText}`));
				req.onload = function() {
					if (this.status === 200) callback(null, this.responseText);
					else if (this.status === 0) {} else req.onerror();
				};
				req.send();
				return req;
			}
		};
		//#endregion
		//#region src/client/index.ts
		const name = "dsh-plugin-nintendo-client";
		const STYLE_ID = "dsh-nintendo-style";
		const ROOT_ATTR = "data-dsh-nintendo-root";
		const SHORTCUT_KEY = "dsh.nintendo.shortcut.v1";
		const SAVE_PREFIX = "dsh.nintendo.save.";
		const MUTE_KEY = "dsh.nintendo.muted.v1";
		const CSS = `
[data-dsh-nintendo-root] { position: fixed; inset: 0; z-index: 2147483000; display: grid; place-items: center; background: rgba(8, 10, 16, .52); backdrop-filter: blur(6px); font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; }
[data-dsh-nintendo-panel] { width: min(600px, calc(100vw - 28px)); max-height: calc(100vh - 28px); overflow: auto; border: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.12)); border-radius: 18px; background: var(--dsw-alias-bg-overlay, #17191f); color: var(--dsw-alias-label-primary, #f5f7fb); box-shadow: 0 24px 80px rgba(0,0,0,.42); }
[data-dsh-nintendo-header] { display: flex; align-items: center; gap: 10px; padding: 14px 16px 12px; border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.1)); }
[data-dsh-nintendo-title] { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 650; white-space: nowrap; }
[data-dsh-nintendo-rom] { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-secondary, #9aa1b0); font-size: 12px; }
[data-dsh-nintendo-close] { border: 0; padding: 4px 8px; border-radius: 8px; background: transparent; color: inherit; font-size: 16px; line-height: 1; cursor: pointer; }
[data-dsh-nintendo-close]:hover { background: rgba(255,255,255,.08); }
[data-dsh-nintendo-screen] { position: relative; width: 512px; max-width: 100%; aspect-ratio: 256 / 240; margin: 14px auto 0; border-radius: 10px; overflow: hidden; background: #000; box-shadow: 0 8px 28px rgba(0,0,0,.35); }
[data-dsh-nintendo-screen] canvas { display: block; margin: auto; image-rendering: pixelated; image-rendering: crisp-edges; }
[data-dsh-nintendo-empty] { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; color: var(--dsw-alias-label-secondary, #8f96a3); font-size: 13px; line-height: 1.7; pointer-events: none; padding: 24px; }
[data-dsh-nintendo-toolbar] { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px 16px 4px; }
[data-dsh-nintendo-btn] { border: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.12)); border-radius: 9px; padding: 7px 12px; background: rgba(255,255,255,.05); color: inherit; font-size: 13px; cursor: pointer; }
[data-dsh-nintendo-btn]:hover { background: rgba(255,255,255,.1); }
[data-dsh-nintendo-btn]:disabled { opacity: .45; cursor: default; }
[data-dsh-nintendo-status] { padding: 8px 16px 4px; text-align: center; color: var(--dsw-alias-label-secondary, #9aa1b0); font-size: 12px; }
[data-dsh-nintendo-footer] { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; padding: 10px 16px 12px; border-top: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.08)); color: var(--dsw-alias-label-secondary, #8f96a3); font-size: 11px; }
[data-dsh-nintendo-hints] { display: flex; flex-direction: column; gap: 4px; align-items: flex-start; }
[data-dsh-nintendo-p1], [data-dsh-nintendo-p2] { display: flex; flex-wrap: nowrap; gap: 6px 14px; align-items: center; white-space: nowrap; }
[data-dsh-nintendo-hints] b { color: var(--dsw-alias-label-primary, #f5f7fb); font-weight: 650; }
[data-dsh-nintendo-hints] kbd { padding: 1px 5px; border: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.14)); border-radius: 5px; background: rgba(255,255,255,.04); font: inherit; }
[data-dsh-nintendo-controls] { display: flex; align-items: center; gap: 10px; }
[data-dsh-nintendo-shortcut], [data-dsh-nintendo-shortcut-reset] { border: 0; padding: 0; background: transparent; color: inherit; font: inherit; cursor: pointer; }
[data-dsh-nintendo-shortcut]:hover, [data-dsh-nintendo-shortcut-reset]:hover { color: var(--dsw-alias-label-primary, #f5f7fb); }
[data-dsh-nintendo-shortcut][data-recording="true"] { color: var(--dsw-alias-label-primary, #f5f7fb); }
[data-dsh-nintendo-root].dsh-nintendo-drag { outline: 2px dashed var(--dsw-alias-brand-primary, #4d6bfe); outline-offset: -4px; }
[data-dsh-nintendo-library] { position: fixed; inset: 0; z-index: 2147483001; display: grid; place-items: center; background: rgba(8,10,16,.45); }
[data-dsh-nintendo-library-card] { width: min(460px, calc(100vw - 48px)); max-height: 70vh; display: flex; flex-direction: column; border: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.12)); border-radius: 14px; background: var(--dsw-alias-bg-overlay, #17191f); color: var(--dsw-alias-label-primary, #f5f7fb); box-shadow: 0 20px 60px rgba(0,0,0,.45); overflow: hidden; }
[data-dsh-nintendo-library-head] { padding: 12px 16px; font-size: 14px; font-weight: 650; border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.1)); }
[data-dsh-nintendo-library-list] { overflow: auto; padding: 8px; display: flex; flex-direction: column; gap: 4px; }
[data-dsh-nintendo-library-item] { display: flex; justify-content: space-between; gap: 12px; align-items: center; padding: 9px 12px; border: 0; border-radius: 8px; background: transparent; color: inherit; text-align: left; font-size: 13px; cursor: pointer; }
[data-dsh-nintendo-library-item]:hover { background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4d6bfe) 16%, transparent); }
[data-dsh-nintendo-library-size] { color: var(--dsw-alias-label-secondary, #9aa1b0); font-size: 12px; flex: none; }
[data-dsh-nintendo-library-empty] { padding: 24px 16px; text-align: center; color: var(--dsw-alias-label-secondary, #9aa1b0); font-size: 12px; line-height: 1.7; }
@media (prefers-reduced-motion: no-preference) { [data-dsh-nintendo-panel] { animation: dsh-nintendo-in .12s ease-out; } @keyframes dsh-nintendo-in { from { opacity: 0; transform: translateY(-8px) scale(.985); } } }
`;
		const DEFAULT_SHORTCUT = {
			key: "n",
			metaKey: false,
			ctrlKey: true,
			altKey: true,
			shiftKey: false
		};
		const MODIFIER_KEYS = /* @__PURE__ */ new Set([
			"alt",
			"control",
			"meta",
			"shift"
		]);
		const GAME_KEYS = {
			KeyW: [1, Controller.BUTTON_UP],
			KeyS: [1, Controller.BUTTON_DOWN],
			KeyA: [1, Controller.BUTTON_LEFT],
			KeyD: [1, Controller.BUTTON_RIGHT],
			KeyJ: [1, Controller.BUTTON_A],
			KeyK: [1, Controller.BUTTON_B],
			Enter: [1, Controller.BUTTON_START],
			ShiftRight: [1, Controller.BUTTON_SELECT],
			ArrowUp: [2, Controller.BUTTON_UP],
			ArrowDown: [2, Controller.BUTTON_DOWN],
			ArrowLeft: [2, Controller.BUTTON_LEFT],
			ArrowRight: [2, Controller.BUTTON_RIGHT],
			Digit1: [2, Controller.BUTTON_A],
			Digit2: [2, Controller.BUTTON_B],
			Digit3: [2, Controller.BUTTON_START],
			Digit4: [2, Controller.BUTTON_SELECT]
		};
		function normalizedKey(key) {
			return key.length === 1 ? key.toLocaleLowerCase() : key;
		}
		function shortcutFromEvent(event) {
			const key = normalizedKey(event.key);
			if (key === "" || MODIFIER_KEYS.has(key.toLocaleLowerCase())) return void 0;
			if (!event.metaKey && !event.ctrlKey && !event.altKey) return void 0;
			return {
				key,
				metaKey: event.metaKey,
				ctrlKey: event.ctrlKey,
				altKey: event.altKey,
				shiftKey: event.shiftKey
			};
		}
		function parseShortcut(value) {
			if (typeof value !== "object" || value === null) return void 0;
			const c = value;
			if (typeof c.key !== "string" || typeof c.metaKey !== "boolean" || typeof c.ctrlKey !== "boolean" || typeof c.altKey !== "boolean" || typeof c.shiftKey !== "boolean") return void 0;
			return shortcutFromEvent(c);
		}
		function formatShortcut(shortcut, applePlatform) {
			const parts = [];
			if (shortcut.ctrlKey) parts.push(applePlatform ? "⌃" : "Ctrl+");
			if (shortcut.altKey) parts.push(applePlatform ? "⌥" : "Alt+");
			if (shortcut.shiftKey) parts.push(applePlatform ? "⇧" : "Shift+");
			if (shortcut.metaKey) parts.push(applePlatform ? "⌘" : "Meta+");
			const key = shortcut.key === " " ? "Space" : shortcut.key.length === 1 ? shortcut.key.toLocaleUpperCase() : shortcut.key;
			return `${parts.join("")}${key}`;
		}
		function isShortcutMatch(event, shortcut) {
			return normalizedKey(event.key) === normalizedKey(shortcut.key) && event.metaKey === shortcut.metaKey && event.ctrlKey === shortcut.ctrlKey && event.altKey === shortcut.altKey && event.shiftKey === shortcut.shiftKey;
		}
		function hashBytes(bytes) {
			let h1 = 2166136261;
			let h2 = 16777619;
			for (const b of bytes) {
				h1 = Math.imul(h1 ^ b, 16777619);
				h2 = Math.imul(h2 + b, 31);
			}
			return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
		}
		function apply(ctx) {
			ctx.effect(() => {
				const dispose = mountNintendo(document, window);
				return () => {
					dispose();
				};
			});
		}
		function mountNintendo(document, window) {
			const body = document.body;
			if (body === null) return () => void 0;
			const state = {
				buttons: {},
				paused: false,
				muted: false,
				shortcut: DEFAULT_SHORTCUT,
				recording: false,
				statusInitialized: false,
				hidden: false
			};
			let ownsStyle = false;
			if (document.getElementById(STYLE_ID) === null) {
				const style = document.createElement("style");
				style.id = STYLE_ID;
				style.textContent = CSS;
				document.head.appendChild(style);
				ownsStyle = true;
			}
			const applePlatform = (/* @__PURE__ */ new RegExp("Mac|iPhone|iPad", "i")).test(window.navigator.platform);
			try {
				state.shortcut = parseShortcut(JSON.parse(window.localStorage.getItem(SHORTCUT_KEY) ?? "null")) ?? DEFAULT_SHORTCUT;
			} catch {
				state.shortcut = DEFAULT_SHORTCUT;
			}
			try {
				state.muted = window.localStorage.getItem(MUTE_KEY) === "1";
			} catch {
				state.muted = false;
			}
			const saveShortcut = (next) => {
				state.shortcut = next ?? DEFAULT_SHORTCUT;
				try {
					if (next === void 0) window.localStorage.removeItem(SHORTCUT_KEY);
					else window.localStorage.setItem(SHORTCUT_KEY, JSON.stringify(next));
				} catch {}
			};
			const setStatus = (text) => {
				if (state.status) state.status.textContent = text;
			};
			const setMuted = (muted) => {
				state.muted = muted;
				try {
					window.localStorage.setItem(MUTE_KEY, muted ? "1" : "0");
				} catch {}
				if (state.browser) {
					const nes = state.browser.nes;
					nes.opts.onAudioSample = muted ? null : state.originalAudioSample ?? null;
				}
				if (state.buttons.mute) state.buttons.mute.textContent = muted ? "🔇 声音" : "🔊 静音";
			};
			const updateButtons = () => {
				const hasRom = state.browser !== void 0;
				for (const key of [
					"reset",
					"pause",
					"mute",
					"save",
					"load",
					"shot"
				]) if (state.buttons[key]) state.buttons[key].disabled = !hasRom;
				if (state.buttons.pause) state.buttons.pause.textContent = state.paused ? "▶ 继续" : "⏸ 暂停";
			};
			const renderShortcut = () => {
				if (!state.root) return;
				const btn = state.root.querySelector("[data-dsh-nintendo-shortcut]");
				if (!btn) return;
				btn.textContent = state.recording ? "请按新快捷键…" : `快捷键 ${formatShortcut(state.shortcut, applePlatform)}`;
				btn.setAttribute("data-recording", String(state.recording));
			};
			const destroyBrowser = () => {
				if (state.browser) {
					state.browser.destroy();
					state.browser = void 0;
				}
				state.romName = void 0;
				state.romKey = void 0;
				state.paused = false;
			};
			const loadRom = (data, name) => {
				const bytes = data instanceof Uint8Array ? data : new Uint8Array(data);
				if (state.root === void 0) open();
				if (state.screen === void 0) return;
				destroyBrowser();
				if (state.empty) state.empty.style.display = "none";
				state.screen.textContent = "";
				const browser = new Browser({
					container: state.screen,
					onError: (error) => {
						setStatus(`模拟器出错：${error.message}`);
						console.error("[dsh-plugin-nintendo]", error);
					}
				});
				state.browser = browser;
				state.originalAudioSample = browser.nes.opts.onAudioSample;
				const keyboard = browser.keyboard;
				document.removeEventListener("keydown", keyboard.handleKeyDown);
				document.removeEventListener("keyup", keyboard.handleKeyUp);
				document.removeEventListener("keypress", keyboard.handleKeyPress);
				browser.loadROM(bytes);
				state.romName = name;
				state.romKey = hashBytes(bytes);
				state.lastRomBytes = bytes;
				state.lastRomName = name;
				state.paused = false;
				setMuted(state.muted);
				requestAnimationFrame(() => browser.fitInParent());
				updateButtons();
				const romEl = state.root?.querySelector("[data-dsh-nintendo-rom]");
				if (romEl) romEl.textContent = `🎮 ${name}`;
				const save = window.localStorage.getItem(SAVE_PREFIX + state.romKey);
				if (save) try {
					browser.stop();
					browser.nes.fromJSON(JSON.parse(save));
					browser.start();
					setStatus(`已恢复 ${name} 的存档`);
				} catch {
					setStatus(`正在运行 ${name}`);
				}
				else setStatus(`正在运行 ${name}`);
			};
			const saveState = () => {
				if (!state.browser || !state.romKey) return;
				try {
					const data = state.browser.nes.toJSON();
					window.localStorage.setItem(SAVE_PREFIX + state.romKey, JSON.stringify(data));
					setStatus("已保存当前进度（本地）");
				} catch {
					setStatus("存档失败");
				}
			};
			const loadState = () => {
				if (!state.browser || !state.romKey) return;
				const save = window.localStorage.getItem(SAVE_PREFIX + state.romKey);
				if (!save) {
					setStatus("该 ROM 没有存档");
					return;
				}
				try {
					state.browser.stop();
					state.browser.nes.fromJSON(JSON.parse(save));
					state.browser.start();
					setStatus("已读档");
				} catch {
					setStatus("读档失败");
				}
			};
			const hide = () => {
				state.recording = false;
				state.hidden = true;
				closeLibrary();
				if (state.browser) state.browser.stop();
				if (state.root) state.root.style.display = "none";
				if (state.previousFocus?.isConnected === true) state.previousFocus.focus({ preventScroll: true });
				state.previousFocus = void 0;
			};
			const close = () => {
				state.recording = false;
				if (state.resizeHandler) {
					window.removeEventListener("resize", state.resizeHandler);
					state.resizeHandler = void 0;
				}
				destroyBrowser();
				state.root?.remove();
				state.root = void 0;
				state.hidden = false;
				state.library = void 0;
				if (state.previousFocus?.isConnected === true) state.previousFocus.focus({ preventScroll: true });
				state.previousFocus = void 0;
			};
			const tryLoadHostRom = async () => {
				try {
					const statusRes = await fetch("/nes/status");
					if (!statusRes.ok) return;
					const rom = (await statusRes.json())?.rom;
					if (!rom) return;
					const romRes = await fetch("/nes/rom");
					if (!romRes.ok) return;
					const bytes = new Uint8Array(await romRes.arrayBuffer());
					if (state.root === void 0) return;
					loadRom(bytes, rom.name ?? "unknown");
				} catch {}
			};
			const closeLibrary = () => {
				state.library?.remove();
				state.library = void 0;
			};
			const loadRomFromLibrary = async (name) => {
				closeLibrary();
				try {
					const res = await fetch("/nes/rom?file=" + encodeURIComponent(name));
					if (!res.ok) {
						setStatus(`加载 "${name}" 失败（${res.status}）`);
						return;
					}
					const bytes = new Uint8Array(await res.arrayBuffer());
					loadRom(bytes, name);
				} catch (error) {
					setStatus(`加载 "${name}" 失败：${error.message}`);
				}
			};
			const showLibrary = async () => {
				if (!state.root) return;
				if (state.library) {
					closeLibrary();
					return;
				}
				const overlay = document.createElement("div");
				overlay.setAttribute("data-dsh-nintendo-library", "");
				const card = document.createElement("div");
				card.setAttribute("data-dsh-nintendo-library-card", "");
				const head = document.createElement("div");
				head.setAttribute("data-dsh-nintendo-library-head", "");
				head.textContent = "🎮 游戏库";
				const list = document.createElement("div");
				list.setAttribute("data-dsh-nintendo-library-list", "");
				list.textContent = "加载中…";
				card.append(head, list);
				overlay.appendChild(card);
				state.root.appendChild(overlay);
				state.library = overlay;
				overlay.addEventListener("mousedown", (event) => {
					if (event.target === overlay) closeLibrary();
				});
				overlay.addEventListener("keydown", (event) => {
					if (event.key === "Escape") {
						event.preventDefault();
						event.stopPropagation();
						closeLibrary();
					}
				});
				try {
					const res = await fetch("/nes/roms");
					if (!res.ok) {
						list.textContent = "未配置 ROM 目录";
						return;
					}
					const roms = (await res.json())?.roms;
					if (!roms || roms.length === 0) {
						list.innerHTML = "<div data-dsh-nintendo-library-empty>roms 目录为空<br>把 .nes 文件放进插件 roms 目录后重试</div>";
						return;
					}
					list.textContent = "";
					for (const rom of roms) {
						const row = document.createElement("button");
						row.type = "button";
						row.setAttribute("data-dsh-nintendo-library-item", "");
						const nameEl = document.createElement("span");
						nameEl.textContent = rom.name;
						const sizeEl = document.createElement("span");
						sizeEl.setAttribute("data-dsh-nintendo-library-size", "");
						sizeEl.textContent = `${(rom.size / 1024).toFixed(0)} KB`;
						row.append(nameEl, sizeEl);
						row.addEventListener("click", () => {
							loadRomFromLibrary(rom.name);
						});
						list.appendChild(row);
					}
				} catch {
					list.textContent = "无法连接主机";
				}
			};
			const open = () => {
				if (state.root !== void 0) {
					if (state.hidden) {
						state.hidden = false;
						state.root.style.display = "";
						state.previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : void 0;
						if (state.browser && !state.paused) state.browser.start();
					}
					return;
				}
				document.querySelector(`[${ROOT_ATTR}]`)?.remove();
				state.previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : void 0;
				const overlay = document.createElement("div");
				overlay.setAttribute(ROOT_ATTR, "");
				overlay.setAttribute("role", "dialog");
				overlay.setAttribute("aria-modal", "true");
				overlay.setAttribute("aria-label", "NES 模拟器");
				state.root = overlay;
				const panel = document.createElement("section");
				panel.setAttribute("data-dsh-nintendo-panel", "");
				const header = document.createElement("header");
				header.setAttribute("data-dsh-nintendo-header", "");
				const title = document.createElement("span");
				title.setAttribute("data-dsh-nintendo-title", "");
				title.textContent = "🕹️ NES 模拟器";
				const romEl = document.createElement("span");
				romEl.setAttribute("data-dsh-nintendo-rom", "");
				const closeBtn = document.createElement("button");
				closeBtn.type = "button";
				closeBtn.setAttribute("data-dsh-nintendo-close", "");
				closeBtn.setAttribute("aria-label", "隐藏");
				closeBtn.textContent = "✕";
				closeBtn.addEventListener("click", hide);
				header.append(title, romEl, closeBtn);
				const screen = document.createElement("div");
				screen.setAttribute("data-dsh-nintendo-screen", "");
				state.screen = screen;
				const empty = document.createElement("div");
				empty.setAttribute("data-dsh-nintendo-empty", "");
				empty.innerHTML = "拖拽 ROM 文件到此处加载<br>或点击下方「打开 ROM」";
				state.empty = empty;
				screen.appendChild(empty);
				const status = document.createElement("div");
				status.setAttribute("data-dsh-nintendo-status", "");
				state.status = status;
				const toolbar = document.createElement("div");
				toolbar.setAttribute("data-dsh-nintendo-toolbar", "");
				const makeButton = (id, label, onClick) => {
					const button = document.createElement("button");
					button.type = "button";
					button.setAttribute("data-dsh-nintendo-btn", "");
					button.textContent = label;
					button.addEventListener("click", onClick);
					state.buttons[id] = button;
					toolbar.appendChild(button);
				};
				makeButton("library", "🎮 游戏库", () => {
					showLibrary();
				});
				makeButton("open", "📂 打开 ROM", () => state.fileInput?.click());
				makeButton("reset", "🔁 重置", () => {
					if (state.browser) {
						state.browser.nes.reset();
						setStatus("已重置");
					}
				});
				makeButton("pause", "⏸ 暂停", () => {
					if (!state.browser) return;
					state.paused = !state.paused;
					if (state.paused) state.browser.stop();
					else state.browser.start();
					updateButtons();
				});
				makeButton("mute", "🔊 静音", () => setMuted(!state.muted));
				makeButton("save", "💾 存档", saveState);
				makeButton("load", "📥 读档", loadState);
				makeButton("shot", "📷 截图", () => {
					if (!state.browser) return;
					const img = state.browser.screenshot();
					const a = document.createElement("a");
					a.href = img.src;
					a.download = `nes-${state.romName ?? "game"}.png`;
					a.click();
				});
				const footer = document.createElement("footer");
				footer.setAttribute("data-dsh-nintendo-footer", "");
				const hints = document.createElement("span");
				hints.setAttribute("data-dsh-nintendo-hints", "");
				hints.innerHTML = "<div data-dsh-nintendo-p1><span><b>P1</b> <kbd>WASD</kbd> 移动</span><span><kbd>J</kbd> A</span><span><kbd>K</kbd> B</span><span><kbd>Enter</kbd> Start</span><span><kbd>右Shift</kbd> Select</span></div><div data-dsh-nintendo-p2><span><b>P2</b> <kbd>↑↓←→</kbd> 移动</span><span><kbd>1</kbd> A</span><span><kbd>2</kbd> B</span><span><kbd>3</kbd> Start</span><span><kbd>4</kbd> Select</span></div>";
				const controls = document.createElement("span");
				controls.setAttribute("data-dsh-nintendo-controls", "");
				const shortcutBtn = document.createElement("button");
				shortcutBtn.type = "button";
				shortcutBtn.setAttribute("data-dsh-nintendo-shortcut", "");
				shortcutBtn.setAttribute("aria-label", "设置开关快捷键");
				const resetShortcut = document.createElement("button");
				resetShortcut.type = "button";
				resetShortcut.setAttribute("data-dsh-nintendo-shortcut-reset", "");
				resetShortcut.setAttribute("aria-label", "恢复默认快捷键");
				resetShortcut.textContent = "恢复默认";
				controls.append(shortcutBtn, resetShortcut);
				footer.append(hints, controls);
				const fileInput = document.createElement("input");
				fileInput.type = "file";
				fileInput.accept = ".nes,.unf,.fds";
				fileInput.style.display = "none";
				state.fileInput = fileInput;
				fileInput.addEventListener("change", () => {
					const file = fileInput.files?.[0];
					if (!file) return;
					file.arrayBuffer().then((buffer) => {
						loadRom(new Uint8Array(buffer), file.name);
						fileInput.value = "";
					}).catch((error) => {
						setStatus(`读取文件失败：${error.message}`);
					});
				});
				overlay.appendChild(panel);
				panel.append(header, screen, status, toolbar, footer, fileInput);
				body.appendChild(overlay);
				overlay.addEventListener("keydown", (event) => {
					if (event.key === "Escape") {
						event.preventDefault();
						event.stopPropagation();
						if (state.library) closeLibrary();
						else hide();
					}
				});
				const onDragOver = (event) => {
					event.preventDefault();
					overlay.classList.add("dsh-nintendo-drag");
				};
				const onDragLeave = () => {
					overlay.classList.remove("dsh-nintendo-drag");
				};
				const onDrop = (event) => {
					event.preventDefault();
					overlay.classList.remove("dsh-nintendo-drag");
					const file = event.dataTransfer?.files?.[0];
					if (!file) return;
					file.arrayBuffer().then((buffer) => {
						loadRom(new Uint8Array(buffer), file.name);
					}).catch((error) => {
						setStatus(`读取文件失败：${error.message}`);
					});
				};
				overlay.addEventListener("dragover", onDragOver);
				overlay.addEventListener("dragleave", onDragLeave);
				overlay.addEventListener("drop", onDrop);
				overlay.addEventListener("mousedown", (event) => {
					if (event.target === overlay) hide();
				});
				const onResize = () => {
					state.browser?.fitInParent();
				};
				state.resizeHandler = onResize;
				window.addEventListener("resize", onResize);
				shortcutBtn.addEventListener("click", () => {
					state.recording = true;
					renderShortcut();
					shortcutBtn.focus({ preventScroll: true });
				});
				shortcutBtn.addEventListener("keydown", (event) => {
					event.preventDefault();
					event.stopPropagation();
					if (event.key === "Escape") {
						state.recording = false;
						renderShortcut();
						return;
					}
					const next = shortcutFromEvent(event);
					if (next === void 0) return;
					saveShortcut(next);
					state.recording = false;
					renderShortcut();
				});
				resetShortcut.addEventListener("click", () => {
					saveShortcut(void 0);
					state.recording = false;
					renderShortcut();
				});
				renderShortcut();
				updateButtons();
				if (state.lastRomBytes && state.lastRomName) loadRom(state.lastRomBytes, state.lastRomName);
				else {
					setStatus("拖拽 ROM 到这里，或点击「打开 ROM」加载游戏");
					tryLoadHostRom();
				}
			};
			const pollStatus = async () => {
				try {
					const res = await fetch("/nes/status");
					if (!res.ok) return;
					const data = await res.json();
					const rom = data?.rom;
					const autoOpenEnabled = data?.autoOpen !== false;
					const updatedAt = rom?.updatedAt ?? 0;
					if (!state.statusInitialized) {
						state.statusInitialized = true;
						state.lastUpdatedAt = updatedAt;
						return;
					}
					if (!rom || updatedAt === state.lastUpdatedAt) return;
					state.lastUpdatedAt = updatedAt;
					if (!autoOpenEnabled && (state.root === void 0 || state.hidden)) return;
					const romRes = await fetch("/nes/rom");
					if (!romRes.ok) return;
					const bytes = new Uint8Array(await romRes.arrayBuffer());
					if (state.root === void 0 || state.hidden) {
						state.lastRomBytes = void 0;
						state.lastRomName = void 0;
						open();
					}
					loadRom(bytes, rom.name ?? "unknown");
				} catch {}
			};
			const pollTimer = window.setInterval(() => {
				pollStatus();
			}, 1500);
			const onGlobalShortcut = (event) => {
				if (state.recording) return;
				if (!isShortcutMatch(event, state.shortcut)) return;
				event.preventDefault();
				event.stopPropagation();
				if (state.root === void 0 || state.hidden) open();
				else hide();
			};
			window.addEventListener("keydown", onGlobalShortcut, true);
			const handleGameKeyDown = (event) => {
				if (state.root === void 0 || state.hidden || state.browser === void 0) return;
				const mapping = GAME_KEYS[event.code];
				if (!mapping) return;
				event.preventDefault();
				state.browser.nes.buttonDown(mapping[0], mapping[1]);
			};
			const handleGameKeyUp = (event) => {
				if (state.root === void 0 || state.hidden || state.browser === void 0) return;
				const mapping = GAME_KEYS[event.code];
				if (!mapping) return;
				event.preventDefault();
				state.browser.nes.buttonUp(mapping[0], mapping[1]);
			};
			document.addEventListener("keydown", handleGameKeyDown);
			document.addEventListener("keyup", handleGameKeyUp);
			const dispose = () => {
				window.clearInterval(pollTimer);
				window.removeEventListener("keydown", onGlobalShortcut, true);
				document.removeEventListener("keydown", handleGameKeyDown);
				document.removeEventListener("keyup", handleGameKeyUp);
				close();
				if (ownsStyle) document.getElementById(STYLE_ID)?.remove();
			};
			return dispose;
		}
		//#endregion
		exports.apply = apply;
		exports.name = name;
		return module.exports;
	}
});
