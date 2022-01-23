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
 *     "accountId": 1234567890,
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
new MyStaticSiteStack(app, 'S3StaticSite', {
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
        region: 'eu-central-1',
    }
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBbUM7QUFDbkMsK0NBQTJDO0FBRTNDOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxpQkFBa0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNyQyxZQUFZLE1BQWUsRUFBRSxJQUFZLEVBQUUsS0FBcUI7UUFDNUQsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFM0IsSUFBSSx3QkFBVSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUM3QyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1NBQ3RELENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLElBQUksaUJBQWlCLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRTtJQUN2Qzs7Ozs7O09BTUc7SUFDSCxHQUFHLEVBQUU7UUFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzVDOzs7V0FHRztRQUNILE1BQU0sRUFBRSxjQUFjO0tBQ3pCO0NBQ0osQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IFN0YXRpY1NpdGUgfSBmcm9tICcuL3N0YXRpYy1zaXRlJztcblxuLyoqXG4gKiBUaGlzIHN0YWNrIHJlbGllcyBvbiBnZXR0aW5nIHRoZSBkb21haW4gbmFtZSBmcm9tIENESyBjb250ZXh0LlxuICogVXNlICdjZGsgc3ludGggLWMgZG9tYWluPW15c3RhdGljc2l0ZS5jb20gLWMgc3ViZG9tYWluPXd3dydcbiAqIE9yIGFkZCB0aGUgZm9sbG93aW5nIHRvIGNkay5qc29uOlxuICoge1xuICogICBcImNvbnRleHRcIjoge1xuICogICAgIFwiZG9tYWluXCI6IFwibXlzdGF0aWNzaXRlLmNvbVwiLFxuICogICAgIFwic3ViZG9tYWluXCI6IFwid3d3XCIsXG4gKiAgICAgXCJhY2NvdW50SWRcIjogMTIzNDU2Nzg5MCxcbiAqICAgfVxuICogfVxuKiovXG5jbGFzcyBNeVN0YXRpY1NpdGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gICAgY29uc3RydWN0b3IocGFyZW50OiBjZGsuQXBwLCBuYW1lOiBzdHJpbmcsIHByb3BzOiBjZGsuU3RhY2tQcm9wcykge1xuICAgICAgICBzdXBlcihwYXJlbnQsIG5hbWUsIHByb3BzKTtcblxuICAgICAgICBuZXcgU3RhdGljU2l0ZSh0aGlzLCAnU3RhdGljU2l0ZScsIHtcbiAgICAgICAgICAgIGRvbWFpbk5hbWU6IHRoaXMubm9kZS50cnlHZXRDb250ZXh0KCdkb21haW4nKSxcbiAgICAgICAgICAgIHNpdGVTdWJEb21haW46IHRoaXMubm9kZS50cnlHZXRDb250ZXh0KCdzdWJkb21haW4nKSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xuXG5uZXcgTXlTdGF0aWNTaXRlU3RhY2soYXBwLCAnUzNTdGF0aWNTaXRlJywge1xuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgcmVxdWlyZWQgZm9yIG91ciB1c2Ugb2YgaG9zdGVkLXpvbmUgbG9va3VwLlxuICAgICAqXG4gICAgICogTG9va3VwcyBkbyBub3Qgd29yayBhdCBhbGwgd2l0aG91dCBhbiBleHBsaWNpdCBlbnZpcm9ubWVudFxuICAgICAqIHNwZWNpZmllZDsgdG8gdXNlIHRoZW0sIHlvdSBtdXN0IHNwZWNpZnkgZW52LlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2Nkay9sYXRlc3QvZ3VpZGUvZW52aXJvbm1lbnRzLmh0bWxcbiAgICAgKi9cbiAgICBlbnY6IHtcbiAgICAgICAgYWNjb3VudDogYXBwLm5vZGUudHJ5R2V0Q29udGV4dCgnYWNjb3VudElkJyksXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGFjayBtdXN0IGJlIGluIHVzLWVhc3QtMSwgYmVjYXVzZSB0aGUgQUNNIGNlcnRpZmljYXRlIGZvciBhXG4gICAgICAgICAqIGdsb2JhbCBDbG91ZEZyb250IGRpc3RyaWJ1dGlvbiBtdXN0IGJlIHJlcXVlc3RlZCBpbiB1cy1lYXN0LTEuXG4gICAgICAgICAqL1xuICAgICAgICByZWdpb246ICdldS1jZW50cmFsLTEnLFxuICAgIH1cbn0pO1xuXG5hcHAuc3ludGgoKTtcbiJdfQ==