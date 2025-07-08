import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./privacypolicy.css";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ color: '#FCFCFC', marginLeft: "50px", marginRight: "50px", paddingTop: "150px" }}>
      {/* Header */}
      <Typography className='headings-h1' variant="h3" gutterBottom>
        {t('privacypolicy.privacyPolicy')}
      </Typography>

      {/* Section 1 */}
      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>
          {t('privacypolicy.introductionTitle')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.introductionText')}
        </Typography>
      </Box>

      {/* Section 2 */}
      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>
          {t('privacypolicy.infoCollectTitle')}
        </Typography>
        <Typography className='bodyMediumText2 shantellSansFont span-content' variant="body1">
          <span>{t('privacypolicy.personalInfoBold')}</span>
          {t('privacypolicy.personalInfotext')}
        </Typography>
        <ul>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.personalInfoList1')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.personalInfoList2')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.personalInfoList3')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.personalInfoList4')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.personalInfoList5')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.personalInfoList6')}</Typography></li>
        </ul>
        <Typography className='span-content shantellSansFont bodyMediumText2' variant="body1">
          <span>{t('privacypolicy.logDataBold')}</span>
          {t('privacypolicy.logDatatext')}
        </Typography>
        <Typography className='span-content shantellSansFont bodyMediumText2' variant="body1" mt={3}>
          <span>{t('privacypolicy.cookiesTitle')}</span>
          {t('privacypolicy.cookiesText')}
        </Typography>
        <ul>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.cookiesList1')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.cookiesList2')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.cookiesList3')}</Typography></li>
        </ul>
       <Typography className='span-content shantellSansFont bodyMediumText2' variant="body1">
          <span>{t('privacypolicy.membershipCardBold')}</span>
          {t('privacypolicy.membershipCardtext')}
        </Typography>
        <Typography className='span-content shantellSansFont bodyMediumText2' variant="body1" mt={3}>
          <span>{t('privacypolicy.clientAccountBold')}</span>
          {t('privacypolicy.clientAccounttext')}
        </Typography>
      </Box>

      {/* Section 3 */}
      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>
          {t('privacypolicy.howWeUseTitle')}
        </Typography>
        <Typography className='bodyMediumText2 shantellSansFont' variant="body1">
          {t('privacypolicy.legalBasis')}
        </Typography>
        <ul className='bodyRegularText3'>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.legalBasisList1')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.legalBasisList2')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.legalBasisList3')}</Typography></li>
          <li><Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('privacypolicy.legalBasisList4')}</Typography></li>
        </ul>
      </Box>

      {/* Section 4 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom sx={{ letterSpacing: 1 }}>
          {t('privacypolicy.shareInfoTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1" sx={{ mb: 2 }}>
          {t('privacypolicy.shareInfoText')}
        </Typography>
        <ul className="bodyRegularText3" style={{ color: "#bdbdbd", marginLeft: 24, marginBottom: 0 }}>
          <li>
            <Typography className="bodyRegularText3" variant="body1">
              <span>{t('privacypolicy.shareInfoList1Bold')}</span>
              {t('privacypolicy.shareInfoList1text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3" variant="body1">
              <span>{t('privacypolicy.shareInfoList2Bold')}</span>
              {t('privacypolicy.shareInfoList2text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3" variant="body1">
              <span>{t('privacypolicy.shareInfoList3Bold')}</span>
              {t('privacypolicy.shareInfoList3text')}
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Section 5 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.choicesTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1" sx={{ mb: 2 }}>
          {t('privacypolicy.choicesText')}
        </Typography>
        <ul  style={{ marginLeft: 24, marginBottom: 0 }}>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont  " variant="body1">
              <span>{t('privacypolicy.choicesList1Bold')}</span>
              {t('privacypolicy.choicesList1text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont " variant="body1">
              <span>{t('privacypolicy.choicesList2Bold')}</span>
              {t('privacypolicy.choicesList2text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.choicesList3Bold')}</span>
              {t('privacypolicy.choicesList3text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
           <span>{t('privacypolicy.choicesList4Bold')}</span>
              {t('privacypolicy.choicesList4text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.choicesList5Bold')}</span>
              {t('privacypolicy.choicesList5text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.choicesList6Bold')}</span>
              {t('privacypolicy.choicesList6text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.choicesList7Bold')}</span>
              {t('privacypolicy.choicesList7text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.choicesList8Bold')}</span>
              {t('privacypolicy.choicesList8text')}
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Section 6 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.securityTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1">
          {t('privacypolicy.securityText')}
        </Typography>
      </Box>

      {/* Section 7 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.retentionTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1">
          {t('privacypolicy.retentionText')}
        </Typography>
      </Box>

      {/* Section 8 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.childrenTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1">
          {t('privacypolicy.childrenText')}
        </Typography>
      </Box>

      {/* Section 9 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.linksTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1">
          {t('privacypolicy.linksText')}
        </Typography>
      </Box>

      {/* Section 10 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.transfersTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1">
          {t('privacypolicy.transfersText')}
        </Typography>
      </Box>

      {/* Section 11 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.gdprTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1" sx={{ mb: 2 }}>
          {t('privacypolicy.gdprText')}
        </Typography>
        <ul className="bodyRegularText3" style={{ marginLeft: 24, marginBottom: 0 }}>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.gdprList1Bold')}</span>
              {t('privacypolicy.gdprList1text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.gdprList2Bold')}</span>
              {t('privacypolicy.gdprList2text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
             <span>{t('privacypolicy.gdprList3Bold')}</span>
              {t('privacypolicy.gdprList3text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.gdprList4Bold')}</span>
              {t('privacypolicy.gdprList4text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.gdprList5Bold')}</span>
              {t('privacypolicy.gdprList5text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.gdprList6Bold')}</span>
              {t('privacypolicy.gdprList6text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.gdprList7Bold')}</span>
              {t('privacypolicy.gdprList7text')}
            </Typography>
          </li>
          <li>
            <Typography className="bodyRegularText3 shantellSansFont" variant="body1">
              <span>{t('privacypolicy.gdprList8Bold')}</span>
              {t('privacypolicy.gdprList8text')}
            </Typography>
          </li>
        </ul>
      </Box>

      {/* Section 12 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.controllerTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1">
          {t('privacypolicy.controllerText')}
        </Typography>
      </Box>

      {/* Section 13 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.changesTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1">
          {t('privacypolicy.changesText')}
        </Typography>
      </Box>

      {/* Section 14 */}
      <Box my={5}>
        <Typography className="headings-h4" variant="h5" gutterBottom>
          {t('privacypolicy.contactTitle')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1" sx={{ mb: 1 }}>
          {t('privacypolicy.contactText')}
        </Typography>
        <Typography className="bodyMediumText2 span-content" variant="body1">
          {t('privacypolicy.contactAddress')}<br />
          {t('privacypolicy.contactEmail')}<br />
          {t('privacypolicy.contactPhone')}
        </Typography>
      </Box>
    </Box>
  );
}
export default PrivacyPolicyPage;