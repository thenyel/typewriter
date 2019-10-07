/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */
let analytics = () => {
	return window.analytics
}
/**
 * Updates the run-time configuration of this Typewriter client.
 *
 * @param {TypewriterOptions} options - the options to upsert
 *
 * @typedef {Object} TypewriterOptions
 * @property {Segment.AnalyticsJS} [analytics] - Underlying analytics instance where analytics
 * 		calls are forwarded on to. Defaults to window.analytics.
 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
 * 		will be logged to stderr.
 */
export function setTypewriterOptions(options) {
	analytics = options.analytics
		? () => options.analytics || window.analytics
		: analytics
}
/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext(message = {}) {
	return {
		...message,
		context: {
			...(message.context || {}),
			typewriter: {
				language: 'javascript',
				version: '7.0.0-45',
			},
		},
	}
}
/**
 * @typedef CustomViolationHandler
 * @property {string} regex property -
 */
/**
 * @typedef DefaultViolationHandler
 * @property {string} regex property -
 */
/**
 * @typedef EveryNullableOptionalType
 * @property {any | null} [optional any] - Optional any property
 * @property {any[] | null} [optional array] - Optional array property
 * @property {boolean | null} [optional boolean] - Optional boolean property
 * @property {number | null} [optional int] - Optional integer property
 * @property {number | null} [optional number] - Optional number property
 * @property {Record<string, any> | null} [optional object] - Optional object property
 * @property {string | null} [optional string] - Optional string property
 * @property {string | null} [optional string with regex] - Optional string property with a regex conditional
 */
/**
 * @typedef EveryNullableRequiredType
 * @property {any | null} required any - Required any property
 * @property {any[] | null} required array - Required array property
 * @property {boolean | null} required boolean - Required boolean property
 * @property {number | null} required int - Required integer property
 * @property {number | null} required number - Required number property
 * @property {Record<string, any> | null} required object - Required object property
 * @property {string | null} required string - Required string property
 * @property {string | null} required string with regex - Required string property with a regex conditional
 */
/**
 * @typedef EveryOptionalType
 * @property {any | null} [optional any] - Optional any property
 * @property {any[]} [optional array] - Optional array property
 * @property {boolean} [optional boolean] - Optional boolean property
 * @property {number} [optional int] - Optional integer property
 * @property {number} [optional number] - Optional number property
 * @property {Record<string, any>} [optional object] - Optional object property
 * @property {string} [optional string] - Optional string property
 * @property {string} [optional string with regex] - Optional string property with a regex conditional
 */
/**
 * @typedef EveryRequiredType
 * @property {any | null} required any - Required any property
 * @property {any[]} required array - Required array property
 * @property {boolean} required boolean - Required boolean property
 * @property {number} required int - Required integer property
 * @property {number} required number - Required number property
 * @property {Record<string, any>} required object - Required object property
 * @property {string} required string - Required string property
 * @property {string} required string with regex - Required string property with a regex conditional
 */
/**
 * @typedef UniverseCharactersItemItem
 * @property {string} name - The character's name.
 */
/**
 * @typedef NestedArrays
 * @property {UniverseCharactersItemItem[][]} universeCharacters - All known characters from each universe.
 */
/**
 * @typedef SubterraneanLab
 * @property {any[]} [jerry\'s memories] -
 * @property {any[]} [morty\'s memories] -
 * @property {string} [summer\'s contingency plan] -
 */
/**
 * @typedef Tunnel
 * @property {SubterraneanLab} subterranean lab -
 */
/**
 * @typedef Garage
 * @property {Tunnel} tunnel -
 */
/**
 * @typedef NestedObjects
 * @property {Garage} garage -
 */
/**
 * @typedef PropertiesCollided
 * @property {string} Property Collided -
 * @property {string} property_collided -
 */
/**
 * @typedef OccupantsItem
 * @property {string} name - The name of this occupant.
 */
/**
 * @typedef Universe
 * @property {string} name - The common name of this universe.
 * @property {OccupantsItem[]} occupants - The most important occupants in this universe.
 */
