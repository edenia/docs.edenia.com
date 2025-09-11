# Google Analytics 4 Setup Guide

## 🚀 GA4 Property Configuration for Edenia Web3 Development

> **Note**: This guide is for setting up the GA4 Property in Google Analytics dashboard. The technical implementation is already done in the codebase.

### Step 1: Create GA4 Property

#### 1.1 Access Google Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring" or "Create Account"

#### 1.2 Create Account
- **Account Name**: `Edenia Web3 Development`
- **Country**: `Costa Rica`
- **Currency**: `USD`
- **Data Sharing**: Enable all options for better insights

#### 1.3 Create Property
- **Property Name**: `Edenia Web3 Documentation`
- **Reporting Time Zone**: `Costa Rica (GMT-6)`
- **Currency**: `USD`

#### 1.4 Business Information
- **Industry Category**: `Technology`
- **Business Size**: `Small to Medium`
- **How will you use Google Analytics**: `Measure customer engagement with my website`

### Step 2: Configure Data Streams

#### 2.1 Web Data Stream
1. Click "Add stream" → "Web"
2. **Website URL**: `https://docs.edenia.com`
3. **Stream Name**: `Edenia Docs - English`
4. **Enhanced Measurement**: **Enable ALL**

#### 2.2 Spanish Data Stream
1. Click "Add stream" → "Web"
2. **Website URL**: `https://docs.edenia.com/es`
3. **Stream Name**: `Edenia Docs - Spanish`
4. **Enhanced Measurement**: **Enable ALL**

### Step 3: Get Measurement IDs

#### 3.1 English Stream
- **Measurement ID**: `G-XXXXXXXXXX` (Copy this)
- **Measurement Protocol API Secret**: Generate and save

#### 3.2 Spanish Stream
- **Measurement ID**: `G-YYYYYYYYYY` (Copy this)
- **Measurement Protocol API Secret**: Generate and save

### Step 4: Enhanced Measurement Settings

#### 4.1 Enable All Automatic Events
- **Page views**
- **Scrolls** (90% threshold)
- **Outbound clicks**
- **Site search**
- **Video engagement**
- **File downloads**
- **Form interactions**

#### 4.2 Configure Site Search
- **Query Parameter**: `q`
- **Search Terms**: Enable

### Step 5: Cross-Domain Tracking

#### 5.1 Configure Linker
1. Go to **Data Streams** → **Web** → **Configure tag settings**
2. **Configure your domains**:
   - `docs.edenia.com`
   - `edenia.com`
   - `www.edenia.com`

#### 5.2 Referral Exclusion
Add to **Referral exclusion list**:
- `docs.edenia.com`
- `edenia.com`
- `www.edenia.com`

### Step 6: Data Retention Settings

#### 6.1 Configure Data Retention
1. Go to **Admin** → **Data Settings** → **Data Retention**
2. **Event data retention**: `26 months` (Maximum)
3. **Reset user data on new activity**: **Enable**

### Step 7: Privacy & Compliance

#### 7.1 IP Anonymization
- **Enable IP anonymization** (Already configured in code)

#### 7.2 Data Processing
- **Data Processing Terms**: Accept
- **Data Sharing**: Enable for Google products

### Step 8: Custom Dimensions

#### 8.1 Create Custom Dimensions
1. Go to **Admin** → **Custom Definitions** → **Custom Dimensions**
2. Create these dimensions:

| Dimension Name | Scope | Description |
|----------------|-------|-------------|
| Page Category | Event | Documentation, Tutorial, Tool, etc. |
| Content Type | Event | Page, Search, Documentation |
| User Type | User | New, Returning |
| Language | Event | en, es |
| Section | Event | docs, tutorials, tools |

### Step 9: Enhanced eCommerce

#### 9.1 Enable Enhanced eCommerce
1. Go to **Admin** → **Data Display** → **Enhanced eCommerce**
2. **Enable Enhanced eCommerce**: **Yes**

#### 9.2 Configure Goals
Create these goals:
- **Documentation View**: Track page views
- **Tutorial Completion**: Track tutorial engagement
- **Download**: Track file downloads
- **External Link Click**: Track outbound clicks

### Step 10: Update Configuration

#### 10.1 Update docusaurus.config.js
Replace `G-XXXXXXXXXX` in your configuration with your actual Measurement ID:

```javascript
// In docusaurus.config.js
trackingID: "G-YOUR-ACTUAL-ID", // Replace with your GA4 Measurement ID
```

#### 10.2 Test Implementation
1. Run `npm run build` ✅ (Already working)
2. Run `npm run serve` to test locally
3. Check browser console for GA4 events
4. Verify in Google Analytics Real-time reports

### Step 11: Verification Checklist

#### 11.1 Technical Verification
- [ ] GA4 tracking code loads without errors
- [ ] Page views are tracked in real-time
- [ ] Custom events are firing
- [ ] Cross-domain tracking works
- [ ] Enhanced measurement events are captured

#### 11.2 Analytics Verification
- [ ] Real-time reports show activity
- [ ] Custom dimensions are populated
- [ ] Enhanced eCommerce events are tracked
- [ ] Both English and Spanish are tracked
- [ ] Cross-domain sessions are linked

### Step 12: Advanced Configuration

#### 12.1 Audience Definitions
Create audiences for:
- **Documentation Readers**: Users who view docs
- **Tutorial Followers**: Users who engage with tutorials
- **Returning Visitors**: Users with multiple sessions
- **High Engagement**: Users with long session duration

#### 12.2 Conversion Tracking
Set up conversions for:
- **Documentation Engagement**: 5+ page views
- **Tutorial Completion**: Scroll depth > 75%
- **Download Actions**: File downloads
- **External Engagement**: Outbound clicks

### Step 13: Monitoring & Maintenance

#### 13.1 Regular Checks
- **Weekly**: Check real-time reports
- **Monthly**: Review custom dimensions data
- **Quarterly**: Analyze conversion funnels

#### 13.2 Performance Monitoring
- Monitor page load times impact
- Check for JavaScript errors
- Verify data accuracy

## Expected Results

After complete setup, you should see:

### Real-Time Tracking
- Page views for both English and Spanish
- Custom events (scroll, clicks, downloads)
- Cross-domain session linking
- Enhanced eCommerce events

### Custom Dimensions Data
- Page categories properly classified
- Content types tracked
- User types identified
- Language preferences captured

### Enhanced Analytics
- Detailed user journey mapping
- Conversion funnel analysis
- Content performance insights
- Cross-domain user behavior

## Important Notes

1. **Measurement ID Format**: Must start with `G-`
2. **Data Processing**: Allow 24-48 hours for full data processing
3. **Testing**: Always test in incognito mode
4. **Privacy**: Ensure GDPR compliance if applicable
5. **Backup**: Keep Measurement IDs and API secrets secure

## 📞 Support

For issues with GA4 setup:
- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Setup Assistant](https://support.google.com/analytics/answer/9304153)
- [Enhanced Measurement Guide](https://support.google.com/analytics/answer/9216061)
