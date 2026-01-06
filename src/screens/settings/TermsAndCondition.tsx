import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function TermsAndCondition() {
  const headerHeight = useHeaderHeight();
  const tabHeight = useBottomTabBarHeight();
  return (
    <View
      style={{
        paddingTop: headerHeight,
        flex: 1,
        paddingBottom: tabHeight,
        backgroundColor: '#1E1E1E',
      }}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>Terms & Conditions</Text>
        <Text style={styles.updated}>Last Updated: 6 Jan, 2026</Text>

        <Text style={styles.paragraph}>
          Welcome to Storywala. By downloading, accessing, or using the
          Storywala mobile application (“App”), you agree to comply with and be
          bound by these Terms & Conditions. Please read them carefully before
          using the App.
        </Text>

        <Text style={styles.heading}>1. About Storywala</Text>
        <Text style={styles.paragraph}>
          Storywala is a learning and storytelling mobile application designed
          for kids and people of all ages. We provide daily stories narrated
          using AI technology, where stories may be personalized by including
          the user's name to create an immersive learning experience.
        </Text>

        <Text style={styles.heading}>2. Eligibility</Text>
        <Text style={styles.paragraph}>
          The App is suitable for children and users of all ages.
        </Text>
        <Text style={styles.paragraph}>
          If the user is under 18 years, access and usage must be done under the
          supervision of a parent or legal guardian.
        </Text>
        <Text style={styles.paragraph}>
          By using this App, you confirm that you have permission to use it or
          are legally eligible to do so.
        </Text>

        <Text style={styles.heading}>3. User Accounts</Text>
        <Text style={styles.paragraph}>
          To access certain features, you may be required to create an account.
          You agree to:
        </Text>
        <Text style={styles.bullet}>
          • Provide accurate and complete information
        </Text>
        <Text style={styles.bullet}>• Keep your login credentials secure</Text>
        <Text style={styles.bullet}>
          • Accept responsibility for all activities under your account
        </Text>

        <Text style={styles.heading}>
          4. Personal Information & Data Security
        </Text>
        <Text style={styles.paragraph}>We value your privacy.</Text>
        <Text style={styles.paragraph}>
          We collect limited personal information (such as name and basic
          details) only to personalize the storytelling experience.
        </Text>
        <Text style={styles.paragraph}>
          All personal data is stored securely in our backend database (MongoDB)
          and encrypted to protect user privacy.
        </Text>
        <Text style={styles.paragraph}>
          We do not sell or share personal data with third parties, except where
          required by law.
        </Text>
        <Text style={styles.paragraph}>
          For more details, please refer to our Privacy Policy.
        </Text>

        <Text style={styles.heading}>5. Subscription & Payments</Text>
        <Text style={styles.paragraph}>
          Storywala is a subscription-based application with monthly plans.
        </Text>
        <Text style={styles.paragraph}>
          Subscription fees are charged through the Apple App Store or Google
          Play Store, depending on your device.
        </Text>
        <Text style={styles.paragraph}>
          Subscriptions automatically renew unless canceled before the renewal
          date.
        </Text>
        <Text style={styles.paragraph}>
          Payment management, refunds, and cancellations are governed by the
          respective app store’s policies.
        </Text>

        <Text style={styles.heading}>6. Content Usage</Text>
        <Text style={styles.paragraph}>
          All stories, audio narrations, visuals, and AI-generated content are
          the intellectual property of Storywala.
        </Text>
        <Text style={styles.paragraph}>
          Content is provided for personal and educational use only.
        </Text>
        <Text style={styles.paragraph}>
          You may not copy, distribute, modify, or resell any content without
          written permission.
        </Text>

        <Text style={styles.heading}>7. AI Narration Disclaimer</Text>
        <Text style={styles.paragraph}>
          Story narrations are generated using AI technology.
        </Text>
        <Text style={styles.paragraph}>
          While we aim to provide accurate, age-appropriate, and engaging
          content, AI-generated narration may occasionally vary in tone or
          interpretation.
        </Text>
        <Text style={styles.paragraph}>
          Storywala is not liable for minor inaccuracies in AI narration.
        </Text>

        <Text style={styles.heading}>8. Acceptable Use</Text>
        <Text style={styles.paragraph}>You agree not to:</Text>
        <Text style={styles.bullet}>• Use the App for unlawful purposes</Text>
        <Text style={styles.bullet}>
          • Attempt to access or tamper with our servers or systems
        </Text>
        <Text style={styles.bullet}>
          • Misuse the App in any way that could harm other users or the
          platform
        </Text>

        <Text style={styles.heading}>9. App Availability</Text>
        <Text style={styles.paragraph}>
          Storywala is available exclusively on the Apple App Store and Google
          Play Store.
        </Text>
        <Text style={styles.paragraph}>
          We may update, modify, or discontinue features at any time without
          prior notice.
        </Text>

        <Text style={styles.heading}>10. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          Storywala is provided on an “as is” and “as available” basis.
        </Text>
        <Text style={styles.paragraph}>
          We are not responsible for any indirect or incidental damages,
          temporary service interruptions, or data loss caused by factors beyond
          our control.
        </Text>

        <Text style={styles.heading}>11. Changes to Terms</Text>
        <Text style={styles.paragraph}>
          We may update these Terms & Conditions from time to time. Continued
          use of the App after changes means you accept the updated terms.
        </Text>

        <Text style={styles.heading}>12. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns about these Terms & Conditions,
          please contact us:
        </Text>
        <Text style={styles.paragraph}>Email: support@storywala.com</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  updated: {
    fontSize: 14,
    color: '#AAAAAA',
    marginBottom: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 18,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: '#DDDDDD',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 15,
    lineHeight: 22,
    color: '#DDDDDD',
    marginLeft: 8,
    marginBottom: 4,
  },
});
