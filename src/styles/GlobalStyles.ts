import { StyleSheet } from "react-native";
import { theme } from "../theme";
import { colors } from "../theme/colors";
import { typography } from "../theme/typography";

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  text: {
    color: '#ccc',
    fontFamily:theme.typography.fontRegular,
    fontSize: theme.typography.sizes.md,
    textAlign: 'center',
    fontWeight: '400',
  },
  heading: {
    color: theme.colors.textPrimary,
    fontFamily: theme.typography.fontBold,
    fontSize: theme.typography.sizes.xxl,
    textAlign: 'center',
  },
  gradientButton: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: { opacity: 0.6 },

  // Common shared styles
  fullWidth: {
    width: '100%',
  },
  leftText: {
    textAlign: 'left',
    fontSize:typography.sizes.sm,
    width:'100%'
  },
  underlineText: {
    textDecorationLine: 'underline',
    fontWeight: '700',
    color:'#ffff'
  },
  errorText: {
    color: '#FB2C36',
    marginTop: 20,
  },
  buttonCaption: {
    color: colors.textPrimary,
    fontFamily:'SfPro-regular',
  },
  inutpre: {
    fontSize: 16,
    marginLeft:5,
    marginRight:-5
  }
});
