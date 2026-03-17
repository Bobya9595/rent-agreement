"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 10,
  },
});

export default function RentAgreementPDF({ data }: any) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>RENT AGREEMENT</Text>

        <Text style={styles.section}>
          Date: {data.date}
        </Text>

        <Text style={styles.section}>
          Landlord: {data.landlord}
        </Text>

        <Text style={styles.section}>
          Tenant: {data.tenant}
        </Text>

        <Text style={styles.section}>
          Address: {data.address}
        </Text>

        <Text style={styles.section}>
          Rent: ₹{data.rent}
        </Text>
      </Page>
    </Document>
  );
}
