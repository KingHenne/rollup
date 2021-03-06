import ReplaceableInitializationVariable from './ReplaceableInitializationVariable';
import Identifier from '../nodes/Identifier';

export default class ParameterVariable extends ReplaceableInitializationVariable {
	constructor (identifier: Identifier) {
		super(identifier.name, identifier);
	}

	getName () {
		return this.name;
	}
}
