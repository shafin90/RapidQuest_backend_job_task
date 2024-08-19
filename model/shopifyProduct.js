const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Option Schema
const OptionSchema = new Schema({
    id: Schema.Types.Long,
    product_id: Schema.Types.Long,
    name: String,
    position: Number,
    values: [String],
});

// Variant Schema
const VariantSchema = new Schema({
    id: Schema.Types.Long,
    product_id: Schema.Types.Long,
    title: String,
    price: Number,
    sku: String,
    position: Number,
    inventory_policy: String,
    compare_at_price: Schema.Types.Mixed,
    fulfillment_service: String,
    inventory_management: Schema.Types.Mixed,
    option1: String,
    option2: Schema.Types.Mixed,
    option3: Schema.Types.Mixed,
    created_at: Date,
    updated_at: Date,
    taxable: Boolean,
    barcode: Schema.Types.Mixed,
    grams: Number,
    weight: Number,
    weight_unit: String,
    inventory_item_id: Schema.Types.Long,
    inventory_quantity: Number,
    old_inventory_quantity: Number,
    requires_shipping: Boolean,
    admin_graphql_api_id: String,
    image_id: Schema.Types.Mixed,
});

// Product Schema
const ProductSchema = new Schema({
    _id: Schema.Types.Long,
    admin_graphql_api_id: String,
    body_html: Schema.Types.Mixed,
    created_at: Date,
    handle: String,
    id: Schema.Types.Long,
    image: Schema.Types.Mixed,
    images: [Schema.Types.Mixed],
    options: [OptionSchema],
    product_type: String,
    published_at: Schema.Types.Mixed,
    published_scope: String,
    status: String,
    tags: String,
    template_suffix: Schema.Types.Mixed,
    title: String,
    updated_at: Date,
    variants: [VariantSchema],
    vendor: String,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
