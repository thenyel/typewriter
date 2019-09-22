/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

#import "SEGTypewriterAnalytics.h"
#import "SEGTypewriterUtils.h"

@implementation SEGTypewriterAnalytics

+ (void)I42TerribleEventName3
{
    [SEGTypewriterAnalytics I42TerribleEventName3WithOptions:@{}];
}

+ (void)I42TerribleEventName3WithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"42_--terrible==\\\"event'++name~!3" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)analyticsInstanceMissing
{
    [SEGTypewriterAnalytics analyticsInstanceMissingWithOptions:@{}];
}

+ (void)analyticsInstanceMissingWithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"Analytics Instance Missing" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)analyticsInstanceMissingThrewError
{
    [SEGTypewriterAnalytics analyticsInstanceMissingThrewErrorWithOptions:@{}];
}

+ (void)analyticsInstanceMissingThrewErrorWithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"Analytics Instance Missing Threw Error" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)customViolationHandlerWithRegexProperty:(nonnull NSString *)regexProperty
{
    [SEGTypewriterAnalytics customViolationHandlerWithRegexProperty:regexProperty options:@{}];
}

+ (void)customViolationHandlerWithRegexProperty:(nonnull NSString *)regexProperty
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (regexProperty != nil) {
      properties[@"regex property"] = regexProperty;
    }

    [[SEGAnalytics sharedAnalytics] track:@"Custom Violation Handler" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)customViolationHandlerCalled
{
    [SEGTypewriterAnalytics customViolationHandlerCalledWithOptions:@{}];
}

+ (void)customViolationHandlerCalledWithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"Custom Violation Handler Called" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)defaultViolationHandlerWithRegexProperty:(nonnull NSString *)regexProperty
{
    [SEGTypewriterAnalytics defaultViolationHandlerWithRegexProperty:regexProperty options:@{}];
}

+ (void)defaultViolationHandlerWithRegexProperty:(nonnull NSString *)regexProperty
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (regexProperty != nil) {
      properties[@"regex property"] = regexProperty;
    }

    [[SEGAnalytics sharedAnalytics] track:@"Default Violation Handler" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)defaultViolationHandlerCalled
{
    [SEGTypewriterAnalytics defaultViolationHandlerCalledWithOptions:@{}];
}

+ (void)defaultViolationHandlerCalledWithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"Default Violation Handler Called" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)emptyEvent
{
    [SEGTypewriterAnalytics emptyEventWithOptions:@{}];
}

+ (void)emptyEventWithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"Empty Event" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)eventCollided
{
    [SEGTypewriterAnalytics eventCollidedWithOptions:@{}];
}

+ (void)eventCollidedWithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"Event Collided" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)everyNullableOptionalTypeWithOptionalBoolean:(nullable BOOL *)optionalBoolean
optionalInt:(nullable NSInteger *)optionalInt
optionalNumber:(nullable NSNumber *)optionalNumber
optionalObject:(nullable SERIALIZABLE_DICT)optionalObject
optionalString:(nullable NSString *)optionalString
optionalStringWithRegex:(nullable NSString *)optionalStringWithRegex
optionalAny:(nullable id)optionalAny
optionalArray:(nullable NSArray<id> *)optionalArray
{
    [SEGTypewriterAnalytics everyNullableOptionalTypeWithOptionalBoolean:optionalBoolean optionalInt:optionalInt optionalNumber:optionalNumber optionalObject:optionalObject optionalString:optionalString optionalStringWithRegex:optionalStringWithRegex optionalAny:optionalAny optionalArray:optionalArray options:@{}];
}

+ (void)everyNullableOptionalTypeWithOptionalBoolean:(nullable BOOL *)optionalBoolean
optionalInt:(nullable NSInteger *)optionalInt
optionalNumber:(nullable NSNumber *)optionalNumber
optionalObject:(nullable SERIALIZABLE_DICT)optionalObject
optionalString:(nullable NSString *)optionalString
optionalStringWithRegex:(nullable NSString *)optionalStringWithRegex
optionalAny:(nullable id)optionalAny
optionalArray:(nullable NSArray<id> *)optionalArray
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    properties[@"optional boolean"] = optionalBoolean == nil ? [NSNull null] : [NSNumber numberWithBool:*optionalBoolean];
    properties[@"optional int"] = optionalInt == nil ? [NSNull null] : [NSNumber numberWithInteger:*optionalInt];
    properties[@"optional number"] = optionalNumber == nil ? [NSNull null] : optionalNumber;
    properties[@"optional object"] = optionalObject == nil ? [NSNull null] : optionalObject;
    properties[@"optional string"] = optionalString == nil ? [NSNull null] : optionalString;
    properties[@"optional string with regex"] = optionalStringWithRegex == nil ? [NSNull null] : optionalStringWithRegex;
    properties[@"optional any"] = optionalAny == nil ? [NSNull null] : optionalAny;
    properties[@"optional array"] = optionalArray == nil ? [NSNull null] : [SEGTypewriterUtils toSerializableArray:optionalArray];

    [[SEGAnalytics sharedAnalytics] track:@"Every Nullable Optional Type" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)everyNullableRequiredTypeWithRequiredStringWithRegex:(nullable NSString *)requiredStringWithRegex
