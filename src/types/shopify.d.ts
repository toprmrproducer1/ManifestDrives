/* eslint-disable @typescript-eslint/no-explicit-any */
import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      'shopify-store': any;
      'shopify-cart': any;
      'shopify-context': any;
      'shopify-variant-selector': any;
      'shopify-money': any;
      'shopify-media': any;
      'shopify-data': any;
      'shopify-list-context': any;
    }
  }
}


