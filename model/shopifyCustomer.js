const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

// Email Marketing Consent Schema
const EmailMarketingConsentSchema = new Schema({
  state: String,
  opt_in_level: String,
  consent_updated_at: Date,
});

// Customer Schema
const CustomerSchema = new Schema({
  _id: Schema.Types.Long,
  id: Schema.Types.Long,
  email: String,
  first_name: String,
  last_name: String,
  created_at: Date,
  updated_at: Date,
  state: String,
  verified_email: Boolean,
  currency: String,
  phone: String,
  note: String,
  orders_count: Number,
  total_spent: String,
  last_order_id: Schema.Types.Long,
  last_order_name: String,
  multipass_identifier: String,
  tax_exempt: Boolean,
  tax_exemptions: Array,
  tags: String,
  email_marketing_consent: EmailMarketingConsentSchema,
  sms_marketing_consent: Schema.Types.Mixed,
  default_address: AddressSchema,
  addresses: [AddressSchema],
  admin_graphql_api_id: String,
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