requiredAny:(nullable id)requiredAny
requiredArray:(nullable NSArray<id> *)requiredArray
requiredBoolean:(nullable BOOL *)requiredBoolean
requiredInt:(nullable NSInteger *)requiredInt
requiredNumber:(nullable NSNumber *)requiredNumber
requiredObject:(nullable SERIALIZABLE_DICT)requiredObject
requiredString:(nullable NSString *)requiredString
{
    [SEGTypewriterAnalytics everyNullableRequiredTypeWithRequiredStringWithRegex:requiredStringWithRegex requiredAny:requiredAny requiredArray:requiredArray requiredBoolean:requiredBoolean requiredInt:requiredInt requiredNumber:requiredNumber requiredObject:requiredObject requiredString:requiredString options:@{}];
}

+ (void)everyNullableRequiredTypeWithRequiredStringWithRegex:(nullable NSString *)requiredStringWithRegex
requiredAny:(nullable id)requiredAny
requiredArray:(nullable NSArray<id> *)requiredArray
requiredBoolean:(nullable BOOL *)requiredBoolean
requiredInt:(nullable NSInteger *)requiredInt
requiredNumber:(nullable NSNumber *)requiredNumber
requiredObject:(nullable SERIALIZABLE_DICT)requiredObject
requiredString:(nullable NSString *)requiredString
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    properties[@"required string with regex"] = requiredStringWithRegex == nil ? [NSNull null] : requiredStringWithRegex;
    properties[@"required any"] = requiredAny == nil ? [NSNull null] : requiredAny;
    properties[@"required array"] = requiredArray == nil ? [NSNull null] : [SEGTypewriterUtils toSerializableArray:requiredArray];
    properties[@"required boolean"] = requiredBoolean == nil ? [NSNull null] : [NSNumber numberWithBool:*requiredBoolean];
    properties[@"required int"] = requiredInt == nil ? [NSNull null] : [NSNumber numberWithInteger:*requiredInt];
    properties[@"required number"] = requiredNumber == nil ? [NSNull null] : requiredNumber;
    properties[@"required object"] = requiredObject == nil ? [NSNull null] : requiredObject;
    properties[@"required string"] = requiredString == nil ? [NSNull null] : requiredString;

    [[SEGAnalytics sharedAnalytics] track:@"Every Nullable Required Type" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)everyOptionalTypeWithOptionalBoolean:(nullable BOOL *)optionalBoolean
optionalInt:(nullable NSInteger *)optionalInt
optionalNumber:(nullable NSNumber *)optionalNumber
optionalObject:(nullable SERIALIZABLE_DICT)optionalObject
optionalString:(nullable NSString *)optionalString
optionalStringWithRegex:(nullable NSString *)optionalStringWithRegex
optionalAny:(nullable id)optionalAny
optionalArray:(nullable NSArray<id> *)optionalArray
{
    [SEGTypewriterAnalytics everyOptionalTypeWithOptionalBoolean:optionalBoolean optionalInt:optionalInt optionalNumber:optionalNumber optionalObject:optionalObject optionalString:optionalString optionalStringWithRegex:optionalStringWithRegex optionalAny:optionalAny optionalArray:optionalArray options:@{}];
}

+ (void)everyOptionalTypeWithOptionalBoolean:(nullable BOOL *)optionalBoolean
optionalInt:(nullable NSInteger *)optionalInt
optionalNumber:(nullable NSNumber *)optionalNumber
optionalObject:(nullable SERIALIZABLE_DICT)optionalObject
optionalString:(nullable NSString *)optionalString
optionalStringWithRegex:(nullable NSString *)optionalStringWithRegex
optionalAny:(nullable id)optionalAny
optionalArray:(nullable NSArray<id> *)optionalArray
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (optionalBoolean != nil) {
      properties[@"optional boolean"] = [NSNumber numberWithBool:*optionalBoolean];
    }
    if (optionalInt != nil) {
      properties[@"optional int"] = [NSNumber numberWithInteger:*optionalInt];
    }
    if (optionalNumber != nil) {
      properties[@"optional number"] = optionalNumber;
    }
    if (optionalObject != nil) {
      properties[@"optional object"] = optionalObject;
    }
    if (optionalString != nil) {
      properties[@"optional string"] = optionalString;
    }
    if (optionalStringWithRegex != nil) {
      properties[@"optional string with regex"] = optionalStringWithRegex;
    }
    properties[@"optional any"] = optionalAny == nil ? [NSNull null] : optionalAny;
    if (optionalArray != nil) {
      properties[@"optional array"] = [SEGTypewriterUtils toSerializableArray:optionalArray];
    }

    [[SEGAnalytics sharedAnalytics] track:@"Every Optional Type" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)everyRequiredTypeWithRequiredBoolean:(BOOL)requiredBoolean
