import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SensorData from '../components/SensorData';

const SensorScreen = () => {
  // Estado local para los datos de sensores
  const [sensorData] = useState({
    left: false,
    right: false,
    distance: 0,
    temperature: 24.5,
    humidity: 45,
    position: { x: 0, y: 0, angle: 90 },
    timestamp: 'N/A'
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoreo de Sensores</Text>
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Grupo de sensores de línea */}
        <View style={styles.sensorGroup}>
          <Text style={styles.groupTitle}>Sensores de Línea</Text>
          <SensorData 
            icon="🟢"
            title="Sensor Izquierdo"
            value={sensorData.left ? "DETECTADO" : "LIBRE"}
            color={sensorData.left ? "#4CAF50" : "#F44336"}
          />
          <SensorData 
            icon="🟢"
            title="Sensor Derecho"
            value={sensorData.right ? "DETECTADO" : "LIBRE"}
            color={sensorData.right ? "#4CAF50" : "#F44336"}
          />
        </View>

        {/* Sensores ambientales */}
        <View style={styles.sensorGroup}>
          <Text style={styles.groupTitle}>Ambiente</Text>
          <SensorData 
            icon="🌡️"
            title="Temperatura"
            value={`${sensorData.temperature.toFixed(1)} °C`}
            color="#2196F3"
          />
          <SensorData 
            icon="💧"
            title="Humedad"
            value={`${sensorData.humidity.toFixed(1)} %`}
            color="#673AB7"
          />
        </View>

        {/* Posición del carrito */}
        <View style={styles.sensorGroup}>
          <Text style={styles.groupTitle}>Posición del Carrito</Text>
          <SensorData 
            icon="↔️"
            title="Posición X"
            value={`${sensorData.position.x.toFixed(1)} cm`}
            color="#9C27B0"
          />
          <SensorData 
            icon="↕️"
            title="Posición Y"
            value={`${sensorData.position.y.toFixed(1)} cm`}
            color="#9C27B0"
          />
          <SensorData 
            icon="🧭"
            title="Ángulo"
            value={`${sensorData.position.angle.toFixed(1)}°`}
            color="#9C27B0"
          />
        </View>

        <Text style={styles.timestamp}>
          Última actualización: {sensorData.timestamp}
        </Text>
      </ScrollView>
    </View>
  );
};

// Los estilos se mantienen iguales
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sensorGroup: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  timestamp: {
    fontSize: 14,
    color: '#777',
    marginTop: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default SensorScreen;