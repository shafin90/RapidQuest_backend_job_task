const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Line Items Schema
const LineItemSchema = new Schema({
    id: Schema.Types.Long,
    variant_id: Schema.Types.Long,
    title: String,
    quantity: Number,
    sku: String,
    variant_title: String,
    vendor: String,
    fulfillment_service: String,
    product_id: Schema.Types.Long,
    requires_shipping: Boolean,
    taxable: Boolean,
    gift_card: Boolean,
    name: String,
    variant_inventory_management: String,
    properties: Array,
    product_exists: Boolean,
    fulfillable_quantity: Number,
    grams: Number,
    price: Number,
    total_discount: String,
    fulfillment_status: String,
    price_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
        presentment_money: {
            amount: String,
            currency_code: String,
        }
    },
    total_discount_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
        presentment_money: {
            amount: String,
            currency_code: String,
        }
    },
    discount_allocations: Array,
    duties: Array,
    admin_graphql_api_id: String,
});

// Address Schema
const AddressSchema = new Schema({
    id: Schema.Types.Long,
    customer_id: Schema.Types.Long,
    first_name: String,
    last_name: String,
    company: String,
    address1: String,
    address2: String,
    city: String,
    province: String,
    country: String,
    zip: String,
    phone: String,
    name: String,
    province_code: String,
    country_code: String,
    country_name: String,
    default: Boolean,
});

// Customer Schema
const CustomerSchema = new Schema({
    id: Schema.Types.Long,
    email: String,
    created_at: Date,
    updated_at: Date,
    first_name: String,
    last_name: String,
    orders_count: Number,
    state: String,
    total_spent: String,
    last_order_id: Schema.Types.Long,
    note: String,
    verified_email: Boolean,
    multipass_identifier: String,
    tax_exempt: Boolean,
    phone: String,
    tags: String,
    last_order_name: String,
    currency: String,
    marketing_opt_in_level: String,
    tax_exemptions: Array,
    admin_graphql_api_id: String,
    default_address: AddressSchema,
});

// Main Order Schema
const OrderSchema = new Schema({
    id: Schema.Types.Long,
    email: String,
    closed_at: Date,
    created_at: Date,
    updated_at: Date,
    number: Number,
    note: String,
    token: String,
    gateway: String,
    test: Boolean,
    total_price: String,
    subtotal_price: String,
    total_weight: Number,
    total_tax: String,
    taxes_included: Boolean,
    currency: String,
    financial_status: String,
    confirmed: Boolean,
    total_discounts: String,
    buyer_accepts_marketing: Boolean,
    name: String,
    referring_site: String,
    landing_site: String,
    cancelled_at: Date,
    cancel_reason: String,
    reference: String,
    user_id: Schema.Types.Long,
    location_id: Schema.Types.Long,
    source_identifier: String,
    source_url: String,
    device_id: String,
    phone: String,
    customer_locale: String,
    app_id: Number,
    browser_ip: String,
    landing_site_ref: String,
    order_number: Schema.Types.Long,
    discount_applications: Array,
    discount_codes: Array,
    note_attributes: Array,
    payment_gateway_names: [String],
    processing_method: String,
    source_name: String,
    fulfillment_status: String,
    tax_lines: Array,
    tags: String,
    contact_email: String,
    order_status_url: String,
    presentment_currency: String,
    total_line_items_price_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
        presentment_money: {
            amount: String,
            currency_code: String,
        }
    },
    total_discounts_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
        presentment_money: {
            amount: String,
            currency_code: String,
        }
    },
    total_shipping_price_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
        presentment_money: {
            amount: String,
            currency_code: String,
        }
    },
    subtotal_price_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
        presentment_money: {
            amount: String,
            currency_code: String,
        }
    },
    total_price_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
        presentment_money: {
            amount: String,
            currency_code: String,
        }
    },
    total_tax_set: {
        shop_money: {
            amount: String,
            currency_code: String,
        },
        presentment_money: {
            amount: String,
            currency_code: String,
        }
    },
    line_items: [LineItemSchema],
    shipping_lines: Array,
    billing_address: AddressSchema,
    shipping_address: AddressSchema,
    fulfillments: Array,
    client_details: Schema.Types.Mixed,
    refunds: Array,
    customer: CustomerSchema,
    total_line_items_price: String,
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
