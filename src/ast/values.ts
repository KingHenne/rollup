import { ExpressionEntity } from './nodes/shared/Expression';

export const UNKNOWN_VALUE = { toString: () => '[[UNKNOWN]]' };

export const UNKNOWN_EXPRESSION: ExpressionEntity = {
	reassignPath: () => {},
	forEachReturnExpressionWhenCalledAtPath: () => {},
	getValue: () => UNKNOWN_VALUE,
	hasEffectsWhenAccessedAtPath: path => path.length > 0,
	hasEffectsWhenAssignedAtPath: path => path.length > 0,
	hasEffectsWhenCalledAtPath: () => true,
	someReturnExpressionWhenCalledAtPath: () => true,
	toString: () => '[[UNKNOWN]]'
};
