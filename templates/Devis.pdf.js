import { Page, Text, Document, StyleSheet, Image, View, Link } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
    padding: 20,
  },

  topline: {
    margin: "0 auto"
  },

  devisTxt: {
    textAlign: "center",
    fontSize: 12,
  },

  logo: {
    width: 60,
    height: 60,
  },

  deliveredBy: {
    fontWeight: "bold",
    fontSize: 13,
    marginBottom: 5
  },

  text: {
    fontSize: 10
  },

  textMTop: {
    fontSize: 10,
    marginTop: 20
  },

  sectionCollumn: {
    display: "flex",
    width: "100%",
    // marginTop: 20,
    alignItems: "center",
  },

  firstSectionCollumn: {
    display: "flex",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },

  tableRowStyle: {
    flexDirection: "row",
    width: "100%",
  },

  tableCellHeaderStyleTop: {
    textTransform: "uppercase",
    fontSize: 7,
    fontWeight: "bold",
  },

  tableCellHeaderStyle: {
    textAlign: "center",
    textTransform: "uppercase",
    padding: 10,
    fontSize: 7,
    fontWeight: "bold",
  },

  tableCellNoBgStyle: {
    borderStyle: "solid",
    padding: "10px 20px",
    borderColor: "black",
    borderBottomColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    fontSize: 7,
  },

  tableCellBottom: {
    borderStyle: "solid",
    width: 200,
    padding: "10px 0",
    borderColor: "black",
    textAlign: "center",
    borderBottomColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    fontSize: 7,
  },

  tableColHeaderStyle: {
    width: "100%",
    borderStyle: "solid",
    padding: "10px 20px",
    borderColor: "black",
    borderBottomColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },

  fakeTableContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },

  fakeTableContainerBottom: {
    flexDirection: "row",
    alignItems: "center",
  },

  tableColTopStyle: {
    borderStyle: "solid",
    padding: "10px 0",
    width: 200,
    textAlign: "center",
    borderColor: "black",
    borderBottomColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },

  firstTableColHeaderStyle: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "black",
    borderBottomColor: "black",
    borderTopColor: "#D0D0D0",
    borderWidth: 1,
    backgroundColor: "white",
  },

  bottomContainer: {
    marginLeft: 200
  },

  ClientContainer: {
    width: "100%",
    marginTop: 20,
  }
});

const DevisPDF = ({
  number,
  date,
  total_ht,
  total_ttc,
  tvaPrice,
  client,
  features
}) => (
  <Document language="fr">
    <Page size="A4" style={styles.page}>
      <View style={styles.topline}>
        <Link src="https://cassinisgiovani.fr">
          <Image src="https://cdn.discordapp.com/attachments/819049402097336340/1183774551415472201/logo-gc.png" style={styles.logo} />
        </Link>

        <Text style={styles.devisTxt}>Devis N°{number}</Text>
      </View>


      <View>
        <Text style={styles.deliveredBy}>Facturé par</Text>
        <Text style={styles.text}>CASSINIS GIOVANI</Text>
        <Text style={styles.text}>45 RUE NOTRE DAME DES VIGNES</Text>
        <Text style={styles.text}>16000 ANGOULÊME</Text>
        <Text style={styles.text}>Siret : 981 328 271 00011</Text>
        <Text style={styles.text}>Tél : 06 58 55 25 38</Text>
      </View>

      <View className={styles.ClientContainer}>
        <Text style={styles.deliveredBy}>Envoyé a</Text>
        <Text style={styles.text}>{client.name.toUpperCase()}</Text>
        <Text style={styles.text}>{client.adress.toUpperCase()}</Text>
        <Text style={styles.text}>Tél : {client.tel}</Text>
      </View>

      <View style={styles.fakeTableContainer}>
        <View style={styles.tableColTopStyle}>
          <Text style={styles.tableCellHeaderStyleTop}>Date du devis</Text>
        </View>

        <Text style={styles.tableCellNoBgStyle}>{date}</Text>
      </View>

      <View style={styles.firstSectionCollumn}>
        <View style={styles.tableRowStyle} fixed>
          <View style={styles.tableColHeaderStyle}>
            <Text style={styles.tableCellHeaderStyle}>Description</Text>
          </View>

          <View style={styles.tableColHeaderStyle}>
            <Text style={styles.tableCellHeaderStyle}>Quantité</Text>
          </View>

          <View style={styles.tableColHeaderStyle}>
            <Text style={styles.tableCellHeaderStyle}>Prix unitaire HT</Text>
          </View>

          <View style={styles.tableColHeaderStyle}>
            <Text style={styles.tableCellHeaderStyle}>Prix total HT</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionCollumn}>
        <View style={styles.tableRowStyle} fixed>
          <View style={styles.firstTableColHeaderStyle}>
            {
              features["description"].map((item, key) => (
                <div key={key}>
                  <Text style={styles.tableCellHeaderStyle}>
                    {item}
                  </Text>
                </div>
              ))
            }
          </View>

          <View style={styles.firstTableColHeaderStyle}>
            {
              features["quantity"].map((item, key) => (
                <div key={key}>
                  <Text style={styles.tableCellHeaderStyle}>
                    {item}
                  </Text>
                </div>
              ))
            }
          </View>

          <View style={styles.firstTableColHeaderStyle}>
            {
              features["prix_unitaire_ht"].map((item, key) => (
                <div key={key}>
                  <Text style={styles.tableCellHeaderStyle}>
                    {item} €
                  </Text>
                </div>
              ))
            }
          </View>

          <View style={styles.firstTableColHeaderStyle}>
            {
              features["prix_total_ht"].map((item, key) => (
                <div key={key}>
                  <Text style={styles.tableCellHeaderStyle}>
                    {item} €
                  </Text>
                </div>
              ))
            }
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.fakeTableContainer}>
          <View style={styles.tableColTopStyle}>
            <Text style={styles.tableCellHeaderStyleTop}>Total HT</Text>
          </View>

          <Text style={styles.tableCellBottom}>{total_ht} €</Text>
        </View>

        <View style={styles.fakeTableContainerBottom}>
          <View style={styles.tableColTopStyle}>
            <Text style={styles.tableCellHeaderStyleTop}>TVA (20,00%)</Text>
          </View>

          <Text style={styles.tableCellBottom}>{tvaPrice} €</Text>
        </View>

        <View style={styles.fakeTableContainerBottom}>
          <View style={styles.tableColTopStyle}>
            <Text style={styles.tableCellHeaderStyleTop}>Total TTC</Text>
          </View>

          <Text style={styles.tableCellBottom}>{total_ttc} €</Text>
        </View>
      </View>

      <Text style={styles.textMTop}>Le paiement est du dans 30 jours a compter du {date}</Text>
    </Page>
  </Document>
);


export default DevisPDF;