/**
 * @typedef PropertyObjectNameCollision1
 * @property {Universe} [universe] -
 */
/**
 * @typedef OccupantsItem1
 * @property {string} name - The name of this occupant.
 */
/**
 * @typedef Universe1
 * @property {string} name - The common name of this universe.
 * @property {OccupantsItem1[]} occupants - The most important occupants in this universe.
 */
/**
 * @typedef PropertyObjectNameCollision2
 * @property {Universe1} [universe] -
 */
/**
 * @typedef PropertySanitized
 * @property {string} 0000---terrible-property-name~!3 -
 */
/**
 * @typedef ObjectItem
 * @property {string} [name] -
 */
/**
 * @typedef SimpleArrayTypes
 * @property {any[]} [any] -
 * @property {boolean[]} [boolean] -
 * @property {number[]} [integer] -
 * @property {string[]} [nullable] -
 * @property {number[]} [number] -
 * @property {ObjectItem[]} [object] -
 * @property {string[]} [string] -
 */
/**
 * @typedef UnionType
 * @property {string | number | null} universe_name -
 */
/**
 * Validates that clients properly sanitize event names.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function I42TerribleEventName3(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'42_--terrible==\\"event\'++name~!3',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fired before an analytics instance has been set, which should throw an error.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function analyticsInstanceMissing(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Analytics Instance Missing',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fired after a client throws an "Analytics Instance Missing" error to mark the test as successful.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function analyticsInstanceMissingThrewError(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Analytics Instance Missing Threw Error',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Custom Violation Handler' track call.
 *
 * @param {CustomViolationHandler} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function customViolationHandler(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Custom Violation Handler',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Custom Violation Handler Called' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function customViolationHandlerCalled(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Custom Violation Handler Called',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Default Violation Handler' track call.
 *
 * @param {DefaultViolationHandler} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function defaultViolationHandler(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Default Violation Handler',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Default Violation Handler Called' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function defaultViolationHandlerCalled(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Default Violation Handler Called',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Empty Event' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function emptyEvent(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Empty Event',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Event Collided' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function eventCollided(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Event Collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Nullable Optional Type' track call.
 *
 * @param {EveryNullableOptionalType} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function everyNullableOptionalType(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Every Nullable Optional Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Nullable Required Type' track call.
 *
 * @param {EveryNullableRequiredType} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function everyNullableRequiredType(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Every Nullable Required Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Optional Type' track call.
 *
 * @param {EveryOptionalType} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function everyOptionalType(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Every Optional Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Every Required Type' track call.
 *
 * @param {EveryRequiredType} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function everyRequiredType(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Every Required Type',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Nested Arrays' track call.
 *
 * @param {NestedArrays} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function nestedArrays(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Nested Arrays',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Nested Objects' track call.
 *
 * @param {NestedObjects} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function nestedObjects(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Nested Objects',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Properties Collided' track call.
 *
 * @param {PropertiesCollided} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function propertiesCollided(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Properties Collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Object Name Collision #1' track call.
 *
 * @param {PropertyObjectNameCollision1} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function propertyObjectNameCollision1(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Property Object Name Collision #1',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Object Name Collision #2' track call.
 *
 * @param {PropertyObjectNameCollision2} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function propertyObjectNameCollision2(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Property Object Name Collision #2',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Property Sanitized' track call.
 *
 * @param {PropertySanitized} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function propertySanitized(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Property Sanitized',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Simple Array Types' track call.
 *
 * @param {SimpleArrayTypes} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function simpleArrayTypes(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Simple Array Types',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'Union Type' track call.
 *
 * @param {UnionType} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function unionType(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track('Union Type', props || {}, withTypewriterContext(options), callback)
	}
}
/**
 * Fired if a client correctly handled an unknown method call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function unknownEventHandlerCalled(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'Unknown Event Handler Called',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
/**
 * Fires a 'event_collided' track call.
 *
 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function eventCollided1(props, options, callback) {
	const a = analytics()
	if (a) {
		a.track(
			'event_collided',
			props || {},
			withTypewriterContext(options),
			callback
		)
	}
}
const clientAPI = {
	/**
	 * Updates the run-time configuration of this Typewriter client.
	 *
	 * @param {TypewriterOptions} options - the options to upsert
	 *
	 * @typedef {Object} TypewriterOptions
	 * @property {Segment.AnalyticsJS} [analytics] - Underlying analytics instance where analytics
	 * 		calls are forwarded on to. Defaults to window.analytics.
	 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
	 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
	 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
	 * 		will be logged to stderr.
	 */
	setTypewriterOptions,
	/**
	 * Validates that clients properly sanitize event names.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	I42TerribleEventName3,
	/**
	 * Fired before an analytics instance has been set, which should throw an error.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	analyticsInstanceMissing,
	/**
	 * Fired after a client throws an "Analytics Instance Missing" error to mark the test as successful.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	analyticsInstanceMissingThrewError,
	/**
	 * Fires a 'Custom Violation Handler' track call.
	 *
	 * @param {CustomViolationHandler} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	customViolationHandler,
	/**
	 * Fires a 'Custom Violation Handler Called' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	customViolationHandlerCalled,
	/**
	 * Fires a 'Default Violation Handler' track call.
	 *
	 * @param {DefaultViolationHandler} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	defaultViolationHandler,
	/**
	 * Fires a 'Default Violation Handler Called' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	defaultViolationHandlerCalled,
	/**
	 * Fires a 'Empty Event' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	emptyEvent,
	/**
	 * Fires a 'Event Collided' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	eventCollided,
	/**
	 * Fires a 'Every Nullable Optional Type' track call.
	 *
	 * @param {EveryNullableOptionalType} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyNullableOptionalType,
	/**
	 * Fires a 'Every Nullable Required Type' track call.
	 *
	 * @param {EveryNullableRequiredType} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyNullableRequiredType,
	/**
	 * Fires a 'Every Optional Type' track call.
	 *
	 * @param {EveryOptionalType} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyOptionalType,
	/**
	 * Fires a 'Every Required Type' track call.
	 *
	 * @param {EveryRequiredType} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	everyRequiredType,
	/**
	 * Fires a 'Nested Arrays' track call.
	 *
	 * @param {NestedArrays} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	nestedArrays,
	/**
	 * Fires a 'Nested Objects' track call.
	 *
	 * @param {NestedObjects} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	nestedObjects,
	/**
	 * Fires a 'Properties Collided' track call.
	 *
	 * @param {PropertiesCollided} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertiesCollided,
	/**
	 * Fires a 'Property Object Name Collision #1' track call.
	 *
	 * @param {PropertyObjectNameCollision1} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertyObjectNameCollision1,
	/**
	 * Fires a 'Property Object Name Collision #2' track call.
	 *
	 * @param {PropertyObjectNameCollision2} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertyObjectNameCollision2,
	/**
	 * Fires a 'Property Sanitized' track call.
	 *
	 * @param {PropertySanitized} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	propertySanitized,
	/**
	 * Fires a 'Simple Array Types' track call.
	 *
	 * @param {SimpleArrayTypes} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	simpleArrayTypes,
	/**
	 * Fires a 'Union Type' track call.
	 *
	 * @param {UnionType} props - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	unionType,
	/**
	 * Fired if a client correctly handled an unknown method call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	unknownEventHandlerCalled,
	/**
	 * Fires a 'event_collided' track call.
	 *
	 * @param {Record<string, any>} [props] - The analytics properties that will be sent to Segment.
	 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
	 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
	 * 		call is fired.
	 */
	eventCollided1,
}
export default new Proxy(clientAPI, {
	get(target, method) {
		if (typeof method === 'string' && target.hasOwnProperty(method)) {
			return target[method]
		}
		return () => {
			console.warn(`⚠️  You made an analytics call (${String(
				method
			)}) that can't be found. Either:
    a) Re-generate your typewriter client: \`npm run typewriter\`
    b) Add it to your Tracking Plan: https://app.segment.com/TODO/tracking-plans/TODO`)
			const a = analytics()
			if (a) {
				a.track('Unknown Analytics Call Fired', {
					method,
				})
			}
		}
	},
})