requiredInt:(NSInteger)requiredInt
requiredNumber:(nonnull NSNumber *)requiredNumber
requiredObject:(nonnull SERIALIZABLE_DICT)requiredObject
requiredString:(nonnull NSString *)requiredString
requiredStringWithRegex:(nonnull NSString *)requiredStringWithRegex
requiredAny:(nullable id)requiredAny
requiredArray:(nonnull NSArray<id> *)requiredArray
{
    [SEGTypewriterAnalytics everyRequiredTypeWithRequiredBoolean:requiredBoolean requiredInt:requiredInt requiredNumber:requiredNumber requiredObject:requiredObject requiredString:requiredString requiredStringWithRegex:requiredStringWithRegex requiredAny:requiredAny requiredArray:requiredArray options:@{}];
}

+ (void)everyRequiredTypeWithRequiredBoolean:(BOOL)requiredBoolean
requiredInt:(NSInteger)requiredInt
requiredNumber:(nonnull NSNumber *)requiredNumber
requiredObject:(nonnull SERIALIZABLE_DICT)requiredObject
requiredString:(nonnull NSString *)requiredString
requiredStringWithRegex:(nonnull NSString *)requiredStringWithRegex
requiredAny:(nullable id)requiredAny
requiredArray:(nonnull NSArray<id> *)requiredArray
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    properties[@"required boolean"] = [NSNumber numberWithBool:requiredBoolean];
    properties[@"required int"] = [NSNumber numberWithInteger:requiredInt];
    if (requiredNumber != nil) {
      properties[@"required number"] = requiredNumber;
    }
    if (requiredObject != nil) {
      properties[@"required object"] = requiredObject;
    }
    if (requiredString != nil) {
      properties[@"required string"] = requiredString;
    }
    if (requiredStringWithRegex != nil) {
      properties[@"required string with regex"] = requiredStringWithRegex;
    }
    properties[@"required any"] = requiredAny == nil ? [NSNull null] : requiredAny;
    if (requiredArray != nil) {
      properties[@"required array"] = [SEGTypewriterUtils toSerializableArray:requiredArray];
    }

    [[SEGAnalytics sharedAnalytics] track:@"Every Required Type" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)nestedArraysWithUniverseCharacters:(nonnull NSArray<NSArray<SEGUniverseCharactersItemItem *> *> *)universeCharacters
{
    [SEGTypewriterAnalytics nestedArraysWithUniverseCharacters:universeCharacters options:@{}];
}

+ (void)nestedArraysWithUniverseCharacters:(nonnull NSArray<NSArray<SEGUniverseCharactersItemItem *> *> *)universeCharacters
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (universeCharacters != nil) {
      properties[@"universeCharacters"] = [SEGTypewriterUtils toSerializableArray:universeCharacters];
    }

    [[SEGAnalytics sharedAnalytics] track:@"Nested Arrays" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)nestedObjectsWithGarage:(nonnull SEGGarage *)garage
{
    [SEGTypewriterAnalytics nestedObjectsWithGarage:garage options:@{}];
}

+ (void)nestedObjectsWithGarage:(nonnull SEGGarage *)garage
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (garage != nil) {
      properties[@"garage"] = [garage toDictionary];
    }

    [[SEGAnalytics sharedAnalytics] track:@"Nested Objects" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)propertiesCollidedWithPropertyCollided:(nonnull NSString *)propertyCollided
propertyCollided1:(nonnull NSString *)propertyCollided1
{
    [SEGTypewriterAnalytics propertiesCollidedWithPropertyCollided:propertyCollided propertyCollided1:propertyCollided1 options:@{}];
}

+ (void)propertiesCollidedWithPropertyCollided:(nonnull NSString *)propertyCollided
propertyCollided1:(nonnull NSString *)propertyCollided1
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (propertyCollided != nil) {
      properties[@"Property Collided"] = propertyCollided;
    }
    if (propertyCollided1 != nil) {
      properties[@"property_collided"] = propertyCollided1;
    }

    [[SEGAnalytics sharedAnalytics] track:@"Properties Collided" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)propertyObjectNameCollision1WithUniverse:(nullable SEGUniverse *)universe
{
    [SEGTypewriterAnalytics propertyObjectNameCollision1WithUniverse:universe options:@{}];
}

