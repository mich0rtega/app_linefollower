import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const components = [
    {
      name: "ESP32",
      description: "Microcontrolador principal con WiFi y Bluetooth integrado",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbV30h0rDeZXGsHCfBRGtDdp6DJJOXJmg6Q&s"
    },
    {
      name: "Sensores IR",
      description: "Detección de línea infrarroja (TCRT5000)",
      image: "https://electronicaymas.com.mx/cdn/shop/products/SENSORREFLECTIVO-1.png?v=1667415983"
    },
    {
      name: "Motores DC",
      description: "Motores de 5V con caja reductora para movimiento",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnNKxubEqVJsD4k_XcxBgpFfOvkJgmrPxlQ&s"
    },
    {
      name: "Fuente Protoboard",
      description: "Fuente de alimentación MB102 para protoboard",
      image: "https://nanoparuro.com/web/image/product.template/226/image_1024?unique=016b3f4"
    },
    {
      name: "Puente H L298N",
      description: "Controlador de motores para dirección y velocidad",
      image: "https://www.taloselectronics.com/cdn/shop/products/puente_h_doble_l298n_mexico_jalisco_guadalajara.jpg?v=1593817164"
    },
    {
      name: "Sensor DHT11",
      description: "Sensor de temperatura y humedad ambiental",
      image: "https://docs.sunfounder.com/projects/ultimate-sensor-kit-test/en/latest/_images/12_dht11_module.png"
    },
    {
      name: "Sensor BMP180",
      description: "Sensor de presión atmosférica y altitud",
      image: "https://components101.com/sites/default/files/components/BMP180-Sensor-Module_0.png"
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Componentes Utilizados</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {components.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image 
              source={{ uri: item.image }} 
              style={styles.itemImage}
              resizeMode="contain"
              onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
            />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemDesc}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Los estilos permanecen igual que en tu código original
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    elevation: 2,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  item: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemDesc: {
    fontSize: 14,
    color: '#666',
  },
});

export default ComponentsScreen;