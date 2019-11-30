/**
 * Tags for template engines of email delivery services.
 * Tags are passing to pug compiler in "Data" option
 * and available in global variable "Tags" inside all pug templates
 *
 * For example:
 *
 * +h1(`Hello ${Tags.customer.name}! Your order ${Tags.order.name} has been delivered!`)
 */

const DeepAssign = require("object-assign-deep");

const Default = {

  order: {
    name:            "#9999",
    link:            "#order-in-shop",
    shipping_method: "DHL Express",
    payment_method:  "VISA *-1234",
    order_price:     "$1,308",
    shipping_price:  "$249",
    total_price:     "$1,557"
  },

  customer: {
    first_name:       "John",
    last_name:        "Doe",
    email:            "john@doe.com",
    shipping_address: "Steve Shipper, 123 Shipping Street Shippington, Kentucky, K2P0S0 United States",
    billing_address:  "Bob Biller, 123 Billing Street, Billtown, Kentucky K2P0S0, United States"
  },

  company: {
    name:      "AnotherShop",
    logo:      "logo.png",
    logowhite: "logo-white.png",
    logow:     "116",
    email:     "hello@greatsimple.io"
  },

  message: {
    web: "#web",
    unsubscribe: "#unsubscribe",
    settings: "#profile-settings",
    date: "2017"
  }
};





const Mailchimp = {

  customer: {
    first_name: "*|FNAME|*",
    last_name:  "*|LNAME|*",
    email:      "*|EMAIL|*"
  },

  company: {
    name:  "*|USER:COMPANY|*",
    email: "*|LIST:EMAIL|*",
  },

  message: {
    web:         "*|ARCHIVE|*",
    unsubscribe: "*|UNSUB|*",
    settings: "*|UPDATE_PROFILE|*",
    date: "*|DATE:Y|*"
  }

};



module.exports = {
  mailchimp: DeepAssign({}, Default, Mailchimp),
  html: Default
};
