// This code is auto-generated by Segment Typewriter. Do not edit.
#ifndef SEGKicksAppAnalytics_h
#define SEGKicksAppAnalytics_h

#import <Foundation/Foundation.h>
#import <Analytics/SEGAnalytics.h>

#pragma mark - Class Declarations

@class SEGOrderCompleted;
@class SEGOrderCompletedBuilder;
@class SEGProduct;
@class SEGProductBuilder;
@class SEGKicksAppAnalytics;

NS_ASSUME_NONNULL_BEGIN

@interface SEGOrderCompleted : NSObject
/// Store or affiliation from which this transaction occurred (e.g. Google Store)
@property (nonatomic, nullable, copy) NSString *affiliation;
/// Checkout ID
@property (nonatomic, nullable, copy) NSString *checkoutID;
/// Transaction coupon redeemed with the transaction
@property (nonatomic, nullable, copy) NSString *coupon;
/// Currency code associated with the transaction
@property (nonatomic, nullable, copy) NSString *currency;
/// Total discount associated with the transaction
@property (nonatomic, nullable, assign) NSNumber *discount;
/// Order/transaction ID
@property (nonatomic, copy) NSString *orderID;
/// Products in the order
@property (nonatomic, nullable, copy) NSArray<SEGProduct *> *products;
/// Revenue associated with the transaction (excluding shipping and tax)
@property (nonatomic, nullable, assign) NSNumber *revenue;
/// Shipping cost associated with the transaction
@property (nonatomic, nullable, assign) NSNumber *shipping;
/// Total tax associated with the transaction
@property (nonatomic, nullable, assign) NSNumber *tax;
/// Revenue with discounts and coupons added in. Note that our Google Analytics Ecommerce
/// destination accepts total or revenue, but not both. For better flexibility and total
/// control over tracking, we let you decide how to calculate how coupons and discounts are
/// applied
@property (nonatomic, nullable, assign) NSNumber *total;
@end

typedef void (^ SEGOrderCompletedBuilderBlock)(SEGOrderCompletedBuilder *);
@interface SEGOrderCompletedBuilder : NSObject
+ (SEGOrderCompleted *)initWithBlock:(SEGOrderCompletedBuilderBlock)block;
/// Store or affiliation from which this transaction occurred (e.g. Google Store)
@property (nonatomic, nullable, copy) NSString *affiliation;
/// Checkout ID
@property (nonatomic, nullable, copy) NSString *checkoutID;
/// Transaction coupon redeemed with the transaction
@property (nonatomic, nullable, copy) NSString *coupon;
/// Currency code associated with the transaction
@property (nonatomic, nullable, copy) NSString *currency;
/// Total discount associated with the transaction
@property (nonatomic, nullable, assign) NSNumber *discount;
/// Order/transaction ID
@property (nonatomic, copy) NSString *orderID;
/// Products in the order
@property (nonatomic, nullable, copy) NSArray<SEGProduct *> *products;
/// Revenue associated with the transaction (excluding shipping and tax)
@property (nonatomic, nullable, assign) NSNumber *revenue;
/// Shipping cost associated with the transaction
@property (nonatomic, nullable, assign) NSNumber *shipping;
/// Total tax associated with the transaction
@property (nonatomic, nullable, assign) NSNumber *tax;
/// Revenue with discounts and coupons added in. Note that our Google Analytics Ecommerce
/// destination accepts total or revenue, but not both. For better flexibility and total
/// control over tracking, we let you decide how to calculate how coupons and discounts are
/// applied
@property (nonatomic, nullable, assign) NSNumber *total;
@end

@interface SEGProduct : NSObject
/// Brand associated with the product
@property (nonatomic, nullable, copy) NSString *brand;
/// Product category being viewed
@property (nonatomic, nullable, copy) NSString *category;
/// Coupon code associated with a product (e.g MAY_DEALS_3)
@property (nonatomic, nullable, copy) NSString *coupon;
/// Image url of the product
@property (nonatomic, nullable, copy) NSString *imageURL;
/// Name of the product being viewed
@property (nonatomic, nullable, copy) NSString *name;
/// Position in the product list (ex. 3)
@property (nonatomic, nullable, assign) NSNumber *position;
/// Price of the product being viewed
@property (nonatomic, nullable, assign) NSNumber *price;
/// Database id of the product being viewed
@property (nonatomic, nullable, copy) NSString *productID;
/// Quantity of a product
@property (nonatomic, nullable, assign) NSNumber *quantity;
/// Sku of the product being viewed
@property (nonatomic, nullable, copy) NSString *sku;
/// URL of the product page
@property (nonatomic, nullable, copy) NSString *url;
/// Variant of the product (e.g. Black)
@property (nonatomic, nullable, copy) NSString *variant;
@end

typedef void (^ SEGProductBuilderBlock)(SEGProductBuilder *);
@interface SEGProductBuilder : NSObject
+ (SEGProduct *)initWithBlock:(SEGProductBuilderBlock)block;
/// Brand associated with the product
@property (nonatomic, nullable, copy) NSString *brand;
/// Product category being viewed
@property (nonatomic, nullable, copy) NSString *category;
/// Coupon code associated with a product (e.g MAY_DEALS_3)
@property (nonatomic, nullable, copy) NSString *coupon;
/// Image url of the product
@property (nonatomic, nullable, copy) NSString *imageURL;
/// Name of the product being viewed
@property (nonatomic, nullable, copy) NSString *name;
/// Position in the product list (ex. 3)
@property (nonatomic, nullable, assign) NSNumber *position;
/// Price of the product being viewed
@property (nonatomic, nullable, assign) NSNumber *price;
/// Database id of the product being viewed
@property (nonatomic, nullable, copy) NSString *productID;
/// Quantity of a product
@property (nonatomic, nullable, assign) NSNumber *quantity;
/// Sku of the product being viewed
@property (nonatomic, nullable, copy) NSString *sku;
/// URL of the product page
@property (nonatomic, nullable, copy) NSString *url;
/// Variant of the product (e.g. Black)
@property (nonatomic, nullable, copy) NSString *variant;
@end

@interface SEGKicksAppAnalytics : NSObject
- (instancetype)initWithAnalytics:(SEGAnalytics *)analytics;

- (void)orderCompleted:(SEGOrderCompleted *)props;
- (void)orderCompleted:(SEGOrderCompleted *)props withOptions:(NSDictionary<NSString *, id> *_Nullable)options;
@end

NS_ASSUME_NONNULL_END

#endif /* SEGKicksAppAnalytics_h */