+ (void)propertyObjectNameCollision1WithUniverse:(nullable SEGUniverse *)universe
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (universe != nil) {
      properties[@"universe"] = [universe toDictionary];
    }

    [[SEGAnalytics sharedAnalytics] track:@"Property Object Name Collision #1" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)propertyObjectNameCollision2WithUniverse:(nullable SEGUniverse1 *)universe
{
    [SEGTypewriterAnalytics propertyObjectNameCollision2WithUniverse:universe options:@{}];
}

+ (void)propertyObjectNameCollision2WithUniverse:(nullable SEGUniverse1 *)universe
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (universe != nil) {
      properties[@"universe"] = [universe toDictionary];
    }

    [[SEGAnalytics sharedAnalytics] track:@"Property Object Name Collision #2" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)propertySanitizedWithI0000TerriblePropertyName3:(nonnull NSString *)I0000TerriblePropertyName3
{
    [SEGTypewriterAnalytics propertySanitizedWithI0000TerriblePropertyName3:I0000TerriblePropertyName3 options:@{}];
}

+ (void)propertySanitizedWithI0000TerriblePropertyName3:(nonnull NSString *)I0000TerriblePropertyName3
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (I0000TerriblePropertyName3 != nil) {
      properties[@"0000---terrible-property-name~!3"] = I0000TerriblePropertyName3;
    }

    [[SEGAnalytics sharedAnalytics] track:@"Property Sanitized" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)simpleArrayTypesWithBoolean:(nullable NSArray<NSNumber *> *)boolean
integer:(nullable NSArray<NSNumber *> *)integer
nullable_:(nullable NSArray<NSString *> *)nullable_
number:(nullable NSArray<NSNumber *> *)number
object:(nullable NSArray<SEGObjectItem *> *)object
string:(nullable NSArray<NSString *> *)string
any:(nullable NSArray<id> *)any
{
    [SEGTypewriterAnalytics simpleArrayTypesWithBoolean:boolean integer:integer nullable_:nullable_ number:number object:object string:string any:any options:@{}];
}

+ (void)simpleArrayTypesWithBoolean:(nullable NSArray<NSNumber *> *)boolean
integer:(nullable NSArray<NSNumber *> *)integer
nullable_:(nullable NSArray<NSString *> *)nullable_
number:(nullable NSArray<NSNumber *> *)number
object:(nullable NSArray<SEGObjectItem *> *)object
string:(nullable NSArray<NSString *> *)string
any:(nullable NSArray<id> *)any
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    if (boolean != nil) {
      properties[@"boolean"] = [SEGTypewriterUtils toSerializableArray:boolean];
    }
    if (integer != nil) {
      properties[@"integer"] = [SEGTypewriterUtils toSerializableArray:integer];
    }
    if (nullable_ != nil) {
      properties[@"nullable"] = [SEGTypewriterUtils toSerializableArray:nullable_];
    }
    if (number != nil) {
      properties[@"number"] = [SEGTypewriterUtils toSerializableArray:number];
    }
    if (object != nil) {
      properties[@"object"] = [SEGTypewriterUtils toSerializableArray:object];
    }
    if (string != nil) {
      properties[@"string"] = [SEGTypewriterUtils toSerializableArray:string];
    }
    if (any != nil) {
      properties[@"any"] = [SEGTypewriterUtils toSerializableArray:any];
    }

    [[SEGAnalytics sharedAnalytics] track:@"Simple Array Types" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)unionTypeWithUniverseName:(nullable id)universeName
{
    [SEGTypewriterAnalytics unionTypeWithUniverseName:universeName options:@{}];
}

+ (void)unionTypeWithUniverseName:(nullable id)universeName
options:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];
    properties[@"universe_name"] = universeName == nil ? [NSNull null] : universeName;

    [[SEGAnalytics sharedAnalytics] track:@"Union Type" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)unknownEventHandlerCalled
{
    [SEGTypewriterAnalytics unknownEventHandlerCalledWithOptions:@{}];
}

+ (void)unknownEventHandlerCalledWithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"Unknown Event Handler Called" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

+ (void)eventCollided1
{
    [SEGTypewriterAnalytics eventCollided1WithOptions:@{}];
}

+ (void)eventCollided1WithOptions:(nullable SERIALIZABLE_DICT)options
{
    NSMutableDictionary *properties = [[NSMutableDictionary alloc] init];

    [[SEGAnalytics sharedAnalytics] track:@"event_collided" properties:properties options:[SEGTypewriterUtils withTypewriterContextFields:options]];
}

@end
