import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { Picker } from "@react-native-picker/picker";

const NationalitySelector = () => {
    const pickerRef = useRef();

    function open() {
      pickerRef.current.focus();
    }
    const [crypto, setCrypto] = useState();
  return (
    <View>
    <Pressable onPress={open} style={styles.boxContainer}>
      <Text
        style={[
          styles.datetext,
          { fontSize: 16, color: !crypto ? "#B9B9B9" : "black" },
        ]}
      >
        {!crypto ? "-- Select Nationality --" : crypto}
      </Text>

      <Picker
        ref={pickerRef}
        selectedValue={crypto}
        onValueChange={(itemValue, itemIndex) => setCrypto(itemValue)}
        style={{ alignSelf: "flex-end", left: 50, top: 7 }}
      >
        <Picker.Item value="" label="-- select one --" />
        <Picker.Item value="Afghan" label="Afghan" />
        <Picker.Item value="Albanian" label="Albanian" />
        <Picker.Item value="Algerian" label="Algerian" />
        <Picker.Item value="American" label="American" />
        <Picker.Item value="Andorran" label="Andorran" />
        <Picker.Item value="Angolan" label="Angolan" />
        <Picker.Item value="Antiguans" label="Antiguans" />
        <Picker.Item value="Argentinean" label="Argentinean" />
        <Picker.Item value="Armenian" label="Armenian" />
        <Picker.Item value="Australian" label="Australian" />
        <Picker.Item value="Austrian" label="Austrian" />
        <Picker.Item value="Azerbaijani" label="Azerbaijani" />
        <Picker.Item value="Bahamian" label="Bahamian" />
        <Picker.Item value="Bahraini" label="Bahraini" />
        <Picker.Item value="Barbadian" label="Barbadian" />
        <Picker.Item value="Barbudans" label="Barbudans" />
        <Picker.Item value="Batswana" label="Batswana" />
        <Picker.Item value="Belarusian" label="Belarusian" />
        <Picker.Item value="Belgian" label="Belgian" />
        <Picker.Item value="Belizean" label="Belizean" />
        <Picker.Item value="Beninese" label="Beninese" />
        <Picker.Item value="Bhutanese" label="Bhutanese" />
        <Picker.Item value="Bolivian" label="Bolivian" />
        <Picker.Item value="Bosnian" label="Bosnian" />
        <Picker.Item value="Brazilian" label="Brazilian" />
        <Picker.Item value="British" label="British" />
        <Picker.Item value="Bruneian" label="Bruneian" />
        <Picker.Item value="Bulgarian" label="Bulgarian" />
        <Picker.Item value="Burkinabe" label="Burkinabe" />
        <Picker.Item value="Burmese" label="Burmese" />
        <Picker.Item value="Burundian" label="Burundian" />
        <Picker.Item value="cambodian" label="Cambodian" />
        <Picker.Item value="cameroonian" label="Cameroonian" />
        <Picker.Item value="canadian" label="Canadian" />
        <Picker.Item value="cape verdean" label="Cape Verdean" />
        <Picker.Item
          value="central african"
          label="Central African"
        />
        <Picker.Item value="chadian" label="Chadian" />
        <Picker.Item value="chilean" label="Chilean" />
        <Picker.Item value="chinese" label="Chinese" />
        <Picker.Item value="colombian" label="Colombian" />
        <Picker.Item value="comoran" label="Comoran" />
        <Picker.Item value="congolese" label="Congolese" />
        <Picker.Item value="costa rican" label="Costa Rican" />
        <Picker.Item value="croatian" label="Croatian" />
        <Picker.Item value="cuban" label="Cuban" />
        <Picker.Item value="cypriot" label="Cypriot" />
        <Picker.Item value="czech" label="Czech" />
        <Picker.Item value="danish" label="Danish" />
        <Picker.Item value="djibouti" label="Djibouti" />
        <Picker.Item value="dominican" label="Dominican" />
        <Picker.Item value="dutch" label="Dutch" />
        <Picker.Item value="east timorese" label="East Timorese" />
        <Picker.Item value="ecuadorean" label="Ecuadorean" />
        <Picker.Item value="egyptian" label="Egyptian" />
        <Picker.Item value="emirian" label="Emirian" />
        <Picker.Item
          value="equatorial guinean"
          label="Equatorial Guinean"
        />
        <Picker.Item value="eritrean" label="Eritrean" />
        <Picker.Item value="estonian" label="Estonian" />
        <Picker.Item value="ethiopian" label="Ethiopian" />
        <Picker.Item value="fijian" label="Fijian" />
        <Picker.Item value="filipino" label="Filipino" />
        <Picker.Item value="finnish" label="Finnish" />
        <Picker.Item value="french" label="French" />
        <Picker.Item value="gabonese" label="Gabonese" />
        <Picker.Item value="gambian" label="Gambian" />
        <Picker.Item value="georgian" label="Georgian" />
        <Picker.Item value="german" label="German" />
        <Picker.Item value="ghanaian" label="Ghanaian" />
        <Picker.Item value="greek" label="Greek" />
        <Picker.Item value="grenadian" label="Grenadian" />
        <Picker.Item value="guatemalan" label="Guatemalan" />
        <Picker.Item
          value="guinea-bissauan"
          label="Guinea-Bissauan"
        />
        <Picker.Item value="guinean" label="Guinean" />
        <Picker.Item value="guyanese" label="Guyanese" />
        <Picker.Item value="haitian" label="Haitian" />
        <Picker.Item value="herzegovinian" label="Herzegovinian" />
        <Picker.Item value="honduran" label="Honduran" />
        <Picker.Item value="hungarian" label="Hungarian" />
        <Picker.Item value="icelander" label="Icelander" />
        <Picker.Item value="indian" label="Indian" />
        <Picker.Item value="indonesian" label="Indonesian" />
        <Picker.Item value="iranian" label="Iranian" />
        <Picker.Item value="iraqi" label="Iraqi" />
        <Picker.Item value="irish" label="Irish" />
        <Picker.Item value="israeli" label="Israeli" />
        <Picker.Item value="italian" label="Italian" />
        <Picker.Item value="ivorian" label="Ivorian" />
        <Picker.Item value="jamaican" label="Jamaican" />
        <Picker.Item value="japanese" label="Japanese" />
        <Picker.Item value="jordanian" label="Jordanian" />
        <Picker.Item value="kazakhstani" label="Kazakhstani" />
        <Picker.Item value="kenyan" label="Kenyan" />
        <Picker.Item
          value="kittian and nevisian"
          label="Kittian and Nevisian"
        />
        <Picker.Item value="kuwaiti" label="Kuwaiti" />
        <Picker.Item value="kyrgyz" label="Kyrgyz" />
        <Picker.Item value="laotian" label="Laotian" />
        <Picker.Item value="latvian" label="Latvian" />
        <Picker.Item value="lebanese" label="Lebanese" />
        <Picker.Item value="liberian" label="Liberian" />
        <Picker.Item value="libyan" label="Libyan" />
        <Picker.Item
          value="liechtensteiner"
          label="Liechtensteiner"
        />
        <Picker.Item value="lithuanian" label="Lithuanian" />
        <Picker.Item value="luxembourger" label="Luxembourger" />
        <Picker.Item value="macedonian" label="Macedonian" />
        <Picker.Item value="malagasy" label="Malagasy" />
        <Picker.Item value="malawian" label="Malawian" />
        <Picker.Item value="malaysian" label="Malaysian" />
        <Picker.Item value="maldivan" label="Maldivan" />
        <Picker.Item value="malian" label="Malian" />
        <Picker.Item value="maltese" label="Maltese" />
        <Picker.Item value="marshallese" label="Marshallese" />
        <Picker.Item value="mauritanian" label="Mauritanian" />
        <Picker.Item value="mauritian" label="Mauritian" />
        <Picker.Item value="mexican" label="Mexican" />
        <Picker.Item value="micronesian" label="Micronesian" />
        <Picker.Item value="moldovan" label="Moldovan" />
        <Picker.Item value="monacan" label="Monacan" />
        <Picker.Item value="mongolian" label="Mongolian" />
        <Picker.Item value="moroccan" label="Moroccan" />
        <Picker.Item value="mosotho" label="Mosotho" />
        <Picker.Item value="motswana" label="Motswana" />
        <Picker.Item value="mozambican" label="Mozambican" />
        <Picker.Item value="namibian" label="Namibian" />
        <Picker.Item value="nauruan" label="Nauruan" />
        <Picker.Item value="nepalese" label="Nepalese" />
        <Picker.Item value="new zealander" label="New Zealander" />
        <Picker.Item value="ni-vanuatu" label="Ni-Vanuatu" />
        <Picker.Item value="nicaraguan" label="Nicaraguan" />
        <Picker.Item value="nigerien" label="Nigerien" />
        <Picker.Item value="north korean" label="North Korean" />
        <Picker.Item value="northern irish" label="Northern Irish" />
        <Picker.Item value="norwegian" label="Norwegian" />
        <Picker.Item value="omani" label="Omani" />
        <Picker.Item value="pakistani" label="Pakistani" />
        <Picker.Item value="palauan" label="Palauan" />
        <Picker.Item value="panamanian" label="Panamanian" />
        <Picker.Item
          value="papua new guinean"
          label="Papua New Guinean"
        />
        <Picker.Item value="paraguayan" label="Paraguayan" />
        <Picker.Item value="peruvian" label="Peruvian" />
        <Picker.Item value="polish" label="Polish" />
        <Picker.Item value="portuguese" label="Portuguese" />
        <Picker.Item value="qatari" label="Qatari" />
        <Picker.Item value="romanian" label="Romanian" />
        <Picker.Item value="russian" label="Russian" />
        <Picker.Item value="rwandan" label="Rwandan" />
        <Picker.Item value="saint lucian" label="Saint Lucian" />
        <Picker.Item value="salvadoran" label="Salvadoran" />
        <Picker.Item value="samoan" label="Samoan" />
        <Picker.Item value="san marinese" label="San Marinese" />
        <Picker.Item value="sao tomean" label="Sao Tomean" />
        <Picker.Item value="saudi" label="Saudi" />
        <Picker.Item value="scottish" label="Scottish" />
        <Picker.Item value="senegalese" label="Senegalese" />
        <Picker.Item value="serbian" label="Serbian" />
        <Picker.Item value="seychellois" label="Seychellois" />
        <Picker.Item value="sierra leonean" label="Sierra Leonean" />
        <Picker.Item value="singaporean" label="Singaporean" />
        <Picker.Item value="slovakian" label="Slovakian" />
        <Picker.Item value="slovenian" label="Slovenian" />
        <Picker.Item
          value="solomon islander"
          label="Solomon Islander"
        />
        <Picker.Item value="somali" label="Somali" />
        <Picker.Item value="south african" label="South African" />
        <Picker.Item value="south korean" label="South Korean" />
        <Picker.Item value="spanish" label="Spanish" />
        <Picker.Item value="sri lankan" label="Sri Lankan" />
        <Picker.Item value="sudanese" label="Sudanese" />
        <Picker.Item value="surinamer" label="Surinamer" />
        <Picker.Item value="swazi" label="Swazi" />
        <Picker.Item value="swedish" label="Swedish" />
        <Picker.Item value="swiss" label="Swiss" />
        <Picker.Item value="syrian" label="Syrian" />
        <Picker.Item value="taiwanese" label="Taiwanese" />
        <Picker.Item value="tajik" label="Tajik" />
        <Picker.Item value="tanzanian" label="Tanzanian" />
        <Picker.Item value="thai" label="Thai" />
        <Picker.Item value="togolese" label="Togolese" />
        <Picker.Item value="tongan" label="Tongan" />
        <Picker.Item
          value="trinidadian or tobagonian"
          label="Trinidadian or Tobagonian"
        />
        <Picker.Item value="tunisian" label="Tunisian" />
        <Picker.Item value="turkish" label="Turkish" />
        <Picker.Item value="tuvaluan" label="Tuvaluan" />
        <Picker.Item value="ugandan" label="Ugandan" />
        <Picker.Item value="ukrainian" label="Ukrainian" />
        <Picker.Item value="uruguayan" label="Uruguayan" />
        <Picker.Item value="uzbekistani" label="Uzbekistani" />
        <Picker.Item value="venezuelan" label="Venezuelan" />
        <Picker.Item value="vietnamese" label="Vietnamese" />
        <Picker.Item value="welsh" label="Welsh" />
        <Picker.Item value="yemenite" label="Yemenite" />
        <Picker.Item value="zambian" label="Zambian" />
        <Picker.Item value="zimbabwean" label="Zimbabwean" />
      </Picker>
    </Pressable>
  </View>
  )
}

export default NationalitySelector

const styles = StyleSheet.create({
    boxContainer: {
        height: 50,
        width: 322,
        borderWidth: 1,
        borderColor: "#33B7B0",
        flexDirection: "row",
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingTop: 12,
        paddingLeft: 30,
      },
})