#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const static_site_1 = require("./static-site");
/**
 * This stack relies on getting the domain name from CDK context.
 * Use 'cdk synth -c domain=mystaticsite.com -c subdomain=www'
 * Or add the following to cdk.json:
 * {
 *   "context": {
 *     "domain": "mystaticsite.com",
 *     "subdomain": "www",
 *     "accountId": "1234567890",
 *   }
 * }
**/
class MyStaticSiteStack extends cdk.Stack {
    constructor(parent, name, props) {
        super(parent, name, props);
        new static_site_1.StaticSite(this, 'StaticSite', {
            domainName: this.node.tryGetContext('domain'),
            siteSubDomain: this.node.tryGetContext('subdomain'),
        });
    }
}
const app = new cdk.App();
new MyStaticSiteStack(app, 'MyStaticSite', {
    /**
     * This is required for our use of hosted-zone lookup.
     *
     * Lookups do not work at all without an explicit environment
     * specified; to use them, you must specify env.
     * @see https://docs.aws.amazon.com/cdk/latest/guide/environments.html
     */
    env: {
        account: app.node.tryGetContext('accountId'),
        /**
         * Stack must be in us-east-1, because the ACM certificate for a
         * global CloudFront distribution must be requested in us-east-1.
         */
        region: 'us-east-1',
    }
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBbUM7QUFDbkMsK0NBQTJDO0FBRTNDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNyQyxZQUFZLE1BQWUsRUFBRSxJQUFZLEVBQUUsS0FBcUI7UUFDNUQsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFM0IsSUFBSSx3QkFBVSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUM3QyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1NBQ3RELENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLElBQUksaUJBQWlCLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRTtJQUN2Qzs7Ozs7O09BTUc7SUFDSCxHQUFHLEVBQUU7UUFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzVDOzs7V0FHRztRQUNILE1BQU0sRUFBRSxXQUFXO0tBQ3RCO0NBQ0osQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IFN0YXRpY1NpdGUgfSBmcm9tICcuL3N0YXRpYy1zaXRlJztcblxuLyoqXG4gKiBUaGlzIHN0YWNrIHJlbGllcyBvbiBnZXR0aW5nIHRoZSBkb21haW4gbmFtZSBmcm9tIENESyBjb250ZXh0LlxuICogVXNlICdjZGsgc3ludGggLWMgZG9tYWluPW15c3RhdGljc2l0ZS5jb20gLWMgc3ViZG9tYWluPXd3dydcbiAqIE9yIGFkZCB0aGUgZm9sbG93aW5nIHRvIGNkay5qc29uOlxuICoge1xuICogICBcImNvbnRleHRcIjoge1xuICogICAgIFwiZG9tYWluXCI6IFwibXlzdGF0aWNzaXRlLmNvbVwiLFxuICogICAgIFwic3ViZG9tYWluXCI6IFwid3d3XCIsXG4gKiAgICAgXCJhY2NvdW50SWRcIjogXCIxMjM0NTY3ODkwXCIsXG4gKiAgIH1cbiAqIH1cbioqL1xuY2xhc3MgTXlTdGF0aWNTaXRlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogY2RrLkFwcCwgbmFtZTogc3RyaW5nLCBwcm9wczogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocGFyZW50LCBuYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgbmV3IFN0YXRpY1NpdGUodGhpcywgJ1N0YXRpY1NpdGUnLCB7XG4gICAgICAgICAgICBkb21haW5OYW1lOiB0aGlzLm5vZGUudHJ5R2V0Q29udGV4dCgnZG9tYWluJyksXG4gICAgICAgICAgICBzaXRlU3ViRG9tYWluOiB0aGlzLm5vZGUudHJ5R2V0Q29udGV4dCgnc3ViZG9tYWluJyksXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxubmV3IE15U3RhdGljU2l0ZVN0YWNrKGFwcCwgJ015U3RhdGljU2l0ZScsIHtcbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIGZvciBvdXIgdXNlIG9mIGhvc3RlZC16b25lIGxvb2t1cC5cbiAgICAgKlxuICAgICAqIExvb2t1cHMgZG8gbm90IHdvcmsgYXQgYWxsIHdpdGhvdXQgYW4gZXhwbGljaXQgZW52aXJvbm1lbnRcbiAgICAgKiBzcGVjaWZpZWQ7IHRvIHVzZSB0aGVtLCB5b3UgbXVzdCBzcGVjaWZ5IGVudi5cbiAgICAgKiBAc2VlIGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9jZGsvbGF0ZXN0L2d1aWRlL2Vudmlyb25tZW50cy5odG1sXG4gICAgICovXG4gICAgZW52OiB7XG4gICAgICAgIGFjY291bnQ6IGFwcC5ub2RlLnRyeUdldENvbnRleHQoJ2FjY291bnRJZCcpLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhY2sgbXVzdCBiZSBpbiB1cy1lYXN0LTEsIGJlY2F1c2UgdGhlIEFDTSBjZXJ0aWZpY2F0ZSBmb3IgYVxuICAgICAgICAgKiBnbG9iYWwgQ2xvdWRGcm9udCBkaXN0cmlidXRpb24gbXVzdCBiZSByZXF1ZXN0ZWQgaW4gdXMtZWFzdC0xLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVnaW9uOiAndXMtZWFzdC0xJyxcbiAgICB9XG59KTtcblxuYXBwLnN5bnRoKCk7XG4iXX